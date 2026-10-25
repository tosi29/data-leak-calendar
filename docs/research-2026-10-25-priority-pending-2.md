# 2026年10月25日：保留候補の追加10件調査

前回調査と重複しない10候補を確認。5件を新規掲載、1候補を掲載済み案件へ統合、4候補は保留継続。掲載960→965件、保留45→39候補。今日公表された5件という意味ではない。

| 対象 | 結果 | 出典 |
| --- | --- | --- |
| 日本テレネット | 6月12日公式原文を取得し掲載済み nippon-telenet-ransom-20260612 と同一事案と確認。対象期間が6月からに拡張済みのため、旧7・8月調査時の期間外懸念を解消。新規計上せず候補を統合。 | [資料1](https://www.nippon-tele.net/release/20260612_4675/) |
| 01銀行 | 8月27日公式PDFと公式ニュース一覧を再確認。顧客識別情報・メールアドレスの流出は確認済みだが、自然人の情報かは未特定。最大100社を個人情報件数・人数に換算せず保留。追加の調査結果は今回確認できず。 | [資料1](https://01bank.co.jp/news/pdf/2026/0827.pdf) / [資料2](https://01bank.co.jp/news/index.html) |
| 日本スウェージロックFST | 9月11日ScanNetSecurityの公開部分で8月26日発表と3月10日の攻撃を確認。リンク先の公式告知は404。個人情報漏えい等の可能性という告知名は確認できるが、従業員等の対象情報を原文で裏付けられず保留。 | [資料1](https://scan.netsecurity.ne.jp/article/2026/09/11/56209.html) / [資料2](https://www.japan.swagelok.com/whatsnew/notice-of-march-2026-cyber-incident) |
| 三井住友DSアセットマネジメント | 10月16日公式告知の本文を取得。取引委託先の不正アクセス検知による予防的停止と復旧を説明し、現時点で口座情報・取引への影響は未確認。個人情報流出の対象を示す新たな情報は得られず保留。 | [資料1](https://www.smd-am.co.jp/news/news/2026/news_20261016/) |
| 青森市（OPEN CITY AOMORI） | 公式本文と日付の裏付けを確認し掲載へ移行。JavaScript実行後の公式ページ本文で公表日と11件の対象を確認。添付ファイルの中身は含まれない。ページの共通メタデータにある2023年の日付を今回の公表日には使用しない。 | [資料1](https://opencityaomori.studio.site/contact-1) |
| 稲沢市 | 公式原文を確認。10月13日公表の住基ネットへのテストデータ217件の誤送信。カード等失効や他自治体への通知誤送信25件・3件があるが、テストデータに実在個人の情報がどの範囲で含まれるかは未特定。217件を個人情報流出件数としない。掲載済みのNET119（59件）とは別事案。 | [資料1](https://www.city.inazawa.aichi.jp/0000006084.html) / [資料2](https://www.city.inazawa.aichi.jp/0000006091.html) |
| 八戸地域広域市町村圏事務組合消防本部 | 公式本文と日付の裏付けを確認し掲載へ移行。初報の公表日は公式お知らせ一覧で10月15日と確認。PDFの発生日記載を公表日に転用しない。第2報は同一案件に追記し別件として計上しない。119RAIDENの調査中分は46人に含めない。 | [資料1](https://www.city.hachinohe.aomori.jp/section/koiki/shobo/about/pdf/NET119tyuuikanki.pdf) / [資料2](https://www.city.hachinohe.aomori.jp/section/koiki/shobo/news.html) / [資料3](https://www.city.hachinohe.aomori.jp/section/koiki/shobo/about/pdf/chuuikannki2.pdf) |
| 島根県警察 | 公式本文と日付の裏付けを確認し掲載へ移行。県公式新着一覧で10月15日公表を確認。サービス停止日の10月13日を公表日には使用しない。 | [資料1](https://www.pref.shimane.lg.jp/police/emergency/mikopiteishi.html) / [資料2](https://www1.pref.shimane.lg.jp/top_news.html) |
| 豊明市 | 公式本文と日付の裏付けを確認し掲載へ移行。公式検索収録本文と長寿課一覧で10月14日公表を確認。事業者からの連絡・登録者への配信日13日と区別。 | [資料1](https://www.city.toyoake.lg.jp/item/35428.htm) / [資料2](https://www.city.toyoake.lg.jp/1087.htm) |
| 今金町 | 公式本文と日付の裏付けを確認し掲載へ移行。公式一覧で初報10月14日、復旧告知16日を確認。停止13日・復旧15日と公表日を区別。サービス復旧を個人情報流出否定とは扱わない。 | [資料1](https://www.town.imakane.lg.jp/gyousei/gyousei_info/post_4953.html) / [資料2](https://www.town.imakane.lg.jp/gyousei/gyousei_info/) / [資料3](https://www.town.imakane.lg.jp/gyousei/gyousei_info/post_4956.html) |

## 集計上の注意

- 八戸NET119は初報15日と第2報23日を一件に統合。対象46人は公表内訳63−19＋2の算出値で、漏えい確認人数ではない。119RAIDEN調査中分は含まない。
- 稲沢市の保留URLはテストデータ誤送信。NET119の登録59件とは別件。NET119の公式告知を再発見したが既存掲載と照合して追加しなかった。
- 日本テレネットは6月12日公表分として掲載済み。同じ事案を7・8月分へ追加しない。
- 青森市はブラウザーでJavaScriptを実行して告知本文を確認。HTMLの共通メタデータの年月日から公表日を推測しない。
- 公式一覧で公表日を確認したのは八戸消防本部、島根県警、豊明市、今金町。発生日・停止日・復旧日とは区別する。
