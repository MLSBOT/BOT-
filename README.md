




<div align="center">
    <img src="./assets/images/incendinforme-1.png" width="250">
</div>

<br />

<div align="center">
    <a href="https://github.com/MLSBOT/BOT-.git">
        <img alt="Version" src="https://img.shields.io/badge/Versión-1.0.0-purple">
    </a>
</div>

<br />

# Bot de WhatsApp

## Tecnologias Agregadas 

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Baileys](https://github.com/WhiskeySockets/Baileys)
- [FFMPEG](https://ffmpeg.org/)
- [Herc.ai](https://www.npmjs.com/package/hercai)
- [Node.js 20.17.0](https://nodejs.org/en)
- [Spider X API](https://api.spiderx.com.br)
- [Yarn 1.22.22](https://yarnpkg.com)

## ⚠ Atención 


## Instalación en termux! <a id="termux-setup"></a>

1 - Abra termux y ejecute, ¿no tiene termux? [Aca esta!](https://www.mediafire.com/file/082otphidepx7aq/Termux_0.119.1_aldebaran_dev.apk)

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
cd /sdcard && git clone https://github.com/MLSBOT/BOT-.git && cd ./mls
```

5 - Configure el archivo `config.js`. en `/sdcard/mls` use [MT Manager](https://www.mediafire.com/file/y09xgucgygmt1ny/MT_Manager_2.16.7_Dev_Gui.apk/file) o [ZArchiver](https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver&hl=pt_BR).

6 - Guarde.

7 - Ahora en termux `/sdcard/mls`.

8 - inicie usando `yarn start` o `npm start` e ingrese su número de telefono

9 - Coloque el codigo en "dispositivos conectados" en WhatsApp.

10 - Aguarde 10 segundos, depues digite `CTRL + C` 2x para parar el bot.

11 - Inicie el bot nuevamente, dentro de `mls`:
```sh
yarn start
```

o

```sh
npm start
```

## Algunos comandos necessitan de API

linea `34` del archivo `config.js` ponga su api key de la plataforma Spider X API.<br/>
Para obtener su token ingrese a: [https://api.spiderx.com.br](https://api.spiderx.com.br) y cree su cuenta.

```js
exports.SPIDER_API_TOKEN = "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";
```
## Funcionalidades

| Función | Online? | Contexto | Requiere X API?
| ------------ | --- | --- | ---
| Desactivar bot del grupo| ✅ | yo | ❌
| Activar bot en el grupo | ✅ | yo | ❌
| Anti link | ✅ | Admin | ❌
| Bam | ✅ | Admin | ❌
| On/Off bienvenidas | ✅ | Admin | ❌
| Marcar todos | ✅ | Admin | ❌
| Busca CEP | ✅ | Miembro | ❌
| Sticker de texto| ✅ | Miembro | ✅
| Generar imágenes | ✅ | Miembro | ❌
| GPT 4 | ✅ | Miembro | ✅
| Ping | ✅ | Miembro | ❌
| Play áudio | ✅ | Miembro | ✅
| Play vídeo | ✅ | Miembro | ✅
| Sticker | ✅ | Miembro | ❌



## Licencia 

[GPL-3.0](https://vt.tiktok.com/ZS6YPUyQs/)



## ⚠ Información 

Este proyecto directamente puede funcionar en su teléfono o también en un servidor x o y, usando obviamente una vps o la app de termux anteriormente mencionada.
