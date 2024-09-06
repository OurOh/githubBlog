function preloader() {
    'use strict';
    $('.preloader').delay(100).fadeOut(10);
}
$(preloader);
$(document).ready(function(){

    $("#sendEmail").click(function(){
        const fromEmail = $("fromemail").val();
        const fronTel = $("fromTel").val();
        const subject = $("#subject").val();
        let body = $("#body").val();
        body = "<h1>" + fromName + "(fromEmail) + 님의 메일입니다. </h1><br>" + "전화번호 : " + 
        console.log(subject);
        console.log(body);
        
        TO: ''
        Email.send({
        Subject: subject,
        Body:body    
        }).then
        message => {console.log("이메일을 성공적으로 보냈습니다.")}
        )catch

    });

});

