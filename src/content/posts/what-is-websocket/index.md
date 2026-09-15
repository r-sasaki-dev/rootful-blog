---
title: "WebSocket とは"
published: 2026-09-07
draft: true
---

この記事で解決できるお悩み

- WebSocketって何？

- HTTPと何が違うの？

- ws・wssって見たことあるけど何？

こんな悩みを解決できます！

ライブストリーミングやIoTなど、リアルタイム性の高いアプリケーションを開発するためにWebSocketは欠かせません。  
この記事ではWebSocketとは何か？WebSocketの特徴など初心者にわかりやすく解説します！

## WebSocketとは？

一言で説明すると、リアルタイムなデータのやり取りに特化した通信方法です。

### クライアント・サーバー

WebSocketの説明を始める前に、インターネット通信に欠かせないクライアント・サーバーについて説明します。

インターネット通信は、クライアントとサーバーと呼ばれる機器の間で行われます。

我々がブラウザや動画を見るときに使うスマホやPCのように、**サービスや機能を利用する側の機器のことをクライアントと呼びます**。

一方で、Webページやアプリケーションなどのソースコードやデータを持ち、**クライアントにサービスや機能を提供する側の機器のことをサーバーと呼びます**。

今あなたこのページを見ているスマホやPCはクライアント、このページのHTMLファイルや画像ファイルなどを提供している機器がサーバーになります。

### WebSocketの必要性

インターネットにおける通信方法といえばHTTP（HyperText Transfer Protocol）があります。

昔はHTTPで十分対応できていたのですが、最近はチャットアプリやオンラインゲームなど、リアルタイム性の高いアプリケーションの需要が増えてきました。

そういった高頻度・高速な通信を求められるアプリケーションはHTTPで実現することは難しく、新たな通信方法が必要になりました。

そこで誕生したのがWebSocketです。

WebSocketを使用することでクライアント・サーバー間の通信を高速に行うことができます。

HTTPについてはこちらの記事で解説しています。

[HTTPとは？仕組み、HTTPSとの違いについてわかりやすく解説](/posts/what-is-http/)

## WebSocketの特徴

WebSocketの主な特徴を紹介します。

1. 双方向通信

3. フルデュプレックス通信

5. 低遅延

7. 効率的なリソース使用

9. HTTPとの比較

HTTPと比較しつつ、1つずつ解説していきます。

### 双方向通信

HTTPではクライアントから「◯◯のページが見たいです」「◯◯の機能を利用したいです」などのリクエストを送信し、そのリクエストに応えるレスポンスをサーバーが返す、という流れで通信が行われます。

つまりサーバー側から通信を始めることができません。

一方で、WebSocketの場合はクライアント、サーバーのどちらからでもデータ送信を行うことができます。

クライアント側とサーバー側でリアルタイムにチャットができるようなアプリケーションの場合、クライアント側だけではなくサーバー側からメッセージを送信することもあります。

そんな時も毎回クライアント側から通信を始めるのは非効率ですよね？

### フルデュプレックス通信

HTTPはその特性上、クライアントからのデータ送信とサーバーからのデータ送信を同時に行うことはできません。

### 低遅延

### 効率的なリソース使用

### HTTPとの比較

## WebSocket通信の流れ

WebSocketにおける通信の流れは下記になります。

1. コネクション確立（Opening Handshake）

3. データ送受信

5. コネクション切断（Closing Handshake）

それぞれについて詳しく解説します。

### コネクション確立（Opening Handshake）

まずは接続を確立しますが、この時使用するのはHTTPプロトコルです。

クライアントから「WebSocketの通信を開始したいです」という旨のリクエストを送信し、サーバーがそれに対してレスポンスを返すことでコネクションが確立されます。

実際に送信されるリクエスト・レスポンスについて説明します。

リクエスト・レスポンスって何？という方はこちらの記事を先に読むことをお勧めします。

[HTTPリクエスト・レスポンスとは？仕組みをわかりやすく解説](/posts/what-is-http-request-response/)

#### リクエスト

クライアントから送信されるリクエストの内容はこのようになっています。

GET /chat HTTP/1.1 Host: server.example.com Upgrade: websocket Connection: Upgrade Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ== Sec-WebSocket-Version: 13

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

WebSocket特有のヘッダについて説明します。

- Upgradeヘッダ  
    通信プロトコルをHTTPからWebSocketに変更するためのものです。

- Connectionヘッダ  
    Upgradeヘッダを指定する際に必須のものです。  
    おまじないのようなものと思って問題ないと思います。

- Sec-WebSocket-Keyヘッダ  
    クライアントとサーバー間での合言葉のようなものです。  
    リクエストを受け取ったサーバーが`Sec-WebSocket-Key`の値を元に新しい値を生成し、レスポンスに`Sec-WebSocket-Accept`ヘッダに付与して返します。  
    そうするとクライアントは`Sec-WebSocket-Key`の値と`Sec-WebSOcket-Accept`の値を比較して、自分のリクエストに対するレスポンスであることを確認することができます。

- Sec-WebSocket-Versionヘッダ  
    クライアントが対応しているWebSocketのバージョンです。  
    2025年5月現在、のWebSocketの最新バージョンである13を指定しています。

#### レスポンス

サーバーから送信されるレスポンスの内容はこのようになっています。

HTTP/1.1 101 OK Upgrade: websocket Connection: upgrade Sec-WebSocket-Accept: 7eQChgCtQMnVILefJAO6dK5JwPc=

```
HTTP/1.1 101 OK
Upgrade: websocket
Connection: upgrade
Sec-WebSocket-Accept: 7eQChgCtQMnVILefJAO6dK5JwPc=
```

リクエストの内容が問題なかった場合、ステータスコードとして`101`を返却します。

レスポンスヘッダについてはリクエストの項目でほとんど説明しましたが、改めて説明します。

- Upgradeヘッダ  
    リクエストと同じく、通信プロトコルをHTTPからWebSocketに変更するためのものです。

- Connectionヘッダ  
    リクエストと同じく、Upgradeヘッダを指定する際に指定します。

- Sec-WebSocket-Acceptヘッダ  
    リクエストで送られた`Sec-WebSocket-Key`ヘッダの値を元に生成した値が付与されます。

ステータスコードについてはこちらの記事で解説しています。

[HTTPステータスコードとは？意味と確認方法をわかりやすく解説](/posts/what-is-http-status-code/)

### データ送受信

### コネクション切断

## WebSocketの用途

## WSS（**WebSocket Secure**）とは

## まとめ

<<記事の内容を実践すれば悩みが解決することを再度伝える>>

最後にもう一度<<記事テーマ>>をまとめておきます。

<<読者にとってもらいたい行動>>

参考
