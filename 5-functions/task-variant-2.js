/* Напишите функцию для применения
алгоритма сортировки пузырьком */

function bubbleSort(array) {
    let temp = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([6, 5, 7, 10, 1, 3, 2]));
