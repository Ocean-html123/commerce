const side = document.querySelector(".bar");
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".close");
const bar = document.querySelector(".btn");
const products = document.querySelector(".products");
const pro = document.querySelector(".mobile");
const laptop = document.querySelector(".laptops");
const care = document.querySelector('.skincare')
const Fashion = document.querySelector('.fashion')
const Furniture = document.querySelector('.furniture')
const light = document.querySelector('.light')
const body = document.body
const flex = document.querySelector('footer')
const dark = document.querySelector('.dark')




bar.addEventListener("click", () => {
  side.classList.add("show-sidebar");
  sidebar.classList.add("show-sidebar");
});
btn.addEventListener("click", () => {
  side.classList.remove("show-sidebar");
  sidebar.classList.remove("show-sidebar");
});

const url = "https://dummyjson.com/products?limit=100";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const pro = data.products;
  const slice = pro.slice(10, 25);
  const array = slice
    .map((item) => {
      const { id } = item;
      const { images } = item;
      const image = images[0];
      return ` <img src="${image}" alt="">`;
    })
    .join("");
  products.innerHTML = `${array}`;
};
fetchData();

const link = "https://dummyjson.com/products?limit=100";

const fetchdata = async () => {
  const mobiles = await fetch(link);
  const links = await mobiles.json();
  const andriod = links.products;
  const phone = andriod.slice(0, 5);
  // const phone = andriod.filter((category)=> category === 'laptops')
  // console.log(phone);
  const map = phone.map((item) => {
      // const ocean = item.filter((item) => item === 'laptops')
      const { id } = item;
      const { images } = item;
      const image = images[0];
      return `    <img src="${image}" alt="">`;
    })
    .join("");
  pro.innerHTML = `${map}`;
};
fetchdata();

const laptops = "https://dummyjson.com/products?limit=100";
const fetchlaptops = async () => {
  const response = await fetch(laptops);
  const data = await response.json();
  const pro = data.products;
  const slice = pro.slice(5, 10);
  const array = slice
    .map((item) => {
      const { id } = item;
      const { images } = item;
      const image = images[0];
      return ` <img src="${image}" alt="">`;
    })
    .join("");
  laptop.innerHTML = `${array}`;
};
fetchlaptops();

const skincare = "https://dummyjson.com/products?limit=100";
const fetchskincare = async () => {
  const response = await fetch(skincare);
  const data = await response.json();
  const pro = data.products;
  const slice = pro.slice(11, 20);
  const array = slice.map((item) => {
      const { id } = item;
      const { images } = item;
      const image = images[0];
      return ` <img src="${image}" alt="">`;
    })
    .join("");
  care.innerHTML = `${array}`;
};
fetchskincare()

const fashion = "https://dummyjson.com/products?limit=100"
const fetchFashion = async () =>{
  const response = await fetch(fashion)
  const data = await response.json()
  const pro = data.products;
  const slice = pro.slice(35, 50);
  const array = slice.map((item) => {
      const { id } = item;
      const { images } = item;
      const image = images[0];
      return ` <img src="${image}" alt="">`;
    })
    .join("");
  Fashion.innerHTML = `${array}`;
};
fetchFashion()

const furniture = 'https://course-api.com/javascript-store-products'
const fetchfurniture = async () =>{
  const response = await fetch(furniture)
  const data = await response.json()
 const array = data.map((item) =>{
  const{name} = item.fields
  const{company} = item.fields
  const {price} = item.fields
  const{url:images} = item.fields.image[0]
  return ` <img src="${images}" alt="">`;
 }).join('')
 Furniture.innerHTML = `${array}`
}
fetchfurniture()