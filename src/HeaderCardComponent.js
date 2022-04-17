import { css, ClassNames } from '@emotion/react'

export const FeatureCard = css`
    card: {
      borderRadius: '0rem';
      boxShadow: 'none';
      position: 'relative';
      border:'none';
      outline:'none';
      minWidth: '100%';
      minHeight: 400;
      '&:after': {
        content: '""';
        display: 'block';
        position: 'absolute';
        width: 100%';
        height: '0%';
        bottom: 0;
        zIndex: 1;
        background: 'linear-gradient(to top, #000000, rgba(0,0,0,0))';
        boxShadow:'none';
        border:'none'
      }`
    

   export const Content= css`
      position: 'absolute';
      zIndex: 2;
      bottom: 0;
      width: 100%;
      boxShadow:'none;
        border:'none'
    `;
  
  