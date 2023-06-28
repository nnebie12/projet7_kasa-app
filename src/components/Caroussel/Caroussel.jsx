import './Caroussel/Caroussel.scss';
import data from './data/data.json';
import Card from './Card';


export default function Caroussel(){
    return(
        //Affichage des Card dans la Home gallery avec les informations de data.json
        <main>
            {data.map(data =>{
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

