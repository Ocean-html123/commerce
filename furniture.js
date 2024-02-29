const side = document.querySelector(".bar");
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".close");
const bar = document.querySelector(".btn");
const pro = document.querySelector('.product')
const color = document.querySelector('.color')



bar.addEventListener("click", () => {
    side.classList.add("show-sidebar");
    sidebar.classList.add("show-sidebar");
  });
  btn.addEventListener("click", () => {
    side.classList.remove("show-sidebar");
    sidebar.classList.remove("show-sidebar");
  });

  
const url = "https://course-api.com/javascript-store-products";

const fetchData = async ()=>{
  const response = await fetch(url)
  const data = await response.json()
const products = data.map((item) =>{
  const{name} = item.fields
 const{price} = item.fields
 const{company} = item.fields
//  const{colors} = item.fields
 const{url:image} = item.fields.image[0]

 return `    <div >
 <div class="img-container"><img src="${image}" alt=""></div>
 <p><span>Name:</span> ${name}</p>
 <p><span>Price:</span> $${price}</p>
 <p><span>Company:</span> ${company}</p>
</div>`
}).join('')
pro.innerHTML = `${products}`
}

fetchData()
