function setup() {
  createCanvas(800, 600);
}

function draw() {
  // Niebo
  for (let y = 0; y < height * 0.7; y++) {
    for (let x = 0; x < width; x++) {
      set(x, y, color(204, 204, 255));
    }
  }
  
  // Trawa
  for (let y = height * 0.7; y < height; y++) {
    for (let x = 0; x < width; x++) {
      set(x, y, color(0, 95, 0));
    }
  }
  
  // Kwiaty
  for (let i = 0; i < 1000; i++) {
    let flowerX = floor(random(width));
    let flowerY = floor(random(height * 0.7, height));
    let flowerColor = color(random(255), random(255), random(255));
    set(flowerX, flowerY, flowerColor);
  }
  
  // Fasada
  for (let y = height / 3; y < height * 0.7; y++) {
    for (let x = width / 4; x < width * 0.7; x++) {
      set(x, y, color(102, 51, 0));
    }
  }
  
  // Dach
  let roofTop = height / 3;
  let roofStartX = width / 4;
  let roofEndX = width * 0.7;
  for (let y = 0; y < height / 3; y++) {
    roofStartX += 1; //przesuniecie w prawo
    roofEndX -= 1; //przesuniecie w lewo
    for (let x = roofStartX; x < roofEndX; x++) {
      set(x, roofTop - y, color(255, 153, 153));
    }
  }
  

  updatePixels();
  // noprotect
  noLoop();
}
