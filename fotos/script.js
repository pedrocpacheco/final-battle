const api_key = "QhMehBA6UeqsAfzK0mV2";
const project_id = "bike-only";
const model_version = 2;
const confidence = 40;
const overlap = 30;
const image_url = "URL_DA_SUA_IMAGEM";

// URL da API do Roboflow
const apiUrl = `https://api.roboflow.com/predict/${project_id}/${model_version}?api_key=${api_key}`;

// Crie um objeto XMLHttpRequest
const xhr = new XMLHttpRequest();

// Defina o método HTTP e a URL
xhr.open("POST", apiUrl, true);

// Defina o cabeçalho da solicitação
xhr.setRequestHeader("Content-Type", "application/json");

// Defina o tratamento da resposta
xhr.onload = function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    // Visualize a previsão ou salve-a, se necessário
  } else {
    console.error("Erro na solicitação:", xhr.status, xhr.statusText);
  }
};

// Defina os parâmetros da solicitação
const params = {
  name: "C:\Users\Pedro\Desktop\Bike Now\final-battle\img\bici-blue.PNG",
  confidence: confidence,
  overlap: overlap,
};

// Envie os parâmetros como JSON
xhr.send(JSON.stringify(params));
