var quill = new Quill('#editor', {
    modules: {
            toolbar: '#toolbar'
          },
    formats: [],
    scrollingContainer: '#scrolling-container',
    theme: 'snow'
});

var customButton = document.querySelector('.save');
customButton.addEventListener('click', function() {
  alert('Saved!');
});

var filepath = findGetParameter("source");
var example = readTextFile(filepath);
quill.setText(example);

var filename = filepath.replace(/^.*[\\\/]/, '');
document.getElementById("title").innerHTML = filename;

var form = document.querySelector('form');
form.onsubmit = function() {
  // Populate hidden form on submit
  var about = document.querySelector('input[name=text]');
  about.value = quill.getText(0, quill.getLength());
  
  alert(about.value);
  
  return false;
};
