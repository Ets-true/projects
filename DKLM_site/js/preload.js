    var loading = document.querySelector('.loading');
    var aside = document.querySelector('aside');
    var headerLogo = document.querySelector('.header__logo');
    var headerLinks = document.querySelector('.header__links');

    var scrollLine = document.querySelector('.scroll__line');
    var scroll = document.querySelector('.scroll');
    
    setTimeout(function(){
        aside.classList.add('opacity1');
        headerLogo.classList.add('opacity1');
        headerLinks.classList.add('opacity1');
    }, 10);

    setTimeout(function(){
        loading.classList.add('opacity0');
    }, 1500);

    setTimeout(function(){
        scroll.classList.add('active_scroll');
    }, 2500);

    setTimeout(function(){
        loading.style.display = "none"
        scrollLine.classList.add('active_scrollLine');
    }, 3500);