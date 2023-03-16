import productsData from "./data.js";

let prodCardCode = "";
let styleCode = "";
for (let i = 0; i < productsData.length; i++) {
    let imgsList = "";
    let dotsList = "";
    let imgCount = productsData[i].imgs.length > 5 ? 5 : productsData[i].imgs.length;
    for (let j = 0; j < imgCount; j++) {
        let non = "";
        let bg = ""
        if (j !== 0) {
            non = "d-none";
            bg = "rgba(255, 255, 2, 0.49)"

        }
        else {
            non = "";
            bg = "rgb(239, 215, 6)";
        }
        imgsList += `<div class="slider-item ${non}">
        <img src="img/img_Category/${productsData[i].imgs[j]}" />
      </div>`;
        dotsList += `<div class="slider-dots-item" style="background-color:${bg};" onclick="dotClick('${i}-${j}')"></div>`
    }
    prodCardCode += `<div class="col product-card p-2">
    <div class="p-2 bg-white h-100">
      <div class="slider-main">
        ${imgsList}
        <div class="slider-dots d-flex flex-row justify-content-center">
          ${dotsList}
        </div>
      </div>
      <h6 class="prod-card-title">
        ${productsData[i].title}
      </h6>
      <div class="d-flex flex-row">
        <p>EGP</p>
        <h6 class="px-2 fw-bold">${productsData[i].price}</h6>
      </div>
      <div class="d-flex flex-row flex-wrap justify-content-between">
        <div class="express-badge my-2">express</div>
        <div class="d-flex flex-row my-2">
          <div class="prod-rate">
            ${productsData[i].rate}
            <i class="bi bi-star-fill"></i>
          </div>
          <div class="p-1 text-secondary">(${productsData[i].numberOfRate})</div>
        </div>
      </div>
    </div>
  </div>`

}
document.getElementById('products-list').innerHTML = prodCardCode;
