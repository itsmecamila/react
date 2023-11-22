import { people } from "../data";
import { getImageUrl } from "../utils";
import "../css/Pages.css";

export default function List(){
    const chemists = people.filter(person => person.profession == 'chemist');
    const listItems = chemists.map(person =>
        <li className="item2" key={person.id}>
            <img 
            src={getImageUrl(person)}
            alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        )
        return <ul>{listItems}</ul>;
}