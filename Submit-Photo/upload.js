let images = JSON.parse(localStorage.getItem("uploadImg")) || [];


function addImage() {

    let uploader = document.querySelector("#file-upload");
    uploader.click();

}

document.querySelector("#file-upload").addEventListener('change', function () {

    const reader = new FileReader();

    reader.addEventListener("load", () => {
        let imgObject = {};
        imgObject.img = reader.result;
        images.push(imgObject);
        let previewImg = document.querySelector('#img-preview');
        previewImg.src = reader.result;
        document.querySelector('.uploaded-photo').innerHTML = `<h3>1 Image Added Successfully</h3><h3>Click Submit to Upload</h3>`
    })

    reader.readAsDataURL(this.files[0]);


});


function uploadImage() {
    localStorage.setItem("uploadImg", JSON.stringify(images));
    let previewImg = document.querySelector('#img-preview');
    previewImg.src = "./1x.png";
    document.querySelector('.uploaded-photo').innerHTML = `<h3>1 Image Uploaded Successfully</h3><h3>Click + to add more Image</h3>`
}
