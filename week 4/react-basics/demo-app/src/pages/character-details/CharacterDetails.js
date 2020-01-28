import React from 'react';

class CharacterDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <div className={`card`}>
                    <img src={this.props.character.imageUrl} className={`card-img-top`}/>
                    <div className={`card-body`}>
                        <h2 className={`card-title`}>{this.props.character.name}</h2>
                        <p className={`card-text`}>{this.props.character.height} cm</p>                  
                        <p className={`card-text`}>{this.props.character.mass} kg</p>
                        <p className={`card-text`}>{this.props.character.hair_color} hair</p>
                        <p className={`card-text`}>{this.props.character.skin_color} skin</p>
                        <p className={`card-text`}>{this.props.character.gender}</p>
                    </div>
                    <button className={`btn btn-primary`}>Click me!</button>
                </div>
            </div>
        )
    }
}
export default CharacterDetailsComponent;