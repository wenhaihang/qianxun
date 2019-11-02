$(function(){
	var n=0;
	var timer;
	$('.screen1').children('.title').removeClass('no')
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(function(){
			n=n-d
			if(n>6){n=6}
			if(n<0){n=0}
			$('section').animate({'top':-100*n+'%'}, 500)
		    $('section>div').eq(n).children('.title').removeClass('no').parent('div').siblings('div').children('.title').addClass('no')
		    $('aside ul li').eq(n).addClass('current').siblings('li').removeClass('current')
		},500)
	})
	$('aside ul li').click(function(event) {
		var n=$(this).index()
		$('section').animate({'top':-100*n+'%'}, 500)
		$('section>div').eq(n).children('.title').removeClass('no').parent('div').siblings('div').children('.title').addClass('no')
		$('aside ul li').eq(n).addClass('current').siblings('li').removeClass('current')
	});
	$(function(){
			$('.music').click(function(event) {
				$(this).toggleClass('play');
				if($(this).hasClass('play')){
					$('audio')[0].play()
				}else{
					$('audio')[0].pause()
				}
			});
		})
})