// 1. Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

    let num = 5;
    let stringOfNum = String(num);

    console.log(stringOfNum[stringOfNum.length - 1] === 0);

// 2. Пусть в переменной num хранится число. Определите, четное число или нет.
//    Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.

    let num = 9;
    let stringOfNum = String(num);

    switch (stringOfNum[stringOfNum.length - 1]) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 8:
            console.log('Число является чётным');
            break;
        default:
            console.log('Число является нечётным');
            break;
    }