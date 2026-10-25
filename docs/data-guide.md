# データの追加・更新と形式

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
| `incident_type` | attack / accident / improper_handling / unknown。攻撃・事故・不適切な持ち出しや提供・未確定 |
| `leak_status` | confirmed / suspected / investigating / exposed / lost / ruled_out / improper_sharing |
| `impact` | 規模の配列。count、unit、qualifier、descriptionを保持 |
| `cause` | 原因の分類、説明、その詳細の確度。侵入手口が不明ならcertaintyはunknown |
| `related_vendor` | 既存の関連先名。役割の根拠が未整理の情報も含む。未確認はnull |
| `vendors` | 任意の配列。name、role、detail、source_indexを記録。役割と当該事案の関係を出典本文で確認したもののみ |
| `vendor_research` | ベンダー調査日・結果・メモ・各出典の確認状況。未設定は全役割の調査未実施 |
| `verification` | official（公式本文を確認）/ secondary（二次資料を確認） |
| `sources` | URL・出典種別・タイトル・公表日・確認日 |
| `updates` | date、summary、source_index（sources配列内の位置） |

`impact.unit`: people / records / accounts / organizations / bookings / documents / images。
`impact.qualifier`: exact / approximate / maximum / maximum_approximate / unknown。
不明の件数は `count: null` と `qualifier: "unknown"`。0件で代用しません。
数値の `exact` は「公表された数値が概数ではない」という意味であり、被害全容の最終確定を意味しません。

## 掲載・集計方針

- 収集開始は2026年5月1日。期間内の続報も含め、初報日との違いを明示します。
- 原則として組織と事案の組み合わせを1件とし、同じ組織の続報は重複加算しません。共同公表（吉野家・はなまるなど）は1記録にまとめ、対象を明記します。
- 委託先事故に関する複数組織の公表はそれぞれ記録します。件数は独立した攻撃回数ではありません。原因の共通性だけから同じ攻撃者だとは判断しません。
- 不正アクセス、漏えいの確認、閲覧可能状態を区別します。事案の流出が確認されていても、最大対象人数の全員の流出が確定したとは限りません。
- 人・件・アカウントを混ぜたり、同じ案件の内数を合算したりしません。グラフの単位別参考合計には組織間の重複が残り得ます。画像メタデータ件数を画像流出数・人数に変換しません。
- 「掲載なし」は「発生なし」でも「確認済み」でもありません。未収集・未公表の事案があり得ます。
- 公式発表を優先します。本文を取得できない資料や、日付・単位が曖昧な候補は確認待ちに残します。
- 無同意提供、紛失などの境界事例は対象情報と公表内容を確認したうえで判断します。攻撃者の主張だけで流出確定にはしません。

`investigating` は対象システム上の個人情報への影響が公表され、漏えい有無が調査中の事案です。外部流出未確認を漏えい否定とは扱いません。

`ruled_out` は続報で漏えいが否定された事案、`improper_sharing` は同意のない第三者提供です。どちらも掲載件数には含みますが、漏えい確認件数とは分けます。

種別は原因カテゴリだけで機械的に決めず、出典の経緯を読みます。設定不備を攻撃者が悪用した集英社は `attack`、無断持ち出し後に紛失したプルデンシャル生命は `improper_handling`。フィッシングやサポート詐欺は、人の操作を伴っても `attack` です。不適切な提供の分類は故意・悪意の認定ではありません。原因不明を事故と推測しません。

## 収集候補

`data/candidates.json` はユーザー提供および追加調査で見つかった調査候補です。`reported_on`・noteは未検証のメモであり、掲載事案の事実データとは異なります。参照URLは調査の入口で、本文確認済みの出典を意味しません。

確認できた候補は `data/incidents/` に移し、候補から削除します。候補はサイト上でも折りたたんだ別欄に表示し、ヒートマップ・件数・通常の検索に混ぜません。

`data/review-log.json` に候補の元メモ、確認日、修正理由、対応する掲載IDと出典URLを保存します。元メモは未検証時の記録なので、事実の参照には対応する掲載JSONを使用してください。ビルド時に、照合済み候補が確認待ちに残っていないことと、掲載IDへの参照を検証します。


## 関連ベンダー

ベンダー情報は事案の詳細欄に、開発（`development`）、運用・保守（`operations`）、サービス提供（`service`）、クラウド基盤（`infrastructure`）を分けて表示します。各項目に会社名、役割の説明、`sources` 内の根拠への `source_index` を記録します。同じ会社に複数の役割が確認できれば、役割ごとに記録できます。企業名・役割・根拠は検証対象で、ベンダー名は検索と関連ベンダーの絞り込みにも反映します。

`vendors` の省略・空配列・該当役割の記載なしは「情報なし」と表示します。これは未確認・未公表を含み、ベンダー不在や自社開発の認定ではありません。一般的な開発実績だけで被害システムの開発元と推定せず、当該事案・システムとの関係が分かる根拠を確認します。旧 `related_vendor` だけの情報は「その他の関連先（役割は未整理）」として保持します。

`vendor_research.result` は `identified`（1つ以上の役割を確認）、`not_identified`（調査したが社名と役割を特定できず）、`unavailable`（全掲載出典の本文取得不可）です。`source_checks` に全出典の `source_index` と `status`（`reviewed` / `partial` / `unavailable`）を記録します。`reviewed` は本文をブラウザー・直接取得・検索経由のいずれかで確認したことを示し、全役割の判明や最新情報の完全な網羅を意味しません。紙書類の紛失、業務委託先の操作、自社サービスなど、外部ITベンダーを特定できない事案も含みます。個別の検索語と集計は `research-audit.json` に残しています。

## 調査記録の更新先

調査範囲・判定・未確認事項は `docs/research-*.md` と `data/research-audit.json` に記録し、[調査記録の索引](research/README.md)へリンクを追加します。ルートREADMEには日次の件数や作業経緯を追記しません。
