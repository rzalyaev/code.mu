// 1. В переменной month лежит какое-то число из интервала от 1 до 12.
//    Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

    let month;

    if (month >= 1 && month <= 2 || month === 12) {
        console.log('зима');
    }

    if (month >= 3 && month <= 5) {
        console.log('весна');
    }

    if (month >= 6 && month <= 8) {
        console.log('лето');
    }

    if (month >= 9 && month <= 11) {
        console.log('осень');
    }

// 2. Дана строка, состоящая из символов, например, 'abcde'.
//    Проверьте, что первым символом этой строки является буква 'a'.
//    Если это так - выведите 'да', в противном случае выведите 'нет'.

    let str = 'abcde';

    if (str[0] === 'a') {
        console.log('да');
    } else {
        console.log('нет');
    }

// 3. Дано число, например, 12345.
//    Проверьте, что первым символом этого числа является цифра 1, 2 или 3.
//    Если это так - выведите 'да', в противном случае выведите 'нет'.

    let num = 12345;
    let first = Number(String(num)[0]);

    if (first === 1 || first === 2 || first === 3) {
        console.log('да');
    } else {
        console.log('нет');
    }

// 4. Дано трехзначное число. Найдите сумму цифр этого числа.

    let num = 123;

    let digit = (index) => Number(String(num)[index]);

    console.log(digit(0) + digit(1) + digit(2));

// 5. Дано число из 6-ти цифр.
//    Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
//    Если это так - выведите 'да', в противном случае выведите 'нет'.

    let num = 123456;

    let digit = (index) => Number(String(num)[index]);

    let test = digit(0) + digit(1) + digit(2) === digit(3) + digit(4) + digit(5);

    if (test) {
        console.log('да');
    } else {
        console.log('нет');
    }