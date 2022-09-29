window.onload = () => {
    document.querySelector(".menu_mobile").addEventListener("click", () => {
        if (document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        }else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    })
}

window.addEventListener('resize', function () {
    var largura = window.innerWidth;

    if (largura > 815) {
        document.querySelector(".menu nav ul").removeAttribute('style');
    }
})