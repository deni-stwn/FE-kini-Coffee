export const parseHTML = (htmlContent: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const images = doc.querySelectorAll("img");

  // Create a container div for other images
  const otherImagesContainer = doc.createElement("div");
  otherImagesContainer.classList.add("list-other-img");

  // Process each image
  images.forEach((image, index) => {
    if (index === 0) {
      image.classList.add("first-image");
    } else {
      const div = doc.createElement("div");
      div.classList.add("other-images");
      div.appendChild(image.cloneNode(true));
      otherImagesContainer.appendChild(div);
    }
  });

  // Replace the original images with the container div
  const originalImages = doc.querySelectorAll("img");
  originalImages.forEach((image) => {
    if (!image.classList.contains("first-image")) {
      const parent = image.parentNode;
      if (parent) {
        parent.replaceChild(otherImagesContainer, image);
      }
    }
  });

  return doc.body.innerHTML;
};