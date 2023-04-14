document.addEventListener("DOMContentLoaded", () => {
    console.log("-- DOMContentLoaded --");
    const arrBtAdd = document.querySelectorAll('.bt1');
    const arrBtRemove = document.querySelectorAll('.bt2');
    const arrBtChange = document.querySelectorAll('.bt3');
    const textOutput = document.querySelector('#t1');
    const btReset = document.querySelector('#btReset');

    //배열의 초기화
    let arr = [];

    //리셋 기능 구현
    btReset.addEventListener("click", (e) => {
        console.log("-- btReset click --");
        e.preventDefault();

        textOutput.value = '';
        arr = [];

        console.log("arr.toString() = " + arr.toString());
    });

    //버튼 이벤트 추가
    //배열에 자료 추가
    for (let bt1 of arrBtAdd) {
        bt1.addEventListener("click", (e) => {
            console.log("-- bt1 click --" + "(" + bt1.textContent + ")");
            e.preventDefault();
            console.log(bt1.textContent);

            switch (bt1.textContent) {
                case '사과':
                    arr.push('🍎')
                    break;
                case '바나나':
                    arr.push('🍌')
                    break;
                case '오렌지':
                    arr.push('🍊')
                    break;
                case '수박':
                    arr.push('🍉')
                    break;
            }

            console.log("arr.toString() = " + arr.toString());
            //console.log("arr.join() = " + arr.join());
            textOutput.value = arr.toString();
        });
    }
    for (let bt2 of arrBtRemove) {
        bt2.addEventListener("click", (e) => {
            console.log("-- bt2 click --" + "(" + bt2.textContent + ")");
            e.preventDefault();
            console.log(bt2.textContent);

            // 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환
            // arr.filter((item) => 조건식) // item 은 기존 배열의 요소

            switch (bt2.textContent) {
                case '사과 삭제':
                    arr.filter((item)=> console.log(item)); // filter 함수는 배열을 순회한다.
                    arr.filter((item)=> bt1.textContent != '사과');
                    break;
                case '바나나 삭제':
                    arr.push('🍌')
                    break;
                case '오렌지 삭제':
                    arr.push('🍊')
                    break;
                case '수박 삭제':
                    arr.push('🍉')
                    break;
            }


        });
    }
    for (let bt3 of arrBtChange) {
        bt3.addEventListener("click", (e) => {
            console.log("-- bt3 click --" + "(" + bt3.textContent + ")");
            e.preventDefault();
            console.log(bt3.textContent);

            // 배열내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
            // arr.map((item) => 명령 함수)

            //🥕🥒🥑🥦

        });
    }
});