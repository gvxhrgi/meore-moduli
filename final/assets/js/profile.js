const details = document.querySelector(".details");

const pic = document.querySelector(".image");

const name = document.querySelector(".name");
const lastname = document.querySelector(".lastname");
const email = document.querySelector(".email");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");
const ip = document.querySelector(".ip");
const pass = document.querySelector(".password");
const phone = document.querySelector(".phone");
const birthdate = document.querySelector(".birthdate");
const city = document.querySelector(".city");
const state = document.querySelector(".state");
const address = document.querySelector(".address");

const userapi = fetch("https://dummyjson.com/users/1")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
    pic.src = `${res.image}`;

    name.innerText = `Your Name: ${res.firstName}`;
    lastname.innerText = `Your Surname: ${res.lastName}`;
    gender.innerText = `Your Gender: ${res.gender}`;
    phone.innerText = `Your Phone: ${res.phone}`;
    email.innerText = `Your E-Mail: ${res.email}`;
    birthdate.innerText = `Your Birt Date: ${res.birthDate}`;
    city.innerText = `Your City: ${res.address.city}`;
    state.innerText = `Your State: ${res.address.state}`;
    address.innerText = `Your Address: ${res.address.address}`;
    pass.innerText = `Your Password: ${res.password}`;
    age.innerText = `Your Age: ${res.age}`;
    ip.innerText = `Your IP Address: ${res.ip}`;

    // console.log(res.keys());

    // for(let i = 0; i < Object.keys(res).length; i++){
    //     console.log(res);

    //     const createdP = document.createElement('p')
    //     createdP.classList.add(`${Object.keys(res)[i]}`)

    //     createdP.innerText = `${Object.keys(res)[i]}: ${Object.values(res)[i]}`

    //     details.appendChild(createdP)
    // }
  });
