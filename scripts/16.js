let tryCount = 0;
let correctCount = 0;

const show = () => {
    event.preventDefault();

    // let animation = true;
    // if (animation) {
    //     for (let i = 1; i <= 6; i++) {
    //         setTimeout(function () {
    //             //your code to be executed after 1 second
    //             document.querySelector(".h2Class").innerHTML = `<img src=./images/${i}.png>`;
    //         }, 1000);
    //     }
    // }

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

// var id = null;
// function rollDice() {
//   var elem = document.getElementById("myAnimation");
//   var pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".h2Class").innerHTML = `<img src=./images/1.png>`;
});

