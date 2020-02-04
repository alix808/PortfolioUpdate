import * as React from 'react';
import { motion } from 'framer-motion';
/* Styled Componets */
import { Svg } from './text-item-one.styles';

const TextItemOne = ({ path, width, height, style, variants }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0, 0, ${width}, ${height}`}
      width={width}
      height={height}
      style={style}
    >
      <motion.path
        d={path}
        variants={variants}
        transition={{
          default: { duration: 0.5, ease: 'linear' }
        }}
        stroke='#fff'
        strokeWidth='2'
        strokeLinecap='round'
        fill='none'
      />
    </Svg>
  );
};

export default TextItemOne;
