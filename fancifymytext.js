// Makes the text area font bigger when Bigger! is clicked
function makeBigger() {
  document.getElementById("myText").style.fontSize = "24pt";
}

// Applies or removes fancy styles based on which radio button is selected
function applyStyle() {
  var textArea = document.getElementById("myText");
  var fancy = document.getElementById("fancyShmancy");

  if (fancy.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "none";
  }
}

// Uppercases the text and adds -Moo to the end of each sentence
function mooify() {
  var textArea = document.getElementById("myText");
  var text = textArea.value.toUpperCase();

  var sentences = text.split(".");
  for (var i = 0; i < sentences.length; i++) {
    var sentence = sentences[i].trimEnd();
    if (sentence.length > 0) {
      var words = sentence.split(" ");
      words[words.length - 1] = words[words.length - 1] + "-MOO";
      sentences[i] = words.join(" ");
    }
  }
  text = sentences.join(".");

  textArea.value = text;
}
