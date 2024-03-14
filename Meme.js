const memeForm = document.getElementById("memeForm");
const memeContainer = document.getElementById("memeContainer");

memeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;
  const imageUrl = document.getElementById("imageUrl").value;

  //check if text box is filled
  if (!topText || !bottomText || !imageUrl) {
    alert("Please fill out all boxes.");
    return;
  }

  //create div for meme
  const memeDiv = document.createElement("div");
  memeDiv.classList.add("meme");

  //create image
  const img = document.createElement("img");
  img.src = imageUrl;

  //create top text
  const topTextDiv = document.createElement("div");
  topTextDiv.classList.add("top-text");
  topTextDiv.textContent = topText;

  //create bottom text
  const bottomTextDiv = document.createElement("div");
  bottomTextDiv.classList.add("bottom-text");
  bottomTextDiv.textContent = bottomText;

  //append elements to meme div
  memeDiv.appendChild(img);
  memeDiv.appendChild(topTextDiv);
  memeDiv.appendChild(bottomTextDiv);

  //make delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";

  deleteButton.addEventListener("click", function () {
    memeContainer.removeChild(memeDiv);
  });
  memeDiv.appendChild(deleteButton);
  //append meme to container
  memeContainer.appendChild(memeDiv);
  // clear search
  memeForm.reset();
});
