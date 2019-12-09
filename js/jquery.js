
$(function(){
	
			//设置视窗的宽度
				var w=$(window).width()
				// console.log(w);
				$('div.wrap').css('width',w)

			// 轮播图显示
				// 定义index为当前显示第几张
				var index = 0;
				var num = 0;
				var timer = setInterval(function(){
					
					index++;//1 2 3 4
					num++;
					if(index>4){
						$('.img').css('left','0px')
						index = 1;
					}	
					if(num>3){
						num = 0;
					}
					
					var obj = {left:-1680*index + 'px'}
					$('.img').animate(obj,500).next().children('li').eq(num).addClass('active').siblings().removeClass('active')	
				},2000)	
			
			// 吸顶导航
			$(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				var height = $('.nav').height();
				console.log(height);
				
				if(scrollTop>height){
					$('.nav').css({position:'fixed',top:'0px'}).css({background:'rgba(0,44,67,0.4)'})
				}else{
					$('.nav').css({position:'fixed',top:'50px'}).css({background:'rgba(113,178,198,0.5)'})
				}
			})
				
			// 图片列表
			$('#imgs li').mouseover(function(){
				$(this).css({opacity:1}).siblings().css({opacity:0.5})
			})
			
			$('#imgs li').mouseout(function(){
				$('#imgs li').css({opacity:1})
			})
			
			
		})


$(function(){
		var i=0;
	$('.ll').click(function(){
			i++;	
			if(i>2){
				i=0;
			}
			$('.six-main li').eq(i).css({opacity: 1}).siblings().css({opacity: 0});

	})
	
	$('.rr').click(function(){
		i--;
		if(i<0){
			i=2;
		}
		
		$('.six-main li').eq(i).css({opacity: 1}).siblings().css({opacity: 0});
		console.log(i)
	})
	
	
	var ot = $('.header').offset().top;
		console.log(ot);
		$(window).scroll(function(){
			var st = $(window).scrollTop();
			console.log(st);					
			if(st>=ot){
				$('.one-left').animate({left:'0px'},1000)
			}
		})
		
	var ot1 = $('.main-one').offset().top;
		console.log(ot1);
		$(window).scroll(function(){
			var st1 = $(window).scrollTop();
			console.log(st1);					
			if(st1>=ot1){
				$('.two-t').animate({left:'0px'},1000)
				$('.tr').animate({right:'0px'},1000)
				$('.two-main').animate({left:'0px'},1000)
			}
		})	
	var ot2 = $('.two-main').offset().top;
		console.log(ot2);
		$(window).scroll(function(){
			var st2 = $(window).scrollTop();
			console.log(st2);					
			if(st2>=ot2){
				$('.two-t1').animate({left:'0px'},1000)
				$('.tr1').animate({right:'0px'},1000)
				$('.three-left').animate({left:'0px'},1000)
				$('.three-right').animate({right:'0px'},1000)
			}
		})		
		
	var ot3 = $('.two-t1').offset().top;
		console.log(ot3);
		$(window).scroll(function(){
			var st3 = $(window).scrollTop();
			console.log(st3);					
			if(st3>=ot3){
				$('.two-t2').animate({left:'0px'},1000)
				$('.tr2').animate({right:'0px'},1000)
				$('.four-main>ul').animate({right:'0px'},1000)
			}
		})			
				 
	var ot4 = $('.four-main').offset().top;
		console.log(ot4);
		$(window).scroll(function(){
			var st4 = $(window).scrollTop();
			console.log(st4);					
			if(st4>=ot4){
				$('.two-t3').animate({left:'0px'},1000)
				$('.tr3').animate({right:'0px'},1000)
				$('.five-left').animate({left:'0px'},1000)
				$('.five-right').animate({right:'0px'},1000)
			}
		})		
				
				
	var ot5= $('.main-five').offset().top;
		console.log(ot5);
		$(window).scroll(function(){
			var st5 = $(window).scrollTop();
			console.log(st5);					
			if(st5>=ot5){
				$('.two-t4').animate({left:'0px'},1000)
				$('.tr4').animate({right:'0px'},1000)
				$('.six').animate({right:'0px'},1000)
			}
		})			
	var ot6= $('.main-six').offset().top;
		console.log(ot6);
		$(window).scroll(function(){
			var st6 = $(window).scrollTop();
			console.log(st6);					
			if(st6>=ot6){
				$('.footer-left').animate({left:'0px'},1000)
				$('.footer-right').animate({right:'0px'},1000	)
			}
		})			
			
})
	



