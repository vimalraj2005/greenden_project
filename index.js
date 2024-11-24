var sidenav = document.getElementById("sidenav")
var closenav= document.getElementById("closenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function(){
     sidenav.style.right=0
})
closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})

//product search funtionality

var products= document.getElementById("product-container")
var productlist= products.querySelectorAll("div")
var search = document.getElementById("searchbar")
var novalue = document.getElementById("nosuchcontent")

search.addEventListener("keyup",function(){
    var enteredvalue = this.value.toUpperCase()
for (count = 0; count < productlist.length; count = count+1) {
    var productname= productlist[count].querySelector("h1").textContent
    if (productname.toUpperCase().indexOf(enteredvalue)<0) 
        {
        productlist[count].style.display="none"
        novalue.textContent="Search a correct value...!"

    }
    else{
        productlist[count].style.display="block"
    }
}
})
