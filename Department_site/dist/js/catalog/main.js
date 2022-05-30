$(document).ready(function () {

    $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
        }, 'xml');
      });
  
    document.querySelector(".catalog__title").style.opacity = 1
    setTimeout(function(){
        document.querySelector(".row").style.opacity = 1
    },300)
  
    var row = document.querySelector(".row")
    var redisign = 0;
    var chooseType = 0;
    var chooseName;
    var id = "none";
    var choose = 0;
    var count = 0;
  
    function chosen(element){
        element.style.transform = "translateY(5px)"
        var result = element.innerHTML + '<div class="box"></div>'
       
        element.innerHTML = result
  
        // document.querySelector(".box").style.transform = 'translateY(-5px)'
        // setTimeout(() => {
        //     document.querySelector(".box").style.opacity = 0.4
        // }, 300);
  
        // element.querySelector('.box').style.opacity = 0.4
    }
  
    function unchosen(element){
        element.style.transform = "translateY(0px)"
        var result = element.innerHTML
        str = '<div class="box"></div>'
        result = result.replace(str, '')
        element.innerHTML = result
    }
  
    function style(element){
        var color
       
        if(element.id=="landing"){
            color = "#007023"
        }else if(element.id=="company"){
            color = "#0084FF"
        }else if(element.id=="shop"){
            color = "#A22B39"
        }else if(element.id=="info"){
            color = "#4332B2"
        }
  
        var stroke = document.querySelectorAll('.cls-1')
        var i
        for(i = 0; i < stroke.length; i++){
            stroke[i].style.stroke = color;
        }
        document.querySelector('.input__file').style.color = color;
            
        document.querySelector('.line_go').style.opacity = 1;
        document.querySelector('.line_go').style.backgroundColor = color;
        document.querySelector('.link').style.color = color;
        shadow = "4px 4px" + color;
        document.querySelector('.purchase__dragdrop').style.boxShadow = shadow;
    }
  
    
  
  
  
    document.querySelectorAll('.column').forEach(element => {
        element.addEventListener('click', function () {

            document.querySelector("body").style.overflowY = "visible";
            document.querySelector("body").style.overflowX = "hidden";
  
            if (element.id == "redisign") {
                if (redisign == 0) {
                    if (choose == 1) {
                        unchosen(document.getElementById(id))
                        choose = 0;
                    }
                    chosen(element)
                    document.querySelector('.alert').style.transform = 'translateY(5px)'
                    setTimeout(() => {
                        document.querySelector('.alert').style.opacity = 1;
                    }, 300);
                    
                    redisign = 1;
                } else if (redisign == 1) {
                    if (choose == 1) {
                        unchosen(document.getElementById(id))
                        choose = 0;
                    }
                    unchosen(element)
                    redisign = 0;
                    document.querySelector('.alert').style.opacity = 0;
                }
                
            }
  
            if (element.id != "redisign") {
                if (id == "none") {
                    // element.style.border = "2px solid purple"
                    id = element.id
                    choose = 1;
                    chosen(element)
                    style(element)
  
                } else if (element.id == id) {
                    // element.style.border = "0px solid purple"
                    id = "none"
                    choose = 0;
                    unchosen(element)
  
                } else if (element.id != id) {
                    // document.getElementById(id).style.border = "0px"
                    unchosen(document.getElementById(id))
                    // element.style.border = "2px solid purple"
                    id = element.id
                    choose = 1;
                    chosen(element)
                    style(element)
                }
                var siteType = element.textContent
  
  
                if (redisign == 1) {
                    var result = element.querySelector(".column__title").textContent + " | Редизайн"
                    documentText = "brief_department_" + element.id + "_redisign.docx"
                    documentLink = "../media/files/brief_department_" + element.id + "_redisign.docx"
                } else if (redisign == 0) {
                    var result = element.querySelector(".column__title").textContent
                    documentText = "brief_department_" + element.id + ".docx"
                    documentLink = "../media/files/brief_department_" + element.id + ".docx"
                }
                count++
                
            }
  
  
            if(result){
                document.querySelector(".choose").innerHTML = result;
                // document.querySelector("#document").innerHTML = documentText;
                document.querySelector("#document").innerHTML = "Скачать документ на разработку сайта";
                document.querySelector("#document").href = documentLink 
            } else {
                document.querySelector(".choose").innerHTML = "Не выбран";

                document.querySelector("#document").innerHTML = "Скачать документ на разработку сайта";
                document.querySelector("#document").href="../media/files/document.docx"
            }
  
            // var el = document.getElementById('choose');
            // el.scrollIntoView({behavior: "smooth", block:"center"});
  
            if (count == 1) {
                $('html, body').stop().animate({
                    scrollTop: $("#choose").offset().top - 0
                }, 530);
            }
  
        });
    });
  
  })
  
  
  $(document).ready(function() {
  
    var dropArea = document.querySelector(".purchase__dragdrop")
    
    var isAdvancedUpload = function() {
      var div = document.createElement('div');
      return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();
    
    var files;
    
    var fileName = "Нет загруженных файлов";
    
    
    if (isAdvancedUpload) {
    
        
    
        var droppedFiles = false;
        var colorStyle;
        var contentBefore;
        var amount = 0;
        var label = document.querySelector(".input__file")
        var shadowStyle
    
        ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false)   
            document.body.addEventListener(eventName, preventDefaults, false)
        })
        ;['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName,highlight, false)
        })
          
        ;['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false)
        })
    
        dropArea.addEventListener('drop', handleDrop, false)
        
        function preventDefaults (e) {
            e.preventDefault()
            e.stopPropagation()
        }
        
       
    
        function highlight(e) {
            if(amount == 0){
                colorStyle = window.getComputedStyle(label,null).getPropertyValue("color")
                contentBefore = dropArea.innerHTML
            }
            dropArea.style.backgroundColor = "#E8E8EE"
            dropArea.innerHTML = '<span class="Download">Загрузить</span>'
            amount++
        }
          
        function unhighlight(e) {
            dropArea.style.backgroundColor = "white";
            dropArea.innerHTML = contentBefore
            
            amount = 0
        }
    
        function handleDrop(e) {
            if(fileName == "Нет загруженных файлов"){
                dt = e.dataTransfer
                files = dt.files
                files = [...files]
                
                fileName = files[0]['name']
                // alert(fileName)
                showFileName()
            }
        }
    
    
    }
    
    
    var input = document.querySelector("#file")
    input.addEventListener('change', function(){
        
        if(fileName == "Нет загруженных файлов"){
            colorStyle = window.getComputedStyle(label,null).getPropertyValue("color")
            contentBefore = dropArea.innerHTML
    
            fileName = input.files[0].name
            files = input.files
            // alert(fileName)
            showFileName()
        }
    })
    
    function showFileName(){
        shadowStyle = window.getComputedStyle(dropArea,null).getPropertyValue("box-shadow")
        dropArea.style.boxShadow = "4px 4px green";
        contentBefore = dropArea.innerHTML
    
        setTimeout(function(){
            dropArea.style.boxShadow = shadowStyle;
        }, 1000)
        
        fileResult = '<div class="DownloadedFile"><div class="delete"></div><span class="fileName">' +
        fileName + '</span></div>'
        dropArea.innerHTML = fileResult
    
        document.querySelector(".delete").addEventListener('click', function () {
            returnBack()
        })
    
    }
    
    function returnBack() {
        fileName = "Нет загруженных файлов"
        files = [];
        
        dropArea.innerHTML = contentBefore
        
        document.querySelector('input[type=file]').value = '';
        
        input = document.querySelector("#file")
        input.addEventListener('change', function(){
        
        if(fileName == "Нет загруженных файлов"){
            colorStyle = window.getComputedStyle(label,null).getPropertyValue("color")
            contentBefore = dropArea.innerHTML
    
            fileName = input.files[0].name
            files = input.files
            // alert(fileName)
            showFileName()
        }
        })
    }
    
    
    
    // function inputFile(input){
    //     alert(input.length)
    // }
    
            $('#sendMail').on('click', function() {
                // var file_data = $('#file').prop('files')[0]; 
                if(files != false){
                    var form_data = new FormData();
    
                    var type = document.querySelector(".choose").textContent
        
                    var dragdrop = files[0]
                    
                    // alert(dragdrop.name)
                    
                    // form_data.append('file', file_data);
        
                    form_data.append('file', dragdrop); 
                    form_data.append('theme', type); 
        
        
        
                    // form_data.append('name', 'Kira');
                    // form_data.append('phone', '87654');
                    // form_data.append('company', 'Yeah');
                    
        
                    // alert(form_data);
                    
                    
                    $.ajax({
                        url: 'https://departmentserver.ru/mail.php', // <-- point to server-side PHP script 
                        dataType: 'text',  // <-- what to expect back from the PHP script, if anything
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: form_data,                         
                        type: 'post',
                        beforeSend: function(){
                            $("#sendMail").prop("disabled", true);
                            setTimeout(function(){
                                var success = document.querySelector('#Success')
                                success.style.opacity = "1"
                                setTimeout(function(){
                                    returnBack()
                                    $("#sendMail").prop("disabled", false);
                                    success.style.opacity = "0"
                                }, 10000)
                            }, 1500)
                        },
                        success: function(php_script_response){
                            // alert(php_script_response); // <-- display response from the PHP script, if any
                        }
                     });
                } else {
                    alert("Прикрепите файл")
                }
                
            });
    
    
    });
    