// Set data from text file
var filepath = findGetParameter("source");
var data = readTextFile(filepath);

// Find file name
var filename = filepath.replace(/^.*[\\\/]/, '');

// Set editor setiings
var editorSettings = "";

openEditor(filename, data, editorSettings, saveFile);


