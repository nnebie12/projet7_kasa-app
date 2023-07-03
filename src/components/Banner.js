import styles from '../styles/Banner.css'


function Banner({ image, text }) {
	return (
	   <div
		  className={styles.banner}
		  style={{ backgroundImage: `url(${image})` }}
	   >
		  <h1>{text}</h1>
	   </div>
	);
 }
 
 export default Banner;




