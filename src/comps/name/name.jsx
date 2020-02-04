import React from 'react';
import TextThree from '../text-three/text-three';
import Background from '../background/background';
import { connect } from 'react-redux';
import { array3, array3Mobile } from '../../pages/home/data3';

const Comp1 = () => (
  <div>
    <TextThree array={array3Mobile} />
    <Background />
  </div>
);

const Comp2 = () => (
  <div>
    <TextThree array={array3} />
    <Background />
  </div>
);

const Name = ({ user }) => {
  const { count, w } = user;

  // if (count !== 2) {
  //   return null;
  // }

  return <div>{w <= 411 ? <Comp1 /> : <Comp2 />}</div>;
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Name);
