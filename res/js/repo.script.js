$(document).ready(function(){
    //자신의 레포지토리 아이디를 username변수에 저장
    const username ='OurOh';

    $.getJSON('https://api.github.com/users/아이디/repos', function(data){

        //레포지토리 최신순, created_at
        data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        const reposToShow = data.slice(0,5); //상위 5개 표시
        $.each(reposToShow, function(index, repo){
            const repoHtml =
                    <li class="my-4">
                        <h1>${repo.name}</h1>
                        <p>${repo.descript}</p>
                        <a href="${repo.html_url}" target="_blank">링크</a>
                    </li>
                ;
                $("#repo").append(repoHtml);
        });
    }).fail(function(){
        console.error('에러발생!!');
    });
});