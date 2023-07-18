var currTile;
var otherTile;
var turns=0;

//Function to cut the image into m * n parts
function cutImageIntoParts(image, m, n) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = (image.width / n) - 2;
    var height = (image.height / m) - 2;
    var parts = [];
    
    
    /*var whiteImg=new Image();
    whiteImg.src="./pics/3.jpg";
    whiteImg.width=(image.width / n) - 2;
    whiteImg.height=(image.height / m) -2;*/
    
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
        // parts[0]=whiteImg;
        
      }
    }
  
    return parts;
  }
  //var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
  var r=0;c=-1;
  
  // Example usage
  var inputImage = new Image();
  inputImage.src = "./pics/avgengers.jpg";
  
  inputImage.onload = function () {
    var m = parseInt(prompt('Enter the number of rows (m):'));
    var n = parseInt(prompt('Enter the number of columns (n):'));
    
    
    var sizeHeight=(360/m)-(6*1)-6;
    var sizeWidth=(360/n)-(6*1)-6;
    var imageParts = cutImageIntoParts(inputImage, m, n);
    
    //alert(sizeHeight);
    //alert(sizeWidth);
    var a=document.getElementById('retryes');
    a.style.height='${sizeHeight}';
    a.style.width='${sizeWidth}';

    //alert("height:"+document.get);
    
    // Access each image part using the array index
    for (var i = 0; i < imageParts.length; i++) {
        //alert(imageParts.length);
      var imagePart = imageParts[i];
      var retriy= document.getElementById("retryes");
      // Do something with each image part, such as displaying it on the page
      var tile=retriy.appendChild(imagePart);
      //let tile=document.getElementsByClassName("tile"+(i+1));
      tile.className="tile"+(i+1);

      if(c==n-1){
        r++;c=0;
      }
      else{
        c++;
      }

      tile.id = r.toString() + "-" + c.toString();
            //tile.src = imgOrder.shift() + ".jpg";

            
            
            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            //document.getElementById("retryes").append(tile);

    }     var whiteTile=document.getElementById('0-0');
          var anyTile=document.getElementById('1-0');
          whiteTile.src="./pics/3.jpg";
          whiteTile.width=anyTile.width;
          
          //whiteTile=whiteImg;
          

          
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
 /*if (!otherTile==whiteTile) {
    return;
}*/

  otherTile.width=currTile.width;

let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
let r = parseInt(currCoords[0]); 
let c = parseInt(currCoords[1]);

let otherCoords = otherTile.id.split("-");
let r2 = parseInt(otherCoords[0]);
let c2 = parseInt(otherCoords[1]);

let moveLeft = r == r2 && c2 == c-1;
let moveRight = r == r2 && c2 == c+1;

let moveUp = c == c2 && r2 == r-1; 
let moveDown = c == c2 && r2 == r+1;

let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turnsz").innerText = turns;
}
}

