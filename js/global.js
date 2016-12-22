var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

// Number incrementor

$(".number").on("click", function() {

	var idToFind = $(this).attr("name");
	var isDisabled = $('#' + idToFind).prop('disabled');

	if (!isDisabled) {

	var step = parseFloat($('#' + idToFind).attr('step'))
	var value = parseFloat($('#' + idToFind).attr('value'));
	console.log(value);
	var thisMin = parseFloat($('#' + idToFind).attr('min'));
	var thisMax = parseFloat($('#' + idToFind).attr('max'));


		if ($(this).hasClass('decrement')) {
			if ((value - step) >= thisMin) {
				value = value - step;
				$('#' + idToFind).attr('value', value);
			}
		}
		if ($(this).hasClass('increment')) {
			if ((value + step) <= thisMax) {
				value = value + step;
				$('#' + idToFind).attr('value', value);
			}	
		}
	}
});

$('.file-dropdown').on('click', function() {
	var targetName = $(this).attr('name');
	console.log(targetName); // this is showing we have the correct reference
	// get the element with the id of targetNmae, and toggle the class "show"
	$('#' + targetName).toggleClass('show');
	var dropdownContent = $('#' + targetName);
	var i;
	for (i = 0; i < dropdownContent.length; i++) {
		var openDropdown = dropdownContent[i];
	}
});

// // Dropdown menu 
// function openDropdown(idName) {
//   $('div').find('#' + idName).toggleClass('show');
// }

// function openMiniDropdown(idName) {
//   $('div').find('#' + idName).addClass('show');
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }