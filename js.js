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


        const target = e.target.closest('.item')

        const pageIdMenu = target.dataset.id
        document.querySelectorAll('.page').forEach(page => {


            const pageId = page.getAttribute('id')

            if ((pageIdMenu !== pageId) && !page.classList.contains('page-active')) {
                page.classList.add('page-active');
            }
        })

        document.querySelector(`#${pageIdMenu}`).classList.toggle('page-active');


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



        }


    }, 3000)

}
)

document.querySelectorAll('.order .checkbox-btn').forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target.closest('.checkbox-btn')
        if (target.classList.contains('checkbox-btn-active')) {
            target.classList.remove('checkbox-btn-active')
        } else {
            target.classList.add('checkbox-btn-active')
        }
    }
    )
}
)

document.querySelectorAll('.block .block__bottom__btn').forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target.closest('.block__bottom__btn')
        if (target.classList.contains('block__bottom__btn__active')) {
            target.classList.remove('block__bottom__btn__active')
        } else {
            target.classList.add('block__bottom__btn__active')
        }
    }
    )
}
)

document.querySelector('.title-button').addEventListener('click', () => {
    document.querySelector('.menu-icon-wrapper').click()
    document.querySelector('.button-celebrate').click()

})




let plusUP = document.querySelector('.js-counter-p');
let plus = document.querySelector('.js-counter-p-d');

let minusUP = document.querySelector('.js-counter-m');
let minus = document.querySelector('.js-counter-m-d');

let windowup = document.querySelector('.js-counter-up');
let windowdown = document.querySelector('.js-counter-d');

plusUP.addEventListener('click', () => {
    let val = windowup.value;
    if (val < 10) { ++val };
    windowup.value = val;
}
)

minusUP.addEventListener('click', () => {
    let val = windowup.value;
    if (val > 0) { --val };
    windowup.value = val;
}
)

plus.addEventListener('click', () => {
    let val = windowdown.value;
    if (val < 10) { ++val };
    windowdown.value = val;
}
)

minus.addEventListener('click', () => {
    let val = windowdown.value;
    if (val > 0) { --val };
    windowdown.value = val;
}
)

$(document).ready(function () {
    $('.block__title').click(function (event) {
        if ($('.block').hasClass('one')) {
            $('.block__title').not($(this)).removeClass('active');
            $('.block__info').not($(this).next()).slideUp('active');
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
