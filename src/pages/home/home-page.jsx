import React from 'react';
import TextOne from '../../comps/text-one/text-one';
import TextTwo from '../../comps/text-two/text-two';
import Name from '../../comps/name/name';
import { connect } from 'react-redux';
import { array1, array1Mobile } from './data1.js';
import { array2, array2Mobile } from './data2.js';

const HomePage = ({ user }) => {
  const { count, w } = user;

  return (
    <div>
      {count === 0 && <TextOne array={w <= 411 ? array1Mobile : array1} />}
      {count === 1 && <TextTwo array={w <= 411 ? array2Mobile : array2} />}
      <Name />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(HomePage);
