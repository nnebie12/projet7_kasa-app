
import logements from '../data/logements.json';
import Card from './Card.js';


export default function Caroussel(){
    return(
        //Affichage des Card dans la Home gallery avec les informations de data.json
        <main>
            {logements.map(data =>{
                return(
                    <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                    />
                )
            })

            }
        </main>
    )
}

