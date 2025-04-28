# Youtube Music Downloader

Um projeto simples para baixar o áudio de vídeos do YouTube usando Node.js e Express.

## Funcionalidades

-   Baixar áudio de vídeos do YouTube em formato MP3
-   Interface web simples para inserir a URL do vídeo
-   API REST para download via requisição GET

## Tecnologias

-   Node.js
-   Express
-   [@distube/ytdl-core](https://www.npmjs.com/package/@distube/ytdl-core)

## Rotas

-   `GET /` — Página inicial com formulário para inserir a URL do YouTube
-   `GET /download?url=YOUTUBE_URL` — Faz o download do áudio do vídeo informado

## Como rodar

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/ytmusic-downloader.git
    cd ytmusic-downloader
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor:**

    ```bash
    npm run dev
    ```

    Ou:

    ```bash
    node src/index.js
    ```

4. **Acesse no navegador:**

    ```
    http://localhost:3000
    ```

## Licença

MIT
