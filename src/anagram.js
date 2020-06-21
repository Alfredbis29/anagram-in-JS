var isAnagram = (str1, str2) => {
  var result = true;
//   debugger;

  // ignore capitalization, punctuation, spaces
  var letterCheck = (char) => {
    return char.toLowerCase() !== char.toUpperCase();
  }

  // refactor into a function
  var cleanArray = (string) => {
    return string.split('').filter(letterCheck).map(letter => letter.toLowerCase()).sort();
  }

  // clean arrays
  // var str1Arr = str1.split('').filter(letterCheck).map(letter => letter.toLowerCase()).sort();
  // var str2Arr = str2.split('').filter(letterCheck).map(letter => letter.toLowerCase()).sort();
  var str1Arr = cleanArray(str1);
  var str2Arr = cleanArray(str2);

  if ( str1Arr.length !== str2Arr.length ) { return false; }

  // object counters
  var str1ObjCounter = {};
  var str2ObjCounter = {};

  // es6 versions
  str1Arr.forEach( (letter) => {
    if ( str1ObjCounter[letter] >= 0 ) {
      str1ObjCounter[letter]++;
    } else {
      str1ObjCounter[letter] = 0;
    }
  })

  str2Arr.forEach( (letter) => {
    if ( str2ObjCounter[letter] >= 0 ) {
      str2ObjCounter[letter]++;
    } else {
      str2ObjCounter[letter] = 0;
    }
  })

  // str1Arr.forEach(function(letter) {
  //   if ( str1ObjCounter[letter] ) {
  //     str1ObjCounter[letter]++;
  //   } else {
  //     str1ObjCounter[letter] = 0;
  //   }
  // })

  // str2Arr.forEach(function(letter) {
  //   if ( str2ObjCounter[letter] ) {
  //     str2ObjCounter[letter]++;
  //   } else {
  //     str2ObjCounter[letter] = 0;
  //   }
  // })

  for ( var key in str1ObjCounter ) {
    if ( str1ObjCounter[key] !== str2ObjCounter[key] ) {
      result = false;
      return result;
    }
  }

  return result;
}