/* Задача 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. func1 */

function func1(value) {
    return value*value; 
}

/* Задача 2. Сделайте функцию, которая возвращает сумму двух чисел. func2 */

function func2(firstValue, secondValue) {
    return firstValue+secondValue; 
}

/* Задача 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. func3 */

function func3(firstValue, secondValue, thirdValue) {
    return (firstValue-secondValue)/thirdValue; 
}

/* Задача 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */

function func1(day) {
    switch (day) {
        case 1:
            day='Понедельник'
            break;
        case 2:
            day='Вторник'
            break;
        case 3:
            day='Среда'
            break;
        case 4:
            day='Четверг'
            break;
        case 5:
            day='Пятница'
            break;
        case 6:
            day='Суббота'
            break;
        case 7:
            day='Воскресенье'
            break;
        default:
            day='Такого дня недели не существует!'
            break;
    }
    return day;
}

/* Задача 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false. */

function func1(firstValue, secondValue) {
    return (firstValue==secondValue); 
}

/* Задача 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false. */

function func1(firstValue, secondValue) {
    return (firstValue+secondValue>10); 
}

/* Задача 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false. */

function func1(isNegative) {
    return (isNegative<0); 
}

/* Задача 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */

function isNumberInRange(value) {
    return (value>0 && value<10); 
}

/* Задача 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи. */


/* Задача 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */

function isEven(value) {
    return (value%2==0); 
}

/* Задача 16. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае. */

func1 = (str, result='') => {
    for (let i = str.length-1; i >= 0; i--) {
        result = result + str[i]
    }

    if(str==result)
    {
        return true;
    }

    return false;
}