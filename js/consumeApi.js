let searchButton = document.querySelector("#submit");
let descriptionImage = document.querySelector("#descriptionImage");
let image = document.querySelector("#image");
let searchImage = document.querySelector("#dateSearch");

searchButton.addEventListener("click", () => {
  call();
});

function getDate() {
  return searchImage.value;
}

async function call() {
  let API_KEY = "yourApi";
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?date=` +
      getDate() +
      "&api_key=" +
      API_KEY
  );

  let data = await response.json();
  manipulateApiData(data);
}

function manipulateApiData(data) {
  descriptionImage.innerHTML = data.explanation;
  image.src = data.url;
}
