<div align="center">
    <img src="./assets/images/menu.png" width="500">
</div>

<br />

<div align="center">
    <a href="https://github.com/guiireal/lite-bot">
        <img alt="Version" src="https://img.shields.io/badge/Vers%C3%A3o-1.0.1-blue">
    </a>
</div>

<br />

# Bot de WhatsApp minimalista multifunções

## Tecnologias Agregadas 

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Baileys](https://github.com/WhiskeySockets/Baileys)
- [FFMPEG](https://ffmpeg.org/)
- [Herc.ai](https://www.npmjs.com/package/hercai)
- [Node.js 20.17.0](https://nodejs.org/en)
- [Spider X API](https://api.spiderx.com.br)
- [Yarn 1.22.22](https://yarnpkg.com)

## ⚠ Atenção


## Instalación en termux! <a id="termux-setup"></a>

1 - Ara termux y ejecute, ¿no tiene termux? [Aca esta!](https://www.mediafire.com/file/082otphidepx7aq/Termux_0.119.1_aldebaran_dev.apk)._

2 - Ingrese:

```sh
termux-setup-storage
```

Acepte los permisos!.

3 - Ingrese el siguiente código! :

```sh
pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs-lts -y && pkg install ffmpeg -y && npm install -g yarn
```

4 - Ahora, ingrese lo siguiente:

```sh
cd /sdcard && git clone https://github.com/guiireal/lite-bot.git && cd ./lite-bot
```

5 - Configure el archivo `config.js`. en `/sdcard/lite-bot`.
_Use [MT Manager](https://www.mediafire.com/file/y09xgucgygmt1ny/MT_Manager_2.16.7_Dev_Gui.apk/file) o [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver&hl=pt_BR) .
```js
// Prefixo dos comandos
exports.PREFIX = ".";

// Emoji do bot (mude se preferir).
exports.BOT_EMOJI = "💙";

// Nome do bot (mude se preferir).
exports.BOT_NAME = "MLS BOT";

// Número do bot. Coloque o número do bot (apenas números).
exports.BOT_NUMBER = "571234567899";

// Número do dono do bot. Coloque o número do dono do bot (apenas números).
exports.OWNER_NUMBER = "573999999999";
```
6 - Guarde.

7 - Ahora en termux `/sdcard/lite-bot`.

8 - inicie usando `yarn start` o `npm start` e ingrese su número de telefono

9 - Coloque el codigo en "dispositivos conectados" en WhatsApp.

10 - Aguarde 10 segundos, depues digite `CTRL + C` 2x para parar el bot.

11 - Inicie o bot nuevamente, dentro da pasta `lite-bot`:
```sh
yarn start
```

o

```sh
npm start
```

## Alguns comandos necessitam de API

Edite a linha `34` do arquivo `config.js` e cole sua api key da plataforma Spider X API.<br/>
Para obter seu token, acesse: [https://api.spiderx.com.br](https://api.spiderx.com.br) e crie sua conta gratuitamente!

```js
exports.SPIDER_API_TOKEN = "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";
```
## Funcionalidades

| Função | Online? | Contexto | Requer a Spider X API?
| ------------ | --- | --- | ---
| Desligar o bot no grupo | ✅ | Dono | ❌
| Ligar o bot no grupo | ✅ | Dono | ❌
| Anti link | ✅ | Admin | ❌
| Banir membros | ✅ | Admin | ❌
| Ligar/desligar boas vindas | ✅ | Admin | ❌
| Marcar todos | ✅ | Admin | ❌
| Busca CEP | ✅ | Membro | ❌
| Figurinha de texto animada | ✅ | Membro | ✅
| Geração de imagens com IA | ✅ | Membro | ❌
| GPT 4 | ✅ | Membro | ✅
| Ping | ✅ | Membro | ❌
| Play áudio | ✅ | Membro | ✅
| Play vídeo | ✅ | Membro | ✅
| Sticker | ✅ | Membro | ❌

## Erros comuns

### Causa: Permission denied (permissão negada) ao acessar `cd /sdcard`

<br/>

<div align="center">
    <img src="./assets/images/erros-comuns-1.png" width="500">
</div>


### Solução: abra o termux, digite `termux-setup-storage` e depois, aceite as permissões

## Inscreva-se no canal!

<a href="https://www.youtube.com/@devgui_?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"></a>

## Licença

[GPL-3.0](https://github.com/guiireal/lite-bot/blob/main/LICENSE)

Este projeto está licenciado sob a Licença Pública Geral GNU (GPL-3.0).<br/>
Isso significa que:

- Você pode usar este código como quiser, seja para projetos pessoais ou comerciais.
- Você pode modificar o código para adaptá-lo às suas necessidades.
- Você pode compartilhar ou vender o código, mesmo modificado, mas precisa:
- Manter os créditos ao autor original (Guilherme França - Dev Gui).
- Tornar o código modificado disponível sob a mesma licença GPL-3.0.

O que você não pode fazer:

- Não pode transformar este código em algo proprietário (fechado) e impedir outras pessoas de acessá-lo ou usá-lo.
Esta licença garante que todos tenham acesso ao código-fonte e podem colaborar livremente, promovendo o compartilhamento e o aprimoramento do projeto.

## ⚠ Disclaimer

Neste projeto, precisei hospedar a node_modules, para auxiliar quem está rodando o bot pelo celular, pois muitos deles podem não rodar o `npm install` ou `yarn` pelo termux corretamente.
