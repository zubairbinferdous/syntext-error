
const showAlert =  () => {
    alert('hello it me');
}
const pro =  () => {
    prompt('hello it me');
}

const con =  () => {
   const value = confirm('hello it me');
   if (value === true) {
    console.log('it is of')
   }else{
    console.log('it is  out')
   }
}