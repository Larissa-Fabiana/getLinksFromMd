module.exports.getLinksFromMd = getLinksFromMd;

function getLinksFromMd(str){
  let correctString = validateString(str);
  let markdowns = markdownsSelection(correctString);
  let finalArray = transformMarkdowInArrayOfObjects(markdowns);
  return finalArray;
}
function validateString(mensage){
  if(typeof mensage === 'number'){
    throw new Error('Insira apenas strings');
  }else if( mensage === ''){
    throw new Error('Insira pelo menos um markdown');
  }else{
    return mensage;
  }
}
function markdownsSelection(str){
  let regex = /(\[\w+\W*\s*\w*\])\((http(s)*:\/\/)*\w+(\.*\w\/*){1,}\)/g;
  let array = str.match(regex);
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