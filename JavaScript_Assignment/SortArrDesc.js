let arr = [25,78,45,96,32,11,74];
let x = arr[0];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            let temp = arr[j];
            arr[j]=arr[i];
            arr[i] = temp;
        }
    }
}
for(let i in arr){
    console.log(arr[i]);
}
