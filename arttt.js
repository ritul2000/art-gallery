// Artwork collection (add your own image paths)
const artworks = [
  { src: 'dream.jpeg', title: 'Dreamscape' },
  { src: 'symphony.jpg', title: 'Color Symphony' },
  { src: 'forest.jpg', title: 'Mystic Forest' },
  { src: 'oceann.png', title: 'Ocean of Time' },
  { src: 'geometry.jpg', title: 'Urban Geometry' },
  { src: 'aa.jpg', title: 'beautiful art' },
  { src: 'bb.png', title: 'neautiful girl' },
];

const carousel = document.getElementById('carousel');
let angle = 0;
const total = artworks.length;

// Add images to the carousel
artworks.forEach((art, i) => {
  const img = document.createElement('img');
  img.src = art.src;
  img.className = 'artwork';
  const theta = (360 / total) * i;
  img.style.transform = `rotateY(${theta}deg) translateZ(600px)`;
  img.alt = art.title;
  carousel.appendChild(img);
});

// Navigation controls
document.getElementById('nextBtn').addEventListener('click', () => {
  angle -= 360 / total;
  carousel.style.transform = `rotateY(${angle}deg)`;
});

document.getElementById('prevBtn').addEventListener('click', () => {
  angle += 360 / total;
  carousel.style.transform = `rotateY(${angle}deg)`;
});

// Music toggle
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
