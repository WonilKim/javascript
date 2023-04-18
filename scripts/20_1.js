document.addEventListener("DOMContentLoaded", () => {
    console.log("-- DOMContentLoaded --");

    const divs = document.querySelectorAll(".rows > div");
    console.log(divs);
    const btnMix = document.querySelector("#btnMix");
    console.log(btnMix);

    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let flag = true;
    let cnt = 0;
    let selarr = [];

    btnMix.addEventListener('click', () => {
        if (flag) {
            arr = arr.sort(() => Math.random() - 0.5 );
            //shuffle(arr);
            console.log(arr);
            flag = false;
        }
    })

    for (let box of divs) {
        //박스 번호 넣기
        box.innerHTML = box.getAttribute('id').slice(-1);
        //box.innerHTML = box.getAttribute('id').replace('d', '');

        box.addEventListener('click', ()=>{
            let n = parseInt(box.textContent);
            console.log(n);

            //폭탄 하트 구분
            if(arr[n-1] == 0) {
                //하트
                console.log("하트");
                box.innerHTML = `<img src=./images/hart.png>`;

            } else{
                //폭탄
                console.log("폭탄");
                box.innerHTML = `<img src=./images/boom.png>`;

            }
        });
    }
});