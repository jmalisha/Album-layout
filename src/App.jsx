import {
  AppBar,
  Toolbar,
  Grid,
  Stack,
  Input,
  Card,
  Typography,
  CssBaseline,
  Container,
  Button,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';

import { PhotoCamera } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Album Layout</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.toolbar}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom>
              Album layout
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely
            </Typography>
            <div className={classes.buttonArea}>
              <div>
                <Button variant="contained" className={classes.rightBtn}>
                  Main call to action
                </Button>
              </div>
              <div>
                <Button variant="outlined">Main call to action</Button>
              </div>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant=" h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className={classes.footerText}>
            <Typography variant="h5" align="center">
              Footer
            </Typography>
            <div className={classes.footer}><Typography align="center">Something here to give the footer a purpose!</Typography>
            <Typography align="center">Copyright © Your Website 2021.</Typography></div>
            
          </div>
        </Container>
        
      </main>
    </>
  );
}

export default App;
