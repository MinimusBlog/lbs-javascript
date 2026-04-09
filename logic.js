// Task E2
function helloFromLogic() {
    return "logic works";
}
console.log(helloFromLogic());

// Task 2.5 data processing functions
function filterByStatus(items, status) {
    return items.filter(item => item.status === status);
}
console.log('Фильтрация по статусу: ', SortByValueDesc(items));

function findById(items, id) {
    return items.find(item => item.id === id) || null;
}
console.log('Поиск по id: ', findById(items));

function SortByValueDesc(items) {
    const copy = items.slice();
    copy.sort((a, b) => b.value - a.value);
    return copy;
}
console.log('Сортировка по убыванию: ', SortByValueDesc(items));

function buildStats(items) {
    return items.reduce((acc, item) => {
        acc.totalCount += 1;
        acc.sumValue += item.value;
        if (item.value > acc.maxValue) acc.maxValue = item.value;
        if (item.status === "New") acc.newCount += 1;
        return acc;
    }, { totalCount: 0, sumValue: 0, maxValue: 0, newCount: 0 });
}
console.log('Агрегация статистики: ', buildStats(items));

// Валидация данных RegExp ЛБ 4
function isValidDate(s) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(s);
}

function isValidTitle(s) {
    const regex = /[<>{};]/;
    return !regex.test(s);
}

function normalizeSpaces(s) {
    return s.trim().replace(/\s+/g, " ");
}

function collectErr (record) {
    const err = [];
    if (!record.title || record.title.trim() === "") {
        err.push("Название обязательно");
    } else if (!isValidTitle(record.title)) {
        err.push("Название содержит недопустимые символы");
    }

    const value = Number(record.value);
    if (isNaN(value) || value <= 0) {
        err.push("Значение должно быть положным числом (1-5)");
    }

    if (!record.createdAt || record.createdAt.trim() === "") {
        err.push("Дата обязательна");
    } else if (!isValidDate (record.createdAt)) {
        err.push("Дата должна быть в формате ГГГГ-ММ-ДД");
    } else if (isNaN(Date.parse(record.createdAt))) {
        err.push("Указана несуществующая дата");
    }
    return err;
}

function buildRecord(raw) {
    return {
        title: normalizeSpaces(raw.title),
        value: Number(raw.value),
        status: raw.status,
        createdAt: raw.createdAt.trim()
    };
}

function generateId(items) {
    if (items.length === 0) return 1;
    return Math.max(...items.map(i => i.id)) + 1;
}

async function loadExternalData() {
    let resp;
    try {
        resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    } catch (err) {
        return {ok: false, error: 'Ошибка сети', details: err.message};
    }
    if (!resp.ok) {
        return {ok: false, error: `Ошибка сервера: ${resp.status}`, details: resp.statusText};
    }

    let data;
    try {
        data = await resp.json();
    } catch (err) {
        return {ok: false, error: 'Не удалось распознать ответ сервера', details: err.message};
    }

    const records = data.map((todo, index) => ({
        title: normalizeSpaces(todo.title),
        value: (index % 5) + 1,
        status: todo.completed ? "done" : "New",
        createdAt: new Date().toISOString().split('T')[0]
    }));
    return {ok: true, data: records};
}