const axios = require("axios");

const { SPIDER_API_TOKEN, SPIDER_API_BASE_URL } = require("../config");
const { DangerError } = require("../errors");

const tokenErrorMessage = `Token de la API no configurado!\n
Para configurar, busque el archivo \`config.js\` 
y añada su token de la API!\n
¿No tiene cuenta?
Visite: https://api.spiderx.com.br.
¡Cree una cuenta y obtenga su \`SPIDER_API_TOKEN\`!`;

function hasToken(token) {
  return token && token !== "seu_token_aqui";
}

async function playAudio(search) {
  if (!search) {
    throw new DangerError("¡Indique qué quiere buscar 🤷!");
  }

  if (!hasToken(SPIDER_API_TOKEN)) {
    throw new DangerError(tokenErrorMessage);
  }

  const { data } = await axios.get(
    `${SPIDER_API_BASE_URL}/downloads/play-audio?search=${encodeURIComponent(
      search
    )}&api_key=${SPIDER_API_TOKEN}`
  );

  return data;
}

async function playVideo(search) {
  if (!search) {
    throw new DangerError("¡Indique qué quiere buscar 🤷!");
  }

  if (!hasToken(SPIDER_API_TOKEN)) {
    throw new DangerError(tokenErrorMessage);
  }

  const { data } = await axios.get(
    `${SPIDER_API_BASE_URL}/downloads/play-video?search=${encodeURIComponent(
      search
    )}&api_key=${SPIDER_API_TOKEN}`
  );

  return data;
}

async function gpt4(text) {
  if (!text) {
    throw new DangerError("¡Indique algún tipo o parámetro de texto!");
  }

  if (!hasToken(SPIDER_API_TOKEN)) {
    throw new DangerError(tokenErrorMessage);
  }

  const { data } = await axios.post(
    `${SPIDER_API_BASE_URL}/ai/gpt-4?api_key=${SPIDER_API_TOKEN}`,
    {
      text,
    }
  );

  return data.response;
}

async function attp(text) {
  if (!text) {
    throw new DangerError("¡Indique algún tipo o parámetro de texto!");
  }

  if (!hasToken(SPIDER_API_TOKEN)) {
    throw new DangerError(tokenErrorMessage);
  }

  return `${SPIDER_API_BASE_URL}/attp?api_key=${SPIDER_API_TOKEN}&text=${encodeURIComponent(text)}`;
}

module.exports = {
  attp,
  gpt4,
  playAudio,
  playVideo,
};
