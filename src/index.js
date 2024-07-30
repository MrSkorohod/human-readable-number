module.exports = function toReadable (number) {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const firstTwoDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const twoDigits = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const threeDigits = 'hundred';
  
  function getToTwoDigitNumber(number) {
    if(number >= 0 && number < 10) {
      return digits[number]
    } else if(number >= 10 && number < 20) {
      return firstTwoDigits[number%10]
    } else if(number >= 20 && number <= 90 && number%10 === 0) {
      return twoDigits[number/10-2]
    } else if(number >= 20 && number < 100 && number%10 !== 0) {
      return String(number).split('').reduce((result, item, idx) => {
        return result += idx ? digits[item] : `${twoDigits[item%10-2]} `
      }, '')
    }
  }
  
  if(number >= 0 && number < 100 ) {
    return getToTwoDigitNumber(number);
  }else if(number >= 100 && number < 1000 && number%100 === 0) {
    return digits[String(number).split('')[0]] + ' ' + threeDigits;
  } else if(number >= 100 && number < 1000 && number%100 !== 0) {
    return digits[String(number).split('')[0]] + ' ' + threeDigits + ' ' + (getToTwoDigitNumber(
      Number(String(number).split('')[1]+String(number).split('')[2])
    ))
  }

}
