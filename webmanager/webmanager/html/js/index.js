$(document).ready(function () {
    //送货地区
    var $area = $(".area");
    var $globalArea = $(".global-area");
    var $jsBtn = $(".js-btn");
    var $jiangSu = $(".jiangsu");
    var $zjBtn = $(".zj-btn");
    var $zheJiang = $(".zhejiang");
    var $ahBtn = $(".ah-btn");
    var $angHui = $(".anghui");
    var $hbBtn = $(".hb-btn");
    var $heiBei = $(".hebei");
    var $gdBtn = $(".gd-btn");
    var $guangDong = $(".guangdong");
    //var $span = $(".span");
    var $areaP = $(".area-p");

     var $globalA = $(".global-area a");
     var len = $globalA.length;
     for(var i = 0;i<len;i++){
     $globalA.click(function () {
     $areaP.html($(this));
     })
     }

    $area.mouseover(function () {
        $globalArea.show();
        $area.css({"background-color":"#fff"});
        // $span.css({"background-color":"#fff"});
    });
    $area.mouseout(function () {
        $globalArea.hide();
        $area.css({"background-color":"#eeeeee"});
        // $span.css({"background-color":"#eeeeee"});
    });

    $jsBtn.click(function () {
        if($jiangSu.css("display")=="none"){
            $jiangSu.slideDown();
            $(".js-btn span").html("v");
        }else if($jiangSu.css("display")=="block"){
            $jiangSu.slideUp();
            $(".js-btn span").html(">");
        }
    });

    $zjBtn.click(function () {
        if($zheJiang.css("display")=="none"){
            $zheJiang.slideDown();
            $(".zj-btn span").html("v");
        }else if($zheJiang.css("display")=="block"){
            $zheJiang.slideUp();
            $(".zj-btn span").html(">");
        }
    });
    $hbBtn.click(function () {
        if($heiBei.css("display")=="none"){
            $heiBei.slideDown();
            $(".hb-btn span").html("v");
        }else if($heiBei.css("display")=="block"){
            $heiBei.slideUp();
            $(".hb-btn span").html(">");
        }
    });
    $gdBtn.click(function () {
        if($guangDong.css("display")=="none"){
            $guangDong.slideDown();
            $(".gd-btn span").html("v");
        }else if($guangDong.css("display")=="block"){
            $guangDong.slideUp();
            $(".gd-btn span").html(">");
        }
    });
    $ahBtn.click(function () {
        if($angHui.css("display")=="none"){
            $angHui.slideDown();
            $(".gd-btn span").html("v");
        }else if($angHui.css("display")=="block"){
            $angHui.slideUp();
            $(".gd-btn span").html(">");
        }
    });
//
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
//search
    $("#search-button").on("click",function () {
        if($('#search-keyword').val()=="奇异果") {
            window.location.href="qiyiguo.html";
        }
    });
    //获取数据
    $.ajax({
        url:"../../product/GetProductsByPage_get",
        data:{
            "pagesize":100,
            "pageindex":1
        },
        type:"get",
        success:function (data) {
            var arr=JSON.parse(data);
            var html="";
            console.log(arr);
            for(var i=0;i<arr.length;i++){
                    var dataObj=JSON.parse(arr[i].Data);
                    if(dataObj.id=="2016001") {
                        html = "<dl class='kk'>" + "<dt><a href='details.html'><img src='images/" + dataObj.imgSrc + "'></a></dt>" + "<dd><div><p class='name'>" + dataObj.name + "</p><p class='price'>" + dataObj.price + "</p></div><span class='nu'></span></dd>" + "</dl>";
                        $(".shop-list").append(html);
                    }
            }
        }
    });
    $.ajax({
        url:"../../product/GetProductsByPage_get",
        data:{
            "pagesize":100,
            "pageindex":1
        },
        type:"get",
        success:function (data) {
            var arr=JSON.parse(data);
            var html="";
            console.log(arr);
            for(var i=0;i<arr.length;i++){
                var dataObj=JSON.parse(arr[i].Data);
                if(dataObj.id=="2016002") {
                    html = "<dl class='kk'>" + "<dt><a href=''><img src='images/" + dataObj.imgSrc + "'></a></dt>" + "<dd><div><p class='name'>" + dataObj.name + "</p><p class='price'>" + dataObj.price + "</p></div><span class='nu'></span></dd>" + "</dl>";
                    $(".shop-list-2").append(html);
                }
            }
        }
    });
    $.ajax({
        url:"../../product/GetProductsByPage_get",
        data:{
            "pagesize":100,
            "pageindex":1
        },
        type:"get",
        success:function (data) {
            var arr=JSON.parse(data);
            var html="";
            console.log(arr);
            for(var i=0;i<arr.length;i++){
                var dataObj=JSON.parse(arr[i].Data);
                if(dataObj.id=="2016003") {
                    html = "<dl class='kk'>" + "<dt><a href=''><img src='images/" + dataObj.imgSrc + "'></a></dt>" + "<dd><div><p class='name'>" + dataObj.name + "</p><p class='price'>" + dataObj.price + "</p></div><span class='nu'></span></dd>" + "</dl>";
                    $(".shop-list-3").append(html);
                }
            }
        }
    });
    $.ajax({
        url:"../../product/GetProductsByPage_get",
        data:{
            "pagesize":100,
            "pageindex":1
        },
        type:"get",
        success:function (data) {
            var arr=JSON.parse(data);
            var html="";
            console.log(arr);
            for(var i=0;i<arr.length;i++){
                var dataObj=JSON.parse(arr[i].Data);
                if(dataObj.id=="2016004") {
                    html = "<dl class='kk'>" + "<dt><a href=''><img src='images/" + dataObj.imgSrc + "'></a></dt>" + "<dd><div><p class='name'>" + dataObj.name + "</p><p class='price'>" + dataObj.price + "</p></div><span class='nu'></span></dd>" + "</dl>";
                    $(".shop-list-4").append(html);
                }
            }
        }
    });
    $(document).on("click",".nu",function () {//动态绑定
        $(".zhezhao").css("display","block");
        $(".shop-cart").css("display","block");
    });
    var num=0;
    $(document).on("click",".nu",function () {
        num++;
        $('.cartcount').html(num);
    })
});