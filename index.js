/*
Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, 
текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.
*/

function getNumber () {
    let numberInput;
    let maxIterations = 10;
    let iterationCount = 0;

    do {
       numberInput = prompt('Enter a number greater than 100');
        
        if(numberInput === null) {
            alert('You canceled!');
            return null;
        } else if (isNaN(+numberInput)) {
            alert('Enter a valid number!')
        } else if (+numberInput >= 100 ) {
            console.log(numberInput);
            return numberInput;
        };

        iterationCount++;

        if (iterationCount >= maxIterations) {
          console.log(numberInput);
            return numberInput;
        }

    } while (+numberInput < 100);

return numberInput;
}

const result = getNumber();