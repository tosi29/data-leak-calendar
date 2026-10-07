# 情報漏えいカレンダー

国内の企業・団体が公表した情報漏えいと、その可能性を出典付きで整理する静的サイトです。

公開先: https://tosi29.github.io/data-leak-calendar/

- GitHub activity風の日別ヒートマップ。日付を選択して絞り込み。
- 企業名・サービス名・情報の種類、月、原因、確認状況、関連ベンダーによる検索。
- 概要、対象規模、発生日・発覚日、公式出典、続報を各行から展開。
- 1事案1JSON。外部ライブラリ・APIキー・分析用Cookieは不要。

## ローカルで動かす

Node.js 22以降と、プレビュー用にPython 3を使用します。npm installは不要です。

```sh
npm test
npm run build
npm run preview
```

http://localhost:4173 を開きます。`public/` はテンプレートとブラウザー用コード、`dist/` は生成物です。ビルドは入力データを検証してから生成します。

## データの追加・更新

1. 公表資料の本文を読み、既存事案・続報・同じ委託先との関係を確認する。
2. `data/incidents/` に既存ファイルを参考に1事案1JSONで追加する。ファイル名と `id` は一致させる。
3. 少なくとも1つの出典URL、公表日、確認日を記録する。原文の全文転載はせず、短い要約を作る。
4. 既存事案の続報は同じファイルの `sources` と `updates` に追記する。
5. `updated_on` と `data/meta.json` の `as_of` を更新する。`as_of` は収集時点であり、全事案の最新情報を網羅した日ではない。
6. `npm test` と `npm run build` を実行し、コミットする。

JSONを採用した理由は、標準のNode.jsだけで検証・ビルドでき、パーサー依存なしで長期運用できるためです。

| 項目 | 意味 |
| --- | --- |
| `published_on` | カレンダーに載せる公表日。原則は初報日。初報が収集開始前なら期間内で取り上げる続報日 |
| `first_published_on` | 事案の初報日。不明ならnull。発生日とは異なる |
| `publication_kind` | initial / followup / unknown |
| `occurred_on`, `detected_on` | 発生日・発覚日。不明はnull。期間の場合は開始日とし、範囲をnotesに明記 |
| `leak_status` | confirmed / suspected / exposed / lost / ruled_out / improper_sharing |
| `impact` | 規模の配列。count、unit、qualifier、descriptionを保持 |
| `cause` | 原因の分類、説明、その詳細の確度。侵入手口が不明ならcertaintyはunknown |
| `related_vendor` | 資料で関係を確認した共通の委託先・サービス。未確認はnull |
| `verification` | official（公式本文を確認）/ secondary（二次資料を確認） |
| `sources` | URL・出典種別・タイトル・公表日・確認日 |
| `updates` | date、summary、source_index（sources配列内の位置） |

`impact.unit`: people / records / accounts / organizations / bookings / documents / images。
`impact.qualifier`: exact / approximate / maximum / maximum_approximate / unknown。
不明の件数は `count: null` と `qualifier: "unknown"`。0件で代用しません。
数値の `exact` は「公表された数値が概数ではない」という意味であり、被害全容の最終確定を意味しません。

## 掲載・集計方針

- 収集開始は2026年9月1日。期間内の続報も含め、初報日との違いを明示します。
- 原則として組織と事案の組み合わせを1件とし、同じ組織の続報は重複加算しません。共同公表（吉野家・はなまるなど）は1記録にまとめ、対象を明記します。
- 委託先事故に関する複数組織の公表はそれぞれ記録します。件数は独立した攻撃回数ではありません。原因の共通性だけから同じ攻撃者だとは判断しません。
- 不正アクセス、漏えいの確認、閲覧可能状態を区別します。事案の流出が確認されていても、最大対象人数の全員の流出が確定したとは限りません。
- 人・件・アカウントや、内数・重複する集団を合算しません。画像メタデータ件数を画像流出数・人数に変換しません。
- 「掲載なし」は「発生なし」でも「確認済み」でもありません。未収集・未公表の事案があり得ます。
- 公式発表を優先します。本文を取得できない資料や、日付・単位が曖昧な候補は確認待ちに残します。
- 無同意提供、紛失などの境界事例は対象情報と公表内容を確認したうえで判断します。攻撃者の主張だけで流出確定にはしません。

`ruled_out` は続報で漏えいが否定された事案、`improper_sharing` は同意のない第三者提供です。どちらも掲載件数には含みますが、漏えい確認件数とは分けます。

## 収集候補

`data/candidates.json` はユーザー提供の調査候補です。`reported_on`・noteは未検証のメモであり、掲載事案の事実データとは異なります。参照URLは調査の入口で、本文確認済みの出典を意味しません。

確認できた候補は `data/incidents/` に移し、候補から削除します。候補はサイト上でも折りたたんだ別欄に表示し、ヒートマップ・件数・通常の検索に混ぜません。出典本文を確認して修正した例として、MrMaxの一部流出確認、吉野家・はなまるの漏えい確認、OZmallの人数修正があります。

2026年10月7日時点で、確認待ちだった74候補すべてを出典本文と照合し、掲載は94件、確認待ちは0件です。

`data/review-log.json` に候補の元メモ、確認日、修正理由、対応する掲載IDと出典URLを保存します。元メモは未検証時の記録なので、事実の参照には対応する掲載JSONを使用してください。ビルド時に、照合済み候補が確認待ちに残っていないことと、掲載IDへの参照を検証します。

## GitHub Pages

`main` へのpushで `.github/workflows/pages.yml` が検証・ビルド・公開を実行します。PRでは検証とビルドのみです。

初回はリポジトリの Settings → Pages → Source を **GitHub Actions** に設定します。出力先は `dist/`。相対URLを使用しているため、`/data-leak-calendar/` のようなサブパスでも動作します。

参考: [GitHub公式のカスタムワークフロー手順](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
