$(document).ready(function(){
    $('.Preview').click(function(event) { 
       var filepath = (event.target.id);
       var filename = filepath.replace(/^.*[\\\/]/, '');
       var example = readTextFile(filepath);
       // console.log(example.type); // undefined
       example = example.replace(/(?:\r\n|\r|\n)/g, '<br/>');
	   $('#text').html(example);
       $('.modal-title').html(filename);
       $('#myModal').modal('show');
    });
});