import React from 'react';
import freeCodeCampLogo from '../imagenes/FreeCodeCamp_logo.png';
import '../stylesheets/Logo.css';

const Logo = () => (
    <div className='freecodecamp-logo-contenedor'>
			<img 
				className='freecodecamp-logo'
    		src={freeCodeCampLogo} 
			/>
    </div>
)

export default Logo;