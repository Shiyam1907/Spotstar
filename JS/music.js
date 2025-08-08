
// slideshow
window.onload = function ()
{
    var s_image = [
    "/Music img 1/2m.jpg",
    "/Music img 1/5m.jpg",
    "/Music img 1/4m.jpg",
    "/Music img 1/3m.jpg",
    "/Music img 1/1m.jpg", 
    "/Music img 1/6m.jpg",
    ];

    var I_image1 = 0
    var imagefun = document.getElementById("img-1")

    function nextimage1() {
    I_image1++
    if (I_image1 >=s_image.length) {  
        I_image1 = 0 
    }
    imagefun.src = s_image[I_image1]

    }
    setInterval(nextimage1,3000)
}