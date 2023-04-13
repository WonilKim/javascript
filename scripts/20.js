document.addEventListener("DOMContentLoaded", ()=> {
    console.log("-- DOMContentLoaded --");

    const divs = document.querySelectorAll(".rows > div");
    console.log(divs);

    //랜덤수 생성
    let r = Math.floor(Math.random() * 9) + 1 ;

    let num = 1;
    for(let d of divs) {
        d.innerHTML = num++;

        if(num == r){
            console.log(r);
        }
    }

});