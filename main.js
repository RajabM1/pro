function displayPictures() {

    let parent = document.querySelector(".parent");
    let template = document.createElement("div");
        template.className = "item";
    let img = document.createElement("img");
        img.className = "img";
    let arr = ["Photos/1.jpg", "Photos/2.jpg", "Photos/3.jpg", "Photos/4.jpg", "Photos/5.jpg", "Photos/6.jpg"];
    let index = parseInt(Math.random() * arr.length);
    img.src = arr[index];
    template.appendChild(img);
    parent.appendChild(template);
}