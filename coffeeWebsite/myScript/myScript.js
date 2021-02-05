$(document).ready(function  () {
	// body...
	$(window).scroll(function () {
		// body...
		if ($(window).scrollTop()>300){

			$('.navbar').addClass('brown');

		} else {
			$('.navbar').removeClass('brown');
		}
	});
	
});

function myFunction(partName) {
  var i;
  var x = document.getElementsByClassName("listName");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(partName).style.display = "block";
};