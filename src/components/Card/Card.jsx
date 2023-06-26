import './components/Card/Card.scss'
import { Link } from 'react-router-dom';

export default function Card({id, title, cover}) {
	return (
		<Link>
           <img src="" alt="" />
           <h3>{title}</h3>
        </Link>
	);
}
