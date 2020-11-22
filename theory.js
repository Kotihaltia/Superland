let mainPage = document.querySelector('.page-about'),
    items = mainPage.querySelectorAll('.page-about-active');

verticalMenu.onclick = function (e) {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    e.target.parentElement.classList.add('active');
}

/*как вариант, прописать всем 2м страничкам 2 общих доп класса актив неактив, отразить
их в цсс приписав к уже имеющимся актив и неактив и попробовать вызывать этой функией
доп параметры открытия и закрытия*/