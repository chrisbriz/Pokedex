import { useHistory } from "react-router";
import RoutingPath from '../../routes/RoutingPath';

export const NavigationDesktop = () => {
    const history = useHistory();

    return(
        <nav className="navbar--desktop">
            <ul className="navbar__list--desktop">
                <li>
                    <button onClick={() => history.push(RoutingPath.home)}>Home</button>
                </li>
                <li>
                    <button onClick={() => history.push(RoutingPath.pokedex)}>Pokedex</button>
                </li>
            </ul>
        </nav>
    )
}