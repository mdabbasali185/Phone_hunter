const searchData = () => {
  const searchInput = document.getElementById("searchInput");
  document.getElementById("single-phone").innerHTML = "";
  const details = document.getElementById("details");
  details.innerHTML = "";
  const searchValue = searchInput.value.toLowerCase();
  document.getElementById("error-msg").innerText = "";
  if (!searchValue) {
    document.getElementById("error-msg").innerText =
      "please filled the input box.";
  } else {
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
          <div class="card h-100 m-0 py-3">
              <img src="${singleElement.image}" class="card-img-top p-4" alt="image" />
              <div class="card-body d-flex flex-column">
                <h4 class="card-title">${singleElement.phone_name}</h4>
                <h6 class="card-text">
                 ${singleElement.brand}
                </h6> 
                <div class="mt-auto"><button onclick="showSingleInfo('${singleElement.slug}')" class="mt-3 btn btn-click btn-secondary">details</button></div>
              </div>
            </div>
          `;
        details.appendChild(div);
      }
    });
  }
};

const showSingleInfo = (singleInfo) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
              <h2 class="card-title fw-bold">${
                singlePhoneInfo.name ? singlePhoneInfo.name : "No name found."
              }</h2>
              <h4 class="fw-bold text-decoration-underline">Features:</h4>
              <p class="ms-3"><b>Brand:</b>  ${
                singlePhoneInfo.brand
                  ? singlePhoneInfo.brand
                  : "Phone brand not found"
              }</p>
              <hr>
              <p class="ms-3"> <b>Storage:</b> ${
                singlePhoneInfo.mainFeatures.storage
                  ? singlePhoneInfo.mainFeatures.storage
                  : "No data found"
              } </p>
              <hr>
              <p class="ms-3"><b>Release:</b>  ${
                singlePhoneInfo.releaseDate
                  ? singlePhoneInfo.releaseDate
                  : "Phone brand not released"
              }</p>
              
              <hr>
              <h4 class="fw-bold text-decoration-underline"> Main Features: </h4>
              <div class="ms-3">
                <p class="mb-0"> <b>Display Size:</b> ${
                  singlePhoneInfo.mainFeatures.displaySize
                    ? singlePhoneInfo.mainFeatures.displaySize
                    : "No data found"
                } </p>
                <hr>
                <p class="mb-0"> <b>Chip Set:</b> ${
                  singlePhoneInfo.mainFeatures.chipSet
                    ? singlePhoneInfo.mainFeatures.chipSet
                    : "No data found"
                } </p>
                <hr>
                <p class="mb-0"> <b>Memory:</b> ${
                  singlePhoneInfo.mainFeatures.memory
                    ? singlePhoneInfo.mainFeatures.memory
                    : "No data found"
                } </p>
                <hr>
                <p class="mb-0"> <b>Sensors:</b> ${singlePhoneInfo.mainFeatures.sensors.map(
                  (item) => "<span> " + item + " </span>"
                )}  </p>
              </div>

              <hr>
                  <!-- others part -->
                  <h4 class="fw-bold text-decoration-underline"> Others: </h4>
              <div class="ms-3">
                <p class="mb-0"> <b>Storage:</b> ${
                  singlePhoneInfo.others?.WLAN
                    ? singlePhoneInfo.others?.WLAN
                    : "No data found."
                } </p>
                <hr>
                <p class="mb-0"> <b>Display Size:</b> ${
                  singlePhoneInfo.others?.Bluetooth
                    ? singlePhoneInfo.others?.Bluetooth
                    : "No data found."
                } </p>
                <hr>
                <p class="mb-0"> <b>Chip Set:</b> ${
                  singlePhoneInfo.others?.GPS
                    ? singlePhoneInfo.others?.GPS
                    : "No data found."
                } </p>
                <hr>
                <p class="mb-0"> <b>Memory:</b> ${
                  singlePhoneInfo.others?.NFC
                    ? singlePhoneInfo.others?.NFC
                    : "No data found."
                } </p>
                <hr>
                <p class="mb-0"> <b>Memory:</b> ${
                  singlePhoneInfo.others?.Radio
                    ? singlePhoneInfo.others?.Radio
                    : "No data found."
                } </p>
                <hr>
                <p class="mb-0"> <b>Memory:</b> ${
                  singlePhoneInfo.others?.USB
                    ? singlePhoneInfo.others?.USB
                    : "No data found."
                } </p>
                
              </div>

            </div>
          </div>
`;
  singlePhone.appendChild(div);
};
