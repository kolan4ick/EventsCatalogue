function onClickImage(element) {
  document.getElementById("imgInImageModal").src = element.src;
  document.getElementById("imageModal").style.display = "block";
}
