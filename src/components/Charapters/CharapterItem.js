import React from 'react';

import './CharapterItem.css'

const CharacterItem = () => {
    return (
        <section className="charapter-item">
            <div class="charapter-photo">
                <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"></img>
            </div>
            <div className="charapter-info">
                <p><b>Name: </b> Morty Smith</p>
                <p><b>Species: </b> Human</p>
                <p><b>Gender: </b> Male</p>
                <p><b>Episode: </b> 50</p>
            </div>
        </section>
    )
}

export default CharacterItem;