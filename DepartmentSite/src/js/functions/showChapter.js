function showChapter(){
    chapter_position =  chapters[num].getBoundingClientRect().top;
    if (chapter_position <= winHeight/2){
        chapters[num].style.opacity = 1;
        num++;
        if (num >=3){
            num = 0;
        }
    }

    if (chapter_position > $(window).height()/2){
        chapters[num].style.opacity = 0;
        num++;
        if (num >=3){
            num = 0;
        }
    }
}