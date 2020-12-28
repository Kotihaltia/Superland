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

window.addEventListener('load', () => {
    const picVar = ['.back-1', '.back-2', '.back-3']
    const pick = document.querySelector('.main-page .back')
    const color = document.querySelector('.main-page .color')
    const color1 = color.querySelector('.back-1')
    const color2 = color.querySelector('.back-2')
    const color3 = color.querySelector('.back-3')

    setInterval(() => {
        if (pick.classList.contains('back-1')) {
            pick.classList.remove('back-1');
            pick.classList.add('back-2');

            color1.classList.add('hide');
            color1.classList.remove('show');


            color2.classList.remove('hide');
            color2.classList.add('show');



            color3.classList.remove('hide');
            color3.classList.remove('show');


            console.log(1)




            return
        }
        if (pick.classList.contains('back-2')) {
            pick.classList.remove('back-2');
            pick.classList.add('back-3');


            color1.classList.remove('hide');
            color1.classList.remove('show');


            color2.classList.add('hide');
            color2.classList.remove('show');




            color3.classList.remove('hide');
            color3.classList.add('show');
            console.log(2)
            return
        }
        if (pick.classList.contains('back-3')) {
            pick.classList.remove('back-3');
            pick.classList.add('back-1');


            color1.classList.remove('hide');
            color1.classList.add('show');



            color2.classList.remove('hide');
            color2.classList.remove('show');


            color3.classList.add('hide');
            color3.classList.remove('show');

            console.log(3)

        }


    }, 3000)

}
)



