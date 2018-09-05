# Identificador de Markdowns v.1.0.0
** Esta biblioteca se destina a identificação de markdowns, para uso em aplicações web. **
Na versão atual é capaz de fazer a identificação de markdowns, retorno em um array de objetos constituidos de chaves:valor contendo o texto e a url do markdown atraves da string passado como parametro. 

## Os metodos utilizados na biblioteca são:

#### ** getLinksFromMd(string); **

Exemplos de uso:

```
$node
> let arr = require('larissa-getlinksfrommd')
>arr.getLinksFromMd(('[labore](http://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com).'));
```

## Versão 1.0.0

- funcionalidades: Identificador de Markdowns;
- conversão que funciona para strings e retorna um array de objetos;

## instalação 

- Necessário ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm);
- proceda a instalação com `$npm install larissa-getlinksfrommd`;


## Roadmap oficial do projeto


#### versão 2.0.0 (sem previsão)
- README translated to english;
- Identificar também links comuns;

#### versão 1.0.0 (released)
- funcionalidades: Identificador de Markdowns;
- conversão que funciona para strings e retorna um array de objetos;