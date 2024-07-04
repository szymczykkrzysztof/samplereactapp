import {Component} from "react";
import User from "../models/user.ts";

class CardList extends Component {

    render() {
        const {monsters: monsters} = this.props;
        return (
            <div>
                {monsters.map((monster: User) => <h1 key={monster.id}>{monster.name}</h1>)}
            </div>
        )
    }
}

export default CardList;