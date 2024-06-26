class customheader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar">
    <script src="./assets/js/hamburger.js"></script>
  <a href="#" class="nav-logo">Test Website</a>
  <ul class="nav-menu">
    <li class="nav-item">
      <a href="./" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
      <a href="./products.html" class="nav-link">Products</a>
    </li>
    <li class="nav-item">
      <a href="./profile.html" class="nav-link">Profile</a>
    </li>
  </ul>
  <div class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</nav>`;
  }
}

class productCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="card">
    <img class="thumbnail" src="" alt="preview img"/>
    <div class="card-body">
        <div class="text-container">
            <h2 class="prod-title">Card Title</h2>  
        </div>
        <p class="price">123</p>
        <a href="#details" class="btn-readmore btn btn-open">Read More</a>
    </div>
</div>`;
  }
}

class customModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="split-screen modal hidden">
      <div class="left-pane">
        <img class="img2" src="" alt="" />
      </div>
      <div class="right-pane">
        <h2 class="prodTitle2">Title Placeholder</h2>
        <p class="desc2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          animi, alias, iure iste deserunt distinctio molestiae corporis,
          aperiam ad deleniti harum voluptatibus? Quibusdam mollitia voluptas
          iste. Maxime voluptates cumque nobis.
        </p>
        <p class="price2">123</p>
        <p class="instock">Out Of Stock</p>
        <p class="rating"></p>
        <button class="btn close">GO BACK</button>
        <button class="btn buy">Buy</button>
      </div>
  </div>  `;
  }
}

customElements.define("custom-header", customheader);
customElements.define("product-card", productCard);
customElements.define("custom-modal", customModal);
