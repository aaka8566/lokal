//fetching data
async function resdata(){
    let res=await fetch(`https://dummyjson.com/products`);
    let res1=await res.json();
    console.log(res1);
    printdata(res1.products); 
    };
//fetching data


//appending data from api
function printdata(data){
    let maindiv=document.querySelector(".maindiv");
    data.map((el)=>{
        let singlediv=document.createElement("div");
        singlediv.setAttribute("class","singlediv");
    let imgdiv=document.createElement("div");
    imgdiv.setAttribute("class","imgdiv");
    let image=document.createElement("img");
    image.setAttribute("src",el.images[0]);
    image.setAttribute("alt","error");
    image.setAttribute("class","image");
    
    let infodiv=document.createElement("div");
    infodiv.setAttribute("class","infodiv");
    let title=document.createElement("div");
    title.innerText=el.title;
    let brand=document.createElement("div");
    brand.innerText=el.brand;
    let price=document.createElement("div");
    price.innerText="M.R.P"+" "+"₹"+el.price;
    price.setAttribute("class","price");
    let rating=document.createElement("div");
    rating.setAttribute("class","rating");
    // rating.innerText=el.rating+"★";
    let p1=document.createElement("div");
    p1.innerText=el.rating+"★";;
    rating.append(p1); 
    p1.setAttribute("class","ratingp");
    
    let discpercent=document.createElement("div");
    discpercent.innerText=el.discountPercentage+"%"+"off";
    discpercent.setAttribute("class","discpercent");
    imgdiv.append(image);

    let maininfodiv=document.createElement("div");
    maininfodiv.setAttribute("class","maininfodiv");
    maininfodiv.append(title,brand,price,rating);
    infodiv.append(maininfodiv);
    singlediv.append(imgdiv,infodiv,discpercent);
    maindiv.append(singlediv);
    
//onclick event
singlediv.addEventListener("click",()=>{
    localStorage.setItem("productid",JSON.stringify(el.id));
    window.location.href="./singleproduct.html";
    console.log("href");
    })
    
//onclick event
    })
}
//appending data from api

//invoking on loadup
window.onload=()=>{
    resdata();
}
//invoking on loadup