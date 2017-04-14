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
