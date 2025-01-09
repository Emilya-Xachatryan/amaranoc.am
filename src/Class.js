

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


export { image1, image2, image3 };