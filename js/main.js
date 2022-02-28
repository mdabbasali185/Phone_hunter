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
        <div class="card h-100">
            <img src="${singleElement.image}" class="card-img-top p-4" alt="image" />
            <div class="card-body d-flex flex-column">
              <h4 class="card-title">${singleElement.phone_name}</h4>
              <h6 class="card-text">
               ${singleElement.brand}
              </h6> 
              <div class="mt-auto"><button onclick="showSingleInfo('${singleElement.slug}')" class="btn btn-click">details</button></div>
            </div>
          </div>
        `;
    details.appendChild(div);
  });
};
const showSingleInfo = (singleInfo) => {
  const url = ` https://openapi.programming-hero.com/api/phone/${singleInfo}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => phoneDetails(data.data));
};
const phoneDetails = (singlePhoneInfo) => {
  const singlePhone = document.getElementById("single-phone");
  const div = document.createElement("div");
  div.classList.add("row");
  div.innerHTML = `
          <div class="col-lg-6">
            <img src="${singlePhoneInfo.image}" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-lg-6">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
`;
  singlePhone.appendChild(div);
};
