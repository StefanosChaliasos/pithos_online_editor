$(document).ready(function(){
    $('.Preview').click(function(event) { 
       var filepath = (event.target.id);
       var example = readTextFile(filepath);
	   alert(example);
    });
});