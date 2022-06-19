let images = JSON.parse(localStorage.getItem("uploadImg"));

let container = document.querySelector(".container");
function display(data) {
    if (data == null) {
        container.innerHTML = `<h1>No Image Uploaded Yet</h1>`
    }
    else {
        data.forEach((ele) => {

            let box = document.createElement("div");

            let image = document.createElement("img");
            image.src = ele.img;

            box.append(image);
            container.append(box);

        })
    }

}
display(images);

document.getElementById("count").innerText = images.length;

let likedCount = JSON.parse(localStorage.getItem("liked"));
document.getElementById("likecount").innerText = likedCount.length;