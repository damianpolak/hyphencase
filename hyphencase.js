/*
 * hyphencase.js
 * https://github.com/damianpolak/hyphencase
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

module.exports = hyphencase = (str) => {
   'use strict';

   let res = str.toLowerCase();
   return res = res.replace(/[._ ]/g, '-');
};

console.log(hyphencase('Co to jest cholera_jasna_Ciasna_I_DO_DIASKA  '))
