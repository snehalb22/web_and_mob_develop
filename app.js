
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

/*function Description() {
    var myWindow=window.open("Product-desc.html","_self");
}*/

function getproductdes(productid){
    
    $(document).ready(()=>{
        $.getJSON('products.json', (data)=>{
            data.forEach((product)=>{
                console.log(product.title+"      "+productid);
               /* if((product.title==document.getElementById("search").value)|| (product.title==document.getElementById("product_img").value))
                {*/
                    //console.log("Hi");
                    location.href="./Product-desc.html?id="+productid;
                    
               // }
            });
        });
    });


}
function find(){
    
    $('.shopcontent').html("");
    if(document.getElementById("search").value=="")
    {
    $(document).ready(()=>{
        $.getJSON('products.json', (data)=>{
            data.forEach((product)=>{
                console.log(product.title+" "+document.getElementById("search").value);
                
                    
                    
                    var productEl = '<div class= "conatiner">'+'<div class="product">'+
                    '<img src="'+product.img1+'"alt="" width="100%" height="60%" id="product_img" class="product-img" onclick="getproductdes('+product.id+')">'+
                    '<div class="product_details">'+
                    '<h4 class="product-title">'+product.title+'</h4>'+
                    '<div class="productprice">'+
                    '<span class="price">'+product.price+'</span>'+
                    '<button type="button" id="reserve'+product.id+'" margin="5px" onclick="displayform()">Reserve</button>'+
                    '</div>'+'</div>'+
                    '</div>'
                '</div>';
                    $('.shopcontent').append(productEl);
                    
                
               
            });
        });
    });
}
else
{
    console.log("he");
    $(document).ready(()=>{
        $.getJSON('products.json', (data)=>{
            data.forEach((product)=>{
               // console.log(product.title+" "+document.getElementById("search").value);
               if(product.title.substring(0,2).toLowerCase()==document.getElementById("search").value.substring(0,2).toLowerCase())
               {
                    
                    
                    var productEl = '<div class= "conatiner-search">'+'<div class="product-search">'+
                    '<img src="'+product.img1+'"alt="" width="100%" height="100%" margin-left="50px" id="product_img" class="product-img-search" onclick="getproductdes('+product.id+')">'+
                    '<div class="product_details" width="50px">'+
                    '<h4 class="product-title">'+product.title+'</h4>'+
                    '<div class="productprice">'+
                    '<span class="price">'+product.price+'</span>'+
                    '<button type="button" id="reserve'+product.id+'" margin="5px" onclick="displayform()">Reserve</button>'+
                    '</div>'+'</div>'+
                    '</div>'
                '</div>';
                    $('.shopcontent').append(productEl);
                    
                }
               
            });
        });
    });
}

    
}

function validation(){

    //alert("Product is Reserved");
    
    var name =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var phoneno =document.getElementById("phoneno").value;
    var eircode =document.getElementById("eircode").value;
    var address =document.getElementById("address").value;
    
    
    //console.log(name);
    if (name == "") {
        window.alert("Please enter your name properly.");
        return false;
    }
    if (phoneno == "") {
        window.alert("Please enter your phoneno properly.");
        return false;
    }
    if (email == "") {
        window.alert("Please enter your email properly.");
        return false;
    }
    
    if (address == "") {
        window.alert("Please enter your address properly.");
        return false;
    }
    if (eircode == "") {
        window.alert("Please enter your eircode properly.");
        return false;
    }
    
    return true;
    
    }
    
    function submit(){
    var validflag=validation();
    console.log(validflag);
    if(validflag==true)
    {
        window.alert("Product is Reserved");
    }
    }


function picture(){

            var mainimg= document.getElementById("Mainimage");
            let smallimg=document.getElementsByClassName("small-image");
        
            for (let i = 0; i < smallimg.length; i++) {
                console.log(smallimg[i])
                smallimg[i].onclick=function(){
                mainimg.src=smallimg[i].src;
            
        }; 
    };    
}
            