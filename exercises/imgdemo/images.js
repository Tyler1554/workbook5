"use strict"
let decorateButton = document.querySelector("#decorateButton");
let otherButton = document.querySelector("#otherButton");

function changeParagraph(){
const paragraphs = document.querySelectorAll("p");
for (const paragraph of paragraphs) {
  paragraph.style.border = "1px solid red";
  paragraph.style.backgroundColor = "blue";
  paragraph.style.color = "white";
}
}


function changeImage() {
  const images = document.querySelectorAll("img");
  for (const image of images) {
    image.className = "roundedImg";
  }
}
otherButton.onclick = changeParagraph;
decorateButton.onclick = changeImage;
