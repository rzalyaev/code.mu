// 1. Код должен проверить сумму чисел:

    let num1 = 1;
    let num2 = 2;

    if (num1 + num2 === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает корректно

// 2. Код должен проверить сумму чисел:

    let num1 = '1';
    let num2 = '2';

    if (parseInt(num1) + parseInt(num2) === 3) { // Добавлены функции для превращения строки в число
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Одним из вариантов решения является превращение строки в число.

// 3. Код должен проверить сумму чисел:

    let num1 = '1';
    let num2 = '2';

    if (Number(num1) + Number(num2) === 3) { // Изменено. Было: if (Number(num1 + num2) === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Сначала нужно превратить каждую строку в число, а уже потом совершать сложение.

// 4. Код должен проверить первую цифру числа:

    let num = 123;

    if (Number(String(num)[0]) === 1) { // Изменено. Было: if (num[0] === 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Сначала нужно превратить число в строку, взять первую цифру, а потом превратить её
    // обратно в число.

// 5. Код должен проверить первую цифру числа:

    let num = 123;

    if (Number(String(num)[0]) === 1) { // Изменено. Было: if (String(num[0]) === 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Нужно сначала превратить всё число в строку, взять у строки значение первого элемента,
    // а затем превратить его в число.

// 6. Код должен проверить первую цифру числа:

    let num = 123;

    if (Number(String(num)[0]) === 1) { // Изменено. Было: if (String(num)[0] === 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Нужно превратить строку в число.

// 7. Код должен проверить первую цифру числа:

    let num = 123;
    let first = Number(String(num)[0]); // Изменено. Было: let first = String(num)[0];

    if (first === 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Нужно превратить строку в число.

// 8. Код должен проверить, что в числе ровно две цифры:

    let num = 12;

    if (String(num).length === 2) { // Изменено. Было: if (num.length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Нельзя узнать длину числа. Нужно сначала превратить его в строку.

// 9. Код должен проверить, что в числе ровно две цифры:

    let num = 12;
    let str = String(num); // Изменено. Было: let str = Number(str);

    if (str.length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Дано число, а не строка, соответственно нужно превратить его в строку.

// 10. Код должен проверить, что в числе ровно две цифры:

    let num = 12;

    if (String(num).length === 2) { // Изменено. Было: if (String(num.length) === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Нужно искать длину у строки, а не у числа.

// 11. Код должен проверить, что в числе ровно две цифры:

    let num = 12;

    if (String(num).length === 2) { // Изменено. Было: if (String(num).length === String(2)) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Не нужно превращать искомое значение длины в строку.

// 12. Код должен проверить, что в числе ровно две цифры:

    let num = 12;

    if (String(num).length === 2) { // "lenght" заменено на "length"
        console.log('+++');
    } else {
        console.log('---');
    }

    // Код работает некорректно. Ошибка в написании слова length.

// 13. Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:

    let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

    let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]); // Изменено. Было: let sum1 = num[0] + num[1] + num[2];
    let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]); // Изменено. Было: let sum2 = num[3] + num[4] + num[5];

    if (sum1 == sum2) {
        console.log('суммы равны');
    } else {
        console.log('суммы не равны');
    }

    // Код работает некорректно. Сложение строковых элементов даст не тот результат, что требуется в условии.
    // Для правильной работы нужно превратить их в числа.