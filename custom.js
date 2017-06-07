var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(255, 0, 255)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255, 255)'
];

var selectedColor = randomColor();
var blocks = document.querySelectorAll('.blocks');
var selectedColorDisplay = document.querySelector('.selectedColor');
var errorMsg = document.querySelector('.errorMsg');


selectedColorDisplay.textContent = selectedColor;

for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.background = colors[i];

    blocks[i].addEventListener('click', function() {
        var clickedColor = this.style.background;
        if (clickedColor === selectedColor) {
          	errorMsg.textContent = 'Correct';
          	changeAllColors(selectedColor);	
              
        } else {
            this.style.background = 'white';
            errorMsg.textContent = 'Try again';
        }
    })
}

function changeAllColors (color) {
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].style.background = color;
	}
}

function randomColor () {
	var rnd = Math.floor(Math.random() * colors.length);
	return colors[rnd];
}

