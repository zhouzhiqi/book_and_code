$("#ban-btn-right").click(function(){
	var imgwidth = $("#ban-inner img").width();
	var thisScroll = $(".ban-outer").scrollLeft();
	$(".ban-outer").animate({
		scrollLeft:thisScroll+imgwidth+10
	},700)
	// $(".ban-outer").scrollLeft(thisScroll+imgwidth+10);
})
$(document).ready(function(){
	if ($("#big").width() < 768 ){
		$(".change").addClass("col-sm-4");
		$(".change").removeClass("col-xs-4");
	}
	else {
		$(".change").removeClass("col-sm-4");
		$(".change").addClass("col-xs-4");
	}

})
$("#chose-class").click(function(){
	$("#stu-iframe").attr("src","chose-class.html")
})
$("#my-class").click(function(){
	$("#stu-iframe").attr("src","my-class.html")
})
$("#student-class").click(function(){
	$("#stu-iframe").attr("src","student-class.html")
})
$("#homework").click(function(){
	$("#stu-iframe").attr("src","homework.html")
})
$("#do-homework").click(function(){
	$("#stu-iframe").attr("src","do-homework.html")
})

$("#class-details").click(function(){
	$("#stu-iframe").attr("src","class-details.html")
})
$("#office-homepage").click(function(){
	$("#stu-iframe").attr("src","office-homepage.html")
})
$("#office-manage").click(function(){
	$("#stu-iframe").attr("src","office-manage.html")
})
$("#teacher-manage").click(function(){
	$("#stu-iframe").attr("src","teacher-manage.html")
})
$("#student-manage").click(function(){
	$("#stu-iframe").attr("src","student-manage.html")
})
$("#add-teacher").click(function(){
	$("#stu-iframe").attr("src","add-teacher.html")
})
$("#add-student").click(function(){
	$("#stu-iframe").attr("src","add-student.html")
})
$("#office-notice").click(function(){
	$("#stu-iframe").attr("src","office-notice.html")
})
$("#new-notice").click(function(){
	$("#stu-iframe").attr("src","new-notice.html")
})

$("#chose-recipient").click(function(){
	$("#stu-iframe").attr("src","chose-recipient.html")
})
$("#question-bank").click(function(){
	$("#stu-iframe").attr("src","question-bank.html")
})
$("#class-manage").click(function(){
	$("#stu-iframe").attr("src","class-manage.html")
})
$("#add-class").click(function(){
	$("#stu-iframe").attr("src","add-class.html")
})
$("#resource-manage").click(function(){
	$("#stu-iframe").attr("src","resource-manage.html")
})
$("#upload-resource").click(function(){
	$("#stu-iframe").attr("src","upload-resource.html")
})
$("#class-arrange").click(function(){
	$("#stu-iframe").attr("src","class-arrange.html")
})
$("#chose-teacher").click(function(){
	$("#stu-iframe").attr("src","chose-teacher.html")
})



$("#chapter").click(function(){
	$(".outline").css("display","none");
	$(".chapter").css("display","block");
})
$("#outline").click(function(){
	$(".chapter").css("display","none");
	$(".outline").css("display","block");
})

$(".form-student").click(function(){
	$("#form-student").css("display","block");
	$("#form-teacher").css("display","none");
})
$(".form-teacher").click(function(){
	$("#form-teacher").css("display","block");
	$("#form-student").css("display","none");
})
//   iframe 自适应高度，但是存在跨域问题，需要在服务器运行才知道效果
// $("#stu-iframe").load(function(){
// 	 iFrameHeight();
// })
// function iFrameHeight() { 
// var ifm= document.getElementById("stu-iframe"); 
// var subWeb = document.frames ? document.frames["stu-iframe"].document : ifm.contentDocument; 
// if(ifm != null && subWeb != null) { 
// ifm.height = subWeb.body.scrollHeight; 
// } 
// } 

// 方法二
// $(window.parent.document).find("#stu-iframe").load(function(){//绑定事件  
//          var main = $(window.parent.document).find("#frame_con");//找到iframe对象  
//          var thisheight = $(document).height()+30;//获取页面高度  
//          main.height(thisheight < 500 ? 500 : thisheight);  
// //为iframe高度赋值如果高度小于500，则等于500，反之不限高，自适应  
//                 });  




// $(".weixin").mouseenter(function(){
// 	$(this).css("background","url(images/icon.png) -926px -67px no-repeat");
// })
// $(".qq").mouseenter(function(){
// 	$(this).css("background","url(../images/icon.png) -966px -67px no-repeat");
// })
// $(".weibo").mouseenter(function(){
// 	$(this).css("background","url(../images/icon.png) -1005px -67px no-repeat");
// })

//  lzy  2016.6.30 视频动画效果
var video_num = 0;
$(".lzy-video").delegate("div","click",function(){
	$(".box,.box1").css("display","block")
	if (video_num == 0) {
		var c = $(this).children(".cover").clone().addClass("now").css({"position":"absolute","top":"10%","width":"80%","height":"80%"});
		$(".box").append(c);
		$(".box").append("<div class='video_close'><img src='../images/close.jpg'></div>");
		$(".box,.box1").animate({
			width:"100%",
			height:"100%",
			top:"0",
			left:"0",
			padding:"10%"
		},function(){
			$(".now").animate({
				width:"0",
				height:"0",
				top:"50%",
				left:"50%"
			},2000)
		})
		video_num = 1;
	}
})

$(".box").delegate(".video_close","click",function(){
	$(".video_close").remove();
	$(".box,.box1").css({"display":"none","width":"0","height":"0","top":"50%","left":"50%"});
	video_num = 0;
	$(".box iframe").attr("src","");
})
