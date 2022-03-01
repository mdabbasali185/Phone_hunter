const searchData = () => {
  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput.value.toLowerCase();
  document.getElementById("error-msg").innerText = "";
  if (!searchValue) {
    document.getElementById("error-msg").innerText =
      "please filled the input box.";
  } else {
    const details = document.getElementById("details");
    details.innerHTML = "";
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => showResult(data.data));
  }
};
const showResult = (info) => {
  document.getElementById("searchInput").value = "";
  if (info.length <= 0) {
    document.getElementById("error-msg").innerText =
      "please search valid data.";
  } else {
    info.forEach((singleElement, number) => {
      if (number < 20) {
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
                <div class="mt-auto"><button onclick="showSingleInfo('${singleElement.slug}')" class="btn btn-click btn-secondary">details</button></div>
              </div>
            </div>
          `;
        details.appendChild(div);
      }
    });
  }
};

const showSingleInfo = (singleInfo) => {
  document.getElementById("single-phone").innerHTML = "";
  const url = ` https://openapi.programming-hero.com/api/phone/${singleInfo}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => phoneDetails(data.data));
};
const phoneDetails = (singlePhoneInfo) => {
  const singlePhone = document.getElementById("single-phone");
  const div = document.createElement("div");
  div.classList.add("row", "py-5", "align-items-center");
  div.innerHTML = `
          <div class="col-lg-6">
            <p class="text-center">
            <img src="${
              singlePhoneInfo.image
            }" class="img-fluid rounded-start" alt="..." />
            </p>
          </div>
          <div class="col-lg-6">
            <div class="card-body">
              <h5 class="card-title">${
                singlePhoneInfo.name ? singlePhoneInfo.name : "no name found"
              }</h5>
              <p>${
                singlePhoneInfo.releaseDate
                  ? singlePhoneInfo.releaseDate
                  : "no relese date found"
              }</p>
              <h6>${
                singlePhoneInfo.brand
                  ? singlePhoneInfo.brand
                  : "phone brand not found"
              }</h6>
              <hr>
              <h5 class"fw-bold"> Main Features: </h5>
              <div class="ms-3">
                <p class="mb-0"> <b>Storage:</b> ${
                  singlePhoneInfo.mainFeatures.storage
                } </p>
                <p class="mb-0"> <b>Display Size:</b> ${
                  singlePhoneInfo.mainFeatures.displaySize
                } </p>
                <p class="mb-0"> <b>Chip Set:</b> ${
                  singlePhoneInfo.mainFeatures.chipSet
                } </p>
                <p class="mb-0"> <b>Memory:</b> ${
                  singlePhoneInfo.mainFeatures.memory
                } </p>
                <p class="mb-0"> <b>Sensors:</b> ${singlePhoneInfo.mainFeatures.sensors.map(
                  (item) => "<span> " + item + " </span>"
                )}  </p>
              </div>

              <hr>

              <h5 class"fw-bold"> Main Features: </h5>
              <div class="ms-3">
                <p class="mb-0"> <b>Storage:</b> ${
                  singlePhoneInfo.mainFeatures.storage
                } </p>
                <p class="mb-0"> <b>Display Size:</b> ${
                  singlePhoneInfo.mainFeatures.displaySize
                } </p>
                <p class="mb-0"> <b>Chip Set:</b> ${
                  singlePhoneInfo.mainFeatures.chipSet
                } </p>
                <p class="mb-0"> <b>Memory:</b> ${
                  singlePhoneInfo.mainFeatures.memory
                } </p>
                <p class="mb-0"> <b>Sensors:</b> ${singlePhoneInfo.mainFeatures.sensors.map(
                  (item) => "<span> " + item + " </span>"
                )}  </p>
              </div>

            </div>
          </div>
`;
  singlePhone.appendChild(div);
};
