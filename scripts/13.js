
function show() {
    //alert("안녕하세요.");
    event.preventDefault();
    document.getElementById("h2Id").innerHTML = "안녕하세요";
    // pico 와 충돌해서 잠깐 나왔다가 다시 사라짐.

}

// addEventListener : 이벤트 리스너
// DOMContentLoaded : 컨텐츠가 다 로드되었을때.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("h2Id").innerHTML = "DOMContentLoaded";
});

