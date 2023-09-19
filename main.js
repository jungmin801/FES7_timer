// 요소 가져오기
const article = document.querySelector('article');
const inputs = article.querySelectorAll('input');
const btnStart = article.querySelector('.start');
const btnReset = article.querySelector('.reset');


//입력값 가져오기
let inputValues = [];
let totalTime = 0;

const getTime = () => {
    inputValues = [];
    inputs.forEach((el) => {
        const inputValue = el.value;
        inputValue === ''? inputValues.push(0) : inputValues.push(parseInt(inputValue));
    })

    let hour = inputValues[0] * 3600;
    let min = inputValues[1] * 60;
    let sec = inputValues[2];

    totalTime = hour + min + sec;

    countDown();
}

// 카운트다운하기
const countDown = () => {
    const interval = setInterval(()=>{
        totalTime = totalTime - 1;
        //콘솔창에서 카운트다운 확인하기
        console.log(totalTime);

        //시간이 0이 되면 초기화
        if(totalTime === 0) {
            clearInterval(interval);
            alert("Finish");
        }
    }, 1000)
}


// 타이머 함수
const timer = () => {
    getTime();
}

btnStart.addEventListener('click', timer)
btnReset.addEventListener('click', ()=>{
    inputValues = [];
    inputs.forEach((el) => {
        el.value = null;
    })
})


