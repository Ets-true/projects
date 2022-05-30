function showHelper() {
    if (scrollTop < 1000) {
        helper = document.querySelector('.main__helper');
        helperText1 = document.querySelector('.helper__text_1');
        helperText2 = document.querySelector('.helper__text_2');
        helper.style.transform = "translate3d(-52%, 0, 0)"
        first_position = scrollTop
        helperStarted = 1
    }
}