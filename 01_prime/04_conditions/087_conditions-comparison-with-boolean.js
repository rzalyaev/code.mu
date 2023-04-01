// 1. Вспомните и напишите, какие значения при приведении к логическому типу дают false.

    // Answer: 0, -1, null, undefined, NaN, ''

// 2. Не запуская код, определите, что выведется в консоль:

    let test = 1;

    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Answer: '+++'.

// 3. Не запуская код, определите, что выведется в консоль:

    let test = 0;

    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Answer: '---'.

// 4. Не запуская код, определите, что выведется в консоль:

    let test = 1;

    if (test == false) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Answer: '---'.

// 5. Не запуская код, определите, что выведется в консоль:

    let test = 1;

    if (test != true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Answer: '---'.

// 6. Не запуская код, определите, что выведется в консоль:

    let test = '';

    if (test == false) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Answer: '+++'.

// 7. Не запуская код, определите, что выведется в консоль:

    let test;

    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Answer: '+++'.

// 8. Не запуская код, определите, что выведется в консоль:

    let test = 3 * 'a';

    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Answer: '---'.