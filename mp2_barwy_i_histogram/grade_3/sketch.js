function preload() {
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
  img_r = createImage(256, 256);
  img_g = createImage(256, 256);
  img_b = createImage(256, 256);
  img_sum = createImage(256, 256);
}

function setup() {
  createCanvas(512, 512);
  img.resize(256, 256);

  img.loadPixels();
  img_r.loadPixels();
  img_g.loadPixels();
  img_b.loadPixels();
  img_sum.loadPixels();

  for (x = 0; x < img.width; x++) {
    for (y = 0; y < img.height; y++) {
      pos = 4 * (y * img.width + x);
      r = img.pixels[pos];
      g = img.pixels[pos + 1];
      b = img.pixels[pos + 2];
      a = img.pixels[pos + 3];

      img_r.set(x, y, color(r, 0, 0, 255));
      img_g.set(x, y, color(0, g, 0, 255));
      img_b.set(x, y, color(0, 0, b, 255));
      img_sum.set(x, y, color(r, g, b, 255));
    }
  }

  img_r.updatePixels();
  img_g.updatePixels();
  img_b.updatePixels();
  img_sum.updatePixels();

  image(img_r, 0, 0);
  image(img_g, 256, 0);
  image(img_b, 0, 256);
  image(img_sum, 256, 256);

  img_sum.blend(img_r, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
  img_sum.blend(img_g, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
  img_sum.blend(img_b, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
}

