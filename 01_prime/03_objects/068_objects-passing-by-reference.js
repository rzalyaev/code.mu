// 1. Не запуская код, определите, что выведется в консоль:

    let arr1 = [1, 2, 3];
    let arr2 = arr1;

    arr1[0] = 'a';
    console.log(arr2);

// Ответ: ['a', 2, 3]

// 2. Не запуская код, определите, что выведется в консоль:

    let arr3 = [1, 2, 3];
    let arr4 = arr3;

    arr3[0] = 'a';
    arr4[1] = 'b';

    console.log(arr3);

// Ответ: ['a', 'b', 3]

// 3. Не запуская код, определите, что выведется в консоль:

    let arr5 = [1, 2, 3];
    let arr6 = arr5;

    arr5[0] = 'a';
    arr6[0] = 'b';

    console.log(arr6);

// Ответ: ['b', 2, 3]