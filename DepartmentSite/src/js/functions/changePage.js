function loadAnim_func() {
    loadAnim.goToAndPlay(0, true);
    setTimeout(() => {
       if (accept == 1) {
          document.location.href = "catalog/";
       }
    }, 3200);
 }

 function changePage(){
    if (document.querySelector(".change__page").getBoundingClientRect().top <= document.documentElement.clientHeight - $(".change__page").height()) {
        accept = 1
        loadAnim_func()
     }
     if (document.querySelector(".change__page").getBoundingClientRect().top > document.documentElement.clientHeight - $(".change__page").height()) {
        accept = 0
     }
 }