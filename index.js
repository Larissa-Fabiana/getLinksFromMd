module.exports.getLinksFromMd = getLinksFromMd;

function getLinksFromMd(mensage){
  if(typeof mensage === 'number'){
    throw new Error('Insira apenas strings');
  }else if( mensage === ''){
    throw new Error('Insira pelo menos um markdown');
  }else{
    return markdownsSelection(mensage);
  }
}

function markdownsSelection(str){
  const regex = /(\[\w+\W*\s*\w*\])\((http(s)*:\/\/)*\w+(\.*\w\/*){1,}\)/g;
  const array = str.match(regex);
  return transformMarkdowInArrayOfObjects(array);
}

function transformMarkdowInArrayOfObjects(array){
  let arrayOfObjects = [];
  for(let a in array){
    let obj = {};
    const regex = /\[(.*)\]\((.*)\)/;
    let arrayTextAndHref = (array[a]).match(regex);
    obj['href'] = arrayTextAndHref[2];
    obj['text'] = arrayTextAndHref[1];
    arrayOfObjects.push(obj);
  }
  return arrayOfObjects;
}