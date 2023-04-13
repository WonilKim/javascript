document.addEventListener("DOMContentLoaded", () => {
    console.log("-- DOMContentLoaded --");
    const bt1s = document.querySelectorAll('.bt1');
    const bt2s = document.querySelectorAll('.bt2');
    const bt3s = document.querySelectorAll('.bt3');
    const t1 = document.querySelector('#t1');
    const btReset = document.querySelector('#btReset');

    //배열의 초기화
    let arr = [];

    //리셋 기능 구현
    btReset.addEventListener("click", (e) => {
        console.log("-- btReset click --");
        e.preventDefault();

        t1.value = '';
        arr = [];

        console.log("arr.toString() = " + arr.toString());
    });

    //버튼 이벤트 추가
    //배열에 자료 추가
    for (let bt1 of bt1s) {
        bt1.addEventListener("click", (e) => {
            console.log("-- bt1 click --");
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
            t1.value = arr.toString();
        });
    }
    for (let bt2 of bt2s) {
        bt2.addEventListener("click", (e) => {
            console.log("-- bt2 click --");
            e.preventDefault();
            console.log(bt2.textContent);

        })
    }
    for (let bt3 of bt3s) {
        bt3.addEventListener("click", (e) => {
            console.log("-- bt3 click --");
            e.preventDefault();
            console.log(bt3.textContent);

            //🥕🥒🥑🥦

        })
    }
})