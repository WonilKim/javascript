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

            //// filter 를 사용하지 않는 방법
            let gubun = bt2.textContent.replace('삭제', '').replace(' ', '');
            console.log(gubun);

            let temp = [];
            for (let item of arr) {
                switch (gubun) {
                    case '사과':
                        if (item != '🍎')
                            temp.push(item);
                        break;
                    case '바나나':
                        if (item != '🍌')
                            temp.push(item);
                        break;
                    case '오렌지':
                        if (item != '🍊')
                            temp.push(item);
                        break;
                    case '수박':
                        if (item != '🍉')
                            temp.push(item);
                        break;
                }
            }

            arr = temp;

            //// filter 를 사용하는 방법
            // switch (bt2.textContent) {
            //     case '사과 삭제':
            //         //arr.filter((item)=> console.log(item)); // filter 함수는 배열을 순회한다.
            //         arr = arr.filter((item)=> item != '🍎');
            //         break;
            //     case '바나나 삭제':
            //         arr = arr.filter((item)=> item != '🍌');
            //         break;
            //     case '오렌지 삭제':
            //         arr = arr.filter((item)=> item != '🍊');
            //         break;
            //     case '수박 삭제':
            //         arr = arr.filter((item)=> item != '🍉');
            //         break;
            // }

            console.log("arr.toString() = " + arr.toString());
            textOutput.value = arr.toString();


        });
    }
    for (let bt3 of arrBtChange) {
        bt3.addEventListener("click", (e) => {
            console.log("-- bt3 click --" + "(" + bt3.textContent + ")");
            e.preventDefault();
            console.log(bt3.textContent);

            // 배열내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
            // arr.map((item) => 명령 함수)

            //// map 을 사용하지 않는 방법
            // let temp = [];
            // for (let item of arr) {
            //     let textButton = bt3.textContent.substring(0, bt3.textContent.indexOf(" "));
            //     console.log('textButton = ' + textButton);
            //     switch (textButton) {
            //         case '사과':
            //             if (item == '🍎')
            //                 temp.push('🥕');
            //             else
            //                 temp.push(item);
            //             break;
            //         case '바나나':
            //             if (item == '🍌')
            //                 temp.push('🥒');
            //             else
            //                 temp.push(item);
            //             break;
            //         case '오렌지':
            //             if (item == '🍊')
            //                 temp.push('🥑');
            //             else
            //                 temp.push(item);
            //             break;
            //         case '수박':
            //             if (item == '🍉')
            //                 temp.push('🥦');
            //             else
            //                 temp.push(item);
            //             break;
            //     }
            // }
            // arr = temp;

            //// map 를 사용하는 방법
            // //let textButton = bt3.textContent.substring(0, bt3.textContent.indexOf(" "));
            // let textButton = bt3.textContent.split('->')[0].trim();
            // console.log('textButton = ' + textButton);
            // switch (textButton) {
            //     case '사과':
            //         //arr.filter((item)=> console.log(item)); // filter 함수는 배열을 순회한다.
            //         arr = arr.map((item) => item == '🍎' ? '🥕' : item);
            //         break;
            //     case '바나나':
            //         arr = arr.map((item) => item == '🍌' ? '🥒' : item);
            //         break;
            //     case '오렌지':
            //         arr = arr.map((item) => item == '🍊' ? '🥑' : item);
            //         break;
            //     case '수박':
            //         arr = arr.map((item) => item == '🍉' ? '🥦' : item);
            //         break;
            // }

            //// replaceAll 를 사용하는 방법
            let textButton = bt3.textContent.split('->')[0].trim();
            console.log('textButton = ' + textButton);

            let temp = arr.join(',');
            switch (textButton) {
                case '사과':
                    temp = temp.replaceAll('🍎', '🥕');
                    break;
                case '바나나':
                    temp = temp.replaceAll('🍌', '🥒');
                     break;
                case '오렌지':
                    temp = temp.replaceAll('🍊', '🥑');
                    break;
                case '수박':
                    temp = temp.replaceAll('🍉', '🥦');
                    break;
            }

            arr = temp.split(',');

            console.log("arr.toString() = " + arr.toString());
            //console.log("arr.join() = " + arr.join());
            textOutput.value = arr.toString();

            //🥕🥒🥑🥦

        });
    }
});