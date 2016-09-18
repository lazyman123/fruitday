$(function () {
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
            if(dataObj.id=="2016005") {
                html = "<dl class='kk'>" + "<dt><a href=''><img src='images/" + dataObj.imgSrc + "'></a></dt>" + "<dd><div><p class='name'>" + dataObj.name + "</p><p class='price'>" + dataObj.price + "</p></div><span class='nu'></span></dd>" + "</dl>";
                $(".liebiao-left").append(html);
            }
        }
    }
});
    $(document).on("click",".nu",function () {//动态绑定
        $(".zhezhao").css("display","block");
        $(".shop-cart").css("display","block");

    });
    $(document).on("click",".china",function () {
        $(".yue").css("display","none");
        $(".china").css("background","#64a131");
        $(".china").css("color","#ffffff");
        $(".china").css("padding","5px");
        $('#dd').css("background","none");
        $('#dd').css("color","black");
        $(".liebiao-left").html("");
        $.ajax({
            url:"../../product/GetProductsByPage_get",
            data: {
                "pagesize":100,
                "pageindex": 1
            },
            type:"get",
            success:function (data) {
                var arr=JSON.parse(data);
                var html="";
                console.log(arr);
                for(var i=0;i<arr.length;i++){
                    var dataObj=JSON.parse(arr[i].Data);
                    if(dataObj.id=="2016006") {
                        html = "<dl class='kk'>" + "<dt><a href=''><img src='images/" + dataObj.imgSrc + "'></a></dt>" + "<dd><div><p class='name'>" + dataObj.name + "</p><p class='price'>" + dataObj.price + "</p></div><span class='nu'></span></dd>" + "</dl>";
                        $(".liebiao-left").append(html);
                    }
                }
            }
        })
    })
});
