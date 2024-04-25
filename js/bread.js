$(function(){
    let deviceWidth=$(window).width();

    $(".menu_icon").click(function(){
        $(".menu").animate({"right":0});
    });
    $(".close").click(function(){
        $(".menu").animate({"right":"-100vw"});
    });
    
    //라우저의 가로길이 1440 미만 (모바일, 태블릿) - 아코디언 메뉴
    if(deviceWidth<1400) {
        $("nav> ul > li > a").click(function(e){
            e.preventDefault();
            if($(this).attr("class")!="active") {
                $("nav > ul > li > a").removeClass("active");
                $(this).addClass("active");
                $("nav .sub").slideUp();
                $(this).next().slideDown();
            }else {
                $(this).removeClass("active");
                $(this).next().slideUp();
            }
        });
        
        //메인배너 클릭, 해당 섹션 상단으로 스크롤링
        $(".scroll").on('click',function(e){
            e.preventDefault();
            var target = $(this).attr('data');
            scrollToAnchor(target);
        });
        function scrollToAnchor(target){
            var res=$("section[name='"+target+"']");
            $('html, body').animate({                
                scrollTop: res.offset().top 
            }, 1000);
        }      
    } else {
        //pc버전 메뉴 효과
        $("header .menu > nav > ul > li > a > p ").mouseenter(function(e){
            e.preventDefault();
            $(".sub").stop().slideDown();
            $(".sub_bg").stop().slideDown();
        });
        $("header").mouseleave(function(){
            $(".sub").stop().slideUp();
            $(".sub_bg").stop().slideUp();
        });
        
        //pc버전 스크롤 하면 화면 단위로 이동
        $(".fullpage").fullpage({
            navigation:true,
            anchors:["s11","s22","s33","s44","s55"]
        });
        //1400px이상일 때, 돋보기 빈칸으로 버튼 클릭 시의 알림창
        let sch=$("input:text");
        $(".search_icon").click(function(){
            if($(sch).val()===""){
                alert("검색어를 입력하세요");
            }
        });
    };
    
    //footer 관련사이트(family site)
    $(".family_title a").click(function(e){
        e.preventDefault();
        $(this).find("span").css("transform","rotate(-180deg)");
        $(".family_list").slideDown();
    })
    $(".family").mouseleave(function(e){
        e.preventDefault();
        $(this).find("span").css("transform","rotate(0deg)");
        $(".family_list").slideUp();
    });
});


    
    
