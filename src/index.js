module.exports = function toReadable (number) {
  const numbers = [ 
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  ];
  const tens = [
    'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
  ];

  if (number === 0) return 'zero';

  let result = '';

  if (Math.floor(number / 100) > 0) {
    result += numbers[Math.floor(number / 100)] + ' hundred';
  }
 
  let leftover = number % 100;

  if (leftover > 0 && leftover < 20) {
    result += numbers[leftover];
  } else {
    result += tens[Math.floor(leftover / 10)];
    if (leftover % 10 > 0) {
      result += '' + numbers[leftover % 10];
    }
  }

  return result.trim();

}


