const backgrounds = [
  "8efdf239a269.jpg",
  "c97a2e8b2c66.jpg",
  "2eb0b6b23954.jpg",
  "a3c72d84c3c1.jpg",
  "2a60e787fe6c.jpg",
  "d58c189fcc59.jpg",
  "ae2c01024aaa.jpg",
  "dc4c4e6077a3.jpg",
  "5eaede34dca7.jpg"
];

function initBackground() {
  const image = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = `url("/wallpaper/${image}")`;
}

initBackground();
