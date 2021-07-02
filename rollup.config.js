import { babel } from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import linaria from '@linaria/rollup';
import css from 'rollup-plugin-css-only'
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';
import multi from '@rollup/plugin-multi-entry';

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
        file: 'libs/functions.esm.js',
        format: 'es'
      },
      {
        file: 'libs/icons.esm.js',
        format: 'es'
      },
      {
        file: 'libs/responsive.esm.js',
        format: 'es'
      },
      {
        file: 'libs/styles.esm.js',
        format: 'es'
      }
    ],
    plugins: [
      linaria({
        // include:['src/mod3.js'],
        // sourceMap: process.env.NODE_ENV !== 'production',
      }),
      multi(),
      css({
          output: 'get-pocket-styles.css'
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