
$(function () {

    var $orderPriceS = $(".order-price span");
    var $orderNum = $(".order-num span");
    var $orderOldPrice = $(".order-old-price span");

    var $minus = $(".minus");
    var $plus = $(".plus");

    var $operation = $(".operation");

    var $settleNum = $(".settle-num");
    var $settlePrice = $(".settle-price");

//加减按钮被点击
//减
    $minus.click(function () {
        var oP = $(this).parents(".li-warp");
       var num = parseInt($(this).siblings("span").html()
       );
        var oldPrice = parseFloat(oP.find(".order-old-price span").html());
        var tprice = parseFloat(oP.find(".order-price span").html());
        var allNum = $settleNum.html();
        var allprice = parseFloat($settlePrice.html());
        if(num<=1){
            num = 2;
        }
        num--;
        $(this).siblings("span").html(num);
        oldPrice = (tprice*num).toFixed(2);
        console.log(oldPrice);
        oP.find(".order-old-price span").html(oldPrice);
        allNum --;
        allprice = (allprice - tprice).toFixed(2);
        $settleNum.html(allNum);
        $settlePrice.html(allprice);
    });


    $plus.click(function () {
        var oP = $(this).parents(".li-warp");
        var num = parseInt($(this).siblings("span").html()
        );
        var oldPrice = parseFloat(oP.find(".order-old-price span").html());
        var tprice = parseFloat(oP.find(".order-price span").html());
        var allNum = $settleNum.html();
        var allprice = parseFloat($settlePrice.html());
        num++;
        $(this).siblings("span").html(num);
        oldPrice = (num*tprice).toFixed(2);
        console.log(oldPrice);
        oP.find(".order-old-price span").html(oldPrice);
        allNum ++;
        allprice = (allprice + tprice).toFixed(2);
        $settleNum.html(allNum);
        $settlePrice.html(allprice);
    })

});
