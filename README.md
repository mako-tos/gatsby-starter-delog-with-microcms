# Delog - Blog for Developer and Designer
このプログラムは [W3Layouts](https://w3layouts.com)様の[Delog](https://delog-w3layouts.netlify.com/)を基に作成しています
変更点は日本人に使いやすいようにCMSをnetlifyCMSからmicroCMSを使うように変更しています

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mako-tos/gatsby-starter-delog-with-microcms)

ローカルにインストールする方法 [NodeJS と GatsbyJS がインストールされている前提](https://www.gatsbyjs.org/tutorial/part-zero/))
```bash
gatsby new delog https://github.com/mako-tos/gatsby-starter-delog-with-microcms
```

## Features
- Built with GatsbyJS and microCMS
- Option to Add, Edit, Update and Delete posts via microCMS
- SEO friendly - Option to Add meta description
- In-built contact form powered by netlify
- Comes with dark mode

---

## Documentation
[microCMSのはじめ方](https://microcms.io/blog/getting-started/)を読んでmicroCMSのアカウントを作成してください  
またAPIスキーマ（インターフェース）を  
/microcms/api-blog.json  
としてエクスポートしておきましたのでAPIスキーマ定義でご活用ください。  

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mako-tos/gatsby-starter-delog-with-microcms)を押して作成されたサイトに環境変数を入力します

[ここ](https://mottox2.com/posts/280)を参考にして環境変数をnetlifyに設定してください
- 「MICRO_CMS_API_KEY」にmicroCMSのX-API-KEY
- 「MICRO_CMS_SERVICE_ID」にmicroCMSのservice id
- 「MICRO_CMS_ENDPOINT」にmicroCMSのendpoint
- 「GOOGLE_ANALYTICS」にgoogle analyticsのトラッキング ID

を設定してください  
NetlifyとmicroCMSのWebhookを設定すると快適になると思います  


microCMSの画面プレビューを利用するは  
https://your-site-name.netlify.app/draft?contentId={CONTENT_ID}&draftKey={DRAFT_KEY}  
のように登録してください  

またdraft画面はnetlify identityでパスワード認証を設定していますので https://app.netlify.com/sites/your-site-name/identity にアクセスして認証とアクティベーションをしてください

## Credits
- Awesome image used in demo is from [Unsplash](https://unsplash.com)
- CSS and SVG Icons by [CSS.gg](https://css.gg)

---

### [1.0.0] - 2020-05-24
#### Lunch
- [Delog](https://delog-w3layouts.netlify.com/)を基にしてmicroCMSを使えるようにした
