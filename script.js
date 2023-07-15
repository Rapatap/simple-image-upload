document.getElementById('imageInput').addEventListener('change', handleImageSelection);

function handleImageSelection(event) {
  const fileInput = event.target;
  const files = fileInput.files;

  if (files && files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageData = e.target.result;
      showImagePreview(imageData);
    };
    reader.readAsDataURL(files[0]);
  }
}

function showImagePreview(imageData) {
  const previewContainer = document.getElementById('previewContainer');
  previewContainer.innerHTML = '';

  const previewImage = document.createElement('img');
  previewImage.src = imageData;

  previewContainer.appendChild(previewImage);
}

document.getElementById('uploadForm').addEventListener('submit', handleUpload);

function handleUpload(event) {
  event.preventDefault();

  const fileInput = document.getElementById('imageInput');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageData = e.target.result;
      addImage(imageData);
      fileInput.value = '';
    };
    reader.readAsDataURL(file);
  }
}

function addImage(imageData) {
  const imageList = document.getElementById('imageList');

  const imageCard = createImageCard(imageData);
  imageList.appendChild(imageCard);
}

function createImageCard(imageData) {
  const imageCard = document.createElement('div');
  imageCard.classList.add('image-card');

  const img = document.createElement('img');
  img.src = imageData;

  img.addEventListener('click', function() {
    enlargeImage(img);
  });

  const deleteButton = createButton('Delete', 'delete', function() {
    deleteImage(imageCard);
  });

  const editButton = createButton('Edit', 'edit', function() {
    editImage(imageCard);
  });

  imageCard.appendChild(img);
  imageCard.appendChild(deleteButton);
  imageCard.appendChild(editButton);

  return imageCard;
}

function createButton(text, className, clickHandler) {
  const button = document.createElement('button');
  button.innerText = text;
  button.classList.add(className);
  button.addEventListener('click', clickHandler);

  return button;
}

function deleteImage(imageCard) {
  imageCard.remove();
}

function editImage(imageCard) {
  // Add your edit functionality here
  console.log('Edit button clicked');
}

function enlargeImage(img) {
  const enlargedImageContainer = document.createElement('div');
  enlargedImageContainer.classList.add('enlarged-image-container');

  const enlargedImage = document.createElement('img');
  enlargedImage.src = img.src;

  enlargedImage.addEventListener('click', function() {
    enlargedImageContainer.remove();
  });

  enlargedImageContainer.appendChild(enlargedImage);
  document.body.appendChild(enlargedImageContainer);
}

