let tryCount = 0;
let correctCount = 0;

function show() {
    event.preventDefault();

    //랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".h2Class").innerHTML = `<img src=./images/${n}.png>`;

    //
    const rdo = document.querySelector('input[name="dice"]:checked').value;

    console.log("radio button = ", rdo);
    console.log("dice number = ", n);

    tryCount++;

    let result = "";
    if (rdo == n) {
        result = "맞았습니다."
        correctCount++;
    }
    else {
        result = "틀렸습니다."
    }

    let rate = correctCount / tryCount;

    result += " (시도 수 : " + tryCount + " / 정답 수 : " + correctCount + " / 확률 : " + rate.toFixed(3) + ")";

    document.querySelector(".h3Class").innerHTML = result;


}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".h2Class").innerHTML = `<img src=./images/1.png>`;
    
    const bt1 = document.getElementById("bt1");

    console.log("==== start ====");
    console.log(bt1);

    //확인 button click
    bt1.addEventListener("click", show);


});
