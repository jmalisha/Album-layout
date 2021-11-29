import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: 'lightGray',
    padding: '20px 0px 30px',
  },
  icon: {
    marginRight: '20px',
  },
  buttonArea: {
    marginTop: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBtn: {
    marginRight: 10,
  },
  cardGrid: {
    padding: '60px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footerText: {
    marginTop: 80,
  },
  footer: {
    color: 'gray',
    marginTop: 20,
  },
}));

export default useStyles;
