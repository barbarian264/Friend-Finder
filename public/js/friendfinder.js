
var options = [];

$("#sub").on("click", function(){

var name = $("#name").val().trim();

for(i=0;i<5;i++) {

	options[i] = $("#question" + i).val();
}

var user = {

	name: name,
	scores: options
}

console.log(user);

});
