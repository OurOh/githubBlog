$(function(){
    const urlParamas = new URLSearchParams(window.location.search);
    const file = urlParams.get('file');

    if(file){
        //파일을 읽어서 뿌리기
        $.get(file, function(data){
            const{ meta, content } = parseMarkDown{

        //메타 데이터
        const title = meta.title || 'Untitled Post';
        const date = meta.date || '날짜미상';
        const category = meta.category || '미분류';
        const image = meta.image || '/res/images/posts/default.jpg'   
        


            }
            $('#content').html(data);
        }).fail(function() {
            $('#content').html('<p>파일을 불러오는 데 실패했습니다.</p>');
        });

    }
});