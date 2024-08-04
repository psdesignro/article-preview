const shareIcon = document.getElementById("share-icon");

const shareBox = document.getElementById("share-box");

shareIcon.addEventListener("click", function () {
  if (shareBox.style.visibility === "hidden") {
    shareBox.style.visibility = "visible";
  } else {
    shareBox.style.visibility = "hidden";
  }
});
