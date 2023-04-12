let tryCount = 0;
let correctCount = 0;

const show = () => {
    event.preventDefault();

    //랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".h2Class").innerHTML = `<img src=./images/${n}.png>`;

    //
    const rdo = document.querySelectorAll('input[type="radio"]');
    console.log(rdo);

    let user = 0;
    for (let item of rdo) {
        console.log(item);
        if (item.checked) {
            user = item.value;
            break;
        }
    }

    //if (n === parseInt(user)) {
    if (n == user) {
        document.querySelector("article h1").textContent = "주사위게임 (맞음:승)";
    } else {
        document.querySelector("article h1").textContent = "주사위게임 (틀림:패)";
    }


}