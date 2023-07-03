import Banner from "../../components/Banner";
import Card from "../../components/Card";
import styles from "../../styles/Home.css"
import BannerHeader from "../../assets/BannerHeader.png"
import logements from '../../data/logements.json'




function Home() {
	return (
	   <div>
		  <Banner image={BannerHeader} text="Chez vous, partout et ailleurs" />
		  <div className={styles.cardContainer}>
			 {logements.map((logements) => (
				<Card
				   key={logements.id}
				   id={logements.id}
				   cover={logements.cover}
				   title={logements.title}
				/>
			 ))}
		  </div>
	   </div>
	);
 }
 
 export default Home;
 
