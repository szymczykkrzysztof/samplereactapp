import {Component} from "react";
import User from "../models/user.ts";
import './card-list.styles.css'
import Card from "../card/card.component.tsx";

class CardList extends Component {

    render() {
        const {monsters: monsters} = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monster: User) => {
                    return (
                        <Card key={monster.id} monster={monster}/>
                    )
                })}
            </div>
        )
    }
}

export default CardList;