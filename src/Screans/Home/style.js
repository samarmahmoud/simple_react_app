import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',

    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
   
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
 

  }),
);