# sample app

## 開発環境構築

### Node.js のセットアップ

好みの方法でインストールできればよい。
ここでは asdf-vm を使ったインストール手順を記載する。

https://asdf-vm.com/guide/getting-started.html
公式の Getting Start が Node.js を例に手順を書いているので、「4. Install a Plugin」まで完了したら下記を実行。

指定したバージョンの Node.js 環境がインストールされる。

```
asdf install nodejs 20.10.0
```

グローバルで利用するバージョンをインストールしたバージョンにセット。

```
asdf global nodejs 20.10.0
```

動作確認。

```
❯ node -v
v20.10.0
❯ npm -v
10.2.3
```

### Prettier/ESLint のセットアップ

ツール自体は npm パッケージに含まれるので、VSCode のエクステンションのインストールのみ。

- [VSCode の Prettier エクステンション](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [VSCode の ESLint エクステンション](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)



### Docker Desktop のセットアップ

ツールと VSCode のエクステンションをインストールする。

```
brew install --cask docker
```

[VSCode の docker エクステンション](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)


### hadolint のセットアップ

ツールと VSCode のエクステンションをインストールする。

```
brew install hadolint
```

[VSCode の hadolint エクステンション](https://marketplace.visualstudio.com/items?itemName=exiasr.hadolint)
