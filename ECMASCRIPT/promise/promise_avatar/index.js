const loadAvatarImage = url => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
            image.addEventListener("load", () => resolve(image));
            image.addEventListener("error", error => reject(error));
        });
        image.src = url;
    });
}

loadAvatarImage("avatar.jpg")
    .then( img => {
        console.log(`Genişlik: ${img.width}, Yükseklik: ${img.height}`);
        const _avatar = document.getElementById('avatar');
        _avatar.src = img.src;
    })
    .catch(err => console.error(error));

// Genişlik: 172, Yükseklik: 170