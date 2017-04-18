$(document).ready(function(){
    $('.Preview').click(function(event) { 
       var filepath = (event.target.id);
       var filename = filepath.replace(/^.*[\\\/]/, '');
       var data = readTextFile(filepath);
       // console.log(example.type); // undefined
	   modalPreview(filename, data, "");
    });
});