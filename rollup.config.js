import { babel } from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only'
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';
import multi from '@rollup/plugin-multi-entry';
import path from 'path';
import fs from 'fs';

const cssPath = path.join(__dirname, 'libs/css/');

const config = [
  {
    input: [
      'src/functions/index.js',
      'src/icons/index.js',
      'src/responsive/index.js',
      'src/styles/index.js',
    ],
    output: [
      {
        file: 'libs/js/functions.esm.js',
        format: 'es'
      },
      {
        file: 'libs/js/icons.esm.js',
        format: 'es'
      },
      {
        file: 'libs/js/responsive.esm.js',
        format: 'es'
      },
      {
        file: 'libs/js/styles.esm.js',
        format: 'es'
      }
    ],
    plugins: [
      linaria(),
      multi(),
      css({
        output: function (styles, styleNodes) {
          fs.mkdirSync(cssPath);
          fs.writeFile(`${cssPath}get-pocket-styles.css`, styles, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
        },
      }),
      babel({ babelHelpers: 'bundled' }),
      commonjs(),
      image(),
      copy({
        targets: [
          { src: 'src/assets/', dest: 'libs/' },
        ]
      })
    ]
  },
];

export default config;