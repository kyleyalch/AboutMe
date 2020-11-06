// I repeated these commands because making a nested code was too difficult lol
var modal = document.getElementById("ImgModal"); // 1st image
var modal2 = document.getElementById("ImgModal2"); // 2nd image
var modal3 = document.getElementById("ImgModal3"); // 3rd image
var modal4 = document.getElementById("ImgModal4"); // 4th image
var modal5 = document.getElementById("ImgModal5"); // 5th image
var modal6 = document.getElementById("ImgModal6"); // 6th image


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");
var img4 = document.getElementById("image4");
var img5 = document.getElementById("image5");
var img6 = document.getElementById("image6");
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
var captionText4 = document.getElementById("caption4");
var captionText5 = document.getElementById("caption5");
var captionText6 = document.getElementById("caption6");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = img2.src;
  captionText2.innerHTML = this.alt;
}

img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = img3.src;
  captionText3.innerHTML = this.alt;
}

img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = img4.src;
  captionText4.innerHTML = this.alt;
}

img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = img5.src;
  captionText5.innerHTML = this.alt;
}

img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = img6.src;
  captionText6.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("i-close")[0];
var span2 = document.getElementsByClassName("i-close")[1];
var span3 = document.getElementsByClassName("i-close")[2];
var span4 = document.getElementsByClassName("i-close")[3];
var span5 = document.getElementsByClassName("i-close")[4];
var span6 = document.getElementsByClassName("i-close")[5];

// Close images
window.onclick = function(event) {
	if (event.target == modal) {
    modal.style.display = "none";
	}
	if (event.target == modal2) {
    modal2.style.display = "none";
	}
	if (event.target == modal3) {
    modal3.style.display = "none";
	}
	if (event.target == modal4) {
    modal4.style.display = "none";
	}
	if (event.target == modal5) {
    modal5.style.display = "none";
	}
	if (event.target == modal6) {
    modal6.style.display = "none";
	}
}
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

span5.onclick = function() {
  modal5.style.display = "none";
}

span6.onclick = function() {
  modal6.style.display = "none";
}
