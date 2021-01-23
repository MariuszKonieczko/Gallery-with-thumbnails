window.onload = function () {
  const mainImage = document.getElementById('mainImage');
  const image = new Image();

  mainImage.appendChild(image);

  const thumbnails = document.getElementsByClassName('thumbnail');
  let currentThumbnail = thumbnails[0];

  image.src = currentThumbnail.getAttribute('src');
  currentThumbnail.className += ' current';

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
      currentThumbnail.className = currentThumbnail.className.replace(
        ' current',
        ''
      );

      currentThumbnail = this;
      this.className += ' current';
      image.src = this.getAttribute('src');
    });
  }
};
