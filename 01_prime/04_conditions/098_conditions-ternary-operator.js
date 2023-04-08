// 1. Перепишите следующий код через тернарный оператор:

    let num = 1;
    let res;

    if (num >= 0) {
        res = '1';
    } else {
        res = '2';
    }

    console.log(res);

// Ответ:

    res = num >= 0 ? '1' : '2';