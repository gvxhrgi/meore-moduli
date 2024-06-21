const todolist = document.getElementById("todolist-main")
const list = document.getElementById("list")

const api = fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
    return result.json()
}).then((result) => {
    for(let i = 0; i < result.length; i++){
        const div = document.createElement("div");
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const a = document.createElement("a");
        const checkbox = document.createElement("input");

        list.appendChild(div)
        div.appendChild(ul)
        ul.appendChild(li)
        li.appendChild(checkbox)
        li.appendChild(a)
        
        a.innerText = result[i].title
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = result[i].completed

        div.classList.add(`id-${result[i].id}`)

        // console.log(result[i].completed);
    }
})