
// slideshow
window.onload = function ()
{
    var s_image = [
    "/Movie img 2/Heart-Beat-S01-E01-04-2024-Tamil-Web-Series-HD-720p-Watch-Online.jpg",
    "/Movie img 2/permalu.webp",
    "/Movie img 2/dada1.jpg",
    "/Movie img 2/lion.webp",
    "/Movie img 1/avenger1.webp",
    "/Movie img 1/12.webp",
    ];

    var I_image1 = 0
    var imagefun = document.getElementById("main-img")

    function nextimage1() {
    I_image1++
    if (I_image1 >=s_image.length) {  
        I_image1 = 0 
    }
    imagefun.src = s_image[I_image1]

    }
    setInterval(nextimage1,3000)
}