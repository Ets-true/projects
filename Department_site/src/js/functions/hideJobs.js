function hideJobs(){
    if(scrollTop > winHeight*0.2){
        var scrollCoef = 0.001;
        var res = scrollCoef * (scrollTop-winHeight*0.2)
        var res2 = 1 - res;
        if (res2>=0.1){
            $('.content_wrap').css({
                'transform'         : 'scale(' +res2+ ')'
        
            });
        
        
            $('.iphone').css({
                'box-shadow'         : '0px 0px 0px white'
            });
        }
    
    }
}

