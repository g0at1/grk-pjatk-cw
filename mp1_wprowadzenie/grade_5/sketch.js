let x1, y1, x2, y2, x3, y3;
let cx, cy;

function setup() {
  createCanvas(800, 600);
  x1 = 50;
  y1 = height - 50;
  x2 = width - 50;
  y2 = height - 50;
  x3 = width / 2;
  y3 = 50;
  cx = x1;
  cy = y1;
}

function draw() {
  background(0);
  stroke(255);

  point(x1, y1);
  point(x2, y2);
  point(x3, y3);

  for (let i = 0; i < 300000; i++) {
    let r = floor(random(3));
    switch (r) {
      case 0:
        cx = (cx + x1) / 2;
        cy = (cy + y1) / 2;
        point(cx, cy);
        break;
      case 1:
        cx = (cx + x2) / 2;
        cy = (cy + y2) / 2;
        point(cx, cy);
        break;
      case 2:
        cx = (cx + x3) / 2;
        cy = (cy + y3) / 2;
        point(cx, cy);
        break;
    }
    
    updatePixels();
    // noprotect
    noLoop();
  }
}
