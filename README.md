# hyphencase
> Convert a dot/underscore/space separated string to hyphen case: Foo bar → foo-bar

## Usage
```js
const hyphencase = require('hyphencase.js');

hyphencase('   asd   ______  qweeee    zxccccc--- QWERRTY   ASDF');
// returns 'asd-qweeee-zxccccc-qwerrty-asdf'

hyphencase('Lorem______ipsum___dolor___sit amet__consectetuer   ');
// returns 'lorem-ipsum-dolor-sit-amet-consectetuer'

hyphencase('Lorem ipsum dolor sit amet consectetuer');
// returns 'lorem-ipsum-dolor-sit-amet-consectetuer'

```

## License

MIT © Damian Polak
