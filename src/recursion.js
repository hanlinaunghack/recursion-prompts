/* jshint esversion: 6 */

// Solve the following prompts using recursion.


// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if(n < 0) return null;
	return n > 0 ? n * factorial(n-1) : 1;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if(array.length < 1) return 0;
	if(array.length > 1) {
		return array[0] + sum(array.slice(1))
	} else {
		return array[0];
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) { 
  if(!Array.isArray(array) || array.length == 0) return 0;
  if(Array.isArray(array[0])) {
    return arraySum(array[0]) + arraySum(array.slice(1));
  } else {
    return array[0] + arraySum(array.slice(1));
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
	if (n < 0) {
		return isEven(-n);
	} else if (n > 1) {
		return isEven(n - 2);
	} else if (n == 1) {
		return false;
	} else if (n == 0) {
		return true;
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if(n == 0) {
		return n;
	} else if (n < 0) {
		n = n + 1;
		return n + sumBelow(n);
	} else if (n > 0) {
		n = n - 1;
		return n + sumBelow(n);
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if(x + 1 < y) {
		x += 1;
		if (x == y - 1) {
			return y - 1;
		} else {
			return [x].concat(range(x,y))
		}	
	} else if (x - 1 > y) { 
		x -= 1;
		if (x == y + 1) {
			return y + 1;
		} else {
			return [x].concat(range(x,y))
		}	
	}	
	return [];	
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if(exp == 1) {
		return base;
	} else if (exp == 0) {
		return 1;
	} else if (exp > 1) {
		return base * exponent(base, exp - 1);
	} else if (exp < 1) {
		var x = (1 / base) * (exponent(base, exp + 1));
    	return Number(x.toFixed(5));
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
/*	if (n == 1) {
		return true;
	} else if (n > 1) {
		var x = Math.log2(n)
		if(Math.floor(x) == x) {
			return true;
		} else {
			return false;
		};
	};
	return false;*/
	if (n >= 0 && n < 1) {
		return false;
	} else if (n == 1) {
		return true;
	} else if (Math.log2(n) == Math.floor(Math.log2(n))) {
		return powerOfTwo(1);
	}
	return false;
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	return string.substr(-1) + (string.length > 1 ? reverse(string.slice(0,-1)) : "");
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	if (string.length > 1) {
		if(string[0].toLowerCase() == string[string.length - 1].toLowerCase()) {
			string = string.replace(string[0], "");
			string = string.replace(string.length - 1, "");
			palindrome(string);
		} else {
			return false;
		}
	}
	return true;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if(y == 0) return NaN;
	var negX = x < 0 ? true:false;
	var negY = y < 0 ? true:false;
	if ((negX?-x:x) >= (negY?-y:y)) {
		x = (negX?-x:x) - (negY?-y:y);
		x=negX?-x:x;
		y=negY?-y:y;
		return modulo(x , y);
	} else {
		return x;
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if(y == 0) return 0;
  if(y < 1) {
    return -x + multiply(x, y + 1);
  }
	if(y > 1) {
		return x + multiply(x , y - 1);
	} else {
		return x;
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if(y == 0) {
    return NaN;
  }
  var negX = x<0?true:false;
  var negY = y<0?true:false;
  if(x<0 || y<0) {
    if(!(x<0 && y<0)) {
      var negXY = true;
    } else {
      var negXY = false;
    }
  } 
  if(x == 0) {
    return 0;
  } else if ((negX?-x:x) >= (negY?-y:y)) {
    x = (negX?-x:x) - (negY?-y:y);
    x = negX?-x:x;
    return negXY ? -1 + divide(x,y) : 1 + divide(x , y);
  }
  return 0;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if(x<0 || y<0) return null;
  if(!y) {
    return x;
  } 
  return gcd(y,x%y)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if(str1[0] == str2[0]) {
		if(str1.length > 0 && str2.length > 0) {
			str1 = str1.replace(str1[0], "");
			str2 = str2.replace(str2[0], "");
			return compareStr(str1,str2);
		} else {
			return true;
		}
	}
	return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if(str.length > 1) {
		return [str[0]].concat(createArray(str.replace(str[0], "")))
	} else {
		return [str[0]];
	}
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	return array.length > 1 ? [array[array.length - 1]].concat(reverseArr(array.slice(0,-1))): array[0];
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	return length > 1 ? [value].concat(buildList(value , length - 1)) : [value];
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	if(n > 1) {
		return fizzBuzz(n-1).concat(fizzbuzzer(n));
	} else {
    return [fizzbuzzer(n)];
  }
	function fizzbuzzer(l) {
		if(l % 3 == 0 && l % 5 == 0) {
			return 'FizzBuzz';
		} else if(l % 3 == 0) {
			return 'Fizz';
		} else if(l % 5 == 0) {
			return 'Buzz';
		} else {
			return String(n);
		}
	}
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(array.length > 1) {
    return array[0] === value ? 1 + countOccurrence(array.slice(1),value) : 0 + countOccurrence(array.slice(1),value);
  } else {
    return array[0] === value ? 1 : 0;
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if(array.length > 1) {
    return [callback(array[0])].concat(rMap(array.slice(1),callback));
  } else {
    return callback(array[0]);
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var x = Object.keys(obj);
  var sol = 0;
  var y = Object.values(obj).filter(function(e) {
    return typeof e == 'object' && !Array.isArray(e);
  });
  y.forEach(function(element) {
    sol += countKeysInObj(element,key);
  })
  sol += x.indexOf(key) > -1 ? 1 : 0
  return sol;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var x = Object.keys(obj);
  var sol = 0;
  var y = Object.values(obj)
  y.forEach(function(element) {
    if(typeof element == 'object' && !Array.isArray(element)) {
      sol += countValuesInObj(element,value);
    }
  })
  sol += y.indexOf(value) > -1 ? 1 : 0
  return sol;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  function renamer(obj , oldKey , newKey) {
    if(obj.hasOwnProperty(oldKey)) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    return obj;
  }
  for(var i in obj) {
    if (typeof obj[i] == 'object') {
      obj[i] = replaceKeysInObj(obj[i],oldKey,newKey);
    }
  }
  return renamer(obj,oldKey,newKey);
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	//if n = the last item in the array
	if(n <= 0) return null;
	if(n == 1) return [0,1];
	var x = fibonacci(n-1);
	return [...x , (x[n-1]+x[n-2])]; //n is the index
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if(n < 0) return null;
	if(n == 0) return 0;
	if(n == 1) return 1;
	return nthFibo(n-1) + nthFibo(n-2); //n is the index
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	function upperCase(item) {
	  return item === item.toUpperCase();
	}
	if(array.every(upperCase)) {
	  return array;
	} else {
	   array[0] = array[0].toUpperCase();
	   array[array.length - 1] = array.shift();
	  return capitalizeWords(array);
	}
};



// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	function capFirst(item) {
		return item[0] === item[0].toUpperCase();
	};
	if(array.every(capFirst)) {
		return array;
	} else {
		array[0] = array[0][0].toUpperCase() + array[0].substr(1).toLowerCase(); //slice for array and substr for strings
		array[array.length - 1] = array.shift();
		return capitalizeFirst(array);
	}
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var x = Object.values(obj);
	return x.reduce(function(sum , curr) {
		if (typeof curr == 'object' && !Array.isArray(curr)) {
			return sum + nestedEvenSum(curr) //<< recursion
		} else if (typeof curr == 'number' && curr % 2 == 0) {
			return sum + curr;
    } else {
      return sum + 0;
    };
	}, 0); //"ball" wouldn't be 4, only 0
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
//   if(array[0] === 'number') {
//   array[array.length - 1] = array.shift();
// } else {
//   var first = array.shift();
//   array.concat(first)
//     return flatten(array)
// }
	return array.reduce(function(sum ,curr) {
		return sum.concat(Array.isArray(curr) ? flatten(curr) : [curr])
	}, [])
	
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str) {
	var arr = str.split('');
	var obj = {};
  function extend(obj1,obj2) {
    for (var i in obj2) {
      if(obj1.hasOwnProperty(i)) {
        obj1[i] += obj2[i];
      } else {
        obj1[i] = obj2[i];
      }
    }
    return obj1;
  }
	if(str.length > 1) {
		obj[arr[0]] = obj[arr[0]] ? obj[arr[0]] + 1 : 1;
     extend(obj,letterTally(str.substr(1)))
	} else {
    obj[arr[0]] = obj[arr[0]] ? obj[arr[0]] + 1 : 1; 
	}
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var list1 = list.slice(0);
function checkTest(list) {
  for(var i = 0 ; i < list.length ; i++) {
    if(list[i] == list[i + 1]) return i;
  }
  return -1;
}
if (checkTest(list1) > -1 ) {
    list1.splice(checkTest(list1),1);
    list1 = compress(list1);
  }
  return list1;
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var newArray = [];
  if(array.length > 1) {
    array[0].push(aug);
    augmentElements (array.slice(1), aug);
  } else {
    array[0].push(aug);
  }
  return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
 /* var newArr = [];
	function extend(array1, array2) {
	  var indexes = [];
	  for(var i = 0; i < array2.length; i++) {
	    if(array2[i] !== 0) {
	      array1.push(array2[i]);
	    } else if(array2[i] === 0) {
	      indexes.push(i);
	    } 
	  } 

	var firstZeroIndex = indexes.shift();
	  array1.splice(firstZeroIndex, 0, 0)
	   return array1;
	}

	if(array.length === 0) {
	  return newArr;
	} else {
	   extend(newArr, minimizeZeroes(array.slice(1)));
	}
	return newArr; */
	var newArray = [];
	  if(array.length > 1) {
	    if(array[0] == 0 && array[1] == 0) {
	      return newArray.concat(minimizeZeroes(array.slice(1)));
	    } else {
	      newArray.push(array[0]);
	      
	      return newArray.concat(minimizeZeroes(array.slice(1))); //<<<<<<<<what does it produce?
	    }
	  } else {
	    newArray.push(array[0]);
	  }
	return newArray;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if(array.length > 2) {
    if(array.length % 2 == 0) {
      if(array[0] < 0) {
        array[0] = -array[0];
      }
    } else {
      if(array[0] > 0) {
        array[0] = -array[0];
      }
    }
    return [array[0]].concat(alternateSign(array.slice(1)));
  } else {
    if(array.length % 2 == 0) {
      if(array[0] < 0) {
        array[0] = -array[0];
      }
    } else {
      if(array[0] > 0) {
        array[0] = -array[0];
      }
    }
    if(array.length % 2 == 0) {
      if(array[1] > 0) {
        array[1] = -array[1];
      }
    } else {
      if(array[1] < 0) {
        array[1] = -array[1];
      }
    }
    return [array[0],array[1]];
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var text = '';
  if(str.length >= 1) {
    switch(str[0]) {
      case ('8'):
      text += 'eight' + numToText(str.substr(1));
      break;
      case ('5'):
      text += 'five' + numToText(str.substr(1));
      break;
      case ('6'):
      text += 'six' + numToText(str.substr(1));
      break;
      default:
      text += str[0] + numToText(str.substr(1));      
    }
  }
  return text;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
/*	var arr = [];
	if(Array.isArray(arra)) {
		var x = arra;
	} else {
		var x = document.getElementsByTagName(tag);
	}

	if(x.length > 1) {
		arr.push(x[0]);
		return arr.concat(tagCount(tag, node, x.slice(1)));
	} else {
		return [x[0]];
	}*/
	if(typeof node == 'number') {
		var x = node;
	} else {
		var x = document.getElementsByTagName(tag).length;
	}
	if(typeof node != 'number') {
		return 0 + tagCount(tag, x - 1);
	} else if (node > 0) {
		return 1 + tagCount(tag, x - 1);
	} else {
		return 1;
	}
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
	array = array.sort((a,b) => a - b);
	if(array.length > 1) {
		var x = (array.length % 2 != 0) ? Math.floor(array.length / 2): (array.length / 2);
		if(array[x] > target) {
			return binarySearch(array.slice(0,x),target) != null ? binarySearch(array.slice(0,x),target) : null;
		} else if (array[x] < target) {
			return binarySearch(array.slice(x),target) != null ? x + binarySearch(array.slice(x),target) : null;
		} else if (array[x] == target) {
			return x;
		}
	} else {
		return array[0] == target ? 0 : null;
	}
  return null;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  var newArray = array.slice(0);
  function checker(array) {
    for(var i = 0 ; i < array.length ; i++) {
      if(array[i] > array[i + 1]) return false;
    }
    return true;
  }
  if(!checker(newArray)) {
    for(var i = 0 ; i < newArray.length ; i++) {
      if(newArray[i] > newArray[i + 1]) {
        var x = newArray[i]
        newArray.splice(i,1);
        newArray.splice(i+1,0,x);
      }
    }
    newArray = mergeSort(newArray);
  }
  return newArray;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if(typeof input == 'object') {
    if(Array.isArray(input)) {
      var newArray = [];
      for(var i = 0 ; i < input.length ; i++) {
        if(typeof input[i] != 'object') {
          newArray.push(input[i]);
        } else {
          newArray.push(clone(input[i]));
        }
      }
      return newArray;
    } else {
      var newObj = {};
      for(var key in input) {
        if(typeof input[key] != 'object') {
          newObj[key] = input[key];
        } else {
          newObj[key] = clone(input[key])
        }
      }
      return newObj;
    }
  }
};