var Roblox = Roblox || {};
Roblox.LangDynamic = Roblox.LangDynamic || {};
Roblox.LangDynamic["Authentication.TwoStepVerification"] = {"Action.Cancel":"キャンセル","Action.Resend":"コードを再送信","Action.Verify":"確認","Label.EnterCode":"コードを入力 (6桁)","Label.EnterEmailCode":"今メールで送信したコードを入力してください。","Label.EnterTextCode":"今テキストメッセージで送信したコードを入力してください。","Label.TwoStepVerification":"2段階認証","Response.FeatureNotAvailable":"機能が利用できません。サポートまでご連絡ください。","Response.InvalidCode":"無効なコード。","Response.SystemErrorReturnToLogin":"システムエラー。ログイン画面にお戻りください。","Response.TooManyAttempts":"試行回数が多すぎます。後でもう一度お試しください。","Label.TrustThisDevice":"このデバイスを30日間信頼する","Response.CodeSent":"コードが送信されました","Label.RobloxSupport":"Robloxサポート","Label.EnterTwoStepVerificationCode":"二段階認証コードを入力してください。","Label.LearnMore":"もっと詳しく","Label.FacebookPasswordWarning":"Facebookでサインインしている場合には、パスワードの設定が必要です。","Action.Submit":"送信","Label.Code":"コード","Label.NewCode":"新しいコード","Label.NeedHelpContactSupport":"ヘルプが必要ですか？{supportLink}までお問い合わせください","Action.StartOver":"やり直す","Response.TooManyCharacters":"文字数が多すぎます","Label.CodeInputPlaceholderText":"{codeLength}桁のコードを入力してください","Description.TwoStepVerificationLoginEmail.Subject":"Robloxアカウントの認証コード: {accountName}","Description.TwoStepVerificationLoginEmail.PlainBody":"{geoLocationInformation}{accountName} さんのログインコード: {lineBreak}{lineBreak}{code}{lineBreak}{lineBreak}このコードを2段階認証画面に入力すればログインが完了します。コードは15分後に期限切れになります。{lineBreak}{lineBreak}アカウントが新しいブラウザ、またはデバイスからのRobloxへのログインに使用されたため、このメールをお送りしています。Robloxにログインしようとしていない場合はアカウントが不正にアクセスされている可能性があります。このリクエストに覚えがない場合はパスワードを変更することを強くおすすめします。{lineBreak}{lineBreak}リソース: {lineBreak}パスワードの変更 [{accountInfoPageLink}] {lineBreak}2段階認証について [{twoStepVerificationHelpArticleLink}]{lineBreak}アカウントを安全に保ち続けましょう [{keepAccountSafeArticleLink}] {lineBreak}Robloxに関する全般的なサポート [{supportPageLink}] {lineBreak}{lineBreak}よろしくお願いいたします。{lineBreak}{lineBreak}Robloxチーム","Description.TwoStepVerificationLoginEmail.HtmlBody":"{geoLocationInformation}{spanStartTagWithBold}{accountName} さんのログインコード: {lineBreak}{lineBreak}{code}{spanEndTag}{lineBreak}{lineBreak}このコードを2段階認証画面に入力すればログインが完了します。コードは15分後に期限切れになります。{lineBreak}{lineBreak}アカウントが新しいブラウザ、またはデバイスからのRobloxへのログインに使用されたため、このメールをお送りしています。Robloxにログインしようとしていない場合はアカウントは不正アクセスされている可能性があります。このリクエストに覚えが場合はパスワードを変更することを強くおすすめします。{lineBreak}{lineBreak}リソース: {lineBreak}{aTagStartWithHref}{ChangePasswordLink}{hrefEnd}パスワードの変更{aTagEnd}{lineBreak}{aTagStartWithHref}{TwoStepVerificationArticleLink}{hrefEnd}2段階認証について {aTagEnd}{lineBreak}{aTagStartWithHref}{AccountSafetyArticleLink}{hrefEnd}アカウントを安全に保ち続けましょう {aTagEnd}{lineBreak}{aTagStartWithHref}{SupportLink}{hrefEnd}Robloxに関する全般的なサポート{aTagEnd}{lineBreak}{lineBreak}よろしくお願いいたします。{lineBreak}{lineBreak}Robloxチーム","Description.TwoStepVerificationActivationEmail.Subject":"Robloxアカウントのメールによる2段階認証プロセスが有効化されました：{accountName}","Description.TwoStepVerificationDeactivationEmail.Subject":"Robloxアカウントのメールによる2段階認証プロセスが無効化されました：{accountName}","Description.TwoStepVerificationActivationEmail.Body.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName} のEメールによる2段階認証が有効化されました。ログインのような手続きの中には、RobloxからEメールでお送りしている6桁のセキュリティコードの入力が必要なものがあります。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationActivationEmail.Body.Over13":"こんにちは、{accountName}さん。{lineBreak}{lineBreak}お持ちのRobloxアカウントのEメールによる2段階認証が有効化されました。ログインのような手続きの中には、RobloxからEメールでお送りしている6桁のセキュリティコードの入力が必要なものがあります。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationDeactivationEmail.Body.Over13":"こんにちは、{accountName}さん。{lineBreak}{lineBreak}お持ちのRobloxアカウントのEメールによる2段階認証がオフになりました。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox がコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationDeactivationEmail.Body.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName}のEメールによる2段階認証がオフになりました。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox がコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationLoginEmail.Html.GeolocationInfo1":"{spanStartTagWithBold}{country}({ipAddress})の{region}に居住する{username} からログインリクエストを受けました。{spanEndTag}{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.Html.GeolocationInfo2":"{spanStartTagWithBold}{country}({ipAddress})に住む {username} さんからログインリクエストを受けました。{spanEndTag}{lineBreak}{lineBreak}\t","Description.TwoStepVerificationLoginEmail.Html.GeolocationInfo3":"{spanStartTagWithBold}{username} (Roblox内部)からログインリクエストを受けました。{spanEndTag}{lineBreak}{lineBreak}\t","Description.TwoStepVerificationLoginEmail.PlainText.GeolocationInfo1":" {country}の{region} ({ipAddress})に居住する{username} からログインリクエストを受けました。{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.PlainText.GeolocationInfo2":"({ipAddress})の{country}に居住する{username} からログインリクエストを受けました。{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.PlainText.GeolocationInfo3":"{username} (Roblox内部)からログインリクエストを受けました。{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.Html.GeolocationInfo4":"{spanStartTagWithBold}{country}に住む {username} さんからログインリクエストを受けました。{spanEndTag}{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.Html.GeolocationInfo5":"{spanStartTagWithBold}{country}、{region}に住む {username} さんからログインリクエストを受けました。{spanEndTag}{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.Html.GeolocationInfo6":"{spanStartTagWithBold}{country}、{region}、{city}に住む {username} さんからログインリクエストを受けました。{spanEndTag}{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.PlainText.GeolocationInfo4":"{country}に居住する{username} からログインリクエストを受けました。{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.PlainText.GeolocationInfo5":"{country}、{region}に居住する{username} からログインリクエストを受けました。{lineBreak}{lineBreak}","Description.TwoStepVerificationLoginEmail.PlainText.GeolocationInfo6":"{country}、{region}、{city}に居住する{username} からログインリクエストを受けました。{lineBreak}{lineBreak}","Label.DidNotReceive":"コードを受け取りませんでしたか？","Description.TwoStepVerificationLoginEmail.V2.Subject":"Robloxログインリクエスト: {accountName}","Description.TwoStepVerificationLoginEmail.V2.Header":"2段階認証コード: {code}","Description.TwoStepVerificationLoginEmail.V2.Body":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力してログインを完了してください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このログインリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有をすることなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Description.TwoStepVerificationLoginEmail.V2.Footer":"このメールには直接、返信しないでください。新しいブラウザかデバイスからRobloxへログインする試みがあったのでこのメールをお送りしています。もし、このリクエストを送信していない場合は、パスワードを変更することを強くおすすめします。","Description.TwoStepVerificationLoginEmail.V2.Links":"{aTagStartWithHref}{TwoStepVerificationArticleLink}{hrefEnd}もっと詳しく{aTagEnd} | {aTagStartWithHref}{AccountSafetyArticleLink}{hrefEnd}アカウントの安全{aTagEnd} | {aTagStartWithHref}{supportPageLink}{hrefEnd}サポート{aTagEnd}","Description":"不明","Description.UnknownLocation":"不明","Response.SessionExpiredReturnToLogin":"セッションの有効期限切れです。ログイン画面に戻って、もう一度お試しください。","Label.EmailMediaType":"Eメール","Label.AuthenticatorMediaType":"認証システム","Label.RecoveryCodeMediaType":"バックアップコード","Label.EnterAuthenticatorCode":"認証システムアプリによって生成されたコードを入力。","Label.EnterRecoveryCode":"前に保存したバックアップコードを入力。","Label.CharacterCodeInputPlaceholderText":"{codeLength} 文字のコードを入力","Label.ChooseAlternateMediaType":"他の認証方法を選ぶ。","Action.ChangeMediaType":"他の認証方法を使う","Description.TwoStepVerificationAuthenticatorActivationEmail.Body.Over13":"こんにちは、{accountName}さん。{lineBreak}{lineBreak}お持ちのRobloxアカウントの認証アプリによる2段階認証が有効化されました。ログインのような手続きの中には、認証アプリから送信される6桁のセキュリティコードの入力が必要なものがあります。{lineBreak}{lineBreak}認証アプリにアクセスできないときのために、バックアップコードを保存しておくのをお忘れなく。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox がコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationAuthenticatorActivationEmail.Body.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName} の認証アプリによる2段階認証が有効化されました。ログインのような手続きの中には、認証アプリから送信される6桁のセキュリティコードの入力が必要なものがあります。{lineBreak}{lineBreak}認証アプリにアクセスできないときのために、バックアップコードを保存しておくのをお忘れなく。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationAuthenticatorActivationEmail.Subject":"Robloxアカウントの認証システムによる2段階認証プロセスが有効化されました：{accountName}","Description.TwoStepVerificationAuthenticatorDeactivationEmail.Body.Over13":"こんにちは、{accountName}さん。{lineBreak}{lineBreak}お持ちのRobloxアカウントの認証アプリによる2段階認証がオフになりました。ログインのような手続きには、認証アプリからのセキュリティコードが必要なくなったものがあります。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationAuthenticatorDeactivationEmail.Body.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName}の認証アプリによる2段階認証がオフになりました。ログインのような手続きの中には、認証アプリからのセキュリティコードが必要なくなったものがあります。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox がコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationAuthenticatorDeactivationEmail.Subject":"Robloxアカウントの認証システムによる2段階認証プロセスが無効化されました：{accountName}","Description.TwoStepVerificationAuthenticatorCustomerSupportDeactivationEmail.Body.Over13":"こんにちは、 {accountName}さん。{lineBreak}{lineBreak}当社のサポートチームが、お持ちのRobloxアカウントの認証システムを使った2段階認証を無効化したのでお知らせいたします。これは通常、送信頂いたサポートチケットがあるか、お持ちのアカウントのセキュリティを確保するために行っています。ログインなど一部の動作には、認証システムアプリからのセキュリティコードが不要になります。2段階認証は {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd}で再有効化できます。{lineBreak}{lineBreak}さらにヘルプが必要な場合は、 {spanStartTagWithBold}このメールには返信せず{spanEndTag}、既存のサポートチケットに返信するか新しいサポートリクエストをこちらに送信してください: {aTagStartWithHref}{supportPageLink}{hrefEnd}Robloxサポート{aTagEnd}。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox がコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationAuthenticatorCustomerSupportDeactivationEmail.Body.Under13":"こんにちは。{lineBreak}{lineBreak}当社のサポートチームが、お子様のRobloxアカウント、{accountName} の認証アプリを使った2段階認証を無効化したのでお知らせいたします。これは通常、送信頂いたサポートチケットがあるか、アカウントのセキュリティを確保するために行っています。ログインなど一部の動作には、認証アプリからのセキュリティコードが不要になります。2段階認証は {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd} で再有効化できます。{lineBreak}{lineBreak}さらにヘルプが必要な場合は、 {spanStartTagWithBold}このメールには返信せず{spanEndTag} 、既存のサポートチケットに返信するか新しいサポートリクエストをこちらに送信してください: {aTagStartWithHref}{supportPageLink}{hrefEnd}Robloxサポート{aTagEnd}。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox がコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、アカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationAuthenticatorCustomerSupportDeactivationEmail.Subject":"Robloxアカウントの認証システムによる2段階認証プロセスがRobloxサポートによって無効化されました：{accountName}","Description.TwoStepVerificationCustomerSupportDeactivationEmail.HtmlBody.Over13":"こんにちは、 {accountName}さん。{lineBreak}{lineBreak}当社のサポートチームが、お持ちのRobloxアカウントのメールアドレスを使った2段階認証を無効化したのでお知らせいたします。これは通常、送信頂いたサポートチケットがあるか、お持ちのアカウントのセキュリティを確保するために行っています。ログインなど一部の動作には、セキュリティコードが不要になります。2段階認証は {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd}で再有効化できます。{lineBreak}{lineBreak}さらにヘルプが必要な場合は、 {spanStartTagWithBold}このメールには返信せず{spanEndTag}、既存のサポートチケットに返信するか新しいサポートリクエストをこちらに送信してください: {aTagStartWithHref}{supportPageLink}{hrefEnd}Robloxサポート{aTagEnd}。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox がコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationCustomerSupportDeactivationEmail.HtmlBody.Under13":"こんにちは。{lineBreak}{lineBreak}当社のサポートチームが、お子様のRobloxアカウント、{accountName} のメールアドレスを使った2段階認証を無効化したのでお知らせいたします。これは通常、送信頂いたサポートチケットがあるか、アカウントのセキュリティを確保するために行っています。ログインなど一部の動作には、セキュリティコードが不要になります。2段階認証は {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd} で再有効化できます。{lineBreak}{lineBreak}さらにヘルプが必要な場合は、 {spanStartTagWithBold}このメールには返信せず{spanEndTag} 、既存のサポートチケットに返信するか新しいサポートリクエストをこちらに送信してください: {aTagStartWithHref}{supportPageLink}{hrefEnd}Robloxサポート{aTagEnd}。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox がコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、アカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationCustomerSupportDeactivationEmail.Subject":"メールによる2段階認証プロセスがRobloxサポートによって無効化されました: {accountName}","Description.TwoStepVerificationRecoveryCodeDepletedEmail.HtmlBody.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName} の有効なバックアップコードはすべて使用済みになっています。アカウントからロックアウトされることを防ぐには、 {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd}で新しいバックアップコードを作成できます。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationRecoveryCodeDepletedEmail.HtmlBody.Over13":"{accountName}さん、こんにちは。{lineBreak}{lineBreak}現在、有効なバックアップコードがすべて使用済みになっています。アカウントからロックアウトされることを防ぐには、 {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd} で新しいバックアップコードを作成できます。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationRecoveryCodeDepletedEmail.Subject":"Robloxアカウントのバックアップコードが残っていません: {accountName}","Description.TwoStepVerificationRobuxSpendEmail.V2.Subject":"Robloxバーチャル購入認証リクエスト: {accountName}","Description.TwoStepVerificationRobuxSpendEmail.HtmlBody":"{geoLocationInformation}{spanStartTagWithBold}{accountName}さんのバーチャル取引コード: {lineBreak}{lineBreak}{code}{spanEndTag}{lineBreak}{lineBreak}このコードを2段階認証画面に入力してバーチャル取引を完了してください。コードは15分後に期限切れになります。{lineBreak}{lineBreak}お持ちのアカウントのアクティビティに基づいて警告が発されたため、このメールをお送りしています。Roblox上で取引しようとしていない場合はアカウントに不正アクセスしようとしている人がいる可能性があります。このリクエストに覚えが場合はパスワードを変更することを強くおすすめします。{lineBreak}{lineBreak}リソース: {lineBreak}{aTagStartWithHref}{ChangePasswordLink}{hrefEnd}パスワードの変更{aTagEnd}{lineBreak}{aTagStartWithHref}{TwoStepVerificationArticleLink}{hrefEnd}2段階認証について {aTagEnd}{lineBreak}{aTagStartWithHref}{AccountSafetyArticleLink}{hrefEnd}アカウントを安全に保ち続けましょう {aTagEnd}{lineBreak}{aTagStartWithHref}{SupportLink}{hrefEnd}Robloxに関する全般的なサポート{aTagEnd}{lineBreak}{lineBreak}よろしくお願いいたします。{lineBreak}{lineBreak}Robloxチーム","Description.TwoStepVerificationRobuxSpendEmail.PlainBody":"{geoLocationInformation}{accountName} さんのバーチャル取引コード: {lineBreak}{lineBreak} \n{code}{lineBreak}{lineBreak}このコードを2段階認証画面に入力してバーチャル取引を完了してください。コードは15分後に期限切れになります。{lineBreak}{lineBreak}お持ちのアカウントのアクティビティに基づいて警告が発されたため、このメールをお送りしています。Roblox上で取引しようとしていない場合はアカウントが不正にアクセスされている可能性があります。このリクエストに覚えがない場合はパスワードを変更することを強くおすすめします。{lineBreak}{lineBreak}リソース: {lineBreak}パスワードの変更 [{accountInfoPageLink}] {lineBreak}2段階認証について [{twoStepVerificationHelpArticleLink}]{lineBreak}アカウントを安全に保ち続けましょう [{keepAccountSafeArticleLink}] {lineBreak}Robloxに関する全般的なサポート [{supportPageLink}] {lineBreak}{lineBreak}よろしくお願いいたします。{lineBreak}{lineBreak}Robloxチーム","Description.TwoStepVerificationRobxSpendEmail.V2.Body":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox用の2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力してバーチャル取引の認証を完了してください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有をすることなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Description.TwoStepVerificationRobuxSpendEmail.V2.Footer":"このメールには直接、返信しないでください。Robloxのバーチャル取引アクティビティの取引件数が増加したためこのメールをお送りしています。もし、このリクエストを送信していない場合は、パスワードを変更することを強くおすすめします。","Description.TwoStepVerificationRobuxSpendEmail.V2.Bod":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力してバーチャル取引の認証を完了してください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有をすることなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Description.Footer.GeneratedBy":"このメッセージは、{environmentIdentifier} によって生成されています。","Response.SuccessfulVerification":"認証できました！","Response.InvalidCodeTryAgain":"コードが無効です。もう一度お試しください。","Response.VerificationError":"認証中にシステムエラーが発生しました。","Message.RobuxSpendTwoStepVerificationRequired":"さらに取引をするには2段階認証が必要です。","Description.TwoStepVerificationRobuxSpendEmail.V2.Body":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox用の2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力してバーチャル取引の認証を完了してください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有をすることなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Response.SuccessfulVerificationV2":"認証できました！前の動作を再試行してください。","Message.RobuxSpendTwoStepVerificationRequiredV2":"続けるには、前の動作の認証が必要です。","Response.SystemErrorSwitchingToEmail":"Eメールコードの送信エラーです。他の認証方法をお使い頂くか、後でもう一度お試しください。","Message.VerificationRequiredForAction":"この動作を実行するには認証が必要です。","Heading.VerifyAccount":"アカウントを認証","Response.DefaultError":"エラーが発生しました。もう一度お試しください。","Response.SessionExpired":"セッションの有効期限が切れました。もう一度お試しください。","Action.Reload":"再読み込み","Description.TwoStepVerificationItemTradeEmail.V2.Body":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力して取引の認証を完了してください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有をすることなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Description.TwoStepVerificationItemTradeEmail.V2.Subject":"Roblox取引認証リクエスト: {accountName}","Description.TwoStepVerificationItemTradeEmail.V2.Footer":"このメールには直接、返信しないでください。Robloxの取引アクティビティの取引件数が増加したためこのメールをお送りしています。もし、このリクエストを送信していない場合は、パスワードを変更することを強くおすすめします。","Description.TwoStepVerificationResaleEmail.V1.Subject":"Roblox再販認証リクエスト: {accountName}","Description.TwoStepVerificationResaleEmail.V1.Footer":"このメールには直接、返信しないでください。再販アクティビティの件数が増加したためこのメールをお送りしています。もし、このリクエストを送信していない場合は、パスワードを変更することを強くおすすめします。","Description.TwoStepVerificationResaleEmail.V1.Body":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力して再販売の認証を完了してください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有をすることなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Description.TwoStepVerificationPasswordResetEmail.V1.Body":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox用の2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力してパスワードのリセットを続行してください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Description.TwoStepVerificationPasswordResetEmail.V1.Footer":"このメールに直接返信しないでください。パスワードをリセットしようとしたため、このメールをお送りしています。","Description.TwoStepVerificationPasswordResetEmail.V1.Subject":"Robloxパスワードのリセットリクエスト: {accountName}","Description.TwoStepVerificationSMSLogin.Body":"{accountName} さんのRobloxの２段階認証: {code} を入力してアカウントを認証してください","Description.TwoStepVerificationSMSActivationText.Body":"{accountName} さんのRobloxの2段階認証: {code} を入力して2段階認証を有効化してください。","Description.TwoStepVerificationSMSDeactivationText.Body":"{accountName} さんの Robloxの2段階認証を無効にしました。","Description.TwoStepVerificationSMSCustomerSupportDeactivationText.Body":"カスタマーサポートがあなたのRobloxアカウントの2段階認証を無効にしました。これは通常、カスタマーサポート案件が提出されたか、アカウントの安全性を確保するためのセキュリティ対策として行われます。ショートメッセージ（SMS）からのセキュリティコードはログインのような一部の動作には必要なくなります。2段階認証は、アカウント設定の「セキュリティ」でまた有効化できます。","Description.TwoStepVerificationSMSRecoveryCodeDepletedText":"お持ちのRobloxアカウントには2段階認証アカウント用バックアップコードが残っていません。アカウントの復元にヘルプが必要な場合は、カスタマーサポートにお問い合わせください。","Description.TwoStepVerificationSMSEnabledText.Body":"{accountName} のRobloxの2段階認証が有効になりました。","Label.SmsMediaType":"ショートメッセージ（SMS）","Description.TwoStepVerificationRevertAccountEmail.V1.Body":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox用の2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力してアカウントへの変更内容を元に戻す手続きを続けてください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Description.TwoStepVerificationRevertAccountEmail.V1.Footer":"このメールに直接、返信しないでください。お持ちのアカウントへの変更内容を元に戻そうとしたため、このメールをお送りしています。","Description.TwoStepVerificationRevertAccountEmail.V1.Subject":"Robloxアカウント復元リクエスト: {accountName}","Description.TwoStepVerificationActivationText.Body.Over13":"こんにちは、{accountName}さん。{lineBreak}{lineBreak}お持ちのRobloxアカウントのショートメッセージによる2段階認証が有効化されました。ログインのような動作の一部には、Robloxからショートメッセージにお送りしている6桁のセキュリティコードの入力が必要です。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationActivationSMS.Body.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName} のショートメッセージ（SMS）による2段階認証が有効化されました。ログインのような動作の一部には、Robloxからショートメッセージでお送りしている6桁のセキュリティコードの入力が必要です。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationActivationText.Body.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName} のショートメッセージによる2段階認証が有効化されました。ログインのような動作の一部には、Robloxからショートメッセージでお送りしている6桁のセキュリティコードの入力が必要です。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationActivationText.Subject":"Robloxアカウントのショートメッセージ（SMS）による2段階認証プロセスが有効化されました：{accountName}","Description.TwoStepVerificationCustomerSupportDeactivationText.Subject":"ショートメッセージ（SMS）による2段階認証がRobloxサポートによって無効化されました：{accountName}","Description.TwoStepVerificationDeactivationText.Body.Over13":"こんにちは、{accountName}さん。{lineBreak}{lineBreak}お持ちのRobloxアカウントのショートメッセージによる2段階認証がオフになりました。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationDeactivationText.Body.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName} のショートメッセージによる2段階認証がオフになりました。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationDeactivationText.Subject":"Robloxアカウントのショートメッセージ（SMS）による2段階認証プロセスが有効になりました：{accountName}","Description.TwoStepVerificationCustomerSupportDeactivationText.HtmlBody.Over13":"こんにちは、 {accountName}さん。{lineBreak}{lineBreak}当社のサポートチームが、お持ちのRobloxアカウントのショートメッセージを使った2段階認証を無効化したのでお知らせいたします。これは通常、送信頂いたサポートチケットがあるか、お持ちのアカウントのセキュリティを確保するために行っています。ログインなど一部の動作には、セキュリティコードが不要になります。2段階認証は {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd} で再有効化できます。{lineBreak}{lineBreak}さらにヘルプが必要な場合は、 {spanStartTagWithBold}このメールには返信せず{spanEndTag} 、既存のサポートチケットに返信するか新しいサポートリクエストをこちらに送信してください: {aTagStartWithHref}{supportPageLink}{hrefEnd}Robloxサポート{aTagEnd}。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationCustomerSupportDeactivationText.HtmlBody.Under13":"こんにちは。{lineBreak}{lineBreak}当社のサポートチームが、お子様のRobloxアカウント、{accountName} のショートメッセージを使った2段階認証を無効化したのでお知らせいたします。これは通常、送信頂いたサポートチケットがあるか、アカウントのセキュリティを確保するために行っています。ログインなど一部の動作には、セキュリティコードが不要になります。2段階認証は {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd}で再有効化できます。{lineBreak}{lineBreak}さらにヘルプが必要な場合は、 {spanStartTagWithBold}このメールには返信せず{spanEndTag} 、既存のサポートチケットに返信するか新しいサポートリクエストをこちらに送信してください: {aTagStartWithHref}{supportPageLink}{hrefEnd}Robloxサポート{aTagEnd}。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、アカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationSwap.Subject":"{accountName} の2段階認証の変更","Description.TwoStepVerificationSwap.Body.Over13":"こんにちは。{lineBreak}{lineBreak} {accountName} のアカウントの2段階認証の方法が {disabledTwoStepMethod} から {enabledTwoStepMethod}に変更されました。このリクエストをしていない場合は、ただちにカスタマーサポートに連絡して、お持ちのアカウントを回復してください。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}ありがとうございました。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationSwap.Body.Under13":"こんにちは。{lineBreak}{lineBreak} お子様のアカウント、{accountName} の2段階認証の方法が {disabledTwoStepMethod} から {enabledTwoStepMethod}に変更されました。あなたかお子様がこのリクエストをしていない場合は、ただちにカスタマーサポートに連絡して、お子様のアカウントを回復してください。{lineBreak}{lineBreak}重要: セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{lineBreak}{lineBreak}ありがとうございました。{lineBreak}{lineBreak}Robloxより","Label.VerifyWithSecurityKey":"セキュリティキーを使用してログインしてください。","Label.SecurityKeyMediaType":"セキュリティキー","Label.UseSecurityKey":"セキュリティキーを使ってログインしてください。{lineBreak}セキュリティキーをタッチするか、このデバイスでバイオメトリック認証を使用してください。","Description.TwoStepVerificationGenericEmail.V1.Subject":"Roblox2段階認証: {accountName}","Description.TwoStepVerificationGenericEmail.V1.Footer":"このメールに直接返信しないでください。リクエストした内容を完了するには、2段階認証が必要なため、このメールをお送りしています。","Description.TwoStepVerificationGenericEmail.V1.Body":"{paragraphStart}こんにちは。{paragraphEnd}{paragraphStart}{emphasisStart}{accountName}{emphasisEnd} のRoblox用の2段階認証コードは、{emphasisStart}{code}{emphasisEnd} です。{paragraphEnd}{paragraphStart}2段階認証画面に上記のコードを入力して手続きを完了してください。このコードは、15分後まで有効です。{paragraphEnd}{paragraphStart}このリクエストは {emphasisStart}{geoLocationInformation}{emphasisEnd}から発信されています。{paragraphEnd}{paragraphStart}重要: セキュリティコードは誰にも教えないでください。また、Robloxのほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有をすることなども含まれます。誰かとセキュリティコードを共有してしまうと、お持ちのアカウントとコンテンツが高いリスクに晒されることになります。{paragraphEnd}{lineBreak}{paragraphStart}ありがとうございました。{lineBreak}{emphasisStart}Roblox チームより{emphasisEnd}{paragraphEnd}","Label.SecurityKeyDirections":"プロンプトが表示されたら、キーをタッチするか、このデバイスでバイオメトリクス認証を使用してください。","Description.TwoStepVerificationActivationSecurityKey.Body.Over13":"{accountName}さん、こんにちは。{lineBreak}{lineBreak}Robloxアカウントのセキュリティキーによる2段階認証が有効になりました。ログインなど一部の動作には、セキュリティキーが必要となります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationActivationSecurityKey.EmailSubject":"Robloxアカウントのセキュリティキーによる2段階認証が有効になりました：{accountName}","Description.TwoStepVerificationActivationSecurityKey.Body.Under13":"こんにちは。{lineBreak}{lineBreak}お子様のRobloxアカウント、{accountName}のセキュリティキーによる2段階認証が有効になりました。 お子様がログインする時など一部の動作には、セキュリティキーが必要となります。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationCustomerSupportDeactivationSecurityKey.Subject":"セキュリティキーによる2段階認証がRobloxサポートによって無効にされました：{accountName}","Description.TwoStepVerificationCustomerSupportDeactivationSecurityKey.HtmlBody.Over13":"こんにちは {accountName}さん。{lineBreak}{lineBreak}このメッセージで当社のサポートチームによりお持ちのRobloxアカウントのセキュリティキーによる2段階認証が無効になったのでお知らせいたします。これは通常、送信頂いたサポートチケットがあるか、お持ちのアカウントの安全を確保するために行っています。ログインなど一部の動作には、セキュリティキーが不要になります。2段階認証は {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd}でまた有効にできます。{lineBreak}{lineBreak}さらにヘルプが必要な場合は、 {spanStartTagWithBold}このメールには返信せず{spanEndTag}、既存のサポートチケットに返信するか新しいサポートリクエストをこちらに送信してください: {aTagStartWithHref}{supportPageLink}{hrefEnd}Robloxサポート{aTagEnd}。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationCustomerSupportDeactivationSecurityKey.HtmlBody.Under13":"こんにちは {accountName}さん。{lineBreak}{lineBreak}このメッセージで当社のサポートチームによりお子様のRobloxアカウントのセキュリティキーによる2段階認証が無効になったことをお知らせいたします。これは通常、送信頂いたサポートチケットがあるか、お子様のアカウントの安全を確保するために行っています。お子様がログインする時など一部の動作には、セキュリティキーが不要となります。2段階認証は {aTagStartWithHref}{AccountSettingsPageLink}{hrefEnd}アカウント設定{aTagEnd}でまた有効にできます。{lineBreak}{lineBreak}さらにヘルプが必要な場合は、 {spanStartTagWithBold}このメールには返信せず{spanEndTag}、既存のサポートチケットに返信するか新しいサポートリクエストをこちらに送信してください: {aTagStartWithHref}{supportPageLink}{hrefEnd}Robloxサポート{aTagEnd}。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationDeactivationSecurityKey.Subject":"Robloxアカウントのセキュリティキーによる2段階認証が無効になりました：{accountName}","Description.TwoStepVerificationDeactivationSecurityKey.Body.Over13":"こんにちは、 {accountName}さん。{lineBreak}{lineBreak} お持ちのRobloxアカウントでセキュリティーキーによる2段階認証が無効になりました。{lineBreak}{lineBreak}Robloxより","Description.TwoStepVerificationDeactivationSecurityKey.Body.Under13":"こんにちは。{lineBreak}{lineBreak} お子様のRobloxアカウント、{accountName} のセキュリティキーによる2段階認証が無効になりました。{lineBreak}{lineBreak}Robloxより","Description.SecurityWarningShort":"{boldStart}重要：{boldEnd} セキュリティコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。","Description.SecurityWarningShortBackupCodes":"{boldStart}重要：{boldEnd} バックアップコードは誰にも教えないようにしてください。Roblox のほうからコードを聞き出すことはありません。これには、コードをショートメッセージで送信するように言ったり、画面共有を要求することなども含まれます。","Response.AuthenticatorCodeAlreadyUsed":"このコードはすでに使用済みです。新しいコードを入力してください。","Action.Retry":"やり直す","Label.ApproveWithDevice":"この試みを承認または拒否するには、ログインしたモバイルまたはタブレットのデバイスからRobloxアプリを開きます。","Label.NewLogin":"新しいログインの試行","Label.UseYourDevice":"デバイスの使用","Description.LoginDenied":"ログインの試みが却下されました。間違いがあった場合は、もう一度お試しください。","Header.LoginDenied":"ログインできませんでした","Description.LoginExpired":"ログイン試行の有効期限が切れています。","Heading.LoginError":"ログインできません","Action.Okay":"了解","HelpCenterLink":"ヘルプが必要ですか？ {helpCenterLink} にアクセスしてください","Label.HelpCenterLink":"ヘルプが必要ですか？ {helpCenterLink} にアクセスしてください","Label.HelpCenter":"ヘルプセンター","Heading.LoginDenied":"ログインできませんでした"};
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("DynamicLocalizationResourceScript_Authentication.TwoStepVerification");
