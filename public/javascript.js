//Objects
const object = [
  {
    id: randomIdGen(),
    name: "apple_1",
    price: 600,
    img: "../public/img/apple_1.jpg",
    isInStock: true,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_2",
    price: 710,
    img: "../public/img/apple_2.jpg",
    isInStock: false,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_3",
    price: 660,
    img: "../public/img/apple_3.jpg",
    isInStock: true,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_4",
    price: 370,
    img: "../public/img/apple_4.jpg",
    isInStock: true,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_5",
    price: 560,
    img: "../public/img/apple_5.jpg",
    isInStock: true,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_55",
    price: 450,
    img: "../public/img/apple_6.jpg",
    isInStock: true,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_44",
    price: 720,
    img: "../public/img/apple_7.jpg",
    isInStock: false,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_33",
    price: 600,
    img: "../public/img/apple_8.jpg",
    isInStock: true,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_22",
    price: 850,
    img: "../public/img/apple_2.jpg",
    isInStock: true,
    inCart: false,
    quantity: 1,
  },
  {
    id: randomIdGen(),
    name: "apple_11",
    price: 1000,
    img: "../public/img/apple_4.jpg",
    isInStock: true,
    inCart: false,
    quantity: 1,
  },
];

// initialization () =>
let count = 0;
let editedId = "";

homeButton();
createObject();
window.onload = render;

//Render watches from Object
function render() {
  let content = "";

  for (let i = 0; i < object.length; i++) {
    if (object[i].inCart === false) {
      content += `
        <div class="wrapper">
         <div class="watch">
         <img src="${
           object[i].img
         }" alt="watch" class="image" data-productid='${object[i].id}' />
         <div class="overlay">
         <div class="text">Add to cart</div>
         </div>
         </div>
         <div class="details">
         <p>${object[i].name}</p>
         <p>${object[i].price} £</p>
          <p class="${
            object[i].isInStock === true ? "isInStock" : "isInStockFalse"
          }">${object[i].isInStock === true ? "In Stock" : "Out of Stock"}</p>
        </div>
        <div class="editAndDelete">
        <button class="editButton" data-productid='${
          object[i].id
        }'>Edit</button>  
        <button class="deleteButton" data-productid='${
          object[i].id
        }'>Delete</button>
        </div>
      </div>`;
    }
  }
  document.querySelector(
    ".parallax.top"
  ).innerHTML = `<div class="parallax top">
      <div class="container">
        <div class="search">
          <input
            type="text"
            placeholder="Search watches..."
            autocomplete="off"
            name="searchValue"
          />
          <button type="submit"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </div>`;

  const main = document.getElementsByTagName("main")[0];
  main.classList.remove("mainClass");
  main.innerHTML = content;

  //renderCount();
  addItems();
  checkBag();
  searchPhones();
  deleteWatch();
  editWatch();
}
//Add items and increment count than renderCount
function addItems() {
  const watches = document.querySelectorAll(".watch");
  for (let i = 0; i < watches.length; i++) {
    watches[i].addEventListener("click", (event) => {
      //count();
      //renderCount();
      let id = event.target.dataset.productid;
      let index = object.findIndex((obj) => obj.id == id);

      if (object[index].isInStock == true) {
        count++;
        document.querySelector(".badge").textContent = `${count}`;

        object[index].inCart = true;
        render();
      } else {
        alert("Out of Stock");
      }
    });
  }
}
//Home button -> Render the watches
function homeButton() {
  document.querySelector("#home").onclick = function () {
    render();
  };
}
//Create button ->
function createObject() {
  document.querySelector("#create").onclick = function () {
    const main = document.getElementsByTagName("main")[0];
    const parallax = document.querySelector(".parallax.top");
    parallax.innerHTML = `<div class="container"></div>`;
    let content = `
    <form id="createForm">
    <h1>Create your own Watch</h1>  
     <div><input type="text" name="name" autocomplete="off" placeholder="Name" required></div>
     <div><input type="number" name="price" autocomplete="off" placeholder="Price" min="0" required></div>
     <div><input type="radio" name="isInStock" value="true" id="true" checked><label for="true">In Stock</label>
     <input type="radio" name="isInStock" value="false" id="false"><label for="false">Out of Stock</label></div>
     <select name="img">
     <option value="../public/img/apple_1.jpg" selected> apple_1 </option>   
     <option value=../public/img/apple_2.jpg"> apple_2 </option>
     <option value=../public/img/apple_3.jpg"> apple_3 </option>
     <option value="../public/img/apple_4.jpg"> apple_4 </option>
     <option value="../public/img/apple_5.jpg"> apple_5 </option>
   </select>
     <div><input type="submit" id="createObject" value="Create"></div>
     <span class="success">You created a new Watch...</span>
    </form>`;

    main.classList.add("mainClass");
    main.innerHTML = content;

    const form = document.querySelector("#createForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let name = event.target.elements.name.value.toLowerCase();
      let price = Number(event.target.elements.price.value);
      let isInStock = event.target.elements.isInStock.value;
      let img = event.target.elements.img.value;

      if (isInStock == "true") {
        isInStock = true;
      } else {
        isInStock = false;
      }
      object.push({
        id: randomIdGen(),
        name: name,
        price: price,
        img: img,
        isInStock: isInStock,
        inCart: false,
        quantity: 1,
      });

      const success = document.querySelector(".success");

      success.classList.add("timeout");
      setTimeout(() => {
        success.classList.remove("timeout");
      }, 3000);

      event.target.elements.name.value = event.target.elements.price.value = "";
      event.target.elements.isInStock = true;
    });
  };
}
//Search watches from input. Detailed and accurate
function searchPhones() {
  const button = document.getElementsByTagName("button")[0];
  let searchValue = document.getElementsByTagName("input")[0];
  let filteredValue = "";

  searchValue.addEventListener("keyup", (event) => {
    filteredValue = object.filter(
      (e) =>
        e.name.includes(searchValue.value.toLowerCase()) && e.inCart === false
    );

    let newContent = "";
    for (elem of filteredValue) {
      newContent += `
          <div class="wrapper">
           <div class="watch">
           <img src="${elem.img}" alt="watch" class="image" data-productid='${
        elem.id
      }' />
           <div class="overlay">
           <div class="text">Add to cart</div>
           </div>
           </div>
           <div class="details">
            <p>${elem.name}</p>
            <p>${elem.price} £</p>
            <p class="${
              elem.isInStock === true ? "isInStock" : "isInStockFalse"
            }">${elem.isInStock === true ? "In Stock" : "Out of Stock"}</p>
          </div>
          <div class="editAndDelete">
          <button class="editButton" data-productid='${elem.id}'>Edit</button>  
          <button class="deleteButton" data-productid='${
            elem.id
          }'>Delete</button>
          </div>
        </div>`;
    }

    const main = document.getElementsByTagName("main")[0];
    main.classList.remove("mainClass");
    main.innerHTML = newContent;
    addItems();
    deleteWatch();
    editWatch();
  });
}

//Delete Watch
function deleteWatch() {
  const deleteButton = document.querySelectorAll(".deleteButton");

  for (deleteB of deleteButton) {
    deleteB.addEventListener("click", (event) => {
      //Get id of each elements and then find an index
      const myId = event.target.dataset.productid;
      const index = object.findIndex((elem) => elem.id === myId);

      //Delete an object by index
      object.splice(index, 1);
      render();
    });
  }
}

//Edit Watch
function editWatch() {
  const editButton = document.querySelectorAll(".editButton");
  const parallax = document.querySelector(".parallax.top");

  for (editB of editButton) {
    let content = "";
    editB.onclick = (event) => {
      const myId = event.target.dataset.productid;
      const index = object.findIndex((elem) => elem.id === myId);

      editedId = myId;

      parallax.innerHTML = `<div class="container"></div>`;

      let content = "";
      content = `
        <div class="wrapper">
         <div class="watch">
         <img src="${
           object[index].img
         }" alt="watch" class="image" data-productid='${object[index].id}' />
         <div class="overlay">
         <div class="text">Add to cart</div>
         </div>
         </div>
         <div class="details">
         <input type="text" value="${
           object[index].name
         }" name="name" autocomplete="off">
         <input type="number" min="0" value="${
           object[index].price
         }" name="price" autocomplete="off"</p>
         <input type="radio" name="isInStock" value="true" id="true" ${
           object[index].isInStock === true ? "checked" : ""
         }><label for="true">In Stock</label>
         <input type="radio" name="isInStock" value="false" id="false" ${
           object[index].isInStock === false ? "checked" : ""
         }><label for="false">Out of Stock</label>
        </div>
        <div class="editAndDelete">
        <button class="editButton" data-productid='${
          object[index].id
        }'>Done</button>  
        </div>
      </div>`;

      const main = document.getElementsByTagName("main")[0];
      main.classList.remove("mainClass");
      main.innerHTML = content;

      const name = document.querySelector('input[name="name"]');
      const price = document.querySelector('input[name="price"]');
      name.style.width = "100%";
      price.style.width = "100%";

      const watch = document.querySelector(".details");
      const doneButton = document.querySelector(".editButton");
      doneButton.addEventListener("click", () => {
        let changeName = watch.children[0].value.toLowerCase();
        let changePrice = Number(watch.children[1].value);
        let changeIsInStock = watch.children.isInStock.checked;

        object[index] = {
          id: editedId,
          name: changeName,
          price: changePrice,
          img: object[index].img,
          isInStock: changeIsInStock,
          inCart: false,
          quantity: 1,
        };
        editedId = "";
        render();
      });
    };
  }
}

//( 0 ) -> Check bag and render those what we picked
function checkBag() {
  document.querySelector(".bag").addEventListener("click", () => {
    renderBag();
  });
}
//Render those what we picked
function renderBag() {
  const parallax = document.querySelector(".parallax.top");
  parallax.innerHTML = `<div class="container"></div>`;

  let sumAvg = 0;
  let total = 0;
  let content = "";

  for (let i = 0; i < object.length; i++) {
    if (object[i].inCart === true) {
      content += `
      <table>
      <tr>
        <th>Product</th>
        <th>Price</th>         
        <th>Qauantity</th>
        <th>Total</th>
        <th></th>
      </tr> 
      <tr>
        <td class="item"><img src="${
          object[i].img
        }" alt="Watch" class="image" style="width:10vw"/><p>${
        object[i].name
      }</p></td>
        <td>${object[i].price} £</td>
        <td><button class="minus" data-productid="${
          object[i].id
        }"><</button><span>${
        object[i].quantity
      }</span><button class="plus" data-productid="${
        object[i].id
      }">></button></td>
        <td>${(sumAvg = object[i].price * object[i].quantity)} £</td>
        <td><button class="deleteBtn" data-productid="${
          object[i].id
        }">Delete</button></td>
      </tr>
        </table>`;

      total += object[i].price * object[i].quantity;
    }
  }

  content += `<div class="avg"> 
  <p>Basket Total:</p>
  <p id="total">${total} £</p>
  <button>Buy</button>
  </div>`;

  const main = document.getElementsByTagName("main")[0];
  main.classList.add("mainClass");
  main.innerHTML = content;

  deleteObject();
  increase();
  decrease();
}
//Delete an object
function deleteObject() {
  let deleteButton = document.querySelectorAll(".deleteBtn");
  for (elem of deleteButton) {
    elem.onclick = function (event) {
      const id = event.target.dataset.productid;
      const myIndex = object.findIndex((elem) => elem.id == id);

      count--;
      document.querySelector(".badge").textContent = `${count}`;
      object[myIndex].inCart = false;
      renderBag();
    };
  }
}
//Increase quantity
function increase() {
  let plus = document.querySelectorAll(".plus");
  for (elem of plus) {
    elem.onclick = function (event) {
      const id = event.target.dataset.productid;
      const myIndex = object.findIndex((elem) => elem.id == id);

      object[myIndex].quantity++;
      renderBag();
    };
  }
}
//Decrese quantity
function decrease() {
  let minus = document.querySelectorAll(".minus");
  for (elem of minus) {
    elem.onclick = function (event) {
      const id = event.target.dataset.productid;
      const myIndex = object.findIndex((elem) => elem.id == id);

      if (object[myIndex].quantity > 0) {
        object[myIndex].quantity--;
      }
      renderBag();
    };
  }
}
//Visaul effect
function visualEffect() {
  const paragraf = document.querySelector(".visualEffectoff");
  const paragrafPosition = paragraf.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (paragrafPosition < screenPosition) {
    paragraf.classList.add("on");
  } else {
    paragraf.classList.remove("on");
  }
}
window.addEventListener("scroll", visualEffect);
//Random ID generator
function randomIdGen() {
  /*
      CREATE A MULTI DIMENSION ARRAY[0][0]
      CREATE EMPTY STRING "" where you want to add the random values
      LOOP ONCE - NOT NEED BUT LATER MAYBE EASIER IF NEED IT
      ADD THE RANDOM NUMBER TO YOUR STRING
      INSIDE THE FIRST LOOP START ANOTHER FOR (5) - 1+5 = 6 VALUES
      TERNARY OPERATOR AFTER 3 CHAR ADD - OR NOTHING
      RETURN THE VALUE TO USE IN OBJECTS
    */
  const rnd = [
    ["A", "B", "C", "D", "E", "F"],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];
  let myNum = "";
  for (let one = 0; one < 2; one++) {
    let random = Math.floor(Math.random() * rnd[0].length);
    myNum += rnd[0][random];

    for (let i = 0; i < 2; i++) {
      let random2 = Math.floor(Math.random() * rnd[1].length);
      i == 1 ? (myNum += rnd[1][random2] + "-") : (myNum += rnd[1][random2]);
    }
  }

  let myNumSub = myNum.substr(0, 7);
  //console.log(myNumSub);
  return myNumSub;
}
