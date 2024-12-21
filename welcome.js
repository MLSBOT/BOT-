const { getProfileImageData, onlyNumbers } = require("./utils/functions");
const { isActiveWelcomeGroup } = require("./database/db");
const { warningLog } = require("./utils/terminal");

async function welcome({ socket: lite, data }) {
  const from = data.id;
  const userJid = data.participants[0];

  if (!isActiveWelcomeGroup(from)) {
    return;
  }

  if (data.action === "add" && userJid) {
    try {
      const { buffer } = await getProfileImageData(userJid, lite);
      const { participants } = await lite.groupMetadata(from);
      const mentions = participants.map(({ id }) => id);

      // Enviar imagen de bienvenida
      await lite.sendMessage(from, {
        image: buffer,
        caption: `¡Sea bienvenido, @${onlyNumbers(userJid)}!\n\n`,
        mentions: [userJid],
      });
      
    } catch (error) {
      warningLog(
        `Alguien se unió al grupo y no se pude enviar el mensaje de bienvenida. Error: ${error.message}`
      );
    }
  }

  // Caso miembro que salió del grupo
  // if (data.action === "remove") {
  //   // Tu lógica para manejar la salida de miembros
  // }
}

module.exports = { welcome };