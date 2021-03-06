import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Pets from '@material-ui/icons/Pets';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InvertColors from '@material-ui/icons/InvertColors';

import styles from './styles';

const Header = ({ onToggleTheme }) => (
  <AppBar position="sticky" className="animated bounceInLeft">
    <Toolbar>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="headline" color="inherit" style={styles.title}>
            <Grid container spacing={16} alignItems="center">
              <Grid item>
                <Pets />
              </Grid>
              <Grid item>
                Adoptable Pets
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="fab" onClick={onToggleTheme} color="primary" mini>
            <InvertColors />
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
};

export default Header;
