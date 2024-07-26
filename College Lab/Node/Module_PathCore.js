const path=require('path')

console.log(path.normalize('a/b/../c/d/..'))
console.log(path.join('/b/c/d','rashi','abc'))
console.log(path.resolve('rashi','abc'))
console.log(path.relative('/b/c/d','/Folder/rashi'))
console.log(path.dirname('/b/d'))
console.log(path.basename('/b/c/Rashi.txt'))
console.log(path.extname('/b/c/Rashi.txt'))
// a
//  b
//  c
//   d