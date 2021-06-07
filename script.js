function start() {
  theUrl = "https://indonesia-covid-19.mathdro.id/api/provinsi";
  fetch(theUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) =>
      json.forEach((element) => {
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
        provinceNameText = document.createTextNode(
          element["attributes"]["provinsi"]
        );
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
        positiveNumberText = document.createTextNode(
          element["attributes"]["kasusPosi"]
        );
        positiveNumber.appendChild(positiveNumberText);
        recoverNumber = document.createElement("td");
        recoverNumber.setAttribute("style", "text-align: right;");
        recoverNumberText = document.createTextNode(
          element["attributes"]["kasusSemb"]
        );
        recoverNumber.appendChild(recoverNumberText);
        deathNumber = document.createElement("td");
        deathNumber.setAttribute("style", "text-align: right;");
        deathNumberText = document.createTextNode(
          element["attributes"]["kasusMeni"]
        );
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
      })
    )
    .catch((err) => console.log(err));
}

function start2() {
  theUrl = "https://indonesia-covid-19.mathdro.id/api/provinsi";
  fetch(theUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json2) =>
      json2.forEach((element) => {
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
        provinceNameText = document.createTextNode(element["name"]);
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
        positiveNumberText = document.createTextNode(element["positif"]);
        positiveNumber.appendChild(positiveNumberText);

        recoverNumber = document.createElement("td");
        recoverNumber.setAttribute("style", "text-align: right;");
        recoverNumberText = document.createTextNode(element["sembuh"]);
        recoverNumber.appendChild(recoverNumberText);

        deathNumber = document.createElement("td");
        deathNumber.setAttribute("style", "text-align: right;");
        deathNumberText = document.createTextNode(element["meninggal"]);
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
      })
    )
    .catch((err) => console.log(err));
}
