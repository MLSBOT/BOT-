


if (body.toLowerCase().includes("hola") || body.toLowerCase().includes("holi")) {
    await react("🤨");
    await react("😦");
    await react("🙂‍↔️");
    await react("🙂‍↕️");
    await react("💙");
    await react("👋🏻");

    const date = new Date();
    const currentHour = date.getHours();
    let saludo;

    await imageFromFile(path.join(ASSETS_DIR, "kk.png"));
    
    if (currentHour >= 5 && currentHour < 12) {
        saludo = "Buenos días 🌄";
    } else if (currentHour >= 12 && currentHour < 18) {
        saludo = "Buenas tardes 🌅";
    } else {
        saludo = "Buenas noches 🌌";
    }

    const numeroAleatorio = Math.floor(Math.random() * 999) + 1;
    
    // Asegúrate de usar 'await' correctamente en la función 'reply'
    const message = await reply(`  
        ${saludo} 
        *FECHA 🗓* 
        ${date.toLocaleDateString("pt-br")} 
        *HORA ⏳️* 
        ${date.toLocaleTimeString("pt-br")} 
        *Su turno es el siguiente: ${numeroAleatorio}*`
    );

    // Si necesitas usar el mensaje enviado, puedes hacerlo aquí
    return message; // Opcional: retorna el mensaje si es necesario
}