document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.menu-burger').classList.toggle('menu-burger-active');
    document.querySelector('.site-menu').classList.toggle('site-menu-active');

    if (!document.querySelector('.menu-icon').classList.contains('.menu-icon-active')) {
        document.querySelectorAll('.page-about').forEach(item => {
            item.classList.add('page-about-active');
        })

    }
    if (!document.querySelector('.menu-icon').classList.contains('.menu-icon-active')) {
        document.querySelectorAll('.page-atrakce').forEach(item => {
            item.classList.add('page-atrakce-active');
        })

    }
    if (!document.querySelector('.menu-icon').classList.contains('.menu-icon-active')) {
        document.querySelectorAll('.page-services').forEach(item => {
            item.classList.add('page-services-active');
        })

    }
}




document.querySelector('.o-parku').onclick = function () {

    document.querySelector('.page-about').classList.toggle('page-about-active');
    if (document.querySelector('.page-about').classList.contains('page-about-active')) {
        $('.single-slide').slick('unslick');
    } else {
        setTimeout(() => {
            $('.single-slide').slick();
        }, 800);

    }

}
document.querySelector('.services').onclick = function () {

    document.querySelector('.page-services').classList.toggle('page-services-active');
    if (document.querySelector('.page-services').classList.contains('page-services-active')) {
        $('.single-slide').slick('unslick');
    } else {
        setTimeout(() => {
            $('.single-slide').slick();
        }, 600);

    }

}
document.querySelector('.atrakce').onclick = function () {

    document.querySelector('.page-atrakce').classList.toggle('page-atrakce-active');
    if (document.querySelector('.page-atrakce').classList.contains('page-atrakce-active')) {

    }

}




