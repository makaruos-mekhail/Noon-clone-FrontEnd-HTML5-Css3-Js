function displayImg(idx) {
    var mainImg = document.getElementById("main-product-img");
    var selectedImg = document.getElementById(idx);
    mainImg.src = selectedImg.src;
}


function changefavButtobColor(x) {
    // console.log(x.style.color);
    if (x.style.color === "rgb(170, 184, 194)") {
      x.style.color = "rgb(226, 38, 77)";
      console.log(x.style.color);
    } else {
      x.style.color = "#AAB8C2";
    }
}