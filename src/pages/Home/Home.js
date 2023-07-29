import Banner from "../../components/Banner";
import "../../styles/Card.css";
import logementsData from '../../data/logements.json'
import BannerHeader from '../../assets/BannerHeader.png'
import Card from '../../components/Card'



export default function Home() {
	
	return (
		<div>
         <Banner image={BannerHeader} text="Chez vous, partout et ailleurs" />
         <div className="cardContainer">
            {logementsData.map((logements) => (
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
 
 
 
