

//----------------------- add Product ---------------------------------

var contanierDiv = document.getElementById("add");

//--- Array Of Object

let arrOfProduct = [
  {
    proudctKind:"prod women",
    image: "Images/pruduct4.1.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "Pantalon",
    productPrice: "$70",
  },
  {
    proudctKind:"prod women",
    image: "Images/pruduct5.1.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "Shose",
    productPrice: "$70",
  },
  {
    proudctKind:"prod men",
    image: "Images/menProd1.jpeg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt",
    productPrice: "$70",
  },
  {
    proudctKind:"prod men",
    image: "Images/menProd12.jpeg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt",
    productPrice: "$70",
  },
  {
    proudctKind:"prod women",
    image: "Images/pruduct3.3.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt..Pantalon",
    productPrice: "$70",
  },
   {
    proudctKind:"prod men",
    image: "Images/menProd11.jpeg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt",
    productPrice: "$70",
  },
  {
    proudctKind:"prod women",
    image: "Images/pruduct2.4.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "Pantalon",
    productPrice: "$70",
  },
  {
    proudctKind:"prod men",
    image: "Images/menProd10.jpeg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt",
    productPrice: "$70",
  },
  {
    proudctKind:"prod women",
    image: "Images/pruduct5.2.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "Shose",
    productPrice: "$70",
  },
  {
    proudctKind:"prod men",
    image: "Images/pruduct6.1.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt..Short",
    productPrice: "$70",
  },
  {
    proudctKind:"prod women",
    image: "Images/pruduct7.2.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "Bag",
    productPrice: "$70",
  },
  {
    proudctKind:"prod men",
    image: "Images/menProd1.jpeg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt",
    productPrice: "$70",
  },
  {
    proudctKind:"prod women",
    image: "Images/pruduct5.4.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "Shose",
    productPrice: "$70",
  },
  {
    proudctKind:"prod men",
    image: "Images/menProd14.jpeg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt",
    productPrice: "$70",
  },
  {
    proudctKind:"prod women",
    image: "Images/pruduct3.3.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt..pantalon",
    productPrice: "$70",
  },
  {
    proudctKind:"prod men",
    image: "Images/menProd13.jpeg",
    ProductCompany: "adidas",
    nameOfProduct: "T-Shirt",
    productPrice: "$70",
  },
  {
    proudctKind:"prod women",
    image: "Images/pruduct4.4.jpg",
    ProductCompany: "adidas",
    nameOfProduct: "pantalon",
    productPrice: "$70",
  },
];

//---------------------function to add Product ----------------------

function createWomenProudct() {
  for (let i = 0; i < arrOfProduct.length; i++) {
    console.log("ahmed elkady");
    var firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", arrOfProduct[i].proudctKind);
    var imageOfProduct = document.createElement("img");
    imageOfProduct.setAttribute("src", arrOfProduct[i].image);
    firstDiv.appendChild(imageOfProduct);

    var secondDiv = document.createElement("div");
    secondDiv.setAttribute("class", "desc");
    firstDiv.appendChild(secondDiv);

    var companyName = document.createElement("span");
    companyName.textContent = arrOfProduct[i].ProductCompany;
    secondDiv.appendChild(companyName);

    var productName = document.createElement("h5");
    productName.textContent = arrOfProduct[i].nameOfProduct;
    secondDiv.appendChild(productName);

    var starDiv = document.createElement("div");
    starDiv.setAttribute("class", "star");
    secondDiv.appendChild(starDiv);

    var goldStar1 = document.createElement("i");
    goldStar1.setAttribute("class", "fas fa-star");
    starDiv.appendChild(goldStar1);

    var goldStar2 = document.createElement("i");
    goldStar2.setAttribute("class", "fas fa-star");
    starDiv.appendChild(goldStar2);

    var goldStar3 = document.createElement("i");
    goldStar3.setAttribute("class", "fas fa-star");

    starDiv.appendChild(goldStar3);

    var goldStar4 = document.createElement("i");
    goldStar4.setAttribute("class", "fas fa-star");

    starDiv.appendChild(goldStar4);
    var goldStar5 = document.createElement("i");
    goldStar5.setAttribute("class", "fas fa-star");

    starDiv.appendChild(goldStar5);

    var priceOfProduct = document.createElement("h4");
    priceOfProduct.textContent = arrOfProduct[i].productPrice;
    secondDiv.appendChild(priceOfProduct);

    var btnBuy = document.createElement("a");
    btnBuy.setAttribute("href", "");
    firstDiv.appendChild(btnBuy);

    var iconBuy = document.createElement("i");
    iconBuy.setAttribute("class", "fal fa-shopping-cart cart");
    btnBuy.appendChild(iconBuy);
    contanierDiv.appendChild(firstDiv);
  }
}

createWomenProudct();


//----------------- filter product --------------------------

const btnProd = document.querySelectorAll(".btn-Prod");
const allProud = document.querySelectorAll(".prod");

for (i = 0; i < btnProd.length; i++) {
  btnProd[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    allProud.forEach((proudct) => {
      if (filter == "all") {
        proudct.style.display = "block";
      } else {
        if (proudct.classList.contains(filter)) {
          proudct.style.display = "block";
        } else {
          proudct.style.display = "none";
        }
      }
    });
  });
}


//--------------------------------- slider ---------------------------

var currentImage = 1;
var timer;
var imageArrye = [];

imageArrye[1] = "./Images/slid1.jpg";
imageArrye[2] = "./Images/slid2.jpg";
imageArrye[3] = "./Images/slid3.jpg";
imageArrye[4] = "./Images/slid11.jpg";
imageArrye[5] = "./Images/slid4.jpg";
imageArrye[6] = "./Images/slid13.jpg";
imageArrye[0] = "./Images/slid15.jpg";
imageArrye[7] = "./Images/slid14.jpg";


function moveImageLeft() {
  currentImage++;
  if (currentImage > 7) {
    currentImage = 0;
  }
  document.querySelector("#img").src = imageArrye[currentImage];
}

function moveImageRight() {
  if (currentImage <= 0) {
    currentImage = 7;
  }
  currentImage--;
  document.querySelector("#img").src = imageArrye[currentImage];
}



//---------------------------------- button Top -----------------------

var mybutton = document.getElementById("myBtn");


function gotoTop() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//--------------------------------------------------------