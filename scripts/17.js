function FtoC (f) {
    return (f - 32) * (5 / 9);
}

function CtoF (c) {
    return c * (9 / 5) + 32;
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("-- DOMContentLoaded --");

    const selectIn = document.querySelector("#selectIn");
    const selectOut = document.querySelector("#selectOut");
    const h3In = document.querySelector("#h3In");
    const h3Out = document.querySelector("#h3Out");
    const numberIn = document.querySelector("#numberIn");
    const numberOut = document.querySelector("#numberOut");

    console.log(selectIn);
    console.log(selectOut);
    console.log(h3In);
    console.log(h3Out);
    console.log(numberIn);
    console.log(numberOut);

    numberIn.value = 1;
    h3In.textContent = selectIn.value;
    h3Out.textContent = selectOut.value;

    valueChanged();

    // Event
    numberIn.addEventListener("keyup", valueChanged);
    numberIn.addEventListener("change", valueChanged);

     function valueChanged() {
        console.log("-- valueChanged --");

        if (selectIn.value == "℃") {
            // let tempC = numberIn.value;
            // let tempF = tempC * (9 / 5) + 32;
            // numberOut.value = tempF;

            numberOut.value = CtoF(numberIn.value);
        }
        else {
            // let tempF = numberIn.value;
            // let tempC = (tempF - 32) * (5 / 9);
            // numberOut.value = tempC;
            numberOut.value = FtoC(numberIn.value);

        }
    }

    selectIn.addEventListener("change", () => {
        console.log("-- onChangeSelectIn --");

        if (selectIn.value == "℃") {
            selectOut.value = "℉"
        }
        else {
            selectOut.value = "℃"
        }

        h3In.textContent = selectIn.value;
        h3Out.textContent = selectOut.value;

        valueChanged();

    });

    selectOut.addEventListener("change", () => {
        console.log("-- onChangeSelectOut --");
        if (selectOut.value == "℃") {
            selectIn.value = "℉"
        } else {
            selectIn.value = "℃"
        }

        h3In.textContent = selectIn.value;
        h3Out.textContent = selectOut.value;

        valueChanged();

    });

});

