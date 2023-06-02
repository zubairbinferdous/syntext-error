const submit = document.getElementById('hello');
submit.innerText('hello');
try {
    if (isNaN) {
        throw 'this id is not allow'
    }
} catch (error) {
    console.log(error);
}
finally{
    console.log('this is of for now');
}