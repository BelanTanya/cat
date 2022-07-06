const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.green-nav');
    const whiteInfo = document.querySelector('.white-info');
    const greenImg = document.querySelector('.green-img');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        whiteInfo.classList.toggle('_active');
        greenImg.classList.toggle('_active');
    });
}