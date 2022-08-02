const input = document.querySelector("#input");


input.addEventListener("keydown", enter);

function enter(e) {
    if(e.keycode === 13){
        getInfo(input.value);
    }
    console.log('Hey!')
}


