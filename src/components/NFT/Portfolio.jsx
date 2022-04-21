import React, { useEffect, useState,useCallback } from 'react';
import '../../App.css';
import { useStyles } from '../../HeaderCardComponent';
// import Navigation from "./components/Navigation/NavMenu";
import Card from '@mui/material/Card';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Posts from "./components/Posts/Posts";
import NoSsr from '@mui/material/NoSsr';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
// import logo from './assests/images/Logo_NIKE.svg.png';
import ethSymbol from '../../assests/images/ETH.svg';
import FuturePoster from '../../assests/images/SolanaWorld.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from '@mui/material/Button';
import { ReactSVG } from 'react-svg'


import Scene from '../../components/scene/scene';
import { fontFamily, maxHeight } from '@mui/system';


const TEST_GIFS = [
	'https://media.giphy.com/media/URkLZvIVcOo4OckpIb/giphy.gif',
	// 'https://media.giphy.com/media/yvdes284dmNAJdXSRb/giphy.gif',
	// 'https://media.giphy.com/media/OlgPzBdKylJslDSa6N/giphy.gif',
	// 'https://media.giphy.com/media/VgBuMMySGDFZfqhwYi/giphy.gif',
]


const responsive = {
  wideMonitor: {
    breakpoint: { max: 3000, min: 1550 },
    items: 1,
    paritialVisibilityGutter: 0,
    slidesToSlide: 1,
  },
    desktop: {
      breakpoint: { max: 1550, min: 1224 },
      items: 1,
      paritialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1224, min: 600 },
      items: 1,
      paritialVisibilityGutter: 0,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0,
      slidesToSlide: 1
    }
  };

const NFT_Portfolio = () => {
  const MyScene = Scene();
    const gifList = TEST_GIFS
  const [expanded, setExpanded] = useState(false);


    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
      
      const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      // If we hit this, it means the program account hasn't been initialized.
        if (gifList === null) {
          return (
            <div className="connected-container">
           gifList === TEST_GIFS
           </div>
          )
        } 
        // Otherwise, we're good! Account exists. User can submit GIFs.

        return class extends React.Component {
          render() {
            return (
          <>
    <Carousel
      ssr
      partialVisbile
    //   deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
     className='nft-carousel'
    >
      {gifList.slice(0, 5).map(index => {
        return (
          
          <div className='gif-grid'>
              <div className="gif-item"  key={index}>
                <Card sx={{ maxWidth: 450, borderRadius:'0.8rem', background:'radial-gradient(circle at top, #ffffff , #eef0fb)', boxShadow: "none" }}>
      {/* <CardHeader
        avatar={
          <Avatar src={ ethSymbol } sizes="(max-width: 30px) 30px, 50vw"  aria-label="recipe">
           
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{variant:'subtitle2', fontSize:'12px', className:'nft_header', fontFamily:'Graphik-Regular'}}
        title="thespaces"
        subheaderTypographyProps={{ variant:'caption', fontSize:'11px',className:'nft_subheader', fontFamily:'Graphik-Regular'}}
        subheader="Created by Gary D. Robinson"
      /> */}

      <CardMedia style={{background:'radial-gradient(circle at top, #ffffff , #eef0fb)'}} >
        {/* <MyScene className='card_model'/> */}
        <img alt="pic" style={{borderRadius:'0.8rem', background: 'linear-gradient(225deg, #ffffff 0%, #f9f6f0 100%)'}} src={FuturePoster}></img>
        </CardMedia>

      <CardContent style={{background: 'radial-gradient(circle at center, #ffffff , #f9f6f0)'}}>
      {/* <Typography variant="subtitle" fontWeight="bold" fontSize="22px" className='nft_owner' component="div">
          The Cashflow Network
          </Typography> */}
          {/* <Typography variant="caption" className='nft_description' color="text.primary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography> */}
      
        <CardActions style={{ justifyContent:'center'}} disableSpacing>
        <Button size="large" variant="contained" style={{ fontFamily:'Graphik-Medium', borderRadius:'10rem'}} color="secondary" >Discover</Button>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions> */}
      </CardContent>
      
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
         
        </CardContent>
      </Collapse> */}
    </Card>
                
              </div>
              </div>
              
            )})}
            </Carousel>
            <br></br>
            <br></br>
            
            
            {/* <div style={{ height:'90px',width:'100%'}} /> */}
            </>
        )}}
     
    
 
}




  export default NFT_Portfolio;