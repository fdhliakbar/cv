function isSorting(let numbers) {
  for (let i = 0; i < numbers - 1; i++){
    for (let j = 0; i < numbers; j++){
      if (numbers[i] < numbers[j]) {
        let temp = numbers[i]
        numbers[i] = numbers[j+1];
        numbers[j+1] = temp;
      }
    }
  }
}
console.log(isSorting(numbers));
