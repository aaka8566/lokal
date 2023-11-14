

//fetching data
async function resdata(id){
    let res=await fetch(`https://dummyjson.com/products/${id}`);
    let res1=await res.json();
    console.log(res1);
     printdata(res1); 
    };
//fetching data

//appending data from api
function printdata(data){
    let maindiv=document.querySelector(".singleproddiv");
        
   let imgdiv=document.createElement("div");
   imgdiv.setAttribute("class","imgdiv");
   let image=document.createElement("img");
   image.setAttribute("src",data.images[0]);
   image.setAttribute("alt","error");
   image.setAttribute("class","image");
imgdiv.append(image);
   let infodiv=document.createElement("div");
   infodiv.setAttribute("class","infodiv");
let title=document.createElement("div");
title.innerText=data.title;
let brand=document.createElement("div");
brand.innerText=data.brand;

let pricedisc=document.createElement("div");
pricedisc.setAttribute("class","pricedisc");
let price=document.createElement("div");
price.innerText="M.R.P"+" "+"₹"+data.price;
let discountpercent=document.createElement("div");
discountpercent.innerText=data.discountPercentage+"% OFF";
discountpercent.setAttribute("class","discountpercent");
let rating=document.createElement("div");
    rating.setAttribute("class","rating");
    //  rating.innerText=data.rating+"★";
let ratingp=document.createElement("div");
ratingp.innerText=data.rating+"★";
ratingp.setAttribute("class","ratingp");
rating.append(ratingp);
     pricedisc.append(price,discountpercent);
 infodiv.append(title,brand,pricedisc,rating);

   let description=document.createElement("div");
   description.setAttribute("class","description");

let desc=document.createElement("div");
desc.innerText="Description"+":"+"  "+data.description;
let category=document.createElement("div");
category.innerText="Category"+":"+" "+data.category;
let stock=document.createElement("div");
stock.innerText="Stock"+":"+" "+data.stock;
description.append(desc,category,stock);
    maindiv.append(imgdiv,infodiv,description)
 }
//appending data from api




//invoking on loadup
window.onload=()=>{
   //catching singleproductid from local storage
let prodid=JSON.parse(localStorage.getItem("productid"));
console.log(prodid);
//catching singleproductid from local storage
if(prodid){
    resdata(prodid);
}
else{
    window.location.href="index.html";
}
}
//invoking on loadup