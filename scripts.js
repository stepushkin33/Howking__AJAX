const loadBtn = document.querySelector(".js-load");
const loadAllBtn = document.querySelector(".js-load-all");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const searchInputID = document.querySelector(".js-input-id");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
      .then((response) => {
        if((response.status >= 200) && (response.status < 300)) {
          return response
        }
        else {
          throw new Error ('Пользователь не найден')
        }
      })
      .then(response => response.json())
      .then( data => {
        (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
        })
      .catch(e => {
        resultsContainer.innerHTML = `<div class="response-container">${e}</div>`
      })
});



loadAllBtn.addEventListener("click", async function (event) {
  event.preventDefault()
  const searchValueID = searchInputID.value
  try {
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${searchValueID}`)
    resultsContainer.innerHTML = `<div class="response-container">
                <p> ID: <span>${data.id}</span></p>
                <p> Предстваление: <span>${data.title}</span><p>
                <p> О себе: <span>${data.body}</span><p>
            </div> <br/>`
  }catch(e) {
    if(e.response.status === 404) {
      resultsContainer.innerHTML = `<div class="response-container">Пользователь не найден</div>`
    }
  }
  })
