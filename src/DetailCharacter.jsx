import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { characterData } from './data'
export const DetailCharacter = () => {
    const params = useParams();
    let id = params.characterID;
    const info = characterData.filter(character => character.id.toString() === id);

  return (
    <div>
        {info.map(character => (
            <div className='detail--character' key={character.id}>
                <div className="detail--character--container">
                    <div className='detail--character--photo'>
                        <img src={character.photo}/>
                    </div>
                    <div className='detail--character--detail'>
                        <h1 className='detail--character--name'>{character.name}</h1>
                        <p className='detail--character--decription'>{character.detail}</p>
                    </div>
                </div>
                <Link className='detail--character--button' to="/"> Come Back list character</Link>
            </div>
        ))}
    </div>
  )
}
