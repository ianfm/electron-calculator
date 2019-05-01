var output = document.getElementById('calc-result')
var btn = document.getElementById("add-button");
btn.onclick = function() {
	var A = document.getElementById('input1').value;
	var B = document.getElementById('input2').value

	output.innerHTML = eval(A + " + " + B);
}
