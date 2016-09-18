function MyFocus(jiangeshijian) {
	var nowimg = 0; 	//信号量

	//定时器的代码段开始
 	var timer;

 	timer = setInterval(youanniuyewu,jiangeshijian);	//定时器已经开始

 	//最大的盒子鼠标进入的时候定时器停止
 	$("#MyFocus").mouseenter(
 		function(){
 			//定时器停止
 			clearInterval(timer);
 		}
 	);

 	//鼠标离开的时候，启动定时器
 	$("#MyFocus").mouseleave(
 		function(){
 			clearInterval(timer);	//设表先关
 			timer = setInterval(youanniuyewu,jiangeshijian);
 		}
 	);
 	
 	//定时器的代码段结束


	//右按钮的监听，有名函数的监听是没有圆括号
	$("#MyFocus .anniu .rightbut").click(youanniuyewu);	

	//右按钮业务：
	function youanniuyewu(){
		if(nowimg < $("#MyFocus .tuul li").length - 1){
			nowimg = nowimg + 1;
		}else{
			nowimg = 0;
		}
		huan();
	}



	//小圆点的监听：
	$("#MyFocus .dianul li").mouseenter(
		function(){
			//先改变信号量
			nowimg = $(this).index();	//让信号量变成用户点击的那个li的序号
			huan();
		}
	);

	//定义一个换图函数
	function huan(){
		//根据信号量的值，让tuul里面的一个li有cur，其余的li没有cur
		$("#MyFocus .tuul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		//根据信号量的值，让dianul里面的一个li有cur，其余的li没有cur
		$("#MyFocus .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		//根据信号量的值，让h3中的内容，显示第nowimg那个img的alt
		var biaoti = $("#MyFocus .tuul li img").eq(nowimg).attr("alt");
		$("#MyFocus .xinxi h3").html(biaoti);
	}
}