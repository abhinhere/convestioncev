// instagram share
document.getElementById('instagramBtn').addEventListener('click', function () {
    const instagramUrl = "https://www.instagram.com/cev.stories/";
    window.open(instagramUrl, '_blank'); // Opens the Instagram page in a new tab
  });


  // Array of local image paths
 const images = [
  "img/1.webp", // Ensure this path matches your folder structure
  "img/2.webp",
  "img/3.webp",
  "img/4.webp",
  "img/5.webp",
  "img/6.webp"
];

// Function to display a random image
const displayRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imgElement = document.getElementById("randomImage");
  imgElement.src = images[randomIndex];
};

// Show a random image when the page loads
window.onload = displayRandomImage;
  
  