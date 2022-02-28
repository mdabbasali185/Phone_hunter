const searchData = () => {
  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput.value;
  const url = ` https://openapi.programming-hero.com/api/phones?search=${"iphone"}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showResult(data.data));
};
const showResult = (info) => {
  info.forEach((singleElement) => {
    const details = document.getElementById("details");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card">
            <img src="${singleElement.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        `;
        details.appendChild(div)
  });
};
