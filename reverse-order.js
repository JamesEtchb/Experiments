function reversedSen (str){
    let reverseOrder = str.split(' ')
    reverseArr = reverseOrder.reverse()
    final = reverseArr.join(' ')
}

console.log(reversedSen('this is a test'))