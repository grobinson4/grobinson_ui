import React, { useEffect, useState,useCallback } from 'react';
import './App.css';
import {FeatureCard, Content} from './HeaderCardComponent';
import Navigation from "./components/Navigation/NavMenu";
import Card from '@mui/material/Card';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Posts from "./components/Posts/Posts";
import NoSsr from '@mui/material/NoSsr';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { borderRadius, styled } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import logo from './assests/images/grobins.svg';
import BottomNavigation  from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import GitHubCalendar from 'react-github-calendar';
import { jsx, css, Global, ClassNames } from '@emotion/react'
// import Scene from './components/scene/scene';
import Toolbar from '@mui/material/Toolbar';
import NFTPortfolio from './components/NFT/Portfolio';
import { shadows } from '@mui/system';
import { BorderStyle } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Badge from '@mui/material/Badge';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const TEST_GIFS = [
  
	'https://media.giphy.com/media/URkLZvIVcOo4OckpIb/giphy.gif',
	'https://media.giphy.com/media/yvdes284dmNAJdXSRb/giphy.gif',
	'https://media.giphy.com/media/OlgPzBdKylJslDSa6N/giphy.gif',
	'https://media.giphy.com/media/VgBuMMySGDFZfqhwYi/giphy.gif',
]

function App() {

  const MyNav = Navigation();
  const NFTPortfolioDisplay = NFTPortfolio();
  const [value, setValue] = React.useState(0);
  const Card = styled('card')(
    {
      borderRadius: '0.5rem',
      boxShadow: 'none',
      position: 'relative',
      border:'none',
      outline:'none',
      minWidth: '100%',
      minHeight: 400,
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '0%',
        bottom: 0,
        zIndex: 1,
        background: 'linear-gradient(to top, #000000, rgba(0,0,0,0))',
        boxShadow:'none',
        border:'none'
    },
    });

    

    const Box = styled('box')(
      {
        position: 'absolute',
      zIndex: 2,
      bottom: 0,
      width: '100%',
      boxShadow:'none',
      border:'none'
      },
      );

  const HeaderCard = React.memo(function GalaxyCard() {
    // const Base = base();
    // const Content = content();
    return (
      <>
        <NoSsr>
        </NoSsr>
      
        <Card style={{minHeight:'850px', borderImage:'linear-gradient(270deg, #ffffff 0%, #eef0fb 100%)', borderWidth:'1px', borderStyle:'solid'}}>
          <CardMedia
            style={{ position: 'top', width:'100%', boxShadow: 'outset 0px 0px 40px 40px #000000', background: 'radial-gradient(circle at top, #ffffff , #fff7f5)', height:'100%' }}
            // image={
            //   'https://64.media.tumblr.com/3b0a7f8c6070527a28449efec02ecde8/5c80101c31047375-22/s2048x3072/37dff7252101baf441ac5b146c1a37b7cbdcdcb5.jpg'
            // }
          />
          <Box sx={{ my: 35}}  style={{width:'100%', display:'flex', boxShadow: "none"}} >
      
      <Card style={{background:'none', borderImage:'radial-gradient(circle at top, #ffffff , #eef0fb)', boxShadow: 'outset 00px 00px 40px 40px #000000', display:'flex', justifyContent:'space-between',  width:'100%'}}>
      <CardContent style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
      
          <form  style={{width:'100%'}}>
          {/* <img alt="pic" style={{borderRadius:'0.8rem',  background: 'linear-gradient(225deg, #ffffff 0%, #f9f6f0 100%)'}} src={logo}></img> */}
          {/* <br /> */}
            {/* <br /> */}
          <header className="sub-text" style={{fontFamily:'Graphik-medium', justifyContent:'center', alignItems:'center'}}>
          <img alt="pic" style={{borderRadius:'0.8rem', height:'120px', width:'120px', justifyContent:'center', alignItems:'center', textAlign:'center', margin:'0'}} src={logo}></img>
            </header>
            <subtitle className="sub-head" style={{color:'black', fontFamily:'Graphik-Black', fontSize:'30px', justifyContent:'center', alignItems:'center'}}>
         STAY TUNED
            </subtitle> 
            <br/>
            <br/>
            <TextField label="Email" sx={{ width: '35ch' }} InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Divider sx={{ height: 37, m: 0.5 }} color="#000000" orientation="vertical" />
              <IconButton size="small" color="inherit">
             
                <SendIcon  />
      
            </IconButton>
            </InputAdornment>
          ),
        }} multiline="false" size="small" color="secondary" focused />
           
            <br/>
            <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge color="error">
                <TwitterIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge  color="error">
                <InstagramIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              // edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Badge  color="error">
              <LinkedInIcon />
              </Badge>
            </IconButton>
            
          </div>
          <p style={{ fontFamily:'Graphik-Medium'}} >info@grobinson.xyz</p>
            <br />
           
            {/* <GitHubCalendar username="grobinson4" style={{color:'white',  padding:20}}/> */}
         
            
            
            {/* <Button size="large" className='nft_button' color="secondary" style={{ fontFamily:'Graphik-Medium'}} variant="contained">
          Coming soon
            </Button> */}
           
            </form>
            {/* <button className="cta-button submit-gif-button" onClick={createGifAccount}>
              EXPLORE TOKENS
            </button> */}
            </CardContent>
            </Card>
          </Box>
        </Card>
        {/* <div style={{display:'block', width:'100vh', height:'30px', border: 'solid 1.5em rgba(#000, .03)'}} /> */}
      </>
    );
  });

  
  const renderChainLinks = () => {
  
        return(
          <div className="connected-container" style={{boxShadow: 'outset 0px 0px 40px 40px #000000', borderImage:'linear-gradient(270deg, #ffffff 0%, #eef0fb 100%)', borderWidth:'1px', borderStyle:'solid'}} >
            
            <div className='header-grid' >
            <HeaderCard></HeaderCard>
        {/* <h2 className='section-header' style={{}}>SMART CONTRACTS</h2> */}
        </div>
           {/* <br></br> */}
          
            {/* <NFTPortfolioDisplay/> */}
          </div>
        )
  }

  return (
    <>
   
    <div className="App">
      
      <MyNav/>
      
      {/* <div style={{ paddingTop: '40px'}} /> */}
        <div className="authed-container">
        
          <div className='header-container'>
           {renderChainLinks()}
        </div>
        
        
        {/* <div className="footer-container">
        <Box sx={{ pb: 7 }} >
      <CssBaseline />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow:10 }} elevation={3}>
        <BottomNavigation>
    <Toolbar>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
  </Toolbar>
</BottomNavigation>

</Paper>
</Box>

        </div> */}
       
    </div>
    
       </div>
      
       
      
</>
  );
}

export default App;
