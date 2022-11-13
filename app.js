
/*document.querySelector("#reserve").addEventListener("click", function () {

    document.querySelector(".my-popup").classList.add("active");


});*/

function displayform(){
    document.querySelector(".my-popup").classList.add("active");
}
document.querySelector(".my-popup .close-btn").addEventListener("click",function(){
    document.querySelector(".my-popup").classList.remove("active");

});

/*Product Description Page*/

function Description() {
    var myWindow=window.open("Product-desc.html","_self");
}

