const books = [
  {
    title: 'Full Stack JavaScript',
    author: 'Colin Ihrig and Adam Bretz',
    url: 'https://www.sitepoint.com/store/full-stack-javascript-development-mean/'
  },
  {
    title: 'JavaScript: Novice to Ninja',
    author: 'Darren Jones',
    url: 'https://www.sitepoint.com/store/leaern-javascript-novice-to-ninja/'
  },
  {
    title: 'Jump Start CSS',
    author: 'Louis Lazaris',
    url: 'https://www.sitepoint.com/store/jump-start-css/'
  },
];
for (const b of books) {
  console.log(b.title + " by " + b.author + ": " + b.url);
}

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);