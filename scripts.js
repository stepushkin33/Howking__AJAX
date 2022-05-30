const loadBtn = document.querySelector(".js-load");
const loadAllBtn = document.querySelector(".js-load-all");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const searchInputID = document.querySelector(".js-input-id");

loadBtn.addEventListener("click", function (evt) {
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
      .then(response => response.json())
      .then((data) =>
        (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
  );
});



loadAllBtn.addEventListener("click", function (event) {
  const searchValueID = searchInputID.value
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    console.log(response.data);
    resultsContainer.innerHTML = `<div class="response-container">
                <p> ID: <span>${response.data[searchValueID].id}</span></p>
                <p> Предстваление: <span>${response.data[searchValueID].title}</span><p>
                <p> О себе: <span>${response.data[searchValueID].body}</span><p>
            </div> <br/>`}
  );
  })
