document.addEventListener("DOMContentLoaded", () => {
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


    buttonCheck.addEventListener("click", () => {
        console.log("-- buttonCheck click --");

        let msg = textInput.value;
        console.log(msg);

        let str = "";
        let num = "";
        let sum = 0;

        for (let c of msg) {
            console.log(c);
            let n = parseInt(c);
            if (isNaN(n)) {
                //char
                str += c;

                //end of num
                if (num != "") {
                    sum += parseInt(num);
                    num = "";
                }
            }
            else {
                //int
                num += c;
            }

        } // for(let c of msg)

        //end of num
        if (num != "") {
            sum += parseInt(num);
            num = "";
        }

        console.log("str = " + str);
        console.log("sum = " + sum);

        let result = true;
        for (let i = 0; i < str.length; i++) {
            if(str[i] != str[str.length - 1 -i]){
                //회문 아님
                result = false;
            }
        }

        if(result) {
            textOutput.value = "회문";
        } else {
            textOutput.value = "회문 아님";
        }

    });

    buttonSum.addEventListener("click", () => {
        console.log("-- buttonSum click --");

        let msg = textInput.value;
        console.log(msg);

        let str = "";
        let num = "";
        let sum = 0;

        for (let c of msg) {
            console.log(c);
            let n = parseInt(c);
            if (isNaN(n)) {
                //char
                str += c;

                //end of num
                if (num != "") {
                    sum += parseInt(num);
                    num = "";
                }
            }
            else {
                //int
                num += c;
            }

        } // for(let c of msg)

        //end of num
        if (num != "") {
            sum += parseInt(num);
            num = "";
        }

        console.log("str = " + str);
        console.log("sum = " + sum);

        textOutput.value = sum;

    });

});