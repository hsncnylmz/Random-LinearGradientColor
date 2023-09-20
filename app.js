// fonksiyon olarak lineargradient değişkenini kullanıyorum
function lineargradient() {
    // daha önce yaptığımız gibi hex kodlarını yazıyoruz
    let hexkodlar = "1234567890ABCDEF";
    // hex kodlarının başında sharp (#) işareti olacağı için belirtiyoruz
    let newhex = "#";
    // döngüde hex kodlarının 6 koddan oluştuğunu belirterek döngü içine alıyoruz
    for (let i = 0; i < 6; i++) {
        newhex += hexkodlar[Math.floor(Math.random() * hexkodlar.length)];
    }
    return newhex;
}

document.querySelector(".gradientclr").addEventListener("click", function () {
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        let startColor = lineargradient();
        let endColor = lineargradient();
        let gradient = `linear-gradient(45deg, ${startColor}, ${endColor})`;
        boxes[i].style.background = gradient;
        boxes[i].innerHTML = gradient;
    }
});