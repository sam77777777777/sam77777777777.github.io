const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const currentDate = `${day}-${month}-${year}`;
const time = date.getHours() + ":" + date.getMinutes();

let dbHash;

function generateHash(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hash = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      hash += characters[randomIndex];
      dbHash += characters[randomIndex];
    }
  
    return hash;
  }
  



function createBreakfastCard() {
  
    const dataCard = document.createElement("div");
    const dataInCard = document.createElement("p");
    const dataCardDeleteButton = document.createElement("div");
    const imgDeleteButton = document.createElement("img");
    const cardContainer = document.getElementById("data-card-container");
    imgDeleteButton.src = "./trash-icon.png";
    imgDeleteButton.onclick = function popupForDelete () {
      document.getElementById("overlay").style.display = "flex";
      let cardHash = dataCard.id
      console.log("changed to flex")
      function popupDeleteButton() {
          const deleteDataCard = document.getElementById(cardHash);
          deleteDataCard.remove();
          document.getElementById("overlay").style.display = "none";
      };
      
      function popupCancelButton() {
          document.getElementById("overlay").style.display = "none";
          console.log(cardHash, "color: red")
      }
  
      createDinnerCard.popupDeleteButton = popupDeleteButton;
      createDinnerCard.popupCancelButton = popupCancelButton;
      //console.log(cardHash)
    }
    dataCard.classList.add("data-card");
    dataCard.setAttribute("id", generateHash(256))
    dataInCard.classList.add("data-in-card");
    dataCardDeleteButton.classList.add("data-card-delete-button");
    dataInCard.textContent = `harley ate breakfast at ${time} on ${currentDate}`;
    dataCardDeleteButton.appendChild(imgDeleteButton);
    dataCard.appendChild(dataInCard);
    dataCard.appendChild(dataCardDeleteButton);
    cardContainer.appendChild(dataCard);
    cardContainer.scrollTo({
      top: dataCard.offsetTop,
      behavior: "smooth",
    });
    
    console.log("a div was created");
    //console.log(dataCard.id)
    console.log(document.getElementById("breakfast-button").value)
  }

function createDinnerCard() {

  const dataCard = document.createElement("div");
  const dataInCard = document.createElement("p");
  const dataCardDeleteButton = document.createElement("div");
  const imgDeleteButton = document.createElement("img");
  const cardContainer = document.getElementById("data-card-container");
  imgDeleteButton.src = "./trash-icon.png";
  imgDeleteButton.onclick = function popupForDelete () {
    document.getElementById("overlay").style.display = "flex";
    let cardHash = dataCard.id
    console.log("changed to flex")
    function popupDeleteButton() {
        const deleteDataCard = document.getElementById(cardHash);
        deleteDataCard.remove();
        document.getElementById("overlay").style.display = "none";
    };
    
    function popupCancelButton() {
        document.getElementById("overlay").style.display = "none";
        console.log(cardHash, "color: red")
    }

    createDinnerCard.popupDeleteButton = popupDeleteButton;
    createDinnerCard.popupCancelButton = popupCancelButton;
    //console.log(cardHash)
  }
  dataCard.classList.add("data-card");
  dataCard.setAttribute("id", generateHash(256))
  dataInCard.classList.add("data-in-card");
  dataCardDeleteButton.classList.add("data-card-delete-button");
  dataInCard.textContent = `harley ate dinner at ${time} on ${currentDate}`;
  dataCardDeleteButton.appendChild(imgDeleteButton);
  dataCard.appendChild(dataInCard);
  dataCard.appendChild(dataCardDeleteButton);
  cardContainer.appendChild(dataCard);
  cardContainer.scrollTo({
    top: dataCard.offsetTop,
    behavior: "smooth",
  });
  
  console.log("a div was created");
  //console.log(dataCard.id)
  console.log(document.getElementById("dinner-button").value)
}


const URL = "http://localhost:3000/api";
const breakfastButton = document.getElementById("breakfast-button");
const dinnerButton = document.getElementById("dinner-button");
const breakfastJson = {
    "meal": "breakfast"
};
const dinnerJson = {
    "meal": "dinner"
};


breakfastButton.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("e clicked")
    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(breakfastJson),
            headers: {
                'Content-Type': "application/json"
            }
        });
        const json = await response.json();
        console.log(json);
    } catch(e) {
        console.error(e);
    };
})


dinnerButton.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("e clicked")
    try {
        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(dinnerJson),
            headers: {
                'Content-Type': "application/json"
            }
        });
        const json = await response.json();
        console.log(json);
    } catch(e) {
        console.error(e);
    };

    return false;
});