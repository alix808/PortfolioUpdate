import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import TextItemThree from './text-item-three';
/* Styled Componets */
import { Flex } from './text-three.styles';
/* Redux */
import { connect } from 'react-redux';
import { increment, background } from '../../actions/user.actions';

const variants = {
  one: {
    transition: { staggerChildren: 0.5, staggerDirection: -1 }
  },
  two: {
    transition: { staggerChildren: 0.5, delayChildren: 0 }
  },
  three: {},
  four: {}
};

const TextThree = ({ array, increment, background }) => {
  const controls = useAnimation();

  const sequence = async () => {
    await controls.start('two');
    background();
    await controls.start('three');
    await controls.start('four');
  };

  useEffect(() => {
    sequence();
    // eslint-disable-next-line
  }, []);

  return (
    <Flex variants={variants} initial={'one'} animate={controls}>
      {array.map(i => (
        <TextItemThree
          key={i.id}
          path={i.path}
          width={i.width}
          height={i.height}
          style={i.style}
          variants={i.variants}
        />
      ))}
    </Flex>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { increment, background })(TextThree);
