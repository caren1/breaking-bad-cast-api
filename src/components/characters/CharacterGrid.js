import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../UI/Spinner'

const CharacterGrid = ( { isProcessing, items } ) => {
    return isProcessing ? (<Spinner />) : (<section className="cards">
        {items.map(item => (<CharacterItem key={item.char_id} item={item}/>))}
    </section>)
}

export default CharacterGrid