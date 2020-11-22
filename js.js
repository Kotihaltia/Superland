document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.menu-burger').classList.toggle('menu-burger-active');
    document.querySelector('.site-menu').classList.toggle('site-menu-active');

    if (!document.querySelector('.menu-icon').classList.contains('.menu-icon-active')) {
        document.querySelectorAll('.page').forEach(item => {
            item.classList.add('page-active');
        })

    }

}

document.querySelectorAll('.site-menu .item').forEach(item => {

    item.addEventListener('click', (e) => {
        console.log(e.target)
        const target = e.target.closest('.item')
        console.log(target.dataset.id)
        const pageIdMenu = target.dataset.id
        document.querySelectorAll('.page').forEach(page => {

            console.log(page)
            const pageId = page.getAttribute('id')
            console.log(pageId)
            if ((pageIdMenu !== pageId) && !page.classList.contains('page-active')) {
                page.classList.add('page-active');
            }
        })

        document.querySelector(`#${pageIdMenu}`).classList.toggle('page-active');

        if (document.querySelector(`#${pageIdMenu}`).classList.contains('page-active')) {
            $('.single-slide').slick('unslick');
        } else {
            setTimeout(() => {
                $('.single-slide').slick();
            }, 800);

        }
    })
})




