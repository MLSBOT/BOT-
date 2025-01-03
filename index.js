/**
 * Este script é responsável
 * pelas funções que
 * serão executadas
 * no Lite Bot.
 *
 * Aqui é onde você
 * vai definir
 * o que o seu bot
 * vai fazer.
 *
 * @author Dev Gui
 */

const path = require("node:path");
const { menu } = require("./utils/menu");
const { ASSETS_DIR, BOT_NUMBER } = require("./config");
const { errorLog } = require("./utils/terminal");
const { attp, gpt4, playAudio, playVideo } = require("./services/spider-x-api");
const { consultarCep } = require("correios-brasil/dist");
const { image } = require("./services/hercai");
const date = new Date();

const {
  InvalidParameterError,
  WarningError,
  DangerError,
} = require("./errors");

const {
  checkPrefix,
  deleteTempFile,
  download,
  formatCommand,
  getBuffer,
  getContent,
  getJSON,
  getProfileImageData,
  getRandomName,
  getRandomNumber,
  isLink,
  loadLiteFunctions,
  onlyLettersAndNumbers,
  onlyNumbers,
  removeAccentsAndSpecialCharacters,
  splitByCharacters,
  toUserJid,
} = require("./utils/functions");

const {
  activateAntiLinkGroup,
  deactivateAntiLinkGroup,
  isActiveAntiLinkGroup,
  activateWelcomeGroup,
  isActiveGroup,
  deactivateWelcomeGroup,
  activateGroup,
  deactivateGroup,
} = require("./database/db");

async function runLite({ socket, data }) {
  const functions = loadLiteFunctions({ socket, data });

  if (!functions) {
    return;
  }

  const {
    args,
    body,
    command,
    from,
    fullArgs,
    info,
    isImage,
    isReply,
    isSticker,
    isVideo,
    lite,
    prefix,
    replyJid,
    userJid,
    audioFromURL,
    ban,
    downloadImage,
    downloadSticker,
    downloadVideo,
    errorReact,
    errorReply,
    imageFromFile,
    imageFromURL,
    infoFromSticker,
    isAdmin,
    isOwner,
    react,
    recordState,
    reply,
    sendText,
    stickerFromFile,
    stickerFromURL,
    successReact,
    successReply,
    typingState,
    videoFromURL,
    waitReact,
    waitReply,
    warningReact,
    warningReply,
  } = functions;






  if (!checkPrefix(prefix)) {
    /*use para leer todo 
     * body.toLowerCase().includes("palabra")
     *
     * Solo mayusculas y min
     * body.toLowerCase() === "palabra"
     */

if (body.toLowerCase().includes("jaj","jsj")) {
    await react("👍🏿");
    await react("👍🏾");
    await react("👍🏼");
    await react("👍🏻");
    await react("👎🏿");
    await react("😂");
    }
}



if (body.toLowerCase().includes("hola") || body.toLowerCase().includes("holi")) {
    // Reacciones iniciales
    await react("🤨");
    await react("😦");
    await react("🙂‍↔️");
    await react("🙂‍↕️");
    await react("💙");
    await react("👋🏻");

    const date = new Date();
    const currentHour = date.getHours();
    let saludo;
    
    await imageFromFile(path.join(ASSETS_DIR, "kk.png")); // Carga la imagen solo una vez

    // Determina el saludo según la hora
    if (currentHour >= 5 && currentHour < 12) {
        saludo ="Buenos días 🌞";
    } else if (currentHour >= 12 && currentHour < 18) {
        saludo ="Buenas tardes 🌆";
    } else {
        saludo ="Buenas noches 🌙";
    }

    const numeroAleatorio = Math.floor(Math.random() * 499) + 1;

    // Prepara el mensaje completo
    const mensajeCompleto = `${saludo}
    *FECHA 🗓* 
        ${date.toLocaleDateString("pt-br")}
    *HORA ⏳️* 
        ${date.toLocaleTimeString("pt-br")} 
    *Su turno es el siguiente:*
        ${numeroAleatorio}
        `;

    // Envía el mensaje en un solo envío
    const message = await reply(mensajeCompleto);
    
    return message; 
}



 




  /**
   * 🚫 Anti-link 🔗
   */
  if (
    !checkPrefix(prefix) &&
    isActiveAntiLinkGroup(from) &&
    isLink(body) &&
    !(await isAdmin(userJid))
  ) {
    await ban(from, userJid);
    await reply("Anti-link activado! Se te elimino por enviar links 🫠");

    return;
  }

  if (!checkPrefix(prefix)) {
    return;
  }

  try {
    /**
     * Aqui você vai definir
     * as funções que
     * o seu bot vai executar via "cases".
     *
     * ⚠ ATENÇÃO ⚠: Não traga funções
     * ou "cases" de
     * outros bots para cá
     * sem saber o que está fazendo.
     *
     * Cada bot tem suas
     * particularidades e,
     * por isso, é importante
     * tomar cuidado.
     * Não nos responsabilizamos
     * por problemas
     * que possam ocorrer ao
     * trazer códigos de outros
     * bots pra cá,
     * na tentativa de adaptação.
     *
     * Toda ajuda será *COBRADA*
     * caso sua intenção
     * seja adaptar os códigos
     * de outro bot para este.
     *
     * ✅ CASES ✅
     */
    switch (removeAccentsAndSpecialCharacters(command?.toLowerCase())) {
      case "antilink":
      case "atlk":
        if (!args.length) {
          throw new InvalidParameterError(
            "Para activar dijite el comando anterior nuevamente y agregue un  ```1 para (activar)  0 para (desactivar)```"
          );
        }

        const antiLinkOn = args[0] === "1";
        const antiLinkOff = args[0] === "0";

        if (!antiLinkOn && !antiLinkOff) {
          throw new InvalidParameterError(
            "Para activar dijite el comando anterior nuevamente y agregue un  ```1 para (activar)  0 para (desactivar)```"
          );
        }

        if (antiLinkOn) {
          activateAntiLinkGroup(from);
        } else {
          deactivateAntiLinkGroup(from);
        }

        await successReact();

        const antiLinkContext = antiLinkOn ? "```activado```" : "```desactivado```";

        await reply(`El anti-link ${antiLinkContext} con éxito!`);
        break;
      case "attp":
      case "stickertxt":
        if (!args.length) {
          throw new InvalidParameterError(
            "Para crear el sticker envie un texto después del comando."
          );
        }

        await waitReact();

        const url = await attp(args[0].trim());

        await successReact();

        await stickerFromURL(url);
        break;
      case "ban":
      case "banir":
      case "kick":
        if (!(await isAdmin(userJid))) {
          throw new DangerError(
            "No tiene permiso para ejecutar este comando!"
          );
        }

        if (!args.length && !isReply) {
          throw new InvalidParameterError(
            "Necesita mencionar o responder al usuario que desea eliminar!"
          );
        }

        const memberToRemoveJid = isReply ? replyJid : toUserJid(args[0]);
        const memberToRemoveNumber = onlyNumbers(memberToRemoveJid);

        if (
          memberToRemoveNumber.length < 7 ||
          memberToRemoveNumber.length > 15
        ) {
          throw new InvalidParameterError("Número inválido! 🫠");
        }

        if (memberToRemoveJid === userJid) {
          throw new DangerError("Usted mismo no se puede eliminar 🙂‍↔️!");
        }

        const botJid = toUserJid(BOT_NUMBER);

        if (memberToRemoveJid === botJid) {
          throw new DangerError("Buen intento 😂!");
        }

        await ban(from, memberToRemoveJid);

        await successReact();

        await reply("!");
        break;
      case "cep":
        const cep = args[0];

        if (!cep || ![8, 9].includes(cep.length)) {
          throw new InvalidParameterError(
            "se necesita enviar CEP en formato 00000-000 o 00000000!"
          );
        }

        const data = await consultarCep(cep);

        if (!data.cep) {
          await warningReply("CEP no se encontró!");
          return;
        }

        await successReply(`*Resultado*
        
*CEP*: ${data.cep}
*Logradouro*: ${data.logradouro}
*Complemento*: ${data.complemento}
*Bairro*: ${data.bairro}
*Localidade*: ${data.localidade}
*UF*: ${data.uf}
*IBGE*: ${data.ibge}`);
        break;
      case "gpt4":
      case "gpt":
      case "ia":
      case "lite":
        const text = args[0];

        if (!text) {
          throw new InvalidParameterError(
            "indique que quiere saber o investigar!"
          );
        }

        await waitReact();

        const responseText = await gpt4(text);

        await successReply(responseText);
        break;
      case "hidetag":
      case "tagall":
      case "todos":
      case "🗣":
        const { participants } = await lite.groupMetadata(from);

        const mentions = participants.map(({ id }) => id);

        await react("🗣");

        await sendText(` Llamando a todos!\n\n${fullArgs}`, mentions);
        break;
      case "menu":
      case "hola":
        await successReact();
        await imageFromFile(
          path.join(ASSETS_DIR, "images", "menu.png"),
          `\n\n${menu()}`
        );
        break;
      case "off":
        if (!(await isOwner(userJid))) {
          throw new DangerError(
            "silencio, usted no tiene permiso para esto!"
          );
        }

        deactivateGroup(from);

        await successReply("Bot desactivado para este grupo!");
        break;
      case "image":
        if (!fullArgs.length) {
          throw new WarningError(
            "Por favor, indique que quiere con la imagen."
          );
        }

        await waitReact();

        const response = await image(fullArgs);

        await successReact();

        await imageFromURL(response.url);
        break;
      case "on":
        if (!(await isOwner(userJid))) {
          throw new DangerError(
            "silencio, usted no tiene permitido usar este comando!"
          );
        }

        activateGroup(from);

        await successReply("Bot activo para este grupo!");
        break;
      case "ping":
        await react("🏓");
        await reply("🏓 Pong!");
        break;
      case "playaudio":
      case "playyt":
      case "play":
      case "yt":
        if (!args.length) {
          throw new InvalidParameterError(
            "Necesito que indiqueque que desea buscar 🤨"
          );
        }

        await waitReact();

        const playAudioData = await playAudio(args[0]);

        if (!playAudioData) {
          await errorReply("Nada encontrado 😦!");
          return;
        }

        await successReact();

        await audioFromURL(playAudioData.url);

        break;
      case "playvideo":
      case "video":
        if (!args.length) {
          throw new InvalidParameterError(
            "Indique que desea buscar 🤨!"
          );
        }

        await waitReact();

        const playVideoData = await playVideo(args[0]);

        if (!playVideoData) {
          await errorReply("Nada encontrado 😦!");
          return;
        }

        await successReact();

        await videoFromURL(playVideoData.url);

        break;
      case "sticker":
      case "f":
      case "fig":
      case "figu":
      case "s":
        if (!isImage && !isVideo) {
          throw new InvalidParameterError(
            "Se necesita enviar o responder a /gif/vídeo con el comando ```.s```"
          );
        }

        await waitReact();
        await infoFromSticker(info);
        break;
      case "welcome":
      case "bemvindo":
      case "boasvinda":
      case "boasvindas":
      case "boavinda":
      case "boavindas":
      case "klk":
        if (!args.length) {
          throw new InvalidParameterError(
            "Elija entre  1 o 0 (1-activar, 0-desactivar)!"
          );
        }

        const welcome = args[0] === "1";
        const notWelcome = args[0] === "0";

        if (!welcome && !notWelcome) {
          throw new InvalidParameterError(
            "Elija entre  1 o 0 (1-activar, 0-desactivar)!"
          );
        }

        if (welcome) {
          activateWelcomeGroup(from);
        } else {
          deactivateWelcomeGroup(from);
        }

        await successReact();

        const welcomeContext = welcome ? "ativado" : "desativado";

        await reply(`la bienvenida fue ${welcomeContext} con exito!`);
        break;
    }
    // ❌ Não coloque nada abaixo ❌
  } catch (error) {
    /**
     * ❌ Não coloque nada abaixo ❌
     * Este bloco é responsável por tratar
     * os erros que ocorrerem durante a execução
     * das "cases".
     */
    if (error instanceof InvalidParameterError) {
      await warningReply(`comando o parámetros inválidos! ${error.message}`);
    } else if (error instanceof WarningError) {
      await warningReply(error.message);
    } else if (error instanceof DangerError) {
      await errorReply(error.message);
    } else {
      errorLog(`Error al ejecutar el comando!\n\nDetalles: ${error.message}`);

      await errorReply(
        `error al ejecutar el comando 😦${command.name}!

📄 *Detalles*: ${error.message}`
      );
    }
    // ❌ Não coloque nada abaixo ❌
  }
}

module.exports = { runLite };
