function stringOdd(){
    let inputValue = document.getElementsByTagName('input')[0].value;
    let arr = inputValue.split('');
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        if(i%2==0){
            arr.splice(i, 1, 1);
            // arr[i] = 1;
        }
    }
    console.log(arr);
}
