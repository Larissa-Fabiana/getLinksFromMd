const chai = require('chai');
const index = require('../index');
const getLinksFromMd = index.getLinksFromMd;
const expect = chai.expect;

describe('getLinksFromMd()', () =>{
  describe('True', () =>{
    it('Should return [ { href: \'http://foo.com\',  text: \'foo-2\' } ] to \'[foo-2](http://foo.com)\'', () =>{
      expect(getLinksFromMd('[foo-2](http://foo.com)')).to.deep.equal([ { href: 'http://foo.com', text: 'foo-2' } ]);
    });
    it('Should return [ { href: \'http://foo.com\',  text: \'foo foo\' } ] to \'[foo foo](http://foo.com)\'', () =>{
      expect(getLinksFromMd('[foo foo](http://foo.com)')).to.deep.equal([ { href: 'http://foo.com', text: 'foo foo' } ]);
    });
    it('Should return [ { href: \'http://123.com\',  text: \'123\' } ] to \'[123](http://foo.com)\'', () =>{
      expect(getLinksFromMd('[123](http://123.com)')).to.deep.equal([ { href: 'http://123.com', text: '123' } ]);
    });
    it('Should return \' [ { href: \'http://en.wiktionary.org/wiki/labore\',  text: \'labore\' }, { href: \'https://en.wiktionary.org/wiki/dolore\',  text: \'dolore\' }, { href: \'http://foo.com\',  text: \'foo\' } ]', () =>{
      expect(getLinksFromMd('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](http://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com),Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')).to.deep.equal( [ { href: 'http://en.wiktionary.org/wiki/labore', text: 'labore' }, { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' }, { href: 'http://foo.com', text: 'foo' } ]);
    });
  });
  describe('False', () =>{
    it('Should return [] to \'[](http://foo.com)\'', () =>{
      expect(getLinksFromMd('[](http://foo.com)')).to.deep.equal([]);
    });
  });
})