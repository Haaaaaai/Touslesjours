$(function(){
    //접속한 브라우저의 가로길이 가져오기
    let deviceWidth=$(window).width();

    //태블릿과 모바일에서 메뉴 버튼을 클릭하면 내비게이션이 오른쪽에서 나타남
    $(".menu_icon").click(function(){
        $(".menu").animate({"right":0});
    });
    //태블릿과 모바일에서 닫기 버튼을 클릭하면 내비게이션이 오른쪽으로 사라짐
    $(".close").click(function(){
        $(".menu").animate({"right":"-100vw"});
    });
    //만약 접속한 브라우저의 가로길이가 1440 미만이면 메뉴는 아코디언 메뉴로 작동함.
    if(deviceWidth<1400) {
        $("nav> ul > li > a").click(function(e){
            e.preventDefault();
            //만약 클릭한 메뉴에 active클래스가 없다면
            if($(this).attr("class")!="active") {
                //모든 메뉴에서 active제거
                $("nav > ul > li > a").removeClass("active");
                //클릭한 메뉴만 active 설정
                $(this).addClass("active");
                //모든 서브메뉴는 들어감
                $("nav .sub").slideUp();
                //클릭한 메뉴의 다음 형제 객체(서브메뉴)만 나옴
                $(this).next().slideDown();
            //클릭한 메뉴에 active클래스가 설정되어 있다면
            }else {
                //클릭한 메뉴에서 active 제거
                $(this).removeClass("active");
                //클릭한 메뉴의 다음 형제 객체(서브메뉴)만 들어감
                $(this).next().slideUp();
            }

        });
    } else {
        //pc버전 내비게이션
        //주메뉴 위에 마우스를 올리면
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
            navigation:true
        });

        //1400px이상일 때, search버튼의 테두리 활성화
        /*
        
        $(sch).focus(function(){
        $(this).css("border","solid 3px green");
        });
        $(sch).blur(function(){
        $(this).css("border","solid 3px transparent");
        });
        */
        //1400px이상일 때, 돋보기 빈칸으로 버튼 클릭 시의 알림창
        let sch=$("input:text");
        $(".search_icon").click(function(){
            if($(sch).val()===""){
                alert("검색어를 입력하세요");
            }
        });
    }
    
    


    //관련사이트(family site)
    $(".family_title a").click(function(e){
        e.preventDefault();
        $(this).find("span").css("transform","rotate(-180deg)");
        $(".family_list").slideDown();
    })
    $(".family").mouseleave(function(e){
        e.preventDefault();
        $(this).find("span").css("transform","rotate(0deg)");
        $(".family_list").slideUp();
    })

    
});

//자바스크립트 작성
function movesection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }
};
    
    
