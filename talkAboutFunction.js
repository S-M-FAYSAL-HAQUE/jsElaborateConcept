nums = [5, 12, 15, 28, 35];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);
}
console.log('=========');

nums = [5, 12, 15, 28, 35];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num*2);
}
console.log('=========');

nums = [5, 12, 15, 28, 35];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num % 2 == 0){
        console.log(num, ': is even number.');
    }
    else{
        console.log(num, ': is odd number.');
    }
}
console.log('=========');

nums = [5, 12, 15, 28, 35];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num % 2 == 0){
        console.log(num, ': is even number.');
    }
    else{
        console.log(num*2, ': is odd number.');
    }
}
console.log('=========');

function evenOdd(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (nums % 2 == 0){
            console.log(num, ': is even number.');
        }
        else{
            console.log(num, ': is odd number.');
        }
    }
}
nums = [5, 12, 15, 28, 35];
evenOdd(nums);

console.log("+++++");

friendAge = [18, 25, 4, 23, 27];
evenOdd(friendAge);
console.log('=========');

// where we use return;

function evenify(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}
var result = evenify(13);
console.log('result:', result);
console.log('=========');

function evenify(num){
    if(num % 2 == 0){
        return num;
    }
    else{
        return num*2;
    }
}
var result = evenify(11);
console.log('result:', result);