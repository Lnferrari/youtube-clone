const formatNumber = num => {
  let first = num.split(',');
  let digits = first[0].split('').reverse();
  let new_digits = [];
  for(var i =0; i<digits.length; i++) {
    if((i+1)%3==0) {
      new_digits.push(digits[i]);
      new_digits.push('.');
    }
    else {
      new_digits.push(digits[i]);
    }
  }
  let new_num = new_digits.reverse().join("")+','+first[1];
  return new_num;
}

export default formatNumber
