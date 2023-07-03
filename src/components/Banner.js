import '../styles/Banner.css'
import '../assets/BannerHeader.png'



export default function Banner({image, text}) {
	return (
		<div className="bannière">
		<img className="banner__img" src={image} alt="Bannière" />
		<div className="banner__sombre"></div>
		<p className="banner__text">{text}</p>
	  </div>
	);
 }
 
 
