function changeHelper() {
    if(helperStarted == 1){
        if (first_position + 500 < scrollTop) {
            if (document.documentElement.clientWidth < 1920) {
                var prop = 37 * (document.documentElement.clientWidth / 1910)
            }
            else {
                var prop = 37
            }
            var change = "translateY(-" + prop + "px)"
            helperText1.style.transform = change
            helperText2.style.transform = change
        }
        if (scrollTop >= 6000) {
            helper.style.opacity = 0;
            setTimeout(function () {
                helper.style.display = "none";
            }, 3000)
        }
    }
}