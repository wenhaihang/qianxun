$(function(){
	var num=0;
	var timer;
	function aa(){
		timer=setInterval(function(){
			num=num+1
			if(num>4){
				num=0;
				$('.banner .right ul').css('left',-747*num+'px');
				num=1;
			}
			console.log(num)
			$('.banner .right ul').animate({'left':-747*num+'px'});
		},1000)
	}
	aa()
	$('.banner .right').hover(function() {
		clearInterval(timer);
	}, function() {
		aa();
	});
	var timee;
	$('.banner .right .zuo').click(function(event) {
		clearTimeout(timee)
		timee=setTimeout(function(){
			num=num-1;
			if(num<0){
				num=4;
				$('.banner .right ul').css('left',-747*num+'px');
				num=3;
			}
			$('.banner .right ul').animate({'left':-747*num+'px'});
		},500)
	});
	$('.banner .right .you').click(function(event) {
		clearTimeout(timee)
		timee=setTimeout(function(){
			num=num+1;
			if(num>4){
				num=0;
				$('.banner .right ul').css('left',-747*num+'px');
				num=1;
			}
			$('.banner .right ul').animate({'left':-747*num+'px'});
		},500)
	});

})