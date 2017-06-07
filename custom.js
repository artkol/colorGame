var colors = generateRandomColors(6);

var selectedColor = randomSelectedColor();
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

function changeAllColors(color) {
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].style.background = color;
	}
}

function randomSelectedColor() {
	var rnd = Math.floor(Math.random() * colors.length);
	return colors[rnd];
}


function generateRandomColors(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}