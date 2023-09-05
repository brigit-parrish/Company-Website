let currentImageIndex = 0;
const images = [
    'CompanyImages/slate-patio-sidehouse.jpg',
    'CompanyImages/IMG_3697.jpg',
    'CompanyImages/walkway.jpg',
    'CompanyImages/grass-dog.jpg',
    'CompanyImages/grass-installation.jpg',
    'CompanyImages/grass-nesbey.jpg',
    'CompanyImages/grass-rockwall.jpg',
    'CompanyImages/greenhouse.jpg',
    'CompanyImages/plant-gardenbed.jpg',
    'CompanyImages/plant-installation.jpg',
    'CompanyImages/adam.jpg',
    'CompanyImages/plant-intallation2.jpg',
    'CompanyImages/rockwall.jpg',
    'CompanyImages/slate-patio.jpg',
    'CompanyImages/slate-rockwall.jpg',
    'CompanyImages/stairway.jpg',
];
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById('gallery-image').src = images[currentImageIndex];
}
