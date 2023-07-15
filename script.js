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

  const imageCard = document.createElement('div');
  imageCard.classList.add('image-card');

  const img = document.createElement('img');
  img.src = imageData;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', function() {
    imageCard.remove();
  });

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.addEventListener('click', function() {
    // Add your edit functionality here
    console.log('Edit button clicked');
  });

  imageCard.appendChild(img);
  imageCard.appendChild(deleteButton);
  imageCard.appendChild(editButton);

  imageList.appendChild(imageCard);
}
