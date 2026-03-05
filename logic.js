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