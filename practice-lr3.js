// Task 2.1.1 A1
function calcTotal(a, b){
    const res = a + b;
    console.log(res);
    return res;
}
calcTotal(10, 5);

// A2
function formatRecord(id, title, status){
    return `#${id} ${title} [${status}]`;
}
console.log(formatRecord(3, "Тестовая запись", "new"));

// Task 2.1.2 B1
values = [1200, 500, 800, 1500]
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    console.log('Результат: ', sum)

// B2
const filteredValues = values.filter(value => value >= 800);
console.log(filteredValues);

// Task 2.1.3 C1
/* const record = {
    id: 1,
    title: "Первая запись",
    value: 100,
    status: "New",
    createdAt: "2026-03-03"
};
console.log(record);

record.status = 'Завершено';
console.log('Измененный статус: ', record); */

// C2
const record = {
    id: 1,
    title: "Первая запись",
    value: 100,
    status: "New",
    createdAt: "2026-03-03"
};

function isNew(record) {
    if (record.status === "New") {
        return true;
    } else {
        return false;
    }
}
console.log(isNew(record));

// 2.1.4. D
/* const testItems = [
    {
        id: 11,
        FullName: 'Пузанова Елизавета Дмитриевна',
        ticketsId: 2,
        DescTicket: 'Как создать обращение?'
    },

    {
        id: 12,
        FullName: 'Иванов Иван Петрович',
        ticketsId: 3,
        DescTicket: 'Не работает кнопка отправить'
    },

    {
        id: 13,
        FullName: 'Иванова Ирина Алексеевна',
        ticketsId: 4,
        DescTicket: 'Не работает кнопка'
    },

    {
        id: 14,
        FullName: 'Петрова Анна Алексеевна',
        ticketsId: 5,
        DescTicket: 'Ошибка 404'
    }
];

function findById(items, id) {
    return items.find(item => item.id === id) || null;
}
const foundItem = findById(testItems, 11);
console.log(foundItem); */

// D2
const testItems = [
    {
        id: 11,
        FullName: 'Пузанова Елизавета Дмитриевна',
        ticketsId: 2,
        DescTicket: 'Как создать обращение?'
    },

    {
        id: 12,
        FullName: 'Иванов Иван Петрович',
        ticketsId: 3,
        DescTicket: 'Не работает кнопка отправить'
    },

    {
        id: 13,
        FullName: 'Иванова Ирина Алексеевна',
        ticketsId: 4,
        DescTicket: 'Не работает кнопка'
    },

    {
        id: 14,
        FullName: 'Петрова Анна Алексеевна',
        ticketsId: 5,
        DescTicket: 'Ошибка 404'
    }
];

function countStats(testItems) {
    return testItems.reduce((acc, item) => {
        acc.totalCount += 1;
        acc.sumValue += typeof item.value === 'number' ? item.value : 0;
        return acc;
    }, {totalCount: 0, sumValue: 0});
}

const stats = countStats(testItems);
console.log(stats);