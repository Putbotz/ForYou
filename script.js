const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const responses = [
  "Aaaaa, I like you too",
  "Yay! We're going to have so much fun together!",
  "Awesome! Let's make some memories!",
  "Woo-hoo! You're the best!",
  "Great choice! Let's go on an adventure!",
];

// Preload the GIF image
const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
};

preloadImage("https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp");

// Function to get a random response from the array
const getRandomResponse = () => {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
};

let isProcessing = false; // Flag to prevent multiple rapid clicks

yesBtn.addEventListener("click", () => {
  if (isProcessing) return; // Prevent multiple rapid clicks
  isProcessing = true;

  question.innerHTML = getRandomResponse();
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

  // Reset the flag after a delay
  setTimeout(() => {
    isProcessing = false;
  }, 1000); // Adjust the delay as needed
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
