function setup() {
  createCanvas(800, 600);
}

function draw() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let diagonalGradient = (x + y) / (width + height);
      let blueValue = diagonalGradient * 256;
      set(x, y, color(0, 0, blueValue));
      let centerX = width / 2;
      let centerY = height / 2;
      let dx = x - centerX;
      let dy = y - centerY;
      let d = sqrt(dx * dx + dy * dy);

      let redValue = 255 - d;
      let greenValue = d;

      set(x, y, color(redValue, greenValue, blueValue));
    }
  }

  updatePixels();
  // noprotect
  noLoop();
}
