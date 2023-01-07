

const one = prompt ('Введіть тут те, що вам до вподоби') 
const two = prompt ('Введіть тут те, що вам до вподоби')
const three = prompt ('Введіть тут те, що вам до вподоби')

if( one === null || one === ''){
	alert ('Ви не ввели перше значення')
	}
	else if (two === null || two === ''){
		alert ('Ви не ввели друге значення')
		}
		else if (three === null || three === ''){
			alert ('Ви не ввели третє значення')
			}
			else {	
				alert(three + one + two)
				}



const num = prompt ('Введіть п\'ятизначне число');

if(num === ''){
	alert ('Ви нiчого не ввели')
	}
	else if (num === null) {
		alert ('Ви скасували')
		}
		else if (!(/[0-9]/.test(Number(num)))) {
			alert ('Повинні бути числа')
			}
			else if (num.length !== 5){
				alert ('Ви ввели не п\'ятизначне число')
					}
					else {
						const numbers = Array.from(num);
						alert (numbers.join(' '))
						}
