function getTextContentFromBody(){
    const bodyText = document.body.innerText || document.body.textContent;
    return bodyText;
}

function getWordSplit(text){
    //일단 영어는 전부 소문자로 바꾸고, 특수문자 제거,공백을 기준으로 나누기
    let wordsArray = text.toLowerCase().replace(/^a-zA-Z\s/g, "").split(/\s+/);
    let wordFe = {};

    wordsArray.forEach(word => {
        if(word){
            wordFe[word] = (wordFe[word] || 0) + 1;
        }
    });
    return wordFe;
}

//단어빈도 정렬, 상위 16출력
function getHotWords(wordF, topN = 16){
    let sortWords = Object.entries(wordF).sort((a,b) => b[1] - a[1]);
    return sortWords.slice(0,topN) 
}


//결과출력
function displayHotwords(){
    let textContent = getTextContentFromBody();
    let wordFe = getWordSplit(textContent);
    let hotWords = getHotWords(wordFe);
    let hotWordDiv = document.querySelector("#repo");
    let spanTag = "";
    hotWords.forEach(([word, frequency], index) =>{
        spanTag += '<span class="topword" title="${frequency}회">${word}</span>';

    });
    hotWordDiv.innerHTML =spanTag;
    console.table(wordFe);
}
displayHotwords();