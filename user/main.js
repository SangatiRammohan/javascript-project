let curosoul = document.querySelector(".curosual")
let backbtn1 = document.getElementById("backbtn")
let nextbtn = document.getElementById("frontbtn")

curosoul.addEventListener("wheel", (e) => {
    e.preventDefault();
    curosoul.scrollLeft += e.deltaX;
    curosoul.style.scrollBehavior = "auto"

});

backbtn1.addEventListener("click", () => {
    curosoul.style.scrollBehavior = "smooth"
    curosoul.scrollLeft -= 900
});
frontbtn.addEventListener("click", () => {
    curosoul.style.scrollBehavior = "smooth"
    curosoul.scrollLeft += 900
})




let brands = [{
    "image": "../Canon/Canon-Logo.png",
    "Name": "Canon"
},
{
    "image": "../nikon/nikon-logo.jpeg",
    "Name": "Nikon"
},{
     "image":"../Sony/sony-logo.png"  ,
    "Name": "SONY"
},{
    "image":"../Panasonic/panasonic.jpeg",
    "Name":"Panasonic"
}
]
let newcard =document.getElementById("script")
for(i=0;i<brands.length;i++){
    let card= document.createElement("div")
    card.id="brandsstyles"
    card.innerHTML=
    `<img src=${brands[i].image}  width=200/>
    <p>${brands[i].Name}</p>
   `
   card.style.display="inline-block"
    newcard.append(card) 
}