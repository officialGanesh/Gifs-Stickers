console.log("Testing Giphy API 🚀");

API_KEY = "hmXGRe6QrVW6TeCW5rxkBaeolXTXHPu7&";
BASE_URL = "https://api.giphy.com/v1/gifs/trending";

/*
Getting gifs using Trending API
${base_url}?api_key=${API_KEY}limit=${limit}&rating=${rating}
*/

let trending = (base_url, api_key) => {
  let limit = 25;
  let rating = ["g", "pg", "pg-13", "r"];
  let endpoint = `${base_url}?api_key=${api_key}limit=${limit}&rating=${
    rating[Math.floor(Math.random() * 4)]
  }`;

  let box = document.querySelector("#box");
  
  let fetchData = fetch(endpoint);

  fetchData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data["data"].forEach((e) => {
        let element = document.createElement("div");
        element.className = "card";
        element.style.cssText = `width: 24rem; margin: 8px; border-radius: 13px;`;
        let html = `
                    <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                        <img src="${e.images.original.url}" class="card-img-top" alt="No Image Available" style="margin-top:10px;">
                        <hr>         
                    </div>`;

        element.innerHTML = html;
        box.append(element);
      });
    });
};

trending(BASE_URL, API_KEY);
