// 1. Спросите у пользователя, есть ли ему уже 18 лет.
//    Если есть - выведите на экран алерт с текстом для взрослых,
//    а если нет, выведите сообщение о том, что доступ пользователю запрещен.

    let isAdult = confirm('Вам уже есть 18?');
    if (isAdult) {
        alert('Текст для взрослых');
    } else {
        alert('Доступ запрещён!');
    }