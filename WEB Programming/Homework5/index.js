let images = ['images/jeremy-bishop-OxucP0JIORU-unsplash.jpg', 'images/neom-0SUho_B0nus-unsplash.jpg', 'images/neom-bOMVTvE2QFU-unsplash.jpg', 'images/neom-brFQojtwSzE-unsplash.jpg', 'images/neom-XN6Z9g3DM4A-unsplash.jpg'];
let currentImage = 0;

document.getElementById('bgChange').addEventListener('click', function () {
    document.body.style.backgroundImage = 'url(' + images[currentImage] + ')';
    currentImage = (currentImage + 1) % images.length;
});

document.getElementById('linkChange').addEventListener('click', function () {
    let links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = 'white';
        links[i].style.backgroundColor = 'green';
        links[i].style.borderRadius = '5px';
    }


});    
