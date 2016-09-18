/**
 * Created by Administrator on 2016/9/12.
 */

$(function () {

    //商品列表
    var $recommendFruit = $(".recommend-fruit");
    var $global = $(".global");
    var $freshFood = $(".fresh-food");
    var $gift = $(".gift");
    var str1 = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";


    $.get("json/goods-list.json",function (data) {
        proData = data;
        //console.log(proData);
        for(var i = 0;i<10;i++){
            str1+='<div class="fruit-f1"> ' +
                '<img src="'+proData[i].img+'"> ' +
                '<div class="p"> ' +
                '<p class="p1">'+proData[i].name+'</p> ' +
                '<p class="p2">'+proData[i].price+'</p> ' +
                '</div> ' +
                '<a href="###" class="addToShipping"></a> ' +
                '</div>'
        }
        $(str1).appendTo($recommendFruit);

        for(var i = 10;i<15;i++){
            str2+='<div class="fruit-f1"> ' +
                '<img src="'+proData[i].img+'"> ' +
                '<div class="p"> ' +
                '<p class="p1">'+proData[i].name+'</p> ' +
                '<p class="p2">'+proData[i].price+'</p> ' +
                '</div> ' +
                '<a href="###" class="addToShipping"></a> ' +
                '</div>'
        }

        $(str2).appendTo($global);


        for(var i = 15;i<25;i++){
            str3+='<div class="fruit-f1"> ' +
                '<img src="'+proData[i].img+'"> ' +
                '<div class="p"> ' +
                '<p class="p1">'+proData[i].name+'</p> ' +
                '<p class="p2">'+proData[i].price+'</p> ' +
                '</div> ' +
                '<a href="###" class="addToShipping"></a> ' +
                '</div>'
        }
        $(str3).appendTo($freshFood);

        for(var i = 25;i<35;i++){
            str4+='<div class="fruit-f1">' +
                '<img src="'+proData[i].img+'">' +
                '<div class="p">' +
                '<p class="p1">'+proData[i].name+'</p>' +
                '<p class="p2">'+proData[i].price+'</p>' +
                '</div> ' +
                '<a href="###" class="addToShipping"></a>' +
                '</div>'
        }
        $(str4).appendTo($gift);


        var $addToShopping = $(".fruit-f1 a");
        var s;
        var str="";
        var $addCarWarp = $(".addCar-warp");
        var $concel = $(".concel");
        var $btn1 = $(".btn1");
        var $Ul = $(".account-ul");
        var num = 0;
        var $num = $(".num");
        var $sPrice = $(".s-price");

        $addToShopping.each(function () {
            $(this).click(function () {
                s = $(this).parent(".fruit-f1").index()-1;
                //console.log(($(this).index()));
                setTimeout(function () {
                    $addCarWarp.show();
                },500);

                num = num+1;
                $num.text(num);
                
                str = '<li>' +
                    '<img src="'+proData[s].img+'">' +
                    '<div class="product"> ' +
                    '<p class="p-name">'+proData[s].name+'</p>' +
                    '<p class="p-price">'+proData[s].price+'</p>' +
                    '<div class="dibu" ><div class="amount">' +
                    '<button>-</button><span>1</span><button>+</button>' +
                    '</div>' +
                    '<a href="###">删除</a>' +
                    '</div>' +
                    '</div>' +
                    '</li>';
               // console.log(str);
                $(str).appendTo($Ul);

                var $ProductA = $(".product a");
                $ProductA.click(function (event) {
                    num = num-1;
                    console.log(num);
                    $(this).parents("li").remove();
                    event.stopPropagation();
                    //alert(1);
                    //console.log(1);


                });

            });

        });


       /* for(var i = 0;i<len;i++){
            $addToShopping.eq(i).click(function () {



            });*/


            //购物车
            var $shoppingCar = $(".shopping-car");
            var $scar = $(".scar");
            var $span = $(".shopping-car .span");
            var $account = $(".account");

            $shoppingCar.toggle(function () {
                /*if(num == 0){

                 }*/
                //alert(1);

                $account.show();
                $account.click(function (event) {
                    event.stopPropagation();
                })
                $shoppingCar.css({"background":"url('images/1.bmp') no-repeat "});
                $span.css({"background":"#f6ab00"});
                //if()
            },function () {
                $account.hide();
                $shoppingCar.css({"background":"url('images/2.bmp') no-repeat 1px center"} );
                $span.css({"background":"#64a131"})
            });

        $concel.click(function () {
            setTimeout(function () {
                $addCarWarp.hide();
            },500);
            var $span = $(".shopping-car .span");
            $span.text(num);

        });
        $btn1.click(function () {
            setTimeout(function () {
                $addCarWarp.hide();
            },500);
            var $span = $(".shopping-car .span");
            $span.text(num);
        })

    });







    //轮播
    var $banner = $("#banner");
    var $imgWarp = $(".img-warp");
    var $btn = $(".btn li");
    var timer = null;
    var iNow = 0;
    var len = $btn.length;
    $(".img-warp li").eq(0).clone().appendTo($imgWarp);
    $btn.click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        iNow = $(this).index();
        $imgWarp.stop().animate({"left":-iNow*100+"%"},500)
    });
    autoPlay();
    //自动轮播
    function autoPlay() {
      timer =  setInterval(function () {
            iNow++;
          if(iNow>len){
              iNow =1;
              $imgWarp.css({"left":0})
          }
          $btn.eq(iNow%8).addClass("active").siblings().removeClass("active");
          $imgWarp.stop().animate({"left":-iNow*100+"%"},500)
        },8000)
    }

    $banner.mouseover(function () {
        clearInterval(timer);
    });
    $banner.mouseout(function () {
        autoPlay();
    });









});