function initialize() {

  animData = {
    container: document.getElementById('lottie-1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'media/lottie/newUXUI.json'
  };
  anim = bodymovin.loadAnimation(animData);

  animData_2 = {
    container: document.getElementById('lottie-2'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'media/lottie/lottie-2.json'
  };
  anim_2 = bodymovin.loadAnimation(animData_2);

  load = {
    container: document.getElementById('load_lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'media/lottie/load.json'
 };

 setTimeout(() => {
    loadAnim = bodymovin.loadAnimation(load)
 }, 2000);

  winHeight = $(window).height();



  animDuration = document.querySelector('.lottie_wrap').offsetHeight;
  scrollToElem = document.querySelector('.lottie_wrap').offsetTop + document.querySelector('.lottie_animation').offsetHeight / 2 - winHeight;

  animDuration_2 = document.querySelector('.lottie_wrap_2').offsetHeight;
  scrollToElem_2 = document.querySelector('.lottie_wrap_2').offsetTop + document.querySelector('.lottie_animation_2').offsetHeight / 2 - winHeight;

  winHeightSpec = $(window).height();
  winWidthSpec = $(window).width()


  if (winWidthSpec <= 1920) {
    if (winHeightSpec / winWidthSpec >= 0.48958) {
      SpecVar = 0;
    } else if (winHeightSpec / winWidthSpec < 0.48958) {
      SpecVar = (winWidthSpec * 0.48958 - winHeightSpec) / 2
    }
  } else {
    SpecVar = 0;
  }

  titleMP4 = document.querySelectorAll('.title__video')
  slideMP4 = document.querySelectorAll('.video_background')

  // helperStarted = 0


  video = document.querySelector('.video__IT')
  // video.pause();

  num = 0;
  chapters = document.querySelectorAll('.chapter__title');
  //   chapter;
  //   chapter_position;

  winHeight = $(window).height();
  winHeight_2 = winHeight / 2;

  //   scrollToChapter;
  //   scrollTop;


  number = 0;
  number_2 = 0;

  lottie_Wrap_Position = $(".lottie_wrap").offset().top;
  lottie_Wrap_Height = $(".lottie_wrap").height();

  sum_Height = lottie_Wrap_Position + lottie_Wrap_Height


  video_up = document.querySelector('.video_up');
  lottie_animation = document.querySelector('.lottie_animation');
  slider_arc = document.querySelector('.slider__arc');
  slider_title = document.querySelector('.slider__title');


  vidblock = document.querySelector('.slider__video');
  vidblock_width = $(".slider__video").width()


  it_block = document.querySelector('#IT_block');
  art_block = document.querySelector('#Art_block');
  industry_block = document.querySelector('#Industry_block');
  science_block = document.querySelector('#Science_block');
  media_block = document.querySelector('#Media_block');


  it_Title = document.querySelector('.title__IT');
  art_Title = document.querySelector('.title__Art');
  industry_Title = document.querySelector('.title__Industry');
  science_Title = document.querySelector('.title__Science');
  media_Title = document.querySelector('.title__Media');

  ////Видосы



  ITNumber = 0;
  ArtNumber = 0;
  IndustryNumber = 0;
  ScienceNumber = 0;
  MediaNumber = 0;

  AccompanyNumber = 0;


  AccompanyVideo_block = document.querySelector('#AccompanyVideo_block');
  //   AccompanyVideo =  document.querySelector('#AccompanyVideo');

  winWidth = $(window).width();

  video_up_height = $(".video_up").height()
  scrollToSlider = winHeight / 2 - video_up_height / 2;
}
