import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import "../styles/Footer.css"
function Footer() {
  return (
      <div className='footer'>
          <div className='socialMedia'>
              <InstagramIcon />
              <PinterestIcon />
              <FacebookIcon />
            <LinkedInIcon/>

            

          </div>
          <p>&copy; 2022 Swedishfoodtruck.se</p>
      </div>
      
      
  )
}

export default Footer