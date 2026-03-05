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
/* document.addEventListener('DOMContentLoaded', () => {

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
}); */

// Task 2.1.6 F
const messageEl = document.getElementById('message');
messageEl.textContent = 'DOM работает';

// 
const demoList = document.getElementById('demoList');
for (let i = 1; i <= 3; i++) {
    const p = document.createElement('p');
    p.textContent = `Текст ${i}`;
    demoList.appendChild(p);
}

// 2.6 list via DOM-model
const listEl = document.getElementById("list");
function clearList() {
    listEl.innerHTML = "";
}
// рендер списка
function renderList(itemsToRender) {
    clearList();

    for (const item of itemsToRender) {
        const card = document.createElement("div"); // создание контейнера карточки
        card.className = "card";

        const h3 = document.createElement("h3"); // заголовок карточки
        h3.textContent = `${item.title}`;

        const info = document.createElement("p"); // информация внутри карточки
        info.textContent = `id = ${item.id} | value = ${item.value} |
        status = ${item.status} | createdAt = ${item.createdAt}`;

        const btnRemove = document.createElement("button"); // кнопка удалить
        btnRemove.textContent = "Удалить";
        btnRemove.dataset.action = "remove";
        btnRemove.dataset.id = String(item.id);

        card.appendChild(h3);
        card.appendChild(info);
        card.appendChild(btnRemove);

        listEl.appendChild(card);
    }
}
renderList(items); // рендер списка

//task 2.7
const btnAll = document.getElementById('btn-all');
const btnNew = document.getElementById('btn-new');
const btnStats = document.getElementById('btn-stats');
const btnSort = document.getElementById('btn-sort');

btnAll.addEventListener("click", () => {
    renderList(items);
    messageEl.textContent = "";
});

btnNew.addEventListener("click", () => {
    renderList(filterByStatus(items, "New"));
    messageEl.textContent = "";
});

btnSort.addEventListener("click", () => {
    renderList(SortByValueDesc(items));
    messageEl.textContent = "";
});

btnStats.addEventListener("click", () => {
    const stats = buildStats(items);
    messageEl.textContent =
        `Всего записей: ${stats.totalCount}\n` +
        `Сумма значений: ${stats.sumValue}\n` +
        `Максимум значений: ${stats.maxValue}\n` +
        `Количество status = "New": ${stats.newCount}`;
});
