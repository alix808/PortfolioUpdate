import * as React from 'react';
import { motion } from 'framer-motion';
/* Styled Components */
import { Button } from './toggle.styles';
/* Redux */
import { connect } from 'react-redux';
import { setMenu } from '../../actions/user.actions';

const Path = props => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='rgba(255, 255, 255, 0.2)'
    strokeLinecap='round'
    {...props}
  />
);

const Toggle = ({ user, setMenu }) => {
  const { menu, backgroundComplete } = user;

  if (!backgroundComplete) {
    return null;
  }

  return (
    <motion.div initial={false} animate={menu ? 'open' : 'closed'}>
      <Button onClick={() => setMenu()}>
        <svg width='23' height='23' viewBox='0 0 23 23'>
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
            d='M 2 9.423 L 20 9.423'
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </svg>
      </Button>
    </motion.div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { setMenu })(Toggle);
