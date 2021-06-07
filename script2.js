function start() {
  theUrl = "https://indonesia-covid-19.mathdro.id/api/provinsi";
  fetch(theUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => fun(json));
}

const fun = (json) => {
  json = json["data"];
  Object.keys(json).forEach((index) => {
    const element = json[index];
    mainCard = document.createElement("div");
    mainCard.setAttribute("class", "card");
    mainCard.setAttribute(
      "style",
      "display: inline-block; margin: 15px; width: 30%;background-color: #D3B5E5;background-position: center;background-repeat: no-repeat;"
    );
    cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.setAttribute("style", "rgba(152, 66, 211, 0.8)");
    provinceNameObj = document.createElement("h5");
    provinceNameObj.setAttribute("class", "card-title");
    provinceNameObj.setAttribute(
      "style",
      "text-align: center; margin-bottom: 3px;"
    );
    provinceNameText = document.createTextNode(element["provinsi"]);
    provinceNameObj.appendChild(provinceNameText);
    cardBody.appendChild(provinceNameObj);
    mainTable = document.createElement("table");
    mainTable.setAttribute("class", "table");

    positiveRow = document.createElement("tr");
    recoverRow = document.createElement("tr");
    deathRow = document.createElement("tr");
    positiveTitle = document.createElement("th");
    recoverTitle = document.createElement("th");
    deathTitle = document.createElement("th");
    positiveText = document.createTextNode("Positive");
    recoverText = document.createTextNode("Recovered");
    deathText = document.createTextNode("Deaths");
    positiveTitle.appendChild(positiveText);
    recoverTitle.appendChild(recoverText);
    deathTitle.appendChild(deathText);

    positiveNumber = document.createElement("td");
    positiveNumber.setAttribute("style", "text-align: right;");
    positiveNumberText = document.createTextNode(element["kasusPosi"]);
    positiveNumber.appendChild(positiveNumberText);
    recoverNumber = document.createElement("td");
    recoverNumber.setAttribute("style", "text-align: right;");
    recoverNumberText = document.createTextNode(element["kasusSemb"]);
    recoverNumber.appendChild(recoverNumberText);
    deathNumber = document.createElement("td");
    deathNumber.setAttribute("style", "text-align: right;");
    deathNumberText = document.createTextNode(element["kasusMeni"]);
    deathNumber.appendChild(deathNumberText);

    positiveRow.appendChild(positiveTitle);
    positiveRow.appendChild(positiveNumber);

    recoverRow.appendChild(recoverTitle);
    recoverRow.appendChild(recoverNumber);

    deathRow.appendChild(deathTitle);
    deathRow.appendChild(deathNumber);

    mainTable.appendChild(positiveRow);
    mainTable.appendChild(recoverRow);
    mainTable.appendChild(deathRow);

    cardBody.appendChild(mainTable);

    mainCard.appendChild(cardBody);

    $("#provinsi").append(mainCard);
  });
};

start();

function Indo() {
  const url = "https://indonesia-covid-19.mathdro.id/api/provinsi";
  fetch(url)
    .then((response) => response.json())
    .then((data) => loadData(data));
  const loadData = (data) => {
    const listOfProvince = data["data"];
    let totalsemb = 0;
    let totalmati = 0;
    let totalposi = 0;
    for (let i = 0; i < listOfProvince.length - 1; i++) {
      const provinceData = listOfProvince[i];
      // console.log(provinceData["kasusSemb"]);
      totalsemb += provinceData["kasusSemb"];
      totalmati += provinceData["kasusMeni"];
      totalposi += provinceData["kasusPosi"];
    }
    mainCard = document.createElement("div");
    mainCard.setAttribute("class", "card");
    mainCard.setAttribute(
      "style",
      "display: inline-block; margin: 15px; width: 94.5%;background-color: #FFF7D6;"
    );
    cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    provinceNameObj = document.createElement("h3");
    provinceNameObj.setAttribute("class", "card-title");
    provinceNameObj.setAttribute(
      "style",
      "text-align: center; margin-bottom: 3px;"
    );
    provinceNameText = document.createTextNode("Indonesia");
    provinceNameObj.appendChild(provinceNameText);
    cardBody.appendChild(provinceNameObj);
    mainTable = document.createElement("table");
    mainTable.setAttribute("class", "table");

    positiveRow = document.createElement("tr");
    recoverRow = document.createElement("tr");
    deathRow = document.createElement("tr");

    positiveTitle = document.createElement("th");
    recoverTitle = document.createElement("th");
    deathTitle = document.createElement("th");

    positiveText = document.createTextNode("Positive");
    recoverText = document.createTextNode("Recovered");
    deathText = document.createTextNode("Deaths");

    positiveTitle.appendChild(positiveText);
    recoverTitle.appendChild(recoverText);
    deathTitle.appendChild(deathText);

    positiveNumber = document.createElement("td");
    positiveNumber.setAttribute("style", "text-align: right;");
    positiveNumberText = document.createTextNode(totalposi);
    positiveNumber.appendChild(positiveNumberText);

    recoverNumber = document.createElement("td");
    recoverNumber.setAttribute("style", "text-align: right;");
    recoverNumberText = document.createTextNode(totalsemb);
    recoverNumber.appendChild(recoverNumberText);

    deathNumber = document.createElement("td");
    deathNumber.setAttribute("style", "text-align: right;");
    deathNumberText = document.createTextNode(totalmati);
    deathNumber.appendChild(deathNumberText);

    positiveRow.appendChild(positiveTitle);
    positiveRow.appendChild(positiveNumber);

    recoverRow.appendChild(recoverTitle);
    recoverRow.appendChild(recoverNumber);

    deathRow.appendChild(deathTitle);
    deathRow.appendChild(deathNumber);

    mainTable.appendChild(positiveRow);
    mainTable.appendChild(recoverRow);
    mainTable.appendChild(deathRow);

    cardBody.appendChild(mainTable);

    mainCard.appendChild(cardBody);

    $("#indonesia").append(mainCard);
  };
}

Indo();

// const table = document.getElementById("data-table");

// let arr = [];
// let input = "Input: ";
// let sum = 0;
// let multiply = 1;

// for (let i = 0; i < 15; i++) {
//   arr[i] = Number(prompt(`Input a number ${i}`));
//   input += `${arr[i]} `;
//   sum += arr[i];
//   multiply *= arr[i];
// }

// document.write(`${input} <br>`);
// document.write(`Total: ${sum} <br>`);
