/**
 * Created by M1rotvorez on 3/17/17.
 */

$('#select').select2({
		placeholder: "Choose type",
		minimumResultsForSearch: Infinity
});

$('input[name="file"]').change(function () {
		var fileName = $(this).val();
		fileName = fileName.replace('C:\\fakepath\\', '');
		$('#file--name').html(fileName);
});

var controller = new ScrollMagic.Controller();

var tween_projects = new TimelineLite()
		.add(TweenMax.to("#why-item--1, #why-item--2, #why-item--3, #why-item--4", 1.5, {
				marginTop: 0,
				autoAlpha: 1,
				scale: 1,
				duration: 0
		}));

var scene = new ScrollMagic.Scene({
		tweenChanges: true,
		triggerElement: ".why-content",
		triggerHook: "onEnter",
		offset: 120
})
		.setTween(tween_projects)
		.addTo(controller);


var ctx = $("#myChart");

var myChart = new Chart(ctx, {
		type: 'line',
		data: {
				labels: ["21.03", "22.03", "23.03", "24.03", "25.03", "26.03"],
				datasets: [{
						label: '# of Votes',
						data: [4, 1, 3, 5, 2, 3],
						borderColor: [
								'#2F86E7'
						],
						borderWidth: 1
				}]
		},
		options: {
				scales: {
						yAxes: [{
								ticks: {
										beginAtZero: true
								}
						}]
				}
		}
});

$('.ip-check--btn').click(function () {
		setTimeout(function () {
				checking(1);
		}, 0);
		setTimeout(function () {
				checking(2);
		}, 2000);
		setTimeout(function () {
				checking(3);
		}, 4000);
		setTimeout(function () {
				checking(4);
		}, 6000);

});

function checking(checkState) {
		switch (checkState) {
				case  1: {
						$('.ip-check--btn').fadeOut(function () {
								$('#status--load').fadeIn(500, function () {
										$('#from--animation').addClass('status__change load');
								});
						});
						break;
				}
				case  2: {
						$('#status--load').fadeOut(function () {
								$('#status--current').fadeIn(500);
								$('#from--animation').addClass('current');
						});
						break;
				}
				case  3: {
						$('#status--current').fadeOut(function () {
								$('#status--failed').fadeIn(500);
								$('#from--animation').addClass('failed');
						});
						break;
				}
				case  4: {
						$('#status--failed').fadeOut(function () {
								$('#status--error').fadeIn(500);
								$('#from--animation').addClass('error');
						});
						break;
				}
				default:
						break;
		}
}

function menuScrollNav() {
		$('.menu li a').click(function () {
				$('html, body').stop().animate({
						scrollTop: $($(this).attr('href')).offset().top - 100
				}, 400);
				return false;
		});
}
menuScrollNav();

