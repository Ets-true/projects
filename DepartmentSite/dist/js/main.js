$(document).ready(function() {
    
    showJobs()

    if (document.documentElement.clientWidth >=1024) {
        scrollTop = 0;
        helperStarted = 0;

        setTimeout(() => {
            translation()
        }, 3000);

        setTimeout(() => {
            showHelper()
        }, 10000);

        addSlider()

        addVideos()

        initialize();

        $("#Menu").on("click", function(){
            showMenu()
        });

        $(document).on('click', '#PageBack', function() {
            hideMenu();
        });

        $(window).on('scroll', function() {

            scrollTop = $(window).scrollTop()

            changeHelper()
           
            showChapter()

            hideJobs()

            playLottie()
            
            showSlider()

            changeSlide()

            playAccompany()

            changePage()

        });

    }




    if (document.documentElement.clientWidth <=1024) {
       
        var winHeight = $(window).height();
        var mobiletext = document.querySelector('.MobileText')
    
        var mobileTextNumber = 0;
        
        $(window).on('scroll', function() {

            var mobiletext_position = mobiletext.getBoundingClientRect().top;

            if(mobiletext_position <= winHeight*0.59 && mobileTextNumber == 0){
                mobiletext.style.opacity = 1;
            }



        })

        $("#sendMail").on("click", function(){
            var name = $("#name").val().trim();
            var phone = $("#phone").val().trim();
            var company = $("#company").val().trim();
            if(name == ""){
            alert("Введите имя")
            }else if(phone == ""){
                alert("Введите телефон")
            }else if(company == ""){
                alert("Введите название компании")
            }
            else{
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                cache: false,
                data: { 'name': name, 'phone': phone, 'company': company },
                dataType: 'html',
                beforeSend: function(){
                    // $("#sendMail").prop("disabled", true);
                    var buttonSend = document.querySelector('#sendMail')
                    buttonSend.style.opacity = "0"
                    setTimeout(function(){
                        var success = document.querySelector('#Success')
                        success.style.display = "block"
                        setTimeout(function(){
                            success.style.opacity = "1"
                        },200)
                    }, 1500)

                },
                success: function(data){
                }
            })
            }
        })
    }  
})




