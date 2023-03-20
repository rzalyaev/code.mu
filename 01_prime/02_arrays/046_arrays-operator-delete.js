// 1. Дан массив:

    let arr = ['a', 'b', 'c', 'd', 'e'];

// Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

delete arr[0];
delete arr[arr.length - 1];
console.log(arr.length);