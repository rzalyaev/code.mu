// 1. Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет.
//    Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код:

    let age = 17;
    let adult; // Добавлено

    if (age >= 18) {
        adult = true; // Убрано объявление переменной
    } else {
        adult = false; // Убрано объявление переменной
    }

    console.log(adult);