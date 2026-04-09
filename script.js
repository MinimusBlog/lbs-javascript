const button = document.getElementById('btn-primary');
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = './pages/forms-ticket.html';
        });
    }

/* // 2.1 Задание
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
 */
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
/* const messageEl = document.getElementById('message');
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

// ЛБ 4 
// Задача 2.1.1. Блок А

function isValidDate(s) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(s);
}

console.log(isValidDate("2026-02-18")); // true
console.log(isValidDate("18.02.2026")); // false
console.log(isValidDate("")); // false

// 2.1.1. Блок Б

function isValidTitle(s) {
    const regex = /[<>{};]/;
    return !regex.test(s);
}
console.log(isValidTitle('Обычная строка')); // true
console.log(isValidTitle('Строка с <')); // false
console.log(isValidTitle('Строка с ;')); // false

// 2.1.2. B1
function extractIds(text) {
    const matches = text.match(/\d+/g);
    if (!matches) return [];
    return matches.map(Number); // преобразование строк в числа
}
const res = extractIds("id=5; id=12; id=30");
console.log(res); // [5, 12, 30]

// 2.1.2 Б2
function normalizeSpaces(s) {
    return s.trim().replace(/\s+/g, " ");
}
console.log(normalizeSpaces(" A   B\t\tC")); // A B C

// 2.1.3 C1
function validateRequired(value, fieldName) {
    if (!value || value.trim() ==='') {
        return `Поле ${fieldName} обязательно`;
    }
    return null;
    
}
console.log(validateRequired("", "Имя")); // field required
console.log(validateRequired("OK", "Имя")); //null

// 2.1.3 C2
function validateNumberRange(n, min, max, fieldName) {
    if (typeof n !== 'number' || isNaN(n)) {
        return `Поле ${fieldName} должно быть числом`;
    }
    if (n < min || n > max) {
        return `Поле ${fieldName} должно быть в диапазоне от ${min} до ${max}`;
    }
    return null;
}
console.log(validateNumberRange(-2, 0, 100, "Возраст")); // err out of range
console.log(validateNumberRange(10, 0, 100, "Возраст")); // null
console.log(validateNumberRange("abc", 0, 100, "Возраст")); // err not a number

// 2.1.4. D1
function buildRecordFromForm(raw) {
    return {
        title: normalizeSpaces(raw.title),
        value: Number(raw.value),
        status: raw.status,
        createdAt: raw.createdAt
    }
}
const rawData = {
    title: "Новое обращание",
    value: 100,
    status: "New",
    createdAt: "2026-03-25"
};

const record = buildRecordFromForm(rawData);
console.log(record);
console.log('value является числом:', typeof record.value === 'number');
 */
// 2.1.4 D2
/* function collectErrors(record) {
    const errors = [];
    const titleErr = validateRequired(record.title, "title");
    if (titleErr) {
        errors.push(titleErr);
    } else if (!isValidTitle(record.title)) {
        errors.push("Поле title содержит недопустимые символы");
    }

    const valueErr = validateNumberRange(record.value, 1, 10000, "value");
    if (valueErr) errors.push(valueErr);

    return errors;
}

console.log(collectErrors({title: "Не обновляются данные", value: 400})); // [] - без ошибок
console.log(collectErrors({title: "", value: -1})); // с ошибками
 */
// 2.1.5 E1
/* function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

async function testDelay() {
    console.log("Начало задержки");
    await delay(500);
    console.log("Задержка завершена");
} 
testDelay();

// 2.1.5 E2
async function safeFetchJson(url) {
    let resp;
    try {
        resp = await fetch(url);
    } catch (err) {
        return {ok: false, error: "Сетевая ошибка", details: String(err)};
    }

    if (!resp.ok) {
        return {ok: false, error: `HTTP ошибка: ${resp.status}`, details: resp.statusText };
    }
    let data;
    try {
        data = await resp.json();
    } catch (err) {
        return {ok: false, error: "Ошибка JSON", details: String(err)};
    }
    return {ok: true, data};
}

async function testSafeFetchJson() {
    const successRes = await safeFetchJson("https://jsonplaceholder.typicode.com/users/1");
    console.log("Успешный запрос:", successRes);

    const failRes = await safeFetchJson("https://jsonplaceholder.typicode.com/invalid-url");
    console.log("Неуспешный запрос:", failRes);
    
} 
testSafeFetchJson ();

// 1.1.6 F
function tryParseJson(text) {
    try {
        const data = JSON.parse(text);
        return {ok: true, data};
    } catch (err) {
        return {ok: false, error: err.message};
    }
}

console.log(tryParseJson('{"a" :1}'));
console.log(tryParseJson('{a:1}'));

// 2.1.6. F2
function normalizeApiValue(x) {
    if (typeof x === 'number' && !isNaN(x)) return x;
    const n = Number(x);
    return isNaN(n) ? 0 : n;
}

console.log(normalizeApiValue(10));
console.log(normalizeApiValue("20"));
console.log(normalizeApiValue(null));
console.log(normalizeApiValue("abc"));
 */
// Итоговое задание ЛБ 4
const form = document.getElementById('recordForm');
if (form) {
    const formErrors = document.getElementById('formErrors');
    const messageEl = document.getElementById('message');
    const listEl = document.getElementById('list');
    const loadBtn = document.getElementById('loadData');

    function showMessage(text, isError = false) {
        messageEl.textContent = text;
        messageEl.style.color = isError ? 'red' : 'green';
    }

    function showErrors(errors) {
        if (errors.length === 0) {
            formErrors.innerHTML = "";
            return;
        }
        formErrors.innerHTML = "<ul>" + errors.map(e => `<li>${e}</li>`).join("") + "</ul>";
    }

    function renderList(itemsToRender) {
        listEl.innerHTML = "";
        if (!itemsToRender || itemsToRender.length === 0) {
            listEl.innerHTML = "<p>Список пуст</p>";
            return;
        }
        for (const item of itemsToRender) {
            const card = document.createElement("div");
            card.className = "card";

            const h3 = document.createElement("h3");
            h3.textContent = item.title;

            const info = document.createElement("p");
            info.textContent = `id: ${item.id} | value: ${item.value} | status: ${item.status} | ${item.createdAt}`;

            const btnRemove = document.createElement("button");
            btnRemove.textContent = "Удалить";
            btnRemove.dataset.action = "remove";
            btnRemove.dataset.id = String(item.id);

            card.appendChild(h3);
            card.appendChild(info);
            card.appendChild(btnRemove);
            listEl.appendChild(card);
        }
    }
    // Инициализация
    renderList(items);

    // Кнопки управления из ЛР3
    document.getElementById("btn-all").addEventListener("click", () => {
        renderList(items);
        showMessage("");
    });

    document.getElementById("btn-new").addEventListener("click", () => {
        renderList(filterByStatus(items, "New"));
        showMessage("");
    });

    document.getElementById("btn-sort").addEventListener("click", () => {
        renderList(SortByValueDesc(items));
        showMessage("");
    });

    document.getElementById("btn-stats").addEventListener("click", () => {
        const stats = buildStats(items);
        showMessage(
            `Всего: ${stats.totalCount} | Сумма: ${stats.sumValue} | Макс: ${stats.maxValue} | New: ${stats.newCount}`
        );
    });

    // Удаление
    listEl.addEventListener("click", (e) => {
        if (e.target.dataset.action !== "remove") return;
        const id = Number(e.target.dataset.id);
        const idx = items.findIndex(i => i.id === id);
        if (idx !== -1) {
            items.splice(idx, 1);
            renderList(items);
            showMessage(`Запись #${id} удалена`);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const raw = {
            title: document.getElementById('titleInput').value,
            value: document.getElementById('valueInput').value,
            status: document.getElementById('statusInput').value,
            createdAt: document.getElementById('createdAtInput').value
        };
        const record = buildRecord(raw);
        const errors = collectErr(record);
        if (errors.length > 0) {
            showErrors(errors);
            showMessage("Исправьте ошибки формы", true);
            return;
        }
        showErrors([]);
        record.id = generateId(items);
        items.push(record);
        renderList(items);
        form.reset();
        showMessage("Обращение успешно создано!");
    });

    // Загрузка внешних данных
    loadBtn.addEventListener("click", async () => {
        loadBtn.disabled = true;
        loadBtn.textContent = "Загрузка...";
        showMessage("Загрузка данных...");
        const result = await loadExternalData();
        loadBtn.disabled = false;
        loadBtn.textContent = "Загрузить данные из внешнего сервиса";
        if (!result.ok) {
            console.error("Ошибка fetch:", result.details);
            showMessage("Ошибка загрузки: " + result.error, true);
            return;
        }
        result.data.forEach(rec => {
            rec.id = generateId(items);
            items.push(rec);
        });
        renderList(items);
        showMessage(`Загружено ${result.data.length} записей`);
    });
}