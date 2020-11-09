// A)

let v = 'First var';
alert(v);
v = 'Second var';
alert(v)

// B)

let integer = 13;
let agree = true;
let und = undefined;
let nu = null;
alert(integer+ ' ' + agree + ' ' + und + ' ' + nu);

let obj = {};
obj.name = 'Ivan';
obj.age = 26;
let mas = ['apple', 'banana', 'orange'];
console.log(obj);
console.log(mas);

// С)

const age = prompt('Каков ваш возраст?');
if (age == '' || age == null) {
        alert('Поздравляем, вам 0 полных лет!!!');
    }
    else {
        alert('Поздравляем, вам '+ age +' полных лет!!!');
    }

if (age >=18) {
        alert('Вы совершеннолетний!');
    }
    else {
        alert('Вы несовершеннолетний!');
    }



