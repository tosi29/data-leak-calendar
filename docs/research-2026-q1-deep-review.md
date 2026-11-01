# 2026年1～3月の再点検

前回の38件は収集不足だった。専門媒体の月次索引と別の公開索引から公式資料を確認し、新規120件、既存14件を補完、重複1件を統合した。

| 公表月 | 前回 | 今回反映後 |
| --- | ---: | ---: |
| 2026-01 | 13 | 52 |
| 2026-02 | 14 | 48 |
| 2026-03 | 11 | 64 |

全期間の掲載総数1,969件。確認待ち96件（今回追加21件、解消0件）。月別件数はカレンダーに配置する公表日の集計で、発生件数・国内総数ではない。

## 調査と掲載判断

- Security NEXTの1～3月の月次索引から527記事行を収集し、事故・漏えい関連212記事（199件と追加13件）の本文を取得。索引全行が個人情報漏えい事案とは限らず、全記事の掲載判定完了件数とは区別。
- ScanNetSecurityの1～3月事故カテゴリ189記事と関連一次資料245 URLを探索。漏洩ウォッチの公開APIから174行・公式出典162 URLを追加探索。複数索引の同一事案・続報・前年公表を照合。
- 新規掲載は公式本文の公表日・対象情報・規模を確認。小規模事故も対象とし、大阪市の1月一括公表は前年に個別公表済みの2件を除いて12事案に分割。
- 同じ組織名だけで同一事件とせず、対象サービス・公表資料・発生経緯で照合。アサヒ・インテグラル・日本テレネットは既存IDへ統合し、NICTの二重掲載を解消。
- 人数、件数、ファイル数、送信件数、施設数を区別。内数・重複不明の区分は合算せず、未確認を確定漏えいとしない。

## 既存記録の補完

- [アサヒグループホールディングス](../data/incidents/asahi-group-ransom-20260717.json)：2026-02-18掲載。後続資料による調査結果を反映。本文の状態・対象範囲はこの続報を保持。
- [インテグラル](../data/incidents/integral-web-followup-20260417.json)：2026-01-30掲載。後続資料による調査結果を反映。本文の状態・対象範囲はこの続報を保持。
- [日本テレネット](../data/incidents/nippon-telenet-ransom-20260612.json)：2026-03-17掲載。後続資料による調査結果を反映。本文の状態・対象範囲はこの続報を保持。
- [情報通信研究機構（NICT）](../data/incidents/nict-voice-corpus-20260519.json)：2026-03-19掲載。話者の氏名等が含まれる音声データを誤公開した事案で、対象者全員への通知完了と調査状況を公表。
- [ロジックベイン](../data/incidents/logicvein-20260817.json)：2026-01-30掲載。FW脆弱性を経由した侵入と流出のおそれを公表。8月の公開確認結果を保持。
- [株式会社穴吹ハウジングサービス（あなぶきハウジンググループ）](../data/incidents/anabuki-housing-20260521.json)：2026-03-09掲載。攻撃者が公開した情報に自社関連情報を確認。対象規模は5月の調査結果を保持。
- [NSバイオジャパン](../data/incidents/nsbio-shop-20260218.json)：2026-02-11掲載。初報を確認。2月18日の第2報と同じ事案として統合。
- [日本医科大学武蔵小杉病院](../data/incidents/nms-kosugi-ransom-20260213.json)：2026-02-13掲載。患者約13万人、職員・実習生約1,700人に対象範囲を更新。VPN装置の脆弱性を悪用した侵入と公開を確認。
- [スマレジ](../data/incidents/smaregi-external-app-20260108.json)：2026-01-08掲載。連携8社の氏名136,346件、電話番号114,951件の影響を公表。
- [coastline](../data/incidents/coastline-smaregi-app-20260110.json)：2026-01-10掲載。外部流出を確認し、氏名110,359件・電話番号100,293件と公表。
- [エバラ食品工業](../data/incidents/ebara-club-display-20260123.json)：2026-01-23掲載。CDNのキャッシュ除外設定漏れとキャンペーンページ不備を確認。最大557件。
- [ニッタイ工業（日創グループ）](../data/incidents/nittai-ntrading-20260209.json)：2026-02-09掲載。会員情報3,887件が閲覧された可能性を否定できないと公表。
- [白梅豊岡病院](../data/incidents/shiraume-toyooka-ransom-20260303.json)：2026-03-03掲載。厚生労働省初動チームから利用者・家族等のものとみられるデータ公開の情報提供。対象者・項目の分析は継続。
- [総務省](../data/incidents/soumu-survey-display-20260206.json)：2026-02-06掲載。漏えい6件、漏えいのおそれ43件と確認。

NICTは同じ誤公開の第2報・第3報を別件としていたため、`nict-voice-corpus-20260519`へ統合した。既存IDの日付末尾はリンク維持のため変更しない。

## 新規掲載

| 公表日 | 組織 | 内容 |
| --- | --- | --- |
| 2026-01-06 | 株式会社エフエム東京（TOKYO FM） | [外部クラウドの分析用ユーザー属性情報が流出](../data/incidents/tokyofm-analytics-20260106.json) |
| 2026-01-07 | 大阪ブルテオン／株式会社バーチャスクリエイト | [ファンクラブ配送メールで別会員55人の氏名等を誤通知](../data/incidents/osaka-bluteon-mail-20260107.json) |
| 2026-01-08 | 沖縄県立看護大学 | [教務支援システムのランサムウェア被害で学生情報への影響を調査](../data/incidents/okinawa-nursing-ransom-20260108.json) |
| 2026-01-09 | 大阪市住之江区 | [障がい福祉サービス変更支給決定通知書等の誤送付](../data/incidents/osaka-jan-bulk-1-20260109.json) |
| 2026-01-09 | 大阪市北区 | [サービス等利用計画案作成依頼書等の誤送付](../data/incidents/osaka-jan-bulk-10-20260109.json) |
| 2026-01-09 | 大阪市こども青少年局 | [保育所連絡帳の誤交付](../data/incidents/osaka-jan-bulk-11-20260109.json) |
| 2026-01-09 | 大阪市西淀川区 | [特別児童扶養手当の返納督促状の誤送付](../data/incidents/osaka-jan-bulk-12-20260109.json) |
| 2026-01-09 | 大阪市教育委員会 | [成長曲線・肥満度曲線等の誤交付](../data/incidents/osaka-jan-bulk-13-20260109.json) |
| 2026-01-09 | 大阪市住吉区 | [診察料・検査料請求書の誤送付](../data/incidents/osaka-jan-bulk-2-20260109.json) |
| 2026-01-09 | 大阪市財政局・福祉局 | [給与等の支給状況に関する照会文書の誤送付](../data/incidents/osaka-jan-bulk-3-20260109.json) |
| 2026-01-09 | 大阪市城東区 | [保護決定通知書の誤送付](../data/incidents/osaka-jan-bulk-4-20260109.json) |
| 2026-01-09 | 大阪市西成区 | [生活保護の返還金・徴収金決定書等の誤送付](../data/incidents/osaka-jan-bulk-6-20260109.json) |
| 2026-01-09 | 大阪市こども青少年局 | [一時保護の事実等を誤って提供](../data/incidents/osaka-jan-bulk-7-20260109.json) |
| 2026-01-09 | 大阪市教育委員会 | [法定調書作成に係るメールの誤送信](../data/incidents/osaka-jan-bulk-8-20260109.json) |
| 2026-01-09 | 大阪市市民局 | [住民票除票の写しの誤交付](../data/incidents/osaka-jan-bulk-9-20260109.json) |
| 2026-01-09 | 四街道市防犯協会 | [サポート詐欺で端末が遠隔操作され名簿約1,700件等に漏えいのおそれ](../data/incidents/yotsukaido-crime-pc-20260109.json) |
| 2026-01-13 | シーエーシー | [Academic Support Naviへの侵入で個人データへの影響を公表](../data/incidents/cac-academic-navi-20260113.json) |
| 2026-01-13 | 公益財団法人まちみらい千代田 | [マンション連絡会の会員89人のメールアドレスを誤送信](../data/incidents/mm-chiyoda-mail-20260113.json) |
| 2026-01-14 | 旭川市 | [持ち帰った生活保護書類を家庭ごみへ廃棄し7人分の情報が流出](../data/incidents/asahikawa-welfare-disposal-20260114.json) |
| 2026-01-15 | 株式会社小田急リゾーツ（山のホテル） | [山のホテルの予約者情報に第三者閲覧のおそれ](../data/incidents/odakyu-yamano-hotel-20260115.json) |
| 2026-01-19 | JR九州グループ | [グループ会社の従業員等14,638人の情報に漏えいのおそれ](../data/incidents/jrkyushu-group-network-20260119.json) |
| 2026-01-21 | 順天堂大学医学部附属練馬病院 | [医師の私物PCを紛失し患者約50人の手術情報等に影響](../data/incidents/juntendo-nerima-pc-20260121.json) |
| 2026-01-21 | コバヤシ | [求人応募者・従業員等の個人情報8,149件が漏えい](../data/incidents/kobayashi-server-20260121.json) |
| 2026-01-21 | STNet | [クラウド構築・運用ネットワークへの侵入で担当者20,846人の情報に漏えいのおそれ](../data/incidents/stnet-cloud-network-20260121.json) |
| 2026-01-22 | 名古屋市国際交流課 | [イベント申込者49人のリストへのリンクをFacebookで誤公開](../data/incidents/nagoya-international-form-20260122.json) |
| 2026-01-23 | 柏市広報広聴課／医療公社管理課 | [限定公開ページの資料に約150件の個人情報を掲載](../data/incidents/kashiwa-limited-web-20260123.json) |
| 2026-01-23 | 農林水産省 | [提出先メールアドレスの誤りで職員・家族4,571人の税務情報が漏えい](../data/incidents/maff-payroll-mail-20260123.json) |
| 2026-01-23 | 学校法人宮崎日本大学学園 | [職員端末のサポート詐欺被害で生徒等の個人情報に流出のおそれ](../data/incidents/miyazaki-nichidai-scam-20260123.json) |
| 2026-01-23 | TOKAIコミュニケーションズ | [OneOfficeメールサービスのアドレス等の漏えいを確認](../data/incidents/tokai-oneoffice-20260123.json) |
| 2026-01-26 | Authense法律事務所 | [Microsoft 365アカウントへの侵入でメールボックス等に閲覧・取得のおそれ](../data/incidents/authense-m365-20260126.json) |
| 2026-01-26 | 茨城県国際交流協会 | [ボランティア募集メールに申込者1人の個人情報を誤添付](../data/incidents/ibaraki-exchange-mail-20260126.json) |
| 2026-01-26 | インテリックス（ジャストカーテン） | [通販サイトで顧客60,663人・うちカード利用者10,423人の情報に漏えいのおそれ](../data/incidents/justcurtain-ec-20260126.json) |
| 2026-01-26 | 嘉麻市 | [空き家バンクの物件ページに個人情報入りPDFを掲載](../data/incidents/kama-vacant-house-20260126.json) |
| 2026-01-27 | 新横浜グレイスホテル | [宿泊予約者情報に第三者閲覧のおそれと偽メッセージ配信を公表](../data/incidents/gracehotel-booking-20260127.json) |
| 2026-01-27 | 兵庫県／NTTマーケティングアクトProCX | [支援事業の補助金申請者65人のメールアドレスを誤送信](../data/incidents/hyogo-medical-mail-20260127.json) |
| 2026-01-27 | 釜浅商店 | [スマレジ外部連携アプリから会員の氏名5,375人分等が流出](../data/incidents/kamaasa-coastline-20260127.json) |
| 2026-01-29 | 株式会社カンバス | [マイページへの攻撃で個人情報入りバックアップに流出のおそれ](../data/incidents/canvass-ransom-20260129.json) |
| 2026-02-02 | 国立大学法人大阪教育大学 | [学生への2回の誤送信でメールアドレス合計2,376件が漏えい](../data/incidents/osaka-kyoiku-mail-20260202.json) |
| 2026-02-03 | 北都銀行 | [7店舗で顧客推定2,855人分の整理口明細資料を紛失](../data/incidents/hokutobank-document-loss-20260203.json) |
| 2026-02-03 | 鹿児島市（企業・団体間交流・出会いサポート事業） | [婚活イベント参加者等10人のメールアドレスを誤送信](../data/incidents/kagoshima-match-mail-20260203.json) |
| 2026-02-03 | 川崎市／かわさき市民活動センター | [児童等約100人の写真を含むSDカードを指定管理者が紛失](../data/incidents/kawasaki-wakuwaku-sd-20260203.json) |
| 2026-02-03 | 大阪市住之江区選挙管理委員会 | [投票管理者等57人の内部資料を選挙関係書類へ誤封入](../data/incidents/osaka-suminoe-election-mail-20260203.json) |
| 2026-02-05 | BTCボックス | [関係先で共有資料が第三者から閲覧可能になり顧客39人に影響](../data/incidents/btcbox-shared-material-20260205.json) |
| 2026-02-05 | 共立メンテナンス（ドーミーシニア） | [フィッシングを起点とする端末侵害で個人情報の閲覧を確認](../data/incidents/dormy-senior-phishing-20260205.json) |
| 2026-02-06 | 柏市立小学校 | [児童の要配慮情報を含む指導計画・記録簿を紛失](../data/incidents/kashiwa-school-plan-loss-20260206.json) |
| 2026-02-06 | 新潟県／住宅・建築SDGs推進センター | [講習会資料の共有先へ参加者名簿を誤保存](../data/incidents/niigata-zeh-share-20260206.json) |
| 2026-02-06 | 山口大学 | [附属小学校の説明会申込者82件のメールアドレスを誤送信](../data/incidents/yamaguchi-elementary-mail-20260206.json) |
| 2026-02-07 | 神奈川県選挙管理委員会 | [候補者の届出書に記載された10人の情報を誤公開](../data/incidents/kanagawa-election-web-20260207.json) |
| 2026-02-07 | NTP名古屋トヨペット | [リコール案内DMの誤封入で顧客50人の情報が漏えい](../data/incidents/ntp-recall-mail-20260207.json) |
| 2026-02-09 | 札幌医科大学 | [非常勤講師の私物PC紛失で学生88人の成績等に影響](../data/incidents/sapmed-lecturer-pc-20260209.json) |
| 2026-02-10 | 三河湾ネットワーク | [顧客提出書類17件を誤った住所へ送付](../data/incidents/mikawawan-misdelivery-20260210.json) |
| 2026-02-12 | 人事院 | [採用試験の身体検査等の検査票を庁内で紛失](../data/incidents/jinji-exam-loss-20260212.json) |
| 2026-02-12 | 香川県観光協会 | [県観光協会の担当者94人のメールアドレスを誤送信](../data/incidents/kagawa-tourism-mail-20260212.json) |
| 2026-02-13 | 狛江市選挙管理委員会 | [選挙人名簿照合用SDカード5枚を紛失](../data/incidents/komae-election-sd-20260213.json) |
| 2026-02-13 | LINEヤフー | [Yahoo!ショッピング休店ページで非公開の業務地住所を誤表示](../data/incidents/yahoo-store-address-20260213.json) |
| 2026-02-13 | 山形県（山形県医療機関等物価高騰対策支援事業・受託事業者） | [医療支援金の申請ページで別事業者の代表者・担当者情報を誤表示](../data/incidents/yamagata-medical-form-20260213.json) |
| 2026-02-14 | 山梨県北杜市（ほくとファンクラブ委託先） | [ファンクラブ登録会員586人のメールアドレスを誤送信](../data/incidents/hokuto-fanclub-mail-20260214.json) |
| 2026-02-16 | 嘉麻市 | [地域計画の農業従事者一覧で氏名を誤公開](../data/incidents/kama-agriculture-web-20260216.json) |
| 2026-02-16 | 宮崎県 | [会計書類の返送過程で102人分の情報が所在不明に](../data/incidents/miyazaki-accounting-loss-20260216.json) |
| 2026-02-16 | 佐賀県企業立地課 | [件名へ誤記載した担当者1人のメールアドレスを複数者へ送信](../data/incidents/saga-subject-mail-20260216.json) |
| 2026-02-17 | エネルギー・金属鉱物資源機構（JOGMEC） | [元職員が鉱業権者2,246人の氏名を持ち出し](../data/incidents/jogmec-takeout-20260217.json) |
| 2026-02-18 | JR仙台病院 | [廃棄予定PC・SSDの紛失等で患者6,639人の情報に影響](../data/incidents/jr-sendai-storage-20260218.json) |
| 2026-02-19 | 美濃工業 | [前年のサイバー攻撃で従業員・退職者情報に漏えいのおそれ](../data/incidents/mino-employee-ransom-20260219.json) |
| 2026-02-20 | JAあきた北ライフサービス | [自社システムへの侵入で利用者情報に流出のおそれ](../data/incidents/ja-akitakita-life-20260220.json) |
| 2026-02-20 | 明治学院大学 | [Teams設定不備で学生の成績・履歴書等を含む922ファイルが学内閲覧可能に](../data/incidents/meijigakuin-teams-20260220.json) |
| 2026-02-20 | 経済産業省・環境省・みずほリサーチ＆テクノロジーズ | [調査回答データを別の委託成果物へ混在させウェブで誤公開](../data/incidents/meti-env-mizuho-survey-20260220.json) |
| 2026-02-26 | じほう・じほうビジネスサービス | [メールアカウントへの不正ログインで最大890件のアドレスに漏えいのおそれ](../data/incidents/jiho-cloudmail-20260226.json) |
| 2026-02-26 | 関彰商事 | [地域生活支援システムのバックアップ不備で約500人分の情報が滅失](../data/incidents/sekisho-data-loss-20260226.json) |
| 2026-02-27 | 大阪市こども青少年局（児童いきいき放課後事業・入退室管理システム運用委託先） | [放課後事業の利用児童1,486人分の一覧を別運営事業者へ誤送信](../data/incidents/osaka-ikiiki-mail-20260227.json) |
| 2026-02-28 | 全国健康保険協会山形支部（委託先） | [特定保健指導の委託先が加入者6人分の情報を別事業所へ誤送信](../data/incidents/kenpo-yamagata-mail-20260228.json) |
| 2026-03-03 | 日本医療研究開発機構（AMED） | [研究開発関係者のメールアドレス459件を誤送信](../data/incidents/amed-mail-20260303.json) |
| 2026-03-03 | 福岡市放課後児童クラブ | [新入会児童44人の手書き資料を帰宅途中に一時紛失](../data/incidents/fukuoka-club-list-loss-20260303.json) |
| 2026-03-05 | 兵庫県／フェリシモ（ひょうごッシモ） | [オンラインショップの精算書を誤送信し担当者37人の情報が漏えい](../data/incidents/hyogo-felissimo-mail-20260305.json) |
| 2026-03-06 | 工業所有権情報・研修館／滋賀県発明協会 | [専門家278人のリストと外部理事のメールアドレスを誤送信](../data/incidents/inpit-shiga-mail-20260306.json) |
| 2026-03-06 | キリンビール | [ウイスキー会員のメールアドレス1,512件を誤送信](../data/incidents/kirin-whisky-mail-20260306.json) |
| 2026-03-06 | マリモホールディングス（グループ14社） | [役員を装うフィッシングで従業員約1,360人の情報が不正取得](../data/incidents/marimo-employee-phishing-20260306.json) |
| 2026-03-06 | 日本大学三軒茶屋キャンパス | [職員メールの乗っ取りでメールボックス内の個人情報に閲覧のおそれ](../data/incidents/nihon-u-sangenjaya-mail-20260306.json) |
| 2026-03-06 | シード・プランニング | [ランサムウェア被害による個人情報流出の可能性を公表](../data/incidents/seedplanning-ransom-20260306.json) |
| 2026-03-06 | 東京都都市整備局 | [経営事項審査の申請書写し等を紛失](../data/incidents/tokyo-construction-document-20260306.json) |
| 2026-03-06 | ウェルス・マネジメントグループ | [社員メールへの侵入で取引先等のアドレスに影響](../data/incidents/wealth-group-mail-20260306.json) |
| 2026-03-06 | ホワイトエッセンス（歯科衛生士転職サイト「メグリー」） | [転職サイト「メグリー」への侵入で登録者情報に漏えいのおそれ](../data/incidents/whiteessence-meguree-20260306.json) |
| 2026-03-09 | ジョンソン・エンド・ジョンソン | [研究助成サイトの委託サービス侵害で申請者等のデータがアクセス可能に](../data/incidents/jnj-academic-navi-20260309.json) |
| 2026-03-09 | 宮城県／富士通Japan（みやぎジョブカフェ） | [就職相談予約の連絡を別利用者へも誤送信](../data/incidents/miyagi-jobcafe-mail-20260309.json) |
| 2026-03-09 | 二本松市 | [職員が住民記録を業務外検索し知人へ個人情報を伝達](../data/incidents/nihonmatsu-private-query-20260309.json) |
| 2026-03-09 | 東京都 | [調査委託先のランサムウェア被害で住民・担当者等の情報に漏えいのおそれ](../data/incidents/tokyo-seed-research-20260309.json) |
| 2026-03-10 | セゾンファンデックス | [賃貸管理委託先の侵害でリースバック契約者等の個人情報に影響](../data/incidents/fundex-aoyama-20260310.json) |
| 2026-03-10 | 香川県教育委員会 | [教員35人の統計調査データを別高校へ誤送信](../data/incidents/kagawa-teacher-stat-mail-20260310.json) |
| 2026-03-10 | 神奈川県 | [問い合わせフォーム利用者5人の氏名を自治体向け掲示板で誤共有](../data/incidents/kanagawa-form-document-20260310.json) |
| 2026-03-10 | 山形大学 | [教員等の年齢延べ2,149件を公開資料から削除せず掲載](../data/incidents/yamagata-teacher-age-20260310.json) |
| 2026-03-11 | 穴吹興産 | [ランサムウェア被害で個人情報を含む情報の漏えいを確認](../data/incidents/anabuki-kosan-ransom-20260311.json) |
| 2026-03-12 | 社会福祉法人聖テレジア会 聖ヨゼフ病院 | [元職員がボランティア名簿を持ち出し勧誘に使用](../data/incidents/joseph-volunteer-takeout-20260312.json) |
| 2026-03-12 | 大阪市立中学校（校名非公表） | [受験校等を記載した生徒56人の名簿を路上で一時紛失](../data/incidents/osaka-school-exam-list-20260312.json) |
| 2026-03-12 | 余市町／ユニメディア（ふるさとプレミアム） | [ふるさと納税の非公開希望者情報約1,500件を誤表示](../data/incidents/yoichi-furusato-display-20260312.json) |
| 2026-03-13 | 株式会社中海テレビ放送 | [DMの宛名と送付先住所の誤結合で顧客情報に漏えいのおそれ](../data/incidents/chukai-dm-20260313.json) |
| 2026-03-13 | 浦添市立港川中学校／浦添市教育委員会 | [保守業者のHDD紛失で生徒・家族約9,100人の情報に影響](../data/incidents/urasoe-minatogawa-hdd-20260313.json) |
| 2026-03-16 | 東京都中小企業振興公社／TOKYO UPGRADE SQUARE | [TOKYO UPGRADE SQUARE侵害で会員情報に閲覧のおそれ](../data/incidents/tokyo-kosha-upgrade-20260316.json) |
| 2026-03-16 | ユナイテッドアローズ | [元従業員が取引先約1万人分の個人情報を持ち出し](../data/incidents/unitedarrows-takeout-20260316.json) |
| 2026-03-17 | 株式会社コスモスイニシア | [メールアカウントへの侵入で取引先の署名情報等が漏えい](../data/incidents/cosmos-initia-mail-20260317.json) |
| 2026-03-17 | タカカツグループホールディングス | [業務サーバー侵害で顧客情報が外部から閲覧可能に](../data/incidents/takakatsu-ransom-20260317.json) |
| 2026-03-17 | 多根総合病院 | [委託先が患者379人の診療情報を保存したUSBを紛失](../data/incidents/tane-hospital-usb-20260317.json) |
| 2026-03-18 | 広島銀行 | [保険会社出向者が被保険者88人の契約情報を出向元へ漏えい](../data/incidents/hirogin-metlife-20260318.json) |
| 2026-03-18 | 日本放送協会（NHK） | [作業申請システムのメール誤送信で32,940人のアドレスが相互表示](../data/incidents/nhk-system-mail-20260318.json) |
| 2026-03-19 | マツダ | [タイ調達部品の倉庫管理システムへの侵入で従業員等の情報に流出のおそれ](../data/incidents/mazda-thailand-warehouse-20260319.json) |
| 2026-03-19 | ホテル日航プリンセス京都 | [Expedia管理アカウントへの侵入で予約者情報が不正閲覧](../data/incidents/princess-kyoto-expedia-20260319.json) |
| 2026-03-19 | 株式会社積文館書店 | [教科書販売案内で顧客320人のメールアドレスを誤送信](../data/incidents/sekibunkan-mail-20260319.json) |
| 2026-03-20 | 都城市教育委員会／市内小学校 | [小学校教員が児童の前期成績を保存したUSBを紛失](../data/incidents/miyakonojo-school-usb-20260320.json) |
| 2026-03-23 | モリテックスチール株式会社 | [再委託先のサーバー侵害で受注備考欄等の個人情報に影響のおそれ](../data/incidents/molitec-subcontract-server-20260323.json) |
| 2026-03-23 | 佐田病院 | [看護師が入院患者1人のカルテ画像をSNSへ掲載](../data/incidents/sada-chart-sns-20260323.json) |
| 2026-03-24 | 株式会社サインド／BeautyMerit | [BeautyMeritへの攻撃で利用者情報に漏えいのおそれ](../data/incidents/cynd-beautymerit-20260324.json) |
| 2026-03-24 | 新潟大学 | [学生1,478人と保証人の情報を含む学籍シートを誤送信](../data/incidents/niigata-student-sheet-20260324.json) |
| 2026-03-25 | 新潟大学医歯学総合病院 | [暗号化されていないUSB紛失で最大116人の診療情報に影響](../data/incidents/niigata-hospital-usb-20260325.json) |
| 2026-03-26 | 株式会社ジョイフル／株式会社ザイナス | [委託先サーバー侵害で従業員・求職者・家族23,585人の情報に漏えいのおそれ](../data/incidents/joyfull-zynas-20260326.json) |
| 2026-03-27 | 福岡銀行 | [保険会社出向者が顧客1,052人の契約情報を出向元へ漏えい](../data/incidents/fukuokabank-metlife-20260327.json) |
| 2026-03-27 | 東京都障害者スポーツ協会 | [研修募集の公開ファイルに過去の申込者の個人情報が残存](../data/incidents/tsad-training-sheet-20260327.json) |
| 2026-03-27 | 株式会社ゼットン | [旧メールシステムへの侵入で顧客情報18,553件に流出のおそれ](../data/incidents/zetton-old-mail-20260327.json) |
| 2026-03-30 | 埼玉大学 | [特許管理システムの委託先侵害で発明者等1,516人の情報に影響](../data/incidents/saitama-univ-kempos-20260330.json) |
| 2026-03-30 | ヤマシタ | [福祉用具レンタルの委託先侵害で顧客情報に漏えいのおそれ](../data/incidents/yamashita-higashiyama-20260330.json) |
| 2026-03-31 | 日本コロムビア株式会社 | [前年のサーバー侵害で従業員・家族・関係先の情報に閲覧のおそれ](../data/incidents/columbia-network-20260331.json) |
| 2026-03-31 | 名古屋市／アスフィール株式会社 | [研修講師21人の情報を含むファイルを誤送信](../data/incidents/nagoya-asfeel-mail-20260331.json) |
| 2026-03-31 | 全国社会保険労務士会連合会／厚生労働省 | [セミナー参加者498人分の情報をクラウドで誤共有](../data/incidents/sharoushi-seminar-cloud-20260331.json) |

## 保留と調査範囲

- 今回の月別件数は掲載データの件数であり、日本国内の発生総数ではない。前回の合計38件は初回収集不足によるもので、月内全体の少なさを示さない。
- 探索記事のすべてについて一次資料の精査・採否確定を完了したものではない。新規掲載・既存補完と、取得しただけの探索行を区別して保存。
- リンク切れ、画像PDF、更新後本文しか残らない資料等の未解決候補を保留。探索索引の誤った組織名・日付は採用しない。
- 年内の全続報の追跡を保証しない。既存記録の後日の調査結果は保持した。スマレジとアプリ提供元は公表時点・集計範囲が異なるため双方の数を合算しない。

[採否・保留理由・探索行・出典の監査データ](../data/research-2026-q1-deep-review.json)
