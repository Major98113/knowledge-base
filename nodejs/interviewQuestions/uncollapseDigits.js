function uncollapse( digits = '' ){
   const setOfDigits = new Set([ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]);
   const arrOfSeparateDigits = [ ...digits.matchAll([...setOfDigits].join("|")) ].map( ([ digit ]) => digit );
   const strOfDigitsWithSeparate = arrOfSeparateDigits.join(" ");

   console.log( strOfDigitsWithSeparate );

   return strOfDigitsWithSeparate;
}


uncollapse("three"); //"three"
uncollapse("eightsix"); //"eight six"
uncollapse("fivefourseven"); //"five four seven"
uncollapse("ninethreesixthree"); //"nine three six three"
uncollapse("foursixeighttwofive"); //"four six eight two five"