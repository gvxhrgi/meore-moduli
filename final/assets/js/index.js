const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const productWrapper = document.getElementById("products");

const products = fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      const item = document.createElement("product-card");
      item.classList.add(`id-${res[i].id}`);
      productWrapper.appendChild(item);

      const card = document.getElementsByClassName("card");
      productWrapper.appendChild(card[i]);

      item.remove();

      const prodtitle = document.getElementsByClassName("prod-title");
      prodtitle[i].innerText = res[i].title;

      // const proddesc = document.getElementsByClassName("prod-desc");
      // proddesc[i].innerText = res[i].description;

      const prodprice = document.getElementsByClassName("price");
      prodprice[i].innerText = `${res[i].price} GEL`;

      const thumbnail = document.getElementsByClassName("thumbnail");
      thumbnail[i].src = res[i].image;

      const morebtn = document.getElementsByClassName("btn-open");
      morebtn[i].classList.add(`id-${i}`);

      const title2 = document.querySelector(".prodTitle2");
      const price2 = document.querySelector(".price2");
      const img2 = document.querySelector(".img2");
      const desc2 = document.querySelector(".desc2");
      const rating = document.querySelector(".rating");

      morebtn[i].addEventListener("click", function () {
        title2.innerText = res[i].title;
        price2.innerText = `${res[i].price} GEL`;
        rating.innerText = `Rating: ${res[i].rating.rate} / 5 (${res[i].rating.count} Votes)`;
        desc2.innerHTML = res[i].description;
        img2.src = res[i].image;

        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
      });
    }
  });

const buybtn = document.querySelector(".btn.buy");
const closebtn = document.querySelector(".btn.close");

buybtn.addEventListener("click", function () {
  console.log("buy");
});

closebtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

window.onclick = (e) => {
  if (e.target == modal) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }        
}