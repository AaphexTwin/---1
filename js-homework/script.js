// Названия досок и задач
const boards = ["Работа", "Учёба", "Личные дела"];
const tasks = ["Прочитать статью", "Исправить ошибку", "Подготовить отчёт"];

// Создаём объект со случайной доской и случайной задачей
function createTask() {
    const boardIndex = Math.floor(Math.random() * boards.length);
    const taskIndex = Math.floor(Math.random() * tasks.length);

    return {
        board: boards[boardIndex],
        task: tasks[taskIndex]
    };
}

// Выводим весь список в консоль
function printTasks(list) {
    if (list.length === 0) {
        console.log("Список пуст");
        return;
    }

    list.forEach(function (item) {
        console.log("Доска: " + item.board + ", задача: " + item.task);
    });
}

// Вызываем первую функцию несколько раз и собираем объекты в массив
const result = [createTask(), createTask(), createTask(), createTask()];

printTasks(result);

// Проверяем вывод для пустого массива
printTasks([]);
