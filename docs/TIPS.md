# TIPS

仕様や機能に関することは Confluence に残す。
ここでは、開発環境やリポジトリ、実装内容などに関する技術的な補足説明を記載する。
のちに Confluence なり Jira なりで管理してもいいと思うが、一旦現状はリポジトリの中にまとめておく。

## ts-node で tsconfig の extends 周りが不安定

- typescript とのバージョン組み合わせによって node_modules を見に行ってくれない
  - https://github.com/TypeStrong/ts-node/issues/2076
- 複数ベースコンフィグを extends に定義するとエラーになる
  - https://github.com/TypeStrong/ts-node/issues/2000

一時的な回避策として ts-node 用の tsconfig (`tsconfig.tsnode.json`) を作成して、直接読み込ませる方式が提案されていたので採用する。

## Express の Request.body や Request.params に型を付与する

https://zenn.dev/yhase_rqp/articles/3a89c0354061c2#%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%81%AE%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%82%92%E9%81%A9%E7%94%A8%E3%81%97%E3%82%88%E3%81%86


## VSCode の Prettier が ignore 系ファイルのフォーマットに失敗する

https://github.com/prettier/prettier-vscode/issues/3063

一旦 ignore 系のファイルだけ自動フォーマットしないように defaultFormatter に null を指定しておく。
