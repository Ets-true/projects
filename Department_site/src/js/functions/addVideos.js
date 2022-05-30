function addVideos() {
    var sliderTitles = document.querySelectorAll(".slide__title")
    var sliderVideos = document.querySelectorAll(".slider__video")
    const titleNames = ['IT_title', 'Art_title', 'Industry_title', 'Science_title', 'Media_title']
    const videoNames = ['IT', 'Art', 'Industry', 'Science', 'Media']

    for (let i = 0; i < sliderVideos.length; i++) {
        sliderTitles[i].innerHTML =
            `<video class="title__video" id="${videoNames[i]}__titleVideo"  width="100%" height="50%" no-controls autoplay loop muted ><source src="media/video/${titleNames[i]}.mp4"/></video>`
        sliderVideos[i].innerHTML =
            `<video id="${videoNames[i]}__backVideo" class="video_background" autoplay no-controls loop muted><source src="media/video/${videoNames[i]}.mp4"/></video>`
    }
    document.getElementById('AccompanyVideo_block').innerHTML =
        '<div class="Accompany__title1">Сопровождение.<br>Постепенное совершенствование каждой детали</div><div class="Accompany__title2">Поддерживаем работоспособность сайта, улучшаем функционал и обепечиваем безопасность</div><video id="AccompanyVideo" class="" width="100%" height="50%" no-controls muted ><source src="media/video/accompany.mp4"/></video>'
}