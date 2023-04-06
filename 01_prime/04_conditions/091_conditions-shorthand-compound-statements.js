// 1. Перепишите следующий код в сокращенной форме:

    let test1 = true;
    let test2 = true;

   if (test1 && test2) { // Изменено. Было: if (test1 === true && test2 === true) {
        console.log('+++');
    } else {
        console.log('---');
    }

// 2. Перепишите следующий код в сокращенной форме:

    let test1 = true;
    let test2 = true;

    if (test1 && !test2) { // Изменено. Было: if (test1 === true && test2 !== true) {
        console.log('+++');
    } else {
        console.log('---');
    }

// 3. Перепишите следующий код в сокращенной форме:

    let test1 = true;
    let test2 = true;

    if (!test1 && !test2) { // Изменено. Было: if (test1 !== true && test2 !== true) {
        console.log('+++');
    } else {
        console.log('---');
    }

// 4. Перепишите следующий код в сокращенной форме:

    let test1 = true;
    let test2 = true;

    if (!test1 && test2) { // Изменено. Было: if (test1 !== false && test2 === true) {
        console.log('+++');
    } else {
        console.log('---');
    }

// 5. Перепишите следующий код в сокращенной форме:

    let test1 = true;
    let test2 = true;
    let test3 = true;

    if (test1 && test2 && test3) { // Изменено. Было: if (test1 === true && test2 === true && test3 === true) {
        console.log('+++');
    } else {
        console.log('---');
    }

// 6. Перепишите следующий код в сокращенной форме:

    let test1 = true;
    let test2 = true;
    let test3 = true;

    if (test1 || test2 && test3) { // Изменено. Было: if (test1 === true || test2 === true && test3 === true) {
        console.log('+++');
    } else {
        console.log('---');
    }

// 7. Перепишите следующий код в сокращенной форме:

    let test1 = true;
    let test2 = true;
    let test3 = true;

    if (test1 || !test2 && !test3) { // Изменено. Было: if (test1 === true || test2 === false && test3 === false) {
        console.log('+++');
    } else {
        console.log('---');
    }