"use strict";

let imageFiles = [
  { id: "1", path: "https://placehold.co/300x300", description: "placeholder 1" },
  { id: "2", path: "https://placehold.co/300x300", description: "placeholder 2" },
  { id: "3", path: "https://placehold.co/300x300", description: "placeholder 3" },
  { id: "4", path: "https://placehold.co/300x300", description: "placeholder 4" },
  { id: "5", path: "https://placehold.co/300x300", description: "placeholder 5" },
  { id: "6", path: "https://placehold.co/300x300", description: "placeholder 6" },
  { id: "7", path: "https://placehold.co/300x300", description: "placeholder 7" },
  { id: "8", path: "https://placehold.co/300x300", description: "placeholder 8" },
  { id: "9", path: "https://placehold.co/300x300", description: "placeholder 9" },
  { id: "10", path: "https://placehold.co/300x300", description: "placeholder 10" },
  
];

const imageList = document.querySelector("#imageList");
const clearImamgesButton = document.querySelector("#clearImagesButton");
const addImageButton = document.querySelector("#addImageButton");
const imagesDiv = document.querySelector("#imagesDiv");

//   console.log(selectImageList, clearImamgesButton, addImageButton, imagesDiv);

function loadImageList() {
  for (const imageFile of imageFiles) {
    let option = document.createElement("option");
    option.value = imageFile.id;
    option.innerText = imageFile.description;
    imageList.appendChild(option);
  }
}
function addImage() {
    const id = imageList.value;
    for (const imageFile of imageFiles) {
        if (imageFile.id== id) {
            let image = document.createElement("img");
            image.src = imageFile.path;
            image.alt= imageFile.description;
            imagesDiv.appendChild(image);
        }
        
    }
}

function clearImages(){
    imagesDiv.innerHTML = " ";

}
    



clearImamgesButton.onclick=clearImages;
addImageButton.onclick=addImage;
loadImageList();
