$(function(){
    
    // 통으로 다 떨어지는 메뉴
    // 방법1)호버
    // main li
    // $(".main > li").hover(function(){
    //     $(".sub").stop().slideDown();
    // }, function(){
    //     $(".sub").stop().slideUp();
    // })//hover

    //방법2)마우스오버아웃
    $(".main>li").mouseover(function(){
        $(".sub").stop().slideDown();
    })//
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp();
    })

    //메인슬라이드 영역
    // position: absolute; top: 0(0) 1(-300) 2(-600)
    // var n = 0 ; //현재 보이는 그림 파일 인덱스 넘버 0 1 2
    // // 셋인터벌 함수
    // setInterval(function(){
    //     if(n == 2){
    //         // 조건문: n(현재보이는 그림의 eq넘버가)이 2랑 같니?
    //         n=0;
    //         //같으면 0번 이미지로 다시 와
    //     }else{
    //         //그렇지 않으면 변수 n에 1씩 계속 더해.
    //         n++;
    //         // n=n+1;
    //         //n+=1;
    //     }//if
    //     console.log("n:",n);       
        

    //     //그림의 포지션 움직여주기.
    //     //pos: position. 누가 움직여? move라는 요소지.
    //     pos = -n * 300 + "px";
    //     console.log("pos:",pos);
    //     $(".move").animate({top:pos},500);
    //     //.move: ul 이 움직이는거임    
    // }, 2500);
    
    // 또는 아래 처럼 직접 move라는 별도의 함수명 만들어서 시작가능.
        setInterval(move, 2500);
        function move(){
        $(".move").animate({top:"-300px"}, 500, function(){
            $(".move").css({top:"0"});
            
            $(".move").append($(".move li").eq(0));
            //또는 $(".move").append($(".move li").first());
            //또는$(".move").append($(".move li:nth-child(1)"));

            // append는... 맨 뒤에 것을 맨 앞으로 받겠다.
        })//ani
    }//

    //탭 메뉴
    $(".noti_gall h2").click(function(){
        // 내가 찍어주는애가 리무브 되어야...
        // 기본값을 회색으로 줌
        $(".noti_gall h2").addClass("off");
        $(this).removeClass("off");

        // 안보이는것 먼저 잡기
        $(".noti_gall ul").hide();
        $(this).next().css({display:"flex"});
    })//click


    
    //팝업
    $(".p_click").click(function(){
        $(".pop").show();
    })//

    $(".close").click(function(){
        $(".pop").hide();
    })
    

    

})//jquery