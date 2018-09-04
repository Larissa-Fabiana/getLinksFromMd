module.exports.getLinksFromMd = getLinksFromMd;

function getLinksFromMd(str){
  let markdowns = markdownsSelection(str);
  let finalArray = transformMarkdowInArrayOfObjects(markdowns);
  return finalArray;
}
function markdownsSelection(mensage){
  let regex = /(\[\w+\W*\s*\w*\])\((http(s)*:\/\/)*\w+(\.*\w\/*){1,}\)/g;
  let array = mensage.match(regex);
  return array;
}
function transformMarkdowInArrayOfObjects(array){
  let arrayOfObjects = [];
  for(let a in array){
    let obj = {};
    let regexText = (array[a]).match(/(\[.*\])*/g);
    let text = (regexText[0]).replace(/([\[\]])*/g, '');
    let regexHref = (array[a]).match(/(\(.*\))/g);
    let href = (regexHref[0]).replace(/([\(\)])*/g, '');
    obj['href'] = href;
    obj['text'] = text;	
    arrayOfObjects.push(obj);
  }
  return arrayOfObjects;
}


// http://www.chaijs.com/api/bdd/#method_throw