# 確認待ち112候補の全件再調査（2026年10月18日）

開始時の112候補をすべて再調査。35件を追加掲載、8候補を掲載済み・同一事案へ統合、24候補を対象外、3候補を確認待ちの重複として統合した。残る42候補は未確定事項を明記して保留。掲載は442件。

全件調査は全件確定・全期間網羅の意味ではない。公表日や対象情報を確定できないものを件数へ加算しない。候補の元の名称は誤記や未確認の仮説を含み、掲載JSONの名称・内容を優先する。

## 掲載済み4件の日付再確認

| 掲載ID | 修正前 → 確認後 | 根拠 |
| --- | --- | --- |
| aflac-20260901 | 2026-09-01 → 2026-07-13 | 7月13日の公式第2報を確認。初報6月30日、契約者約440万人・口座情報約22万人は内数。 [資料](https://www.aflac.co.jp/static/corp/profile/news/2026/20260713.pdf) |
| nichirei-20260918 | 2026-08-14 → 2026-07-15 | ニチレイ既存記録の同一事案。7月15日の公式第2報で被害サーバーの個人情報と漏えいの可能性を確認し、掲載日を8月14日から7月15日へ修正。 [資料](https://www.nichirei.co.jp/news/2026/513.html) |
| hands-holdings-20260825 | 2026-08-25 → 2026-08-25 | 初報6月22日を確認。8月25日の期間内続報を維持。 [資料](https://scan.netsecurity.ne.jp/article/2026/07/07/55649.html) |
| murauchi-20260915 | 2026-09-15 → 2026-07-24 | 公式資料は再取得できず。第一報と第二報を区別した報道本文で初報7月24日を照合。 [資料](https://innovatopia.jp/cyber-security/cyber-security-news/118732/) |

## 候補別の結果

| # | 元の候補 | 判定 | 確認結果・残る確認事項 | 根拠・確認先 |
| --- | --- | --- | --- | --- |
| 1 | 鳥取県（介護事業者メール） | 確認待ち | 8月28日のメール163件の誤送信は報道本文で確認。県名・介護事業者・報告書依頼で追加検索したが公表資料の日付を確定できず。10月6日の報道日や8月28日の発生日を転用しない。  | [資料1](https://www.security-next.com/190687) |
| 2 | エイベックス（スマプラ） | 確認待ち | 公式第2報の本文でメールアドレスへの影響と外部流出未確認を確認したが、公表日表示がない。10月7日3時40分は発生時刻であり、公表日とは認定できない。  | [資料1](https://sp-movie.jp/) [資料2](https://sp-movie.jp/qa) |
| 3 | 学習適応性検査の結果シートが所在不明 - 北教大付属校 | 確認待ち | 北海道教育大学の付属校・検査名・紛失で検索し、23人分の結果シート紛失の報道を照合。紛失発覚日と公式公表日を結び付ける資料を確認できず。  | [資料1](https://www.security-next.com/189036) |
| 4 | 児童発達支援センターで個人情報含むUSBメモリを紛失 - 釧路町 | 確認待ち | 釧路町・北海道社会福祉事業団・USBで検索。7月9日の発覚、7月16日の町への報告は確認できるが、公表日ではない。公表資料の日付が未確定。  | [資料1](https://www.security-next.com/188705) |
| 5 | 税額決定通知書を廃業事業所へ誤送付、所在不明に - 長岡市 | 確認待ち | 長岡市・廃業事業所・税額決定通知書で検索。6人分の誤送付を報道で確認したが、5月15日の発送日以外に公表日を裏付ける資料が取得できず。  | [資料1](https://www.security-next.com/188714) |
| 6 | イベント参加者の保護者向けメールで誤送信 - 霧島市 | 確認待ち | 霧島市の漏えい一覧と関連PDFを照合。報道は6月26日送信・保護者8人の事案。別の14人の事案や前年度資料と混同せず、該当事案の公表日が確定するまで保留。  | [資料1](https://www.security-next.com/188369) |
| 7 | 県立高のオープンスクール申込フォームで設定ミス - 三重県 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/mie-hisainorin-form-20260722.json) | [資料1](https://www.pref.mie.lg.jp/TOPICS/m0053100002.htm) |
| 8 | 検針員が個人情報含む資料を一時紛失 - 広島県水道広域連合企業団 | 確認待ち | 企業団・検針資料・440件で検索し報道本文を確認。7月7日の紛失と回収は発生経緯であり、公式公表日を確定できず。水質検査等の別事案とは分離。  | [資料1](https://www.security-next.com/187953) |
| 9 | 講座受講者一覧表を紛失、メモから発覚 - 厚木市 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/atsugi-course-list-20260710.json) | [資料1](https://www.city.atsugi.kanagawa.jp/material/files/group/3/kagayakikiki.pdf) |
| 10 | サーバでランサム被害を確認、影響など調査 - 八王子中高校 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/hachioji-gakuen-ransom-20260713.json) | [資料1](https://www.hachioji.ed.jp/information/urgent/4997/) |
| 11 | 子ども向けプログラミング講座の案内メールで誤送信 - 藤沢市 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/fujisawa-programming-mail-20260713.json) | [資料1](https://www.city.fujisawa.kanagawa.jp/kyoso/press/20260713press.html) |
| 12 | ランサム被害で個人情報流出の可能性 - FA機器開発会社 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/s-facom-ransom-20260721.json) | [資料1](https://s-facom.jp/news/ua2_/) |
| 13 | インク通販サイトに不正アクセス - 個人情報流出の可能性 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/ink-revolution-20260729.json) | [資料1](https://ink-revolution.com/pages/info-2026-07-15) |
| 14 | 顧客情報含む伝票など誤廃棄 - 東京三協信金 | 確認待ち | 東京三協信金・伝票・9箱で再検索。2025年11月の誤廃棄と2026年5月14日の発覚を報道で照合したが、公式公表日が不明。  | [資料1](https://www.security-next.com/187814) |
| 15 | 通販サイトにサイバー攻撃、調査を実施 - ヴェレダ・ジャパン | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/weleda-online-access-20260708.json) | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/27/55784.html) |
| 16 | メール本文に講座受講者メアドを誤記載 - 茨城県立こころの医療センター | 確認待ち | 茨城県立こころの医療センターのメール誤送信を報道と追加検索で確認。公式旧ページが取得できず、7月1日・3日の経緯と公表日の区別を公式資料で確認できない。  | [資料1](https://www.security-next.com/187664) |
| 17 | 高校で生徒証明写真データ含む光ディスクを紛失 - 大阪府 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/osaka-kogei-photo-cd-20260710.json) | [資料1](https://www.pref.osaka.lg.jp/hodo/fumin/o180040/prs_51147.html) |
| 18 | フィッシング被害後、攻撃の踏み台に - スペース | 対象外 | 6月29日の公表。7月23日・27日は報道日。期間内の新たな公表は確認できず。  | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/23/55762.html) [資料2](https://www.security-next.com/186979) |
| 19 | サイト公開のPDFファイルでマスキング処理に不備 - 南砺市 | 確認待ち | 地域計画PDFの1,380件（個人・法人を含む）を報道で確認。二次資料では公表日が7月13日・15日と異なり、旧公式ページは取得できず。7月9日の発覚日を転用しない。  | [資料1](https://www.security-next.com/187865) |
| 20 | 従業員リスト持出、再就職先の侵害調査から発覚 - あすか製薬 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/aska-employee-list-20260703.json) | [資料1](https://www.aska-pharma-hd.co.jp/LinkClick.aspx?fileticket=tzFtBq0Lknw%3d&tabid=199&mid=759) |
| 21 | アンケートフォームで不備、個人情報が閲覧可能に - 関市 | 確認待ち | 関市の小瀬鵜飼アンケート57人の閲覧可能状態は報道で確認。7月5日は発覚日。公式ニュース一覧・フォーム関連検索から該当本文と公表日を確定できず。  | [資料1](https://www.security-next.com/187608) |
| 22 | 代表メールに不正アクセス、スパム送信の踏み台に - 愛知農済 | 確認待ち | 7月1日の公式通知で代表メールへの不正アクセス・迷惑メール送信を確認。保存メール中の個人情報への具体的影響が確認できず、送信件数を漏えい件数にしない。  | [資料1](https://www.security-next.com/187309) [資料2](https://www.nosai-aichi.jp/news/entry-1120.html) |
| 23 | 県サイトに個人情報記載の図面を掲載 - 長野県 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/nagano-online-drawings-20260706.json) | [資料1](https://www.pref.nagano.lg.jp/gijukan/happyou/documents/202607061430press.pdf) |
| 24 | 設定ミスで会員通知メールに他会員情報 - 佐川急便 | 確認待ち | スマートクラブの同一事案を照合したが、二次資料で7月18日・19日の発表日が混在。公式旧リンクが404で本文を取得できず、公表日確定を保留。  | [資料1](https://www.security-next.com/187595) [資料2](https://www2.sagawa-exp.co.jp/information/detail/404/) [資料3](https://www.itmedia.co.jp/news/article/2607/18/1260718021/) |
| 25 | 個人情報含む書類を誤配布、様式変更で印字に気づかず - 郡山市 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/koriyama-nursery-forms-20260702.json) | [資料1](https://www.city.koriyama.lg.jp/uploaded/attachment/126134.pdf) |
| 26 | マルウェア感染で業務に影響、情報漏洩の可能性も - 日本交通 | 確認待ち | 7月13日以降の日本交通の通知・続報を検索。攻撃と業務影響は確認できたが、取得できた資料から流出情報が個人情報に該当するか、その対象を確定できず。  | [資料1](https://www.security-next.com/187303) |
| 27 | 人事情報を不正閲覧した職員を懲戒処分 - 君津市 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/kimitsu-personnel-access-20260721.json) | [資料1](https://www.chibanippo.co.jp/articles/1644049) |
| 28 | 通販サイト会員の個人情報が流出 - ペットフード販売会社 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/k9natural-access-20260714.json) | [資料1](https://www.k9natural.jp/blogs/news/%E4%B8%8D%E6%AD%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AB%E3%82%88%E3%82%8B%E3%81%8A%E5%AE%A2%E6%A7%98%E6%83%85%E5%A0%B1%E6%B5%81%E5%87%BA%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E8%A9%AB%E3%81%B3%E3%81%A8%E3%81%8A%E9%A1%98%E3%81%84) |
| 29 | データのマスキング不備、自主点検で判明 - 北九州市 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/kitakyushu-masking-review-20260703.json) | [資料1](https://www.city.kitakyushu.lg.jp/files/001219330.pdf) |
| 30 | 対象外の関係者より会員情報が閲覧可能に - 情報処理学会 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/ipsj-wakate-access-20260706.json) | [資料1](https://www.ipsj.or.jp/system/wakate2026.html) |
| 31 | 児童発達支援センターで個人情報含む文書を誤廃棄 - 古河市 | 対象外 | 古河市の公表は6月24日。ぐるんぱの50件の誤廃棄を照合し、7月報道日を採用しない。  | [資料1](https://www.onebe.co.jp/dlpnews/?p=35678) [資料2](https://www.security-next.com/187220) |
| 32 | 委託先の就職試験対策サイトがランサムウェア被害 - 福岡大 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/fukuoka-smart-spi-20260709.json) | [資料1](https://www.fukuoka-u.ac.jp/news/26/07/08175927.html) |
| 33 | 個人情報を誤提供、システムの改修テストで - 農林中金 | 対象外 | JAさっぽろのテストデータ誤提供は6月30日公表。7月14日は報道日。  | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/14/55695.html) [資料2](https://www.security-next.com/187071) |
| 34 | 公開講座申込者向けの事前メールで誤送信 - 島根県立大 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/shimane-u-course-mail-20260706.json) | [資料1](https://www.u-shimane.ac.jp/foundation/foundation_news/archives/27.html) |
| 35 | システムにサイバー攻撃か、影響範囲を調査 - 日産化学 | 確認待ち | 日産化学の7月通知と不正アクセス関連記事を照合。攻撃・障害のみで個人情報への具体的影響を確認できず。攻撃発生だけで漏えい候補を掲載しない。  | [資料1](https://www.security-next.com/187519) |
| 36 | 職員が患者情報を使用、他医療機関の開業を案内 - 済生会宇都宮病院 | 対象外 | 8月3日の公式調査結果で196人への目的外DM発送を確認。ただし第三者への患者情報提供・漏えいはなかったと説明しており、目的外利用のみの事案として掲載対象外。  | [資料1](https://www.saimiya.com/news/?id=3006) |
| 37 | 設定ミスでイベント申込者情報が閲覧可能に - 開催中止に | 確認待ち | 相模原商工会議所のイベント申込フォーム21人の閲覧可能状態を照合。6月25日は発覚日で、公式公表日を確定する本文が取得できず。  | [資料1](https://www.security-next.com/187128) |
| 38 | 委託先コンサルが個人情報含む記憶媒体を紛失 - 旭市 | 確認待ち | 旭市の委託先が紛失した媒体はSDカードと確認。約90人の写真等が対象だが、6月15日の市への報告日と公式公表日を区別できる資料が未取得。  | [資料1](https://www.security-next.com/187230) |
| 39 | サーバがランサム被害、影響など詳細を調査 - 金子農機 | 確認待ち | 金子農機の7月10日通知でランサムウェア被害を確認。業務データの被害と個人情報への影響を結び付ける具体的記載が取得資料にないため保留。  | [資料1](https://www.security-next.com/187470) |
| 40 | 防災士会の事務局で会員向けメールを誤送信 - 三好市 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/miyoshi-disaster-mail-20260701.json) | [資料1](https://www.topics.or.jp/articles/-/1456496) |
| 41 | サイバー攻撃でシステム障害、冷凍食品の出荷に影響 - ニチレイ | 掲載済み・同一事案へ統合 | ニチレイ既存記録の同一事案。7月15日の公式第2報で被害サーバーの個人情報と漏えいの可能性を確認し、掲載日を8月14日から7月15日へ修正。 [掲載記録](../data/incidents/nichirei-20260918.json) | [資料1](https://www.nichirei.co.jp/news/2026/513.html) [資料2](https://www.nichirei.co.jp/news/2026/512.html) |
| 42 | 個人情報含むファイルを誤送信、別ファイルと勘違い - 大阪市 | 対象外 | 児童4人と家族等17人のミマモルメ誤配信は6月19日の個別公表。7月14日の報道日を公表日にしない。  | [資料1](https://www.city.osaka.lg.jp/hodoshiryo/kyoiku/0000681837.html) [資料2](https://www.security-next.com/186709) |
| 43 | 高校で採点済み答案をグループウェアに誤掲載 - 宮城県 | 対象外 | 採点済み答案182人分の誤掲載は6月26日の公式公表。  | [資料1](https://www.pref.miyagi.jp/soshiki/kyou-kikaku/happyou260626.html) [資料2](https://www.security-next.com/186975) |
| 44 | 支援先事業者宛のメールで誤送信 - いばらき中小企業グローバル推進機構 | 確認待ち | いばらき中小企業グローバル推進機構の297件のアドレス誤送信を報道で確認。6月16日の送信・23日の削除対応とは別の公表日を確定できず。  | [資料1](https://www.security-next.com/187131) |
| 45 | 本人の同意なしに健診結果を家族に説明 - 八重瀬町 | 確認待ち | 八重瀬町の健診結果を家族に無同意で説明した事案を報道で確認。5月21日の説明日以外に公式公表日を確認できず。  | [資料1](https://www.security-next.com/186912) |
| 46 | 説明会の案内状を誤送信、全参加予定者の氏名 - 大阪市 | 対象外 | 説明会案内の誤送信は6月30日の個別公表。8月の一括表への再掲は新規事案に数えない。  | [資料1](https://www.onebe.co.jp/dlpnews/?p=35536) [資料2](https://www.security-next.com/187074) |
| 47 | 中学校の生徒情報含む私物メディアを鞄ごと紛失 - 江戸川区 | 対象外 | SDカード紛失は6月29日の公式公表。7月報道を新規公表にはしない。  | [資料1](https://www.city.edogawa.tokyo.jp/e004/kuseijoho/kohokocho/press/2026/06/0629.html) [資料2](https://www.security-next.com/186977) |
| 48 | ボランティア情報含むページが閲覧可能に - 千歳JAL国際マラソン | 対象外 | ボランティア情報の公開は6月26日公表。7月17日は報道日。  | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/17/55726.html) [資料2](https://www.security-next.com/186914) |
| 49 | 通販サイトに不正アクセスか、調査中 - アメニティメーカー | 確認待ち | シントワールドの7月6日付案内等を検索。通販サイトの不正アクセス疑いは確認できたが、個人情報の対象・影響を裏付ける本文が不足。  | [資料1](https://www.security-next.com/187124) |
| 50 | 都民向け金融セミナーの申込サイトが一時消失 - 攻撃の痕跡も | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/tokyo-financial-seminar-20260708.json) | [資料1](https://www.metro.tokyo.lg.jp/information/press/2026/07/2026070809) |
| 51 | クラウドPBXの管理画面に不正アクセス - CCアーキテクト | 対象外 | 3CXクラウドの公表は6月16日。公式検索結果の日付と報道を照合し、期間内の新たな個人情報公表は確認できず。  | [資料1](https://cc-arc.com/news/3cxcloud_unauthorized-access_0616/) |
| 52 | 運転士が予約情報を不正取得、顧客に私的メール - 九州急行バス | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/kyushugo-private-sms-20260706.json) | [資料1](https://kyushugo.co.jp/wp-content/uploads/2026/07/f46b2eb1703350120dfda01cc02f42b5.pdf) |
| 53 | 複数学生アカウントに不正アクセス、スパムの踏み台に - 日大 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/nihon-u-july-accounts-20260706.json) | [資料1](https://www.nihon-u.ac.jp/hojin_news/others/20260706-267.html) |
| 54 | クラファンサイトでフィッシング - サービス内メッセージ機能を悪用 | 確認待ち | Makuakeの注意喚起とサービス内メッセージを用いたフィッシングの報道を照合。個人情報の漏えい・閲覧・滅失を具体的に示す資料は未確認。  | [資料1](https://www.security-next.com/187068) |
| 55 | メルマガ送信サービスで情報流出、影響範囲など調査 - ディライトフル | 追加掲載 | 公式8月14日最終報で配信先情報の外部取得、初報6月19日を確認。 [掲載記録](../data/incidents/delightful-meruhaikun-20260814.json) | [資料1](https://www.meruhaikun.com/blog/?page_id=3227) |
| 56 | 個人情報の保存先を誤り、意図せず学生に共有 - 近畿大 | 対象外 | 薬学部のGoogleドライブ誤共有は6月25日公表。7月16日は報道日。  | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/16/55715.html) [資料2](https://www.security-next.com/186754) |
| 57 | 配付名簿に不同意者の個人情報、法令を誤解釈 - 阿南市 | 対象外 | 不同意者1,222人の名簿提供は6月16日公表。6月17日付報道が前日の発表を明記。  | [資料1](https://news.livedoor.com/topics/detail/31579508/) |
| 58 | MS 365アカウントや学生団体サイトの侵害が判明 - 富山県立大 | 確認待ち | 7月3日の公式資料で学生アカウント等の侵害を確認。一方、機密情報流出は確認されていないとの記載で、漏えい対象の個人情報・影響範囲を特定できず。10月の別事案と混同しない。  | [資料1](https://www.security-next.com/186814) |
| 59 | 紛失を隠蔽するため文書を偽造、職員を処分 - 海老名市 | 対象外 | 生活保護関連書類の紛失・隠蔽の処分は6月19日公表。  | [資料1](https://www.city.ebina.kanagawa.jp/koho/1007115/press/1018489/1019020/1019067.html) [資料2](https://www.security-next.com/186711) |
| 60 | 農業従事者情報を含むデータを誤送信 - フィルタ解除で閲覧可能 | 対象外 | 農業者情報の誤送信は6月25日の公式公表。  | [資料1](https://www.city.komatsushima.lg.jp/docs/5924575.html) [資料2](https://www.security-next.com/186821) |
| 61 | 学生情報含む書類を宿泊施設に置き忘れて紛失 - 新潟県 | 対象外 | BSNの6月25日報道が、前日24日の県発表を明記。学生17人の紛失事案は期間外。  | [資料1](https://newsdig.tbs.co.jp/articles/bsn/2758116?display=1) [資料2](https://www.security-next.com/186765) |
| 62 | 社内システムが侵害、マルウェア感染の可能性 - ハンズHD | 掲載済み・同一事案へ統合 | ハンズHD既存記録の同一事案。7月7日の記事が6月22日の初報を明記。8月25日の期間内続報に統合。 [掲載記録](../data/incidents/hands-holdings-20260825.json) | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/07/55649.html) [資料2](https://www.hands-holdings.co.jp/news/news20260825/) |
| 63 | 職員が執務室内の撮影してネット投稿、顧客情報も - 益田信組 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/masuda-video-20260703.json) | [資料1](https://www.masushin.jp/pdf/info/202607001.pdf) |
| 64 | 講演会参加希望者向けのメールで誤送信 - 妙高市 | 確認待ち | 妙高市の漏えい公表ページと講演会メール110人の報道を照合。市ページは前年度の資料であり、6月24日の誤送信事案の公表日は確認できず。  | [資料1](https://www.security-next.com/186763) [資料2](https://www.city.myoko.niigata.jp/docs/84510.html) |
| 65 | 私的にシステム閲覧、身内に個人情報を漏洩した職員を処分 - 各務原市 | 対象外 | 身内への個人情報漏えいに係る処分は6月19日の公式公表。  | [資料1](https://www.city.kakamigahara.lg.jp/shisei/shisaku/1018426/1008397/1027877.html) [資料2](https://www.security-next.com/186746) |
| 66 | 関係者リストを誤送信、入力用様式と同一ファイル名で取り違え - 堺市 | 対象外 | 学校施設開放運営委員会124人の名簿誤送信は6月12日公表。7月3日は報道日。  | [資料1](https://www.gate02.ne.jp/lab/incident-news/sakai-city-government-20260624/) [資料2](https://www.security-next.com/186506) |
| 67 | 防災メールサービスが迷惑メール送信に悪用 - 和歌山県 | 確認待ち | 和歌山県の防災メールサービスの迷惑メール送信と再開を確認。登録個人情報の流出を裏付ける資料は未確認。迷惑メール送信と登録情報流出を同一視しない。  | [資料1](https://www.security-next.com/186707) |
| 68 | 会合で患者の個人情報を示唆、職員を処分 - 佐賀県医療センター好生館 | 対象外 | 会合で患者の病状を示唆した職員の処分は6月26日公表。  | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/16/55717.html) [資料2](https://www.security-next.com/186646) |
| 69 | 介護サービスの評価システムにサイバー攻撃 - システムを一時停止 | 確認待ち | かながわ福祉サービス振興会の介護サービス評価システム停止について照合。6月の侵害・停止と、個人情報への影響・その公表日を確認できる資料が不足。  | [資料1](https://www.security-next.com/186451) |
| 70 | 売店保有の個人情報、商品取扱業者がカタログ送付に利用 - 山口県 | 確認待ち | 山口県の売店利用者106人の情報の目的外利用を報道で確認。6月9日はカタログ発送、11日は発覚であり、公表日を確定できず。  | [資料1](https://www.security-next.com/186574) |
| 71 | 個人情報をメールに誤添付、容量から気づく - 阪教大 | 対象外 | 大阪教育大学の個人情報誤添付は6月23日の公式公表。  | [資料1](https://osaka-kyoiku.ac.jp/news/detail.html?dispmid=5662&itemid=9722) [資料2](https://www.security-next.com/186643) |
| 72 | サポート詐欺でPC遠隔操作、情報流出を調査 - 東北文化学園大 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/tbgu-support-scam-20260807.json) | [資料1](https://www.tbgu.ac.jp/news/11252/) |
| 73 | システムの登録ユーザー情報、ユーザー間で閲覧可能に - コマツ | 対象外 | ユーザー情報139,302件の閲覧可能状態は6月16日の公式公表。  | [資料1](https://www.komatsu.jp/ja/newsroom/2026/20260616_3) [資料2](https://www.security-next.com/186504) |
| 74 | 児童情報を全認定こども園にメール誤送信 - 八王子市 | 確認待ち | 児童11,997人の情報を認定こども園22施設に送った事案を報道本文で確認。6月9日は誤送信日。検索で得た写真販売サービスの通知は別事案で、公表日の根拠に採用しない。  | [資料1](https://www.security-next.com/186577) |
| 75 | シード・プランニング | 対象外 | 6月24日の調査完了報告、初報3月6日。7月10日は報道日であり期間内続報とはしない。  | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/10/55678.html?from=image-page-title) [資料2](https://and-secure.com/2026/10/10/incident-report-2026-apr-sep/) |
| 76 | 日本大学 | 掲載済み・同一事案へ統合 | 公表本文・対象・経緯を照合し、同一事案の別候補と統合。公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/nihon-u-july-accounts-20260706.json) | [資料1](https://www.nihon-u.ac.jp/hojin_news/others/20260706-267.html) |
| 77 | 佐川急便（スマートクラブ） | 確認待ちの重複を統合 | 同一事案の別候補を統合。スマートクラブの同一事案を照合したが、二次資料で7月18日・19日の発表日が混在。公式旧リンクが404で本文を取得できず、公表日確定を保留。  | [資料1](https://www.security-next.com/187595) [資料2](https://www2.sagawa-exp.co.jp/information/detail/404/) [資料3](https://www.itmedia.co.jp/news/article/2607/18/1260718021/) |
| 78 | アクサ生命 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/axa-employee-disclosure-20260716.json) | [資料1](https://www2.axa.co.jp/info/news/2026/pdf/260716.pdf) |
| 79 | 石川コンピュータ・センター | 対象外 | 公式最終報は6月29日で初報は5月19日。7月報道日を公表日へ転用しない。  | [資料1](https://www.icc.co.jp/news/2026/20260629.html) [資料2](https://and-secure.com/2026/10/10/incident-report-2026-apr-sep/) |
| 80 | 樋口商会 | 確認待ち | 樋口商会の6月初報と8月5日続報の候補を検索。公式サイトは証明書エラーで取得できず、攻撃者の主張から個人情報流出を確定しない。  | [資料1](https://and-secure.com/2026/10/10/incident-report-2026-apr-sep/) [資料2](https://www.higuchi-inc.co.jp/) |
| 81 | 愛知県農業共済組合 | 確認待ちの重複を統合 | 同一事案の別候補を統合。7月1日の公式通知で代表メールへの不正アクセス・迷惑メール送信を確認。保存メール中の個人情報への具体的影響が確認できず、送信件数を漏えい件数にしない。  | [資料1](https://www.security-next.com/187309) [資料2](https://www.nosai-aichi.jp/news/entry-1120.html) |
| 82 | 福岡大学（委託先ノストラム） | 掲載済み・同一事案へ統合 | 公表本文・対象・経緯を照合し、同一事案の別候補と統合。公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/fukuoka-smart-spi-20260709.json) | [資料1](https://www.fukuoka-u.ac.jp/news/26/07/08175927.html) |
| 83 | 日本オークション協会 | 対象外 | らくらく査定のメールアカウント侵害は6月24日公表。7月24日は報道日。  | [資料1](https://scan.netsecurity.ne.jp/article/2026/07/24/55774.html) [資料2](https://and-secure.com/2026/10/10/incident-report-2026-apr-sep/) |
| 84 | 富山県立大学 | 確認待ちの重複を統合 | 同一事案の別候補を統合。7月3日の公式資料で学生アカウント等の侵害を確認。一方、機密情報流出は確認されていないとの記載で、漏えい対象の個人情報・影響範囲を特定できず。10月の別事案と混同しない。  | [資料1](https://www.security-next.com/186814) |
| 85 | あすか製薬ホールディングス | 掲載済み・同一事案へ統合 | 公表本文・対象・経緯を照合し、同一事案の別候補と統合。公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/aska-employee-list-20260703.json) | [資料1](https://www.aska-pharma-hd.co.jp/LinkClick.aspx?fileticket=tzFtBq0Lknw%3d&tabid=199&mid=759) |
| 86 | 君津市消防本部 | 掲載済み・同一事案へ統合 | 公表本文・対象・経緯を照合し、同一事案の別候補と統合。公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/kimitsu-personnel-access-20260721.json) | [資料1](https://www.chibanippo.co.jp/articles/1644049) |
| 87 | 日本テレネット | 確認待ち | 日本テレネットの6月12日最終報の候補は取得時に500エラー。7月の利用企業側の通知とは区別し、提供元自身の期間内公表があるか確定できず。  | [資料1](https://and-secure.com/2026/10/10/incident-report-2026-apr-sep/) [資料2](https://www.nippon-tele.net/release/20260612_4659/) |
| 88 | シー・コネクト（インク革命.COM） | 掲載済み・同一事案へ統合 | 公表本文・対象・経緯を照合し、同一事案の別候補と統合。公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/ink-revolution-20260729.json) | [資料1](https://ink-revolution.com/pages/info-2026-07-15) |
| 89 | 八王子学園 | 掲載済み・同一事案へ統合 | 公表本文・対象・経緯を照合し、同一事案の別候補と統合。公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/hachioji-gakuen-ransom-20260713.json) | [資料1](https://www.hachioji.ed.jp/information/urgent/4997/) |
| 90 | 日本地方キャラクター協会 | 確認待ち | 正しい名称は日本ご当地キャラクター協会。公式本文でNASのランサムウェア感染と連絡先データへの影響を確認。6月2日は発生日で本文に公表日がなく、期間内の通知と確定できず。  | [資料1](https://and-secure.com/2026/10/10/incident-report-2026-apr-sep/) [資料2](https://gotouchi-chara.jp/7195/) |
| 91 | 日刊工業新聞社 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/nikkan-newswave21-20260818.json) | [資料1](https://corp.nikkan.co.jp/topics/view/1472) |
| 92 | 同志社大学（委託先） | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/doshisha-test-portal-20260819.json) | [資料1](https://career-center.doshisha.ac.jp/career/news/detail/011-waMBd6.html) |
| 93 | 国立国際医療センター | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/jihs-cardiac-hdd-20260731.json) | [資料1](https://www.jihs.go.jp/content4/20260731_1500.pdf) |
| 94 | 札幌国際大学 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/siu-phishing-20260711.json) | [資料1](https://www.siu.ac.jp/news/detail.html?news=1848) |
| 95 | ムラタメイク | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/murata-mlb-insurance-20260710.json) | [資料1](https://ascii.jp/elem/000/004/419/4419883/) |
| 96 | T&K TOKA | 確認待ち | T&K TOKAの8月28日通知と攻撃関連報道を検索。取得できた情報では個人情報への具体的影響を確定できず、システム障害のみを漏えい確認扱いにしない。  | [資料1](https://satimo.org/2026/10/data-breach-list-2026/) |
| 97 | 01銀行 | 確認待ち | 01銀行の8月21日・27日の公式資料を照合。法人顧客のID・メールアドレス最大100件とされるが、個人の情報への影響かは未確定。100件を100人に転用しない。  | [資料1](https://satimo.org/2026/10/data-breach-list-2026/) |
| 98 | 両毛システムズ | 確認待ち | 両毛システムズの8月初報・9月続報を検索。公式続報URLはTLSエラーで取得できず。二次資料の顧客データ被害と個人情報の対象範囲・公表内容の対応を確定できないため保留。  | [資料1](https://satimo.org/2026/10/data-breach-list-2026/) [資料2](https://www.ryomo.co.jp/news/202609_02.html) |
| 99 | Toyota GAZOO Racing | 確認待ち | GRヤリス抽選案内の誤送信候補を照合。7月1日の送信日と公表日を区別する公式本文を取得できず。氏名・ID等の影響を推測で追加しない。  | [資料1](https://rocket-boys.co.jp/security-measures-lab/2026-07-data-breach-cases-summary/) |
| 100 | Kubota North America | 対象外 | Kubota North Americaの海外子会社事案。海外の届出・報道を確認したが国内の個人情報への影響と国内公表は確認できず、今回の国内収集対象から除外。  | [資料1](https://rocket-boys.co.jp/security-measures-lab/2026-07-data-breach-cases-summary/) |
| 101 | 長泉町 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/nagaizumi-documents-20260825.json) | [資料1](https://www.town.nagaizumi.lg.jp/material/files/group/2/r8choukaishobun0825.pdf) |
| 102 | 日本スウェージロックFST | 確認待ち | ScanNetSecurityの9月11日記事で8月26日の発表・3月10日の攻撃を確認。公式お知らせURLは404。公開部分だけでは対象個人情報と流出の確度を確定できず。  | [資料1](https://rocket-boys.co.jp/security-measures-lab/2026-08-data-breach-cases-summary/) [資料2](https://scan.netsecurity.ne.jp/article/2026/09/11/56209.html) [資料3](https://www.japan.swagelok.com/whatsnew/notice-of-march-2026-cyber-incident) |
| 103 | ジェックス | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/gex-ransom-20260819.json) | [資料1](https://www.gex-fp.co.jp/news/20260819/) |
| 104 | 大阪公立大学医学部附属病院 | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/omu-hospital-xray-20260812.json) | [資料1](https://rocket-boys.co.jp/security-measures-lab/osaka-metropolitan-univ-hospital-xray-leak/) |
| 105 | 株式会社GHP | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/ghp-reservations-20260817.json) | [資料1](https://www.ghp21.co.jp/news/news-1224/) |
| 106 | 精電舎電子工業 | 確認待ち | 精電舎電子工業の7月21日続報を確認。ADサーバーのデータ転送は記載されているが、取得資料では具体的な個人情報の対象・影響が確定できず。  | [資料1](https://legalagent.co.jp/legal-lab/security-incidents/) [資料2](https://www.sedeco.co.jp/news/detail/?dispmid=567&itemid=111) |
| 107 | 環境開発工業 | 確認待ち | 環境開発工業（kklp.co.jp）の7月21日通知を確認。7月16日の攻撃は公表されているが、個人情報の具体的な影響範囲を確認できず。同名類似企業のページは採用しない。  | [資料1](https://legalagent.co.jp/legal-lab/security-incidents/) [資料2](https://www.kklp.co.jp/3834) |
| 108 | ノストラム | 確認待ち | ノストラムの通知と福岡大学・同志社大学の利用者側公表を照合。提供元の5月通知以外に期間内の公表日を確定できず。利用大学の個別公表を提供元の公表として転用しない。  | [資料1](https://legalagent.co.jp/legal-lab/security-incidents/) |
| 109 | 埼玉県（LPガス補助資料） | 確認待ち | 埼玉県の8月25日公式資料でLPガス事業者11件の口座等の誤送付を確認。法人・個人事業主の内訳が不明で、個人情報への影響を確定できず。  | [資料1](https://www.pref.saitama.lg.jp/a0403/news/page/news2026082401.html) |
| 110 | 多摩市（中学校簿冊） | 確認待ち | 多摩市中学校の33人分の簿冊紛失候補を検索。該当公式URLが取得不可で、本文と公表日の照合を完了できず。  | [資料1](https://www.city.tama.lg.jp/shisei/gyouseiiinkai/kyouiku/1010738/1021030.html) |
| 111 | 穴水町（健診対象者USB） | 確認待ち | 穴水町の健診対象者USB紛失の報道・まとめを照合。7月27日と28日の記載が混在し、公式本文で公表日を確認できず。  | [資料1](https://yjk365security.jp/news/anamizu-town-usb-lost-personal-info-2026/) |
| 112 | 九州電力送配電（記憶媒体紛失続報） | 追加掲載 | 公表本文の日付・対象情報を照合し掲載。 [掲載記録](../data/incidents/kyuden-td-ssd-20260708.json) | [資料1](https://www.kyuden.co.jp/td/press/2026/260708.html) |

取得不可のページも「確認先」に含む。各行の理由を併読すること。公式本文を取得できなかった事案を公式確認済みとは扱わない。元候補・検索語・判定の機械可読記録は `data/research-audit.json` の最終調査回に保存。
