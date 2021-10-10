'use strict';

var books = [{
  title: 'Full Stack JavaScript',
  author: 'Colin Ihrig and Adam Bretz',
  url: 'https://www.sitepoint.com/store/full-stack-javascript-development-mean/'
}, {
  title: 'JavaScript: Novice to Ninja',
  author: 'Darren Jones',
  url: 'https://www.sitepoint.com/store/leaern-javascript-novice-to-ninja/'
}, {
  title: 'Jump Start CSS',
  author: 'Louis Lazaris',
  url: 'https://www.sitepoint.com/store/jump-start-css/'
}];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = books[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _b = _step.value;

    console.log(_b.title + " by " + _b.author + ": " + _b.url);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var a = 1;
var b = 2;
var _ref = [b, a];
a = _ref[0];
b = _ref[1];

console.log(a);
console.log(b);