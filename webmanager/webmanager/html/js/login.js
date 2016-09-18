$(function () {
    $("#txt").on("blur",function () {
        var oPw1Value=this.value;
        var reg1=/^1(3|4|5|7|8)\d{9}$/;
        var test=reg1.test(oPw1Value);
        if(test==false){
            $('.false1').css("display","block");
             $('.true1').css("display","none");
        }else {
             $('.false1').css("display","none");
            $('.true1').css("display","block");
        }
    });
    $("#pw").on("blur",function () {
        var oPw1Value=this.value;
        var reg1=/(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}/;
        var test=reg1.test(oPw1Value);
        if(test==false){
            $('.false2').css("display","block");
             $('.true2').css("display","none");
        }else {
            $('.true2').css("display","block");
            $('.false2').css("display","none");
        }
    });
    $('.aakk2').on("blur",function () {
        if($(".aakk1").val()==$('.aakk2').val()){
            $('.false3').css("display","none");
             $('.true3').css("display","block");
        }else {
            $('.true3').css("display","none");
            $('.false3').css("display","block");
        }
    });

    $('#btn').on("click",function () {
        $.ajax({
            url:"../../product/GetProductsByPage_get",
            data:{
            "pagesize":100,
            "pageindex":1
            },
            type:"get",
            success:function (data) {
                var arr=JSON.parse(data);
            //console.log(arr)
                for(var i=0;i<arr.length;i++){
                    var dataObj=JSON.parse(arr[i].Data);
                   /* console.log(dataObj.name);
                    console.log(parseInt($("#pw").val()));
                    console.log(dataObj.name==parseInt($("#pw").val()));
                    console.log(dataObj.id==parseInt($("#txt").val()));*/

                    if(dataObj.id==parseInt($("#txt").val())&&dataObj.name==parseInt($("#pw").val())){
                    window.location.href="index.html";
                    }
                }
            }
        })
    })
    $('#btn3').on("click",function () {

    })
});

