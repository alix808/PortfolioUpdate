import React from 'react';
import { useSpring, useTransform, useAnimation, motion } from 'framer-motion';
import { Flex, Container } from './background.styles';
import Mask from '../mask/mask';
/* Redux */
import { connect } from 'react-redux';

const Background = ({ user }) => {
  const { backgroundAnimation } = user;
  const x = useSpring(100, { damping: 0, mass: 500 });
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
    'linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)',
    'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)'
  ]);

  const controls = useAnimation();

  async function sequence1() {
    await controls.start({
      height: '280px',
      transition: { duration: 2 }
    });
    console.log('sequence1 complete');
  }

  if (backgroundAnimation) {
    sequence1();
  }

  return (
    <Flex>
      <Container style={{ background }} animate={controls}>
        <motion.div
          style={{ x }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
        ></motion.div>
        <Mask />
      </Container>
    </Flex>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Background);
