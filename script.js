// variables for state management
const fileInput = document.getElementById("fileInput");
const submitBtn = document.getElementById("submit-button");
const uploadIcon = document.getElementById("upload-icon");
const removeBtn = document.getElementById("remove-button");
const brandIcon = document.getElementById("brand-icon");
const pinkLayer = document.getElementById("pink-layer");
const blueLayer = document.getElementById("blue-layer");
const yellowLayer = document.getElementById("yellow-layer");
const btnLoader = document.getElementById("btn-loader");
const loader = document.getElementById("main-loader");
const umbrellaImage = document.getElementById("umb-image");
// EVENT LISTENERS

// file input listener
function handleFileInput(e) {
  const p = document.getElementById("upload_text");
  if (e.target.files[0]) {
    p.textContent = e.target.files[0].name.toUpperCase();
    brandIcon.src = URL.createObjectURL(e.target.files[0]);
    removeBtn.style.visibility = "visible";
    brandIcon.style.visibility = "visible";
    // for few seconds and reset
    umbrellaImage.style.display = "none";
    loader.style.display = "block";
    uploadIcon.style.display = "none";
    btnLoader.style.display = "flex";
    brandIcon.style.display = "none";
    // reset after 5 seconds
    setTimeout(() => {
      umbrellaImage.style.display = "block";
      loader.style.display = "none";
      uploadIcon.style.display = "block";
      btnLoader.style.display = "none";
      brandIcon.style.display = "block";
    },5000)
  }
}

pinkLayer.addEventListener("click", function (e) {
  document.getElementById("container").style.backgroundColor = "#edc2cf89"
  document.getElementById("umb-image").src = "images/pink_umbrella.png"
  submitBtn.style.backgroundColor = "#D72C87";
  // for few seconds and reset
  umbrellaImage.style.display = "none";
  loader.style.display = "block";
  loader.style.stroke = "#D72C87";
  uploadIcon.style.display = "none";
  btnLoader.style.display = "flex";
  brandIcon.style.display = "none";
  const fileUploaded = document.getElementById("upload_text").textContent;
  // reset after few seconds
  setTimeout(() => {
    umbrellaImage.style.display = "block";
    loader.style.display = "none";
    uploadIcon.style.display = "block";
    btnLoader.style.display = "none";
    brandIcon.style.display = "block";
  }, fileUploaded === "UPLOAD LOGO" ? 300 : 5000);
})

blueLayer.addEventListener("click", function (e) {
  document.getElementById("container").style.backgroundColor = "#a9d0f589";
  document.getElementById("umb-image").src = "images/blue_umbrella.png";
  submitBtn.style.backgroundColor = "#29B1E5";
  // for few seconds and reset
  umbrellaImage.style.display = "none";
  loader.style.display = "block";
  loader.style.stroke = "#29B1E5";
  uploadIcon.style.display = "none";
  btnLoader.style.display = "flex";
  brandIcon.style.display = "none";
  const fileUploaded = document.getElementById("upload_text").textContent;
  // reset after few seconds
  setTimeout(
    () => {
      umbrellaImage.style.display = "block";
      loader.style.display = "none";
      uploadIcon.style.display = "block";
      btnLoader.style.display = "none";
      brandIcon.style.display = "block";
    },
    fileUploaded === "UPLOAD LOGO" ? 300 : 5000
  );
})

yellowLayer.addEventListener("click", function (e) {
  document.getElementById("container").style.backgroundColor = "#f7f2d089";
  document.getElementById("umb-image").src = "images/yellow_umbrella.png";
  submitBtn.style.backgroundColor = "#FDD143";
  // for 5 seconds and reset
  umbrellaImage.style.display = "none";
  loader.style.display = "block";
  loader.style.stroke = "#FDD143";
  uploadIcon.style.display = "none";
  btnLoader.style.display = "flex";
  brandIcon.style.display = "none";
  const fileUploaded = document.getElementById("upload_text").textContent;
  // reset after few seconds
  setTimeout(
    () => {
      umbrellaImage.style.display = "block";
      loader.style.display = "none";
      uploadIcon.style.display = "block";
      btnLoader.style.display = "none";
      brandIcon.style.display = "block";
    },
    fileUploaded === "UPLOAD LOGO" ? 300 : 5000
  );
})

document
  .getElementById("remove-button")
  .addEventListener("click", function (e) {
    e.stopPropagation();
    fileInput.value = "";
    document.getElementById("upload_text").textContent = "UPLOAD LOGO";
    brandIcon.src = "";
    brandIcon.style.visibility = "hidden";
    btnLoader.style.visibility = "hidden";
    removeBtn.style.visibility = "hidden";
  });

// CLICK LOGIC
submitBtn.addEventListener("click", function (e) {
  // If user clicks on the X icon, do nothing
  if (e.target.closest("#remove-button")) return;
  // Otherwise open file dialog
  fileInput.click();
});