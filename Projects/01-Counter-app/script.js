let btn = document.querySelector('button');
let span = document.querySelector('span');

btn.addEventListener("click", () => {
    count = 60;
    let count1 = setInterval(() => {
    if(count >= 0) {
        span.textContent = count;
        count--;
    } else {
        clearInterval(count1);
    }
}, 1000);

})