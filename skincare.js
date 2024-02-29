const side = document.querySelector(".bar");
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".close");
const bar = document.querySelector(".btn");
const pro = document.querySelector('.product')


bar.addEventListener("click", () => {
    side.classList.add("show-sidebar");
    sidebar.classList.add("show-sidebar");
  });
  btn.addEventListener("click", () => {
    side.classList.remove("show-sidebar");
    sidebar.classList.remove("show-sidebar");
  });

  
const url = "https://dummyjson.com/products?limit=100";

const fetchData = async ()=>{
  const response = await fetch(url)
  const data = await response.json()
  const top = data.products
  const slice = top.slice(11,20)
const products = slice.map((item) =>{
  const{title} = item
 const{price} = item
 const{brand} = item
 const{images} = item
const image = images[0]

 return `    <div class="">
 <img src="${image}" alt="">
 <p><span>Name:</span> ${title}</p>
 <p><span>Price:</span> $${price}</p>
 <p><span>Brand:</span> ${brand}</p>
</div>`
}).join('')
pro.innerHTML = `${products}`
}

fetchData()