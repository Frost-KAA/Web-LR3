// function sign(x){
//     if (x < 0) {
//         return -1;
//     }
//     else if (x > 0) {
//         return 1;
//     }
//     else{
//         return 0;
//     }
// }

// function ex6(A, B){
//     if ((isNaN(Number(A))) || (isNaN(Number(B)))) {
//         console.log("Wrong input");
//     }
//     else{
//         console.log(sign(A)+sign(B));
//     }
    
// }

//Даны два неотрицательных числа a и b. Найти их среднее геометрическое, т. е. квадратный корень из их произведения: (a·b)1/2.
function ex1(a, b){
    if ((isNaN(+a)) || (isNaN(+b)) || (+a < 0) || (+b < 0))  {
        console.log("Wrong input");
    }
    else{
        let res = (a * b)**0.5;
        console.log(res);
    }
}

//Даны две переменные вещественного типа: A, B. 
//Перераспределить значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B — большее.
// Вывести новые значения переменных A и B.
function ex2(a, b){
    if ((isNaN(+a)) || (isNaN(+b)))  {
        console.log("Wrong input");
    }
    else{
        if (a > b){
            b = [a, a = b][0];
            // let c = a
            // a = b
            // b = c
            console.log(a, b)
        }
    }
}

//Единицы длины пронумерованы следующим образом: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. 
//Дан номер единицы длины (целое число в диапазоне 1–5) и длина отрезка в этих единицах (вещественное число).
// Найти длину отрезка в метрах.
function ex3(num, len){
    if ( (!Number.isInteger(num)) || (!(1 <= +num && +num <= 5)) || (isNaN(+len)) ){
        console.log("Wrong input");
    }
    else{
        switch (num){
            case 1: 
                len /= 10
                break
            case 2:
                len *= 1000
                break
            case 4:
                len /= 1000
                break
            case 5:
                len /= 100
                break
        }
        console.log(`${len} метров`)
    }
}

//Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.2, 0.4, …, 5 кг конфет.
function ex4(price){
    if  (isNaN(+price)){
        console.log("Wrong input");
    }
    else{
        for (let i=0.2; i<=5; i+=0.2){
            console.log(`Цена за ${i.toFixed(1)} кг - ${(i*price).toFixed(2)}`)
        }
    }
}

//Дано целое число N (> 0). Найти двойной факториал N:
//N!! = N·(N−2)·(N−4)·…
//(последний сомножитель равен 2, если N — четное, и 1, если N — нечетное).
function ex5(n){
    if ( (!Number.isInteger(n)) || (+n <= 0) ){
        console.log("Wrong input");
    }
    else{
        let factorial = 1
        for (let i=n; i>0; i-=2){
            factorial *= i
        }
        console.log(`${n}!! = ${factorial}`)
    }
}



function SumRange(a, b){
    let sum = 0
    for (let i=a; i<=b; i++){
        sum += i;
    }
    return sum
}

let SumRange_2 = function(a, b){
    let sum = 0
    for (let i=a; i<=b; i++){
        sum += i;
    }
    return sum
}

let SumRange_3 = (a, b) => {
    let sum = 0
    for (let i=a; i<=b; i++){
        sum += i;
    }
    return sum
}

//Описать функцию SumRange(A, B), находящую сумму всех целых чисел от A до B включительно (A и B — целые). 
//Если A > B, то функция возвращает 0. С помощью этой функции найти суммы чисел от A до B и от B до C, если даны числа A, B, C
function ex6(a,b,c){
    if ( (!Number.isInteger(a)) || (!Number.isInteger(b)) || (!Number.isInteger(c)) ){
        console.log("Wrong input");
    }
    else{
        let res = SumRange(a, b)
        let res2 = SumRange(b, c)
        console.log(`Sum(a, b) = ${res}`)
        console.log(`Sum(b, c) = ${res2}`)
    }
}

function ex6_2(a,b,c){
    if ( (!Number.isInteger(a)) || (!Number.isInteger(b)) || (!Number.isInteger(c)) ){
        console.log("Wrong input");
    }
    else{
        let res = SumRange_2(a, b)
        let res2 = SumRange_2(b, c)
        console.log(`Sum(a, b) = ${res}`)
        console.log(`Sum(b, c) = ${res2}`)
    }
}

function ex6_3(a,b,c){
    if ( (!Number.isInteger(a)) || (!Number.isInteger(b)) || (!Number.isInteger(c)) ){
        console.log("Wrong input");
    }
    else{
        let res = SumRange_3(a, b)
        let res2 = SumRange_3(b, c)
        console.log(`Sum(a, b) = ${res}`)
        console.log(`Sum(b, c) = ${res2}`)
    }
}



function isInt(...arr){
    return arr.every((Number.isInteger))
}

//Дано целое число N и набор из N целых чисел. 
//Найти номера первого минимального и последнего максимального элемента из данного набора и вывести их в указанном порядке.
function ex7(n, ...arr){
    if ( (!Number.isInteger(n)) || (!isInt(...arr)) || (arr.length != +n) ){
        console.log("Wrong input");
    }
    else{
        let max_value = Math.max(...arr)
        let max_idx = arr.lastIndexOf(max_value)

        let min_value = Math.min(...arr)
        let min_idx = arr.indexOf(max_value)

        console.log(`Первое минимальное значение - ${min_value} с индексом ${min_idx}`)
        console.log(`Последнее максимальное значение - ${max_value} с индексом ${max_idx}`)
    }
}


//Дан целочисленный массив размера N. Вывести все содержащиеся в данном массиве нечетные числа в порядке возрастания их индексов,
// а также их количество K.
function ex8(n, ...arr){
    //console.log(isInt(...arr))
    if ( (!Number.isInteger(n)) || (!isInt(...arr)) || (arr.length != +n) ){
        console.log("Wrong input");
    }
    else{
        let count = 0
        arr.forEach(function(item, i, arr){
            if (item % 2 == 1){
                console.log(item)
                count ++
            }
        } )
        console.log(`Кол-во: ${count}`)
    }
}

//Дан массив размера N (N — четное число). Поменять местами первую и вторую половины массива.
function ex9(n, ...arr){
    if ( (!Number.isInteger(n)) || (!isInt(...arr)) || (arr.length != +n) || (n % 2 != 0)){
        console.log("Wrong input");
    }
    else{
        let res1 = arr.slice(n/2, n)
        let res2 = arr.slice(0, n/2)
        let result = res1.concat(res2)
        console.log(result)
    }
}

//Дано целое положительное число. Вывести символы, изображающие цифры этого числа (в порядке слева направо)
function ex10(n){
    if ( (!Number.isInteger(n)) || (n <= 0)){
        console.log("Wrong input");
    }
    else{
        n = String(n)
        for (let c of n){
            console.log(c)
        }
    }
}

// Разработать класс для описания результатов сессии.
// Поля:
//     количество студентов в группе;
//     общее количество оценок «отлично» за сданные экзамены;
//     общее количество оценок «хорошо» за сданные экзамены;
//     общее количество оценок «удовлетворительно» за сданные экзамены;
//     общее количество неудовлетворительных оценок и неявок на экзамены;
//     средний балл студентов в группе.
// Методы:
//     конструктор: присвоение нулевых значений переменным;
//     ввод пользователем количества оценок «отлично»;
//     ввод пользователем количества оценок «хорошо»;
//     ввод пользователем количества оценок «удовлетворительно»;
//     ввод пользователем количества оценок «неудовлетворительно» и неявок;
//     определение и вывод на экран значения среднего балла.

class Session{
    studentCount;
    perfectCount;
    goodCount;
    satisfyinglyCount;
    absenceCount;
    average;

    constructor(){
        this.studentCount = 0;
        this.perfectCount = 0;
        this.goodCount = 0;
        this.satisfyinglyCount = 0;
        this.absenceCount = 0;
        this.average = 0;
    }

    setPerfectCount(perfCnt){
        this.studentCount += perfCnt - this.perfectCount
        this.perfectCount = perfCnt;
    }

    setGoodCount(goodCnt){
        this.studentCount += goodCnt - this.goodCount
        this.goodCount = goodCnt;
    }

    setSatisfyinglyCount(saticfyCnt){
        this.studentCount += saticfyCnt - this.satisfyinglyCount
        this.satisfyinglyCount = saticfyCnt;
    }

    setAbsenceCount(absenceCnt){
        this.studentCount += absenceCnt - this.absenceCount
        this.absenceCount = absenceCnt;
    }

    getAverage(){
        let result = (this.perfectCount*5 + this.goodCount*4 + this.satisfyinglyCount*3 + this.absenceCount*2) / this.studentCount;
        console.log(`Средняя оценка ${this.studentCount} студентов - ${result}`)
    }
}


function Session_2(){
    this.studentCount = 0
    this.perfectCount = 0;
    this.goodCount = 0;
    this.satisfyinglyCount = 0;
    this.absenceCount = 0;
    this.average = 0;

}

Session_2.prototype.setPerfectCount = function(perfCnt){
    this.studentCount += perfCnt - this.perfectCount
    this.perfectCount = perfCnt;
}

Session_2.prototype.setGoodCount = function(goodCnt){
    this.studentCount += goodCnt - this.goodCount
    this.goodCount = goodCnt;
}

Session_2.prototype.setSatisfyinglyCount = function(saticfyCnt){
    this.studentCount += saticfyCnt - this.satisfyinglyCount
    this.satisfyinglyCount = saticfyCnt;
}

Session_2.prototype.setAbsenceCount = function(absenceCnt){
    this.studentCount += absenceCnt - this.absenceCount
    this.absenceCount = absenceCnt;
}

Session_2.prototype.getAverage = function(){
    let result = (this.perfectCount*5 + this.goodCount*4 + this.satisfyinglyCount*3 + this.absenceCount*2) / this.studentCount;
    console.log(`Средняя оценка ${this.studentCount} студентов - ${result}`)
}

function ex11(perfect, good, satisfy, absence){
    let session = new Session();
    session.setPerfectCount(perfect);
    session.setGoodCount(good);
    session.setSatisfyinglyCount(satisfy);
    session.setAbsenceCount(absence);
    session.getAverage();
}

function ex11_2(perfect, good, satisfy, absence){
    let session = new Session_2();
    session.setPerfectCount(perfect);
    session.setGoodCount(good);
    session.setSatisfyinglyCount(satisfy);
    session.setAbsenceCount(absence);
    session.getAverage();
}




