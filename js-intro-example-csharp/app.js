// Make h1 in header have different text
  document.getElementById("head").innerHTML = "Paragraph changed!";

// Make nav ul li elements get larger when you hover over them
var listItems = document.querySelectorAll('li');

listItems.forEach(function(item){
    item.addEventListener("mouseover", function(){
        item.style.fontSize = "50px";
    });
});

// Add another element to the main element
function myFunction() {
    var node = document.createElement("p");
    var textnode = document.createTextNode("Adding to the paragraph");
    node.appendChild(textnode);
    document.getElementById("paragraph").appendChild(node);
  }

// Dynamically change the color of the background on the footer when the user hovers over it

document.getElementById("footer").onmouseover = function() {
    this.style.backgroundColor = "red";
}
// Change the font size of the paragraphs in the main element when the user clicks them

function resizeText(multiplier) {
    if (paragraph.body.style.fontSize == "") {
      paragraph.body.style.fontSize = "1.0em";
    }
    paragraph.body.style.fontSize = parseFloat(paragraph.body.style.fontSize) + (multiplier * 0.2) + "em";
  }
// Change the text in the footer when the user clicks it
// Remove the h1 element in the header
// Put something in the place of the h1 in the header
// Change the text in one of the paragraph tags in the main element
// Change the size of the header element to 200px using grid syntax