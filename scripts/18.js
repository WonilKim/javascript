document.addEventListener("DOMContentLoaded", ()=> {
    console.log("-- DOMContentLoaded --");

    event.preventDefault();

    const textInput = document.querySelector("#idInput");
    console.log(textInput);
    const textOutput = document.querySelector("#idOutput");
    console.log(textOutput);
    const buttonCheck = document.querySelector("#idCheck");
    console.log(buttonCheck);
    const buttonSum = document.querySelector("#idSum");
    console.log(buttonSum);
    const bts = document.querySelectorAll(".bt");
    console.log(bts);

    //버튼 배열에 클릭 이벤트 작성
    for(let bt of bts){
        //console.log(bt);
        bt.addEventListener('click', (event)=>{
            event.preventDefault();
            let gubun = bt.innerHTML;
            console.log(gubun);
        });
    }

});