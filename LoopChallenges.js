function oddsTo20() {
    for (i=1; i<21;i++){
        if (i%2!=0){
            console.log(i);
        }
    }
}
oddsTo20()

function decreasing3() {
    for (i=100;i>-1;i--){
        if (i%3==0){
            console.log(i);
        }
    }
}
decreasing3()

function printSequence(arr) {
    var arr = [4,2.5,1,-0.5,-2,-3.5]
    for (i=0; i<arr.length;i++){
        console.log(arr[i]);
    }
}
printSequence()

function sigma(){
    var sum = 1
    for (i=2;i<101;i++){
        sum += i
    } console.log(sum);
}
sigma()

function factorial() {
    var product = 1
    for (i=2;i<13;i++){
        product *= i
    } console.log(product);
}
factorial()