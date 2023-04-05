const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function (el) {
    return el % 2 === 0
})

function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1)
        .filter((v) => v % 2 === 0)
        .reduce((a, c) => a + c, 0);
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function (el) {
    return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))

// reduce
const arr1 = [1, 2, 3, 4, 5]
arr1.reduce((a, c) => a + c, 0)

const arr2 = []
arr1.reduce((a, c) => a + c)

const arr3 = [1]
arr1.reduce((a, c) => a + c)

// 0을 항상 넣어주세요.
const arr4 = []
arr1.reduce((a, c) => a + c, 0)

// min, max도 있는데 sum이 없다?


// includes
const arr5 = ['hello', 'world', 'hojun']
arr1.includes('world')

const arr6 = ['hello', 'world', 'hojun']
arr1.includes('leehojun')

const arr7 = ['hello', 'world', 'hojun']
arr1.includes('jun')


// join
const arr8 = ['hello', 'world', 'hojun']
arr1.join('!')

const arr9 = ['010', '5044', '2903']
arr2.join('-')

const arr10 = [010, 5044, 2903]
arr3.join('-') // 이렇게 하시면 안됩니다.

// 0b100 // b는 바이너리의 첫글자입니다.
// 0o100 // o는 옥타의 첫글자입니다.
// 0x100 // x는 헥사를 표현합니다.