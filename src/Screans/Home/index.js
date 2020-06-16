import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useStyles} from './style'
import Header from '../../Components/Header'
import Drawer from '../../Components/Drawer'
import { style } from '../../style'

export default function Home(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };
 
  return (
    <div className={classes.root}>
      <CssBaseline />
        <Header handleDrawerToggle={handleDrawerToggle}/>
        <Drawer mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}  />
       
      <main cclassName={classes.content}>
      <div className={classes.toolbar} />
      <div>
      <Tabs value={value} onChange={handleChange} >
          <Tab label="English"  />
          <Tab label="interview"  />
      </Tabs>
      </div>
     
     
      </main>
    </div>
  )
}