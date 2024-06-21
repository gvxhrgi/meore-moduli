const maincont = document.getElementById("main")
const prodcont = document.getElementById("products");

const arr = fetch("https://api.escuelajs.co/api/v1/products/").then((res) => {
    return res.json()
}).then((res) => {
    console.log(res);
    return res
}).then((res) => {
    for (let i = 0; i < 25; i++) {
        const template = document.createElement("div");
        const img = document.createElement("img")
        const temptitle = document.createElement("p");
        const price = document.createElement("p")

        template.classList.add(`id-${res[i].id}`)
        temptitle.classList.add('title')
        img.classList.add('image')

        img.src = res[i].images[0]
        img.width = "125"
        img.height = "125"

        temptitle.innerText = res[i].title;
        price.innerText = `Price: ${res[i].price} GEL`

        prodcont.appendChild(template)
        template.appendChild(img)
        template.appendChild(temptitle)
        template.appendChild(price)
    }
})