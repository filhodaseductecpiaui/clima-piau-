const btn = document.getElementById("verClima");
const info = document.getElementById("infoClima");

const dadosClima = {
  teresina: {
    temp: "35°C",
    condicao: "Ensolarado",
    umidade: "40%"
   
  },
  parnaiba: {
    temp: "31°C",
    condicao: "Parcialmente nublado",
    umidade: "50%",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Parna%C3%ADba_-_PI.jpg/320px-Parna%C3%ADba_-_PI.jpg"
  },
  picos: {
    temp: "33°C",
    condicao: "Céu limpo",
    umidade: "45%",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Catedral_de_Picos_-_PI.JPG/320px-Catedral_de_Picos_-_PI.JPG"
  },
  floriano: {
    temp: "34°C",
    condicao: "Ensolarado com nuvens",
    umidade: "47%",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/FlorianodoPI.jpg/320px-FlorianodoPI.jpg"
  },
  oeiras: {
    temp: "32°C",
    condicao: "Chuva leve",
    umidade: "60%",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Igreja_de_Oeiras-Piaui.jpg/320px-Igreja_de_Oeiras-Piaui.jpg"
  }
};

btn.addEventListener("click", () => {
  const cidade = document.getElementById("cidade").value;

  if (cidade && dadosClima[cidade]) {
    const clima = dadosClima[cidade];
    info.innerHTML = `
      <img src="${clima.img}" alt="Imagem de ${cidade}" />
      <strong>Temperatura:</strong> ${clima.temp}<br/>
      <strong>Condição:</strong> ${clima.condicao}<br/>
      <strong>Umidade:</strong> ${clima.umidade}
    `;
  } else {
    info.textContent = "Por favor, selecione uma cidade válida.";
  }
});
