// 1. Расскажите порядок выполнения сравнения в следующем условии:

    if (num == 0 || num > 1 && num < 5 ) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // Answer: First: num > 1 && num < 5 ?
    //         Second: num == 0 ?