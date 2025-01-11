class ImageDetails {
  constructor(imageUrl, description, priceDay, priceNight) {
      this.imageUrl = imageUrl;
      this.description = description;
      this.priceDay = priceDay;
      this.priceNight = priceNight;
  }

  displayInfo() {
      console.log("Image URL: " + this.imageUrl);
      console.log("Description: " + this.description);
      console.log("Price (Day): " + this.priceDay);
      console.log("Price (Night): " + this.priceNight);
  }
}

const image1 = new ImageDetails(
  "https://api.amaranoc.am/1705829500856--0.9156560389221753image.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

const image2 = new ImageDetails(
  "https://api.amaranoc.am/1705829500853--0.11120240324423336image.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

const image3 = new ImageDetails(
  "https://api.amaranoc.am/1705829500851--0.39392940119410236image.webp",
  "Բջնի",
  "90,000",
  "120,000"
);


const image4 = new ImageDetails(
  "https://api.amaranoc.am/1736346067846--0.48136685223654463image_optimized.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

const image5 = new ImageDetails(
  "https://api.amaranoc.am/1736346067857--0.5278270523297273image_optimized.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

const image6 = new ImageDetails(
  "https://api.amaranoc.am/1736346067861--0.3886971024997965image_optimized.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

// տնակներ 
const image7 = new ImageDetails(
  "https://api.amaranoc.am/1735302502172--0.7882695720958692image_optimized.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

const image8 = new ImageDetails(
  "https://api.amaranoc.am/1735302502215--0.230355006263677image_optimized.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

const image9 = new ImageDetails(
  "https://api.amaranoc.am/1735302502225--0.9248012451193757image_optimized.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

//փակ լողավազան

const image10 = new ImageDetails(
  "https://api.amaranoc.am/1705829500853--0.11120240324423336image.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

const image11 = new ImageDetails(
  "https://api.amaranoc.am/1705829500856--0.9156560389221753image.webp",
  "Բջնի",
  "90,000",
  "120,000"
);

const image12 = new ImageDetails(
  "https://api.amaranoc.am/1705829500851--0.39392940119410236image.webp",
  "Բջնի",
  "90,000",
  "120,000"
);


export { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,  };

