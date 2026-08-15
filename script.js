function upDate(previewPic) {
    var imageContainer = document.getElementById('image-container');
    imageContainer.style.backgroundImage = "url('" + previewPic.src + "')";
    imageContainer.innerHTML = previewPic.alt;
}

function unDo() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.style.backgroundImage = "url('')";
    imageContainer.innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Sự kiện onload đã chạy: Đang thêm tabindex vào ảnh.");
    
    var images = document.getElementsByClassName('preview');
    
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}