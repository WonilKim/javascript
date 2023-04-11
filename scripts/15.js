document.addEventListener("DOMContentLoaded", () => {
    event.preventDefault();

    const bts = document.querySelectorAll('button');

    console.log(bts);

    console.log('for');
    for(let i=0; i<bts.length; i++) {
        console.log(bts[i]);
    }

    console.log('for in');
    for(let i in bts) {
        console.log(bts[i]);
    }

    console.log('for each');
    bts.forEach((item, idx) => {
        console.log(idx, item);
    })

    console.log('for of');
    for(let item of bts) {
        console.log(item);
    }

    console.log('for of 2');
    for(let [idx, item] of bts.entries()) {
        console.log(idx, item);
    }

    // 받아서 리스트로 출력하도록 수정.
})
