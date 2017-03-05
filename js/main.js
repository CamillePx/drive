$(document).ready(function () {
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    var together = document.getElementsByClassName("result--select__together")[0], 
        app = document.getElementsByClassName("result--select__app")[0],
        inside = document.getElementsByClassName("result--select__inside")[0],
        
        togetherContent = document.getElementsByClassName("select--together")[0],
        appContent = document.getElementsByClassName("select--app")[0],
        insideContent = document.getElementsByClassName("select--inside")[0],
        
        start = document.getElementsByClassName("progress--select__start")[0], 
        toy = document.getElementsByClassName("progress--select__toy")[0],
        arduino = document.getElementsByClassName("progress--select__arduino")[0],
        appPro = document.getElementsByClassName("progress--select__app")[0],
        end = document.getElementsByClassName("progress--select__end")[0],
        
        startContent = document.getElementsByClassName("progress--content__start")[0], 
        toyContent = document.getElementsByClassName("progress--content__toy")[0],
        arduinoContent = document.getElementsByClassName("progress--content__arduino")[0],
        appProContent = document.getElementsByClassName("progress--content__app")[0],
        endContent = document.getElementsByClassName("progress--content__end")[0];
    
    together.addEventListener("click",function(){
        inactiveResult();
        together.classList.add("result--select__active");
        togetherContent.classList.add("select--active");
    })
    app.addEventListener("click",function(){
        inactiveResult();
        app.classList.add("result--select__active");
        appContent.classList.add("select--active");
    })
    inside.addEventListener("click",function(){
        inactiveResult();
        inside.classList.add("result--select__active");
        insideContent.classList.add("select--active");
    })
    start.addEventListener("click",function(){
        inactiveProgress();
        start.classList.add("progress--select__active");
        startContent.classList.add("progress--content__active");
    })
    toy.addEventListener("click",function(){
        inactiveProgress();
        toy.classList.add("progress--select__active");
        toyContent.classList.add("progress--content__active");
    })
    arduino.addEventListener("click",function(){
        inactiveProgress();
        arduino.classList.add("progress--select__active");
        arduinoContent.classList.add("progress--content__active");
    })
    appPro.addEventListener("click",function(){
        inactiveProgress();
        appPro.classList.add("progress--select__active");
        appProContent.classList.add("progress--content__active");
    })
    end.addEventListener("click",function(){
        inactiveProgress();
        end.classList.add("progress--select__active");
        endContent.classList.add("progress--content__active");
    })

    function inactiveProgress(){
        start.classList.remove("progress--select__active");
        toy.classList.remove("progress--select__active");
        arduino.classList.remove("progress--select__active");
        appPro.classList.remove("progress--select__active");
        end.classList.remove("progress--select__active");
        startContent.classList.remove("progress--content__active");
        toyContent.classList.remove("progress--content__active");
        arduinoContent.classList.remove("progress--content__active");
        appProContent.classList.remove("progress--content__active");
        endContent.classList.remove("progress--content__active");
    }

    function inactiveResult(){
        together.classList.remove("result--select__active");
        app.classList.remove("result--select__active");
        inside.classList.remove("result--select__active");
        togetherContent.classList.remove("select--active");
        appContent.classList.remove("select--active");
        insideContent.classList.remove("select--active");
        togetherContent.pause();
        togetherContent.load();
        insideContent.pause();
        insideContent.load();
    }
        
});