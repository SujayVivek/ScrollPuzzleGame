var currTile;
var otherTile;

//Function to cut the image into m * n parts
function cutImageIntoParts(image, m, n) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = image.width / n;
    var height = image.height / m;
    var parts = [];
    
    /*var imgs=document.createElement("img");
    imgs.src="./pics/avgengers.jpg";
    var place=document.getElementById("retryes");
    place.appendChild(imgs);*/ //this code is for appending images onto html
    

    canvas.width = width;
    canvas.height = height;
  
    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        context.clearRect(0, 0, width, height);
        context.drawImage(
          image,
          j * width,
          i * height,
          width,
          height,
          0,
          0,
          width,
          height
        );
  
        // Create a new image object for each part
        var part = new Image();
        part.src = canvas.toDataURL();
        parts.push(part);
      }
    }
  
    return parts;
  }
  
  // Example usage
  var inputImage = new Image();
  inputImage.src = "./pics/avgengers.jpg";
  
  inputImage.onload = function () {
    var m = parseInt(prompt('Enter the number of rows (m):'));
    var n = parseInt(prompt('Enter the number of columns (n):'));
    var sizeHeight=120*n;var sizeWidth=120*m;
    var imageParts = cutImageIntoParts(inputImage, m, n);
    var a=document.getElementById("retryes");
    a.style.height='${sizeHeight}';
    a.style.width='${sizeWidth}';
    
    // Access each image part using the array index
    for (var i = 0; i < imageParts.length; i++) {
      var imagePart = imageParts[i];
      var retriy= document.getElementById("retryes");
      // Do something with each image part, such as displaying it on the page
      retriy.appendChild(imagePart).className="tile"+(i+1);
      var tile=document.getElementsByClassName("tile"+(i+1));
      
    }
  }
  


window.onload=function(){
  let tile=document.getElementById("cell");
  
  tile.addEventListener("dragstart",dragStart());
  tile.addEventListener("dragend",dragEnd());
  tile.addEventListener("dragenter",dragEnter());
  tile.addEventListener("dragover",dragOver());
  tile.addEventListener("dragstop",dragStop());
  tile.addEventListener("dragdrop",dragDrop());
}

function dragStart(){
    currTile=this;
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){

}
function dragDrop(){
    otherTile=this;
}
function dragEnd(){
    let temp=currTile;
    let currTile=otherTile;
    let otherTile=temp;
}

