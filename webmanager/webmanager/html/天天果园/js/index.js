$(document).ready(function () {
    $(".gong").on("mouseover", function () {
        $(".gonggao").css("display", "block");
    });
    $(".gong").on("mouseout", function () {
        $(".gonggao").css("display", "none");
    });
    $(".gonggao").on("mouseover", function () {
        $(".gonggao").css("display", "block");
    });
    $(".gonggao").on("mouseout", function () {
        $(".gonggao").css("display", "none");
    });
    $(".two2").on("mouseover",function () {
        $(".app").css("display","block");
    });
    $(".app").on("mouseover",function () {
        $(".app").css("display","block");
    })
    $(".app").on("mouseout",function () {
        $(".app").css("display","none");
    })
    $(".two2").on("mouseout",function () {
        $(".app").css("display","none");
    });
        $('.flexslider').flexslider({
            directionNav: true,
            pauseOnAction: false
        });
    //获取数据
    setAjax();

    function setAjax() {
        var xhr=new  XMLHttpRequest();
        xhr.onreadystatechange=function () {
            if(xhr.readyState==4){
                if(xhr.status==200){
                    getResponseLayout(xhr.responseText);
                }
            }
        }
        xhr.open("get","data/data.json",true);
        xhr.send();
    }
    function getResponseLayout(responseStr) {
        var arrJson=eval("("+responseStr+")");
        var oShopList=document.getElementsByClassName("shop-list-2")[0];
        for(var i=0;i<arrJson.length;i++){
            var oDlzi=document.createElement("dl");
            var oDldt=document.createElement("dt");
            var oDldd=document.createElement("dd");
            var oDiv=document.createElement("div");
            var image=document.createElement("img");
            var oA=document.createElement("a");
            oA.href="#";
            image.src="images/"+arrJson[i].imgsrc;
            image.className="image";
            var name=document.createElement("p");
            name.className="name";
            name.innerHTML=arrJson[i].name;
            var price=document.createElement("p");
            price.className="price";
            price.innerHTML=arrJson[i].price;
            var oSpan=document.createElement("span");
            oDiv.style.float="left";
            oA.appendChild(image);
            oDldt.appendChild(oA);
            oDlzi.appendChild(oDldt);
            oDlzi.appendChild(oDldd);
            oDiv.appendChild(name);
            oDiv.appendChild(price);
            oDldd.appendChild(oSpan);
            oDldd.appendChild(oDiv);
            oShopList.appendChild(oDlzi);
        }
    }
setAjax2();

function setAjax2() {
    var xhr=new  XMLHttpRequest();
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            if(xhr.status==200){
                getResponseLayout2(xhr.responseText);
            }
        }
    }
    xhr.open("get","data/data2.json",true);
    xhr.send();
}
function getResponseLayout2(responseStr) {
    var arrJson=eval("("+responseStr+")");
    var oShopList=document.getElementsByClassName("shop-list")[0];
    for(var i=0;i<arrJson.length;i++){
        var oDlzi=document.createElement("dl");
        var oDldt=document.createElement("dt");
        var oDldd=document.createElement("dd");
        var oDiv=document.createElement("div");
        var image=document.createElement("img");
        var oA=document.createElement("a");
        oA.href="#";
        image.src="images/"+arrJson[i].imgsrc;
        image.className="image";
        var name=document.createElement("p");
        name.className="name";
        name.innerHTML=arrJson[i].name;
        var price=document.createElement("p");
        price.className="price";
        price.innerHTML=arrJson[i].price;
        var oSpan=document.createElement("span");
        oDiv.style.float="left";
        oA.appendChild(image);
        oDldt.appendChild(oA);
        oDlzi.appendChild(oDldt);
        oDlzi.appendChild(oDldd);
        oDiv.appendChild(name);
        oDiv.appendChild(price);
        oDldd.appendChild(oSpan);
        oDldd.appendChild(oDiv);
        oShopList.appendChild(oDlzi);
    }
}

    change();
 function change() {
   $(".image").on("mouseover",function () {
       alert()
       $("this").animate({
           "width":"270px",
            "height":"270px"
       });
   })
}
});