# 2026年1～10月の除外検索と再照合

新規88件、既存8件を補完。全期間の掲載は1,969件から2,057件となった。確認待ちは113件（今回追加17件・解消0件）。

| 公表月 | 調査前 | 今回新規 | 反映後 |
| --- | ---: | ---: | ---: |
| 2026-01 | 52 | 5 | 57 |
| 2026-02 | 48 | 6 | 54 |
| 2026-03 | 64 | 4 | 68 |
| 2026-04 | 159 | 6 | 165 |
| 2026-05 | 147 | 6 | 153 |
| 2026-06 | 143 | 8 | 151 |
| 2026-07 | 185 | 6 | 191 |
| 2026-08 | 161 | 3 | 164 |
| 2026-09 | 162 | 11 | 173 |
| 2026-10 | 848 | 33 | 881 |

月別件数は掲載データの公表日集計。続報の初期資料補完で月移動があり、新規追加数と増減数は一致しない。国内の発生総数ではない。

## 調査方法

- 1～10月それぞれで一般漏えい、誤送信、紛失の検索を実施。専門媒体を-siteで除外し、既知の大規模事故が占める検索結果を補った。除外条件を重ねすぎて無関係な結果が増える検索は別の条件でも再検索。
- 公開索引817行から対象期間内・除外なし・未統合の807行を抽出。既存公式出典を正規化して照合し、不一致248行・重複排除229 URLを追加取得。URL違いだけで未掲載と判定しない。
- 検索で見つけた追加60 URLと自治体の旧ドメイン等15 URLも取得。取得成功を本文確認済みと同一視せず、採否と未精査を監査データで分けた。
- 新規は公式本文の公表日・対象情報・対象規模を照合。大阪市10月一括公表の13行は、既に個別公表された2行を除く11件を掲載。発生日・市内部の報告日・ページ更新日を公表日へ流用しない。
- 同一事案の初報・続報は既存IDへ追記し、後続調査結果を保持。組織名が同じでも対象・経緯が異なる事故は別件にする。

## 既存補完

- [千葉西総合病院](../data/incidents/chibanishi-sns-20261010.json)：2026-10-08掲載。職員2名が関わった個人情報を含む動画のSNS投稿を公表し、処分と再発防止策を報告。
- [株式会社ムラウチドットコム](../data/incidents/murauchi-20260915.json)：2026-07-24掲載。外部持ち出しを確認し、漏えい対象7,716,811件と原因を公表。
- [関西国際大学](../data/incidents/kuins-20260930.json)：2026-09-30掲載。eポートフォリオの文字情報を外部取得されたと判断。氏名等を含むかは確認中。

- [産経新聞社（RESPECTion!推進委員会事務局）](../data/incidents/sankei-respection-20260911.json)：公式出典の別URLを既存記録へ統合。
- [川崎市宮前スポーツセンター](../data/incidents/kawasaki-miyamae-sports-mail-20260608.json)：公式出典の別URLを既存記録へ統合。
- [福岡県](../data/incidents/fukuoka-20260929.json)：公式出典の別URLを既存記録へ統合。
- [茨城NPOセンター・コモンズ（茨城県委託事業）](../data/incidents/ibaraki-commons-mail-20260926.json)：公式出典の別URLを既存記録へ統合。
- [足立区（都市農業公園）](../data/incidents/adachi-park-mail-20260824.json)：公式出典の別URLを既存記録へ統合。

## 新規掲載

| 公表日 | 組織 | 内容 |
| --- | --- | --- |
| 2026-01-09 | 茨城県建築指導課 | [建築届出の返信に別届出の主任技術者名等を誤添付](../data/incidents/ibaraki-building-mail-20260109.json) |
| 2026-01-16 | 名古屋市（アスフィール） | [クラブ活動ポータルの研修合格通知で指導者13人の情報を誤送信](../data/incidents/nagoya-club-portal-mail-20260116.json) |
| 2026-01-16 | 名古屋市名東区 | [民生委員が高齢者名簿等を自宅で紛失](../data/incidents/nagoya-meito-elderly-list-20260116.json) |
| 2026-01-22 | 名古屋市昭和保健センター | [乳児健診名簿11人分を別保護者へ誤交付](../data/incidents/nagoya-showa-infant-list-20260122.json) |
| 2026-01-23 | ビーシステム（ファーストケア） | [取引先の個人情報を含むデータを別取引先へ誤送付](../data/incidents/fcsoft-data-mail-20260123.json) |
| 2026-02-03 | 吹田市（病児・病後児保育室ぶろっこりー） | [病児保育の児童・保護者の登録票等を紛失](../data/incidents/suita-sick-child-records-20260203.json) |
| 2026-02-10 | 横須賀市 | [イベント当選者1人の氏名を別応募者へ誤送信](../data/incidents/yokosuka-esports-mail-20260210.json) |
| 2026-02-16 | かがわ産業支援財団 | [セミナー申込者のメールアドレス20件を誤送信](../data/incidents/kagawa-isf-mail-20260216.json) |
| 2026-02-17 | 浦添市 | [補装具申請に係る1人分の処方箋が所在不明に](../data/incidents/urasoe-prescription-loss-20260217.json) |
| 2026-02-19 | 名古屋市食品衛生検査所 | [食品安全講座応募者1人の情報を別応募者へ誤送信](../data/incidents/nagoya-food-safety-mail-20260219.json) |
| 2026-02-27 | 大阪府立岬高等学校 | [校外学習マニュアル紛失で生徒332人の情報に影響](../data/incidents/osaka-misaki-study-loss-20260227.json) |
| 2026-03-16 | 四万十市 | [説明会案内で10人のメールアドレスを誤送信](../data/incidents/shimanto-mail-20260316.json) |
| 2026-03-27 | 佐賀県（さが政策推進チーム） | [会議案内の送信先誤りで代表者氏名が漏えい](../data/incidents/saga-policy-mail-20260327.json) |
| 2026-03-31 | 消費者庁 | [職員8人の給与支払報告書を別自治体へ誤送信](../data/incidents/caa-payroll-eltax-20260331.json) |
| 2026-03-31 | 大阪府（OSAKAしごとフィールド） | [キャリア相談者1人の履歴書を別相談者へ誤送信](../data/incidents/osaka-career-resume-20260331.json) |
| 2026-04-07 | 新潟県精神保健福祉センター | [精神障害者保健福祉手帳の判定用診断書1人分を紛失](../data/incidents/niigata-mental-certificate-loss-20260407.json) |
| 2026-04-09 | カンコーショップ盛岡 | [制服購入者533人のメールアドレスを誤送信](../data/incidents/kanko-morioka-mail-20260409.json) |
| 2026-04-15 | 関西総合システム | [前年のランサムウェア被害で採用応募者情報に漏えいのおそれ](../data/incidents/kansai-system-recruit-20260415.json) |
| 2026-04-23 | 兵庫県教育委員会 | [就学支援金オンライン申請システムで個人情報4件が漏えい](../data/incidents/hyogo-eshien-20260423.json) |
| 2026-04-28 | 新潟県福祉保健部こども家庭課 | [福祉資金貸付の納入通知書を別償還者へ誤送付](../data/incidents/niigata-family-loan-mail-20260428.json) |
| 2026-04-30 | 青森県立中央病院 | [非常勤職員が患者1人の個人情報を第三者へ漏えい](../data/incidents/aomori-hospital-staff-disclosure-20260430.json) |
| 2026-05-01 | 一宮市立市民病院 | [市民病院で診療情報を含むUSBメモリを紛失](../data/incidents/ichinomiya-hospital-usb-20260501.json) |
| 2026-05-01 | 熊本市中央区保護第二課 | [生活保護受給者の送付状を別受給者へ誤封入](../data/incidents/kumamoto-welfare-mail-20260501.json) |
| 2026-05-01 | 祥和会・脳神経センター大田記念病院 | [採用広報動画に入院患者が映り込みSNSへ公開](../data/incidents/ota-hospital-recruit-video-20260501.json) |
| 2026-05-21 | 名古屋市 | [NPO閲覧資料のマスキング不備で役員・社員の住所が閲覧可能に](../data/incidents/nagoya-npo-address-20260521.json) |
| 2026-05-27 | 豊島区 | [療養費支給決定通知40件を別の機関へ誤送付](../data/incidents/toshima-medical-benefit-20260527.json) |
| 2026-05-28 | スターティア | [顧客向けメールで別顧客の担当者氏名等を誤表示](../data/incidents/startia-mail-20260528.json) |
| 2026-06-01 | 品川区（豊葉の杜学園） | [校外学習の委託先が職員・児童の情報を含む書類を紛失](../data/incidents/shinagawa-outdoor-document-20260601.json) |
| 2026-06-05 | 文京区（スポーツ施設指定管理者） | [フットサル教室の落選者14人のメールアドレスを誤送信](../data/incidents/bunkyo-futsal-mail-20260605.json) |
| 2026-06-13 | 株式会社ムービック | [抽選結果メールの宛先違いで812件の情報が漏えい](../data/incidents/movic-lycee-mail-20260613.json) |
| 2026-06-15 | アクト・セン株式会社 | [作業管理サーバーへの侵入で従業員等の情報に漏えいのおそれ](../data/incidents/act1000-work-server-20260615.json) |
| 2026-06-15 | 名古屋市緑地管理課 | [公園施設管理の申請書誤封入で担当者の携帯電話番号が漏えい](../data/incidents/nagoya-park-mail-20260615.json) |
| 2026-06-23 | 大阪教育大学 | [学生・教職員の個人情報1,529件を含むデータを誤送信](../data/incidents/osaka-kyoiku-attachment-20260623.json) |
| 2026-06-27 | 三重県／三重県社会福祉協議会 | [研修用Excelに児童と支援責任者の情報を残して公開](../data/incidents/mie-welfare-training-sheet-20260627.json) |
| 2026-06-30 | 相模原商工会議所青年部 | [子ども向け企画の申込情報22件が他申込者から閲覧可能に](../data/incidents/sagamihara-yeg-form-20260630.json) |
| 2026-07-10 | 大阪府立中央図書館 | [複写申込者1人の氏名を別人へ誤送信](../data/incidents/osaka-central-library-mail-20260710.json) |
| 2026-07-13 | 野々市市 | [職員が私的目的で戸籍謄本を閲覧・印刷](../data/incidents/nonoichi-private-family-register-20260713.json) |
| 2026-07-13 | 大阪市教育委員会 | [中学校の個人懇談で20人の成長曲線等の書類を誤配付](../data/incidents/osaka-middle-growth-july-20260713.json) |
| 2026-07-24 | 大阪府立泉尾工業高等学校 | [生徒個人調査票1人分を紛失](../data/incidents/osaka-izuo-student-loss-20260724.json) |
| 2026-07-30 | 株式会社Hacobu | [返却後の貸与タブレットが所在不明、最大50,384件の閲覧に懸念](../data/incidents/hacobu-movo-tablet-20260730.json) |
| 2026-07-30 | 株式会社晴れる屋 | [購入抽選の応募情報28,490件が外部から閲覧可能に](../data/incidents/hareruya2-lottery-display-20260730.json) |
| 2026-08-19 | 大阪市立美術館 | [美術館関係者1人の所有作品情報等を誤添付](../data/incidents/osaka-museum-owner-mail-20260819.json) |
| 2026-08-20 | 鯖江市教育委員会文化課 | [バスツアー応募者19人のメールアドレスを誤送信](../data/incidents/sabae-bus-tour-mail-20260820.json) |
| 2026-08-24 | 三重大学 | [オープンキャンパス受付名簿292人分を紛失](../data/incidents/mie-univ-campus-list-20260824.json) |
| 2026-09-09 | 大阪市立小学校（校名非公表） | [小学校で成長曲線等の書類18人分を誤配付](../data/incidents/osaka-school-growth-september-20260909.json) |
| 2026-09-14 | 埼玉県／医療法人真正会霞ヶ関南病院 | [研修参加者等58人への連絡でメールアドレスを誤送信](../data/incidents/saitama-brain-support-mail-20260914.json) |
| 2026-09-14 | SBクリエイティブ株式会社 | [ビジネス＋ITへの侵入で取引先担当者情報に不正取得のおそれ](../data/incidents/sbcreative-businessit-20260914.json) |
| 2026-09-15 | 株式会社小田原エンジニアリング | [出向従業員のメールへの侵入で取引先情報を閲覧](../data/incidents/odawara-eng-mail-20260915.json) |
| 2026-09-16 | 福岡市教育委員会／早良図書館 | [図書館のメールマガジン希望者45人のアドレスが流出](../data/incidents/fukuoka-sawara-library-mail-20260916.json) |
| 2026-09-18 | 鹿角市／秋田県総合保健事業団 | [健診結果等を記録したCD-R2枚が所在不明に](../data/incidents/kazuno-health-cdr-20260918.json) |
| 2026-09-21 | 埼玉県立武道館／指定管理者共同事業体 | [親子運動会の過去参加者35人のメールアドレスを誤送信](../data/incidents/saitama-budokan-mail-20260921.json) |
| 2026-09-25 | 岡山県教育庁福利課／ソーシャルアドバンス株式会社 | [ストレスチェック個人結果1件を別の教職員へ誤送付](../data/incidents/okayama-teacher-stress-20260925.json) |
| 2026-09-25 | 佐賀県立唐津東高等学校 | [Classiで26人の確認テスト答案を誤添付](../data/incidents/saga-karatsu-classi-20260925.json) |
| 2026-09-29 | 公益財団法人国際文化会館 | [蔵書検索システムへの侵入で利用者情報に漏えいのおそれ](../data/incidents/ihj-opac-account-20260929.json) |
| 2026-09-30 | 一宮市 | [見学会当選者12人のメールアドレスを誤送信](../data/incidents/ichinomiya-tour-mail-20260930.json) |
| 2026-10-02 | 独立行政法人労働者健康安全機構 愛媛労災病院 | [患者の予約票を別患者の家族へ誤交付](../data/incidents/ehime-rosai-reservation-slip-20261002.json) |
| 2026-10-02 | グリーンコープ生協ふくおか | [車上荒らしで33,526人の情報を含む業務PCが盗難](../data/incidents/greencoop-fukuoka-pc-20261002.json) |
| 2026-10-02 | 関西福祉大学 | [合格発表対象者131人のメールアドレスを誤送信](../data/incidents/kansai-welfare-mail-20261002.json) |
| 2026-10-02 | 新潟県南魚沼地域整備部／委託先 | [委託先が12人分の個人情報入りタブレットを一時紛失](../data/incidents/niigata-minamiuonuma-tablet-20261002.json) |
| 2026-10-05 | 観音寺市／株式会社広真 | [予防接種予診票2人分を別人へ誤封入](../data/incidents/kanonji-vaccine-mail-20261005.json) |
| 2026-10-05 | 佐賀県立白石高等学校（普通科キャンパス） | [奨学給付金結果通知書等を誤封入](../data/incidents/saga-shiroishi-scholarship-20261005.json) |
| 2026-10-07 | 公益財団法人アクロス福岡 | [イベント申込者29人のメールアドレスを誤送信](../data/incidents/acros-fukuoka-mail-20261007.json) |
| 2026-10-07 | CLASS EARTH株式会社 | [ボランティア応募者のメールアドレス69件を誤送信](../data/incidents/class-earth-volunteer-mail-20261007.json) |
| 2026-10-08 | 柏市こども部子育て支援課 | [子育て支援団体向けメールで氏名58件を含むファイルを誤添付](../data/incidents/kashiwa-parent-support-mail-20261008.json) |
| 2026-10-08 | 柏市教育委員会 教育総務部教育施設課 | [学校統合の地域協議会委員4人のメールアドレスを誤送信](../data/incidents/kashiwa-school-council-mail-20261008.json) |
| 2026-10-08 | 大阪市 | [ボランティア4人のメールアドレス等を誤送信](../data/incidents/osaka-history-museum-mail-20261008.json) |
| 2026-10-08 | 大阪府住宅供給公社 | [別契約者の駐車場使用契約書データを誤送付](../data/incidents/osaka-housing-parking-mail-20261008.json) |
| 2026-10-09 | 大阪市生野区 | [資格喪失届の誤送付](../data/incidents/osaka-oct-bulk-1-20261009.json) |
| 2026-10-09 | 大阪市教育委員会 | [就学援助審査通知書の誤送付](../data/incidents/osaka-oct-bulk-11-20261009.json) |
| 2026-10-09 | 大阪市こども青少年局 | [おたより帳の誤交付](../data/incidents/osaka-oct-bulk-12-20261009.json) |
| 2026-10-09 | 大阪市旭区 | [生活保護法医療券の誤交付](../data/incidents/osaka-oct-bulk-13-20261009.json) |
| 2026-10-09 | 大阪市北区 | [付番誤りに伴う住民票の誤記載](../data/incidents/osaka-oct-bulk-2-20261009.json) |
| 2026-10-09 | 大阪市東淀川区 | [入学申請書の誤送付](../data/incidents/osaka-oct-bulk-3-20261009.json) |
| 2026-10-09 | 大阪市住之江区 | [介護保険被保険者証の誤送付](../data/incidents/osaka-oct-bulk-4-20261009.json) |
| 2026-10-09 | 大阪市天王寺区 | [経済センサス活動調査報酬明細書の誤送付](../data/incidents/osaka-oct-bulk-5-20261009.json) |
| 2026-10-09 | 大阪市中央区 | [母子健康手帳の写しの誤交付](../data/incidents/osaka-oct-bulk-6-20261009.json) |
| 2026-10-09 | 大阪市財政局 | [特別徴収税額の決定・変更通知書の誤送付](../data/incidents/osaka-oct-bulk-7-20261009.json) |
| 2026-10-09 | 大阪市デジタル統括室 | [スーパーシティの連絡メール誤送信](../data/incidents/osaka-oct-bulk-9-20261009.json) |
| 2026-10-13 | 楽天モバイル株式会社 | [支払い証明書の特殊操作による第三者閲覧の可能性を公表](../data/incidents/rakuten-mobile-payment-certificate-20261013.json) |
| 2026-10-14 | フェイラージャパン株式会社 | [児童17人の氏名入りデザイン画を紛失](../data/incidents/feiler-design-loss-20261014.json) |
| 2026-10-14 | 神戸市 | [NPO法人の公開資料で住所のマスキングが不完全](../data/incidents/kobe-npo-address-20261014.json) |
| 2026-10-14 | 鳥取県／株式会社エッグ | [ふるさと納税寄附者1人の発送情報を別事業者へ誤送信](../data/incidents/tottori-furusato-order-mail-20261014.json) |
| 2026-10-15 | 神戸市東灘区役所市民課 | [別来庁者へマイナンバー入り住民票を誤返却](../data/incidents/kobe-higashinada-resident-20261015.json) |
| 2026-10-15 | 大阪市（経済戦略局文化課） | [イベント応募フォームで申込者40人の情報が閲覧可能に](../data/incidents/osaka-sakuyakonohana-form-20261015.json) |
| 2026-10-20 | 大阪市 | [課外学習支援報告書の黒塗り不備で生徒延べ92人の情報が漏えい](../data/incidents/osaka-suminoe-redaction-20261020.json) |
| 2026-10-22 | 多摩市 | [貸与モバイルPCの盗難で委員等89人の情報に漏えいのおそれ](../data/incidents/tama-welfare-mobile-theft-20261022.json) |
| 2026-10-23 | 大阪府教育庁施設財務課 | [派遣職員1人の出勤簿を紛失](../data/incidents/osaka-dispatched-attendance-loss-20261023.json) |
| 2026-10-23 | 大阪府立佐野高等学校 | [AI検索で得た誤ったFAX番号に生徒6人の報告書を送信](../data/incidents/osaka-sano-baseball-fax-20261023.json) |

## 調査の限界と未解決

- 網羅完了や漏れゼロの宣言ではない。807索引行の照合、248不一致行の取得、新規掲載した公式本文の精査は異なる作業量であり合算しない。
- 監査のdiscovery_onlyは資料を探索・取得しただけの行。本文精査や同一事案の確定は未完了。検索は既知組織やサイトの除外により取りこぼすため、除外しない索引照合と組み合わせた。
- リンク切れ・画像PDF・日付のない文書・企業情報のみ等は、索引の要約や記事日から推測して掲載しない。新たな確認待ち候補と未精査一覧を保存した。
- 掲載内容は確認した各資料時点。年内の全続報の追跡や国内の全自治体の全月次一括公表の精査を完了したものではない。

検索条件40本、出典・採否・未精査一覧は[監査データ](../data/research-2026-01-10-recheck.json)に保存。
