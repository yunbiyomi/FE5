// 4월 12일 코드
// 1. object처럼 사용되는 함수의 특성
function 함수(a, b){
    return a + b
}

function 함수2(a, b, c){
    const z = a + b + c
    return z
}

function 함수3(a, b, c, d, e, f){
    return a
}

console.dir(함수1)
console.dir(함수2)
console.dir(함수3)

// length가 파라미터의 수인 것을 확인했습니다.

// array, object, function가 모두 같은 방식으로 접근하거나 값을 변경할 수 있네?
함수['location'] = 'jeju'
console.dir(함수)


함수['name'] = 'jejufunction'
console.dir(함수)
// console.dir(jejufunction) // 이렇게 호출이 안됩니다.

함수['length'] = 5
console.dir(함수) // 변경이 되지 않습니다.

// 2. 아규먼트가 순서대로 들어가는 함수의 특성
function 함수(a=10, b=20, c=30){
    return a + b + c
}
함수()
함수(100)
함수(100, 200)
함수(100, 200, 300)
함수(c=300) // 330이 아니고 350입니다. 순서대로 들어갑니다.
함수(a=100, c=300)
함수(a=100, b=300, c=200) // 순서가 뒤바뀌면 hello
함수(a=100, c=200, b=300) // hell입니다.

// 3. roro기법 원리 설명
// roro 기법은 무엇인가요? 입력되는 아규먼트가 매우 많은 아래 함수의 경우 호출 하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어렵다.
window.addNewControl("Title", 20, 50, 100, 50, true);
// 여러분들이 코드를 쭉 읽어 내려가다가 저 함수를 만났습니다. 기분이 어떨 것 같으신가요?

// python 형식입니다.
window.addNewControl(
    title="Title",
    xPosition=20,
    yPosition=50,
    width=100,
    height=50,
    drawingNow=true
);

// roro 기법을 모든 함수에서 사용하나요?

// 원리(모르셔도 코딩하는데 지장있진 않습니다.)
let one
let two
let three

let four = {one, two, three} 
// {one: undefined, two: undefined, three: undefined}
// 이렇게 사용할 수 있게 된 것이 최근입니다.
// '이렇게'는 변수 값을 object안에 넣으면 변수명이 key가되고 변수의 값이 object의 value가 되는 문법을 얘기합니다.

let {one1, two1, three1} = {one1:10, two1:20, three1:30}
let {one2, two2, three2} = {two2:20, one2:10, three2:30}