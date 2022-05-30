function translation() {
    setTimeout(function () {
        var invis = document.querySelectorAll("#invis")
        var iteration = 0;
        var max = invis.length
        function invisible(invis, it, max) {
            invis[it].style.transition = "0.3s";
            invis[it].style.opacity = 0;
            it++;
            if (it < max) {
                setTimeout(function () {
                    invisible(invis, it, max)
                }, 160)
            }
        }
        invisible(invis, iteration, max)
    }, 500)

    setTimeout(function () {
        var letters = document.querySelectorAll('.letter')
        var iteration_2 = 0;
        var max_2 = letters.length
        function round(letters, it, max) {
            letters[it].style.opacity = 1;
            letters[it].style.animation = "letter 0.7s";
            it++;
            if (it < max) {
                setTimeout(function () {
                    round(letters, it, max)
                }, 50)
            }
        }
        round(letters, iteration_2, max_2)
    }, 700)

    setTimeout(function () {
        if (document.documentElement.clientWidth >= 1024) {
            setTimeout(function () {
                document.querySelector(".iphone__blur").style.opacity = 1;
                // setTimeout(function () {
                //     document.querySelector(".iphone").style.opacity = 0;
                // })
            }, 2500)
        }

    }, 300);
}