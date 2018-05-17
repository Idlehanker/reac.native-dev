/**
 * @flow
 */

 function acceptsTwo(value: 2){}
 acceptsTwo(2);
 acceptsTwo(3);
 acceptsTwo('2');


/**
 * union types
 */
function getColor(name: 'success'|'warning'|'danger'){
    switch(name){
        case 'success': return 'green';
        case 'warning': return 'yellow';
        case 'danger' : return 'red';
    }
}

getColor('success');
getColor('danger');
getColor('error');

