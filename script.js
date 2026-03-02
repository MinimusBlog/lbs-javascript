const button = document.getElementById('btn-primary');

button.addEventListener('click', () => {
    window.location.href = './pages/forms-ticket.html';
});

// 2.1 Задание
const appConfig = {
    appTitle: "Учебное web-приложение: Обращение в ТП",
    defaultStatus: 'new',
    minValueForFilter: 100,

};

let actionCount = 0;
actionCount++;
actionCount++;
actionCount++;

appConfig.minValueForFilter = 200;
console.log('actionCount: ', actionCount);
console.log('appConfig: ', appConfig);

// 2.2 Задание
const users = [
    {
        id: 1,
        name: 'lamb',
        email: 'example@example.com',
        createdAt: '2026-02-10'
    },
    {
        id: 2,
        name: 'tiger',
        email: 'tiger@example.com',
        createdAt: '2026-02-11'
    }
];

const tickets = [
    {
        id: 1,
        userID: 1,
        topic: 'Ошибка авторизации',
        description: 'Неудается войти в личный кабинет',
        status: 'new',
        category: 'Авторизация',
        value: 800,
        createdAt: '2026-02-10'
    },
    {
        id: 2,
        userID: 2,
        topic: 'Неудалось сменить пароль',
        description: 'Не работает якорная ссылка смены пароля',
        status: 'new',
        category: 'Смена пароля',
        value: 1200,
        createdAt: '2026-02-12'
    }
];

console.log('Пользователи: ', users);
console.log('Тикеты: ', tickets);

// 2.3 Задание
const inputMinValue = "800";
const minValue = Number(inputMinValue);
if (Number.isNaN(minValue)) {
    console.log('Ошибка введено некоректное число!');
} else {
    console.log('minValue:', minValue);
}

// 2.4 Задание
const userAge = 19;
const isBlocked = false;
const hasAccess = userAge >= 18 && userAge < 65 && !isBlocked;
console.log('hasAccess', hasAccess);

// 2.5 Задание
const item = tickets[0];
let statusDesc;
switch (item.status) {
    case 'new':
        statusDesc = 'Новая запись';
        break;
    case 'done':
        statusDesc = 'Завершено';
        break;
    default:
        statusDesc = 'Неизвестный статус';
}

let valueCategory;
if (item.value >= 1000) {
    valueCategory = 'Высокое значение';
} else if (item.value >= 700) {
    valueCategory = 'Ср. значение';
} else {
    valueCategory = 'Низкое значение';
}
console.log('Статус тикета: ', statusDesc);
console.log('Значение категории: ', valueCategory);

// 2.6 Задание
let statusCount = 0;

for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].status === 'new') {
        statusCount++;
    }
}

console.log('Количество тикетов со статусом \"new\":', statusCount);

// 3.2 Задание
document.addEventListener('DOMContentLoaded', () => {

    // Находим все элементы на странице по id
    const btnAll = document.getElementById('btn-all');
    const btnNew = document.getElementById('btn-new');
    const btnStats = document.getElementById('btn-stats');
    const output = document.getElementById('output');

    btnAll.addEventListener('click', () => {

        let text = 'Все записи:\n';
        for (let i = 0; i < tickets.length; i++) {
            const t = tickets[i];
            text += 'Тема: ' + t.topic + '\n';
            text += 'Статус: ' + t.status + '\n';
            text += 'Значение: ' + t.value + '\n';
            text += '---\n';
        }
        output.textContent = text;
});

    btnNew.addEventListener('click', () => {

        let text = 'Новые записи:\n';
        for (let i = 0; i < tickets.length; i++) {
            const t = tickets[i];

            // если статус тикета 'new' не иначе
            if (t.status === 'new') {
                text += 'Тема: ' + t.topic + '\n';
                text += 'Статус: ' + t.status + '\n';
                text += 'Значение: ' + t.value + '\n';
                text += '---\n';
            }

        }
        output.textContent = text;
    });

    btnStats.addEventListener('click', () => {
        let countNew = 0;
        let totalValue = 0;
        let maxValue = 0;
        let filteredText = '';

        // один цикл считает всё сразу
        for (let i = 0; i < tickets.length; i++) {
            const t = tickets[i];

            if (t.status === 'new') {
                countNew++;
            }

            totalValue += t.value;

            if (t.value > maxValue) {
                maxValue = t.value;
            }

            if (t.value >= appConfig.minValueForFilter) {
                filteredText += ' - ' + t.topic + ' (value: ' + t.value + ')\n';
            }
        }

        if (filteredText === '') {
            filteredText = 'Нет тикетов\n';
        }

        let statsText = '';
        statsText += 'Данные корректны\n';
        statsText += 'Всего записей: ' + tickets.length + '\n';
        statsText += 'Сумма value: ' + totalValue + '\n';
        statsText += 'Максимум value: ' + maxValue + '\n';
        statsText += 'Количество status "new": ' + countNew + '\n';
        statsText += 'Фильтр value >= ' + appConfig.minValueForFilter + ':\n';
        statsText += filteredText;

        output.textContent = statsText;
    });
});