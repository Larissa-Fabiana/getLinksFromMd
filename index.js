module.export = getLinksFromMd;

function getLinksFromMd(str){
  let markdowns = markdownsSelection(str);
  let obj = transformMarkdowInObject(markdowns);
}
function markdownsSelection(mensage){
  let regex = /(\[\w*\])\((http(s)*:\/\/)*\w+(\.*\w\/*){1,}\)/g;
  let array = mensage.match(regex);
  return array;
}
function transformMarkdowInObject(arr){
  let obj = {};
  let arrayOfObject = [];
  for(a in arr){
    let regexTextAndHref = (array[a]).match(/(http(s)*:\/\/)*\w+(\.*\w\/*){1,}/g);
    obj['href'] = regexTextAndHref[0];
    obj['text'] = regexTextAndHref[1];	
    arrayOfObject.push(obj);
  }
  return obj;
}

// ainda errado
// var array3 = [];
// for(a in array){
//   console.log(array[a]);
//   let regexTextAndHref = (array[a]).match(/(http(s)*:\/\/)*\w+(\.*\w\/*){1,}/g);	
//   obj['href'] = regexTextAndHref[0];
//   obj['text'] = regexTextAndHref[1];	
//   array3.push(obj);
//   console.log(array3);
// }