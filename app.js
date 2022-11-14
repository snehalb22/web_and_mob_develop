
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

function getproductdes(productid){
    
    $(document).ready(()=>{
        $.getJSON('products.json', (data)=>{
            data.forEach((product)=>{
                console.log(product.title+"      "+productid);
               /* if((product.title==document.getElementById("search").value)|| (product.title==document.getElementById("product_img").value))
                {*/
                    console.log("Hi");
                    location.href="./Product-desc.html?id="+productid;
                    
               // }
            });
        });
    });


}
function f1(){
    
    $(document).ready(()=>{
        $.getJSON('products.json', (data)=>{
            data.forEach((product)=>{
                console.log(product.title+" "+document.getElementById("search").value);
                if(product.title==document.getElementById("search").value)
                {
                    
                    location.href="./Product-desc.html?id="+product.id;
                    
                }
            });
        });
    });


}
