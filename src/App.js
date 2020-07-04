import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/UI/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/UI/Search'
import axios from 'axios'

const App = () => {

  const [ items, setItems ] = useState([])
  const [ isProcessing, setIsProcessing ] = useState(true)
  // const [ query, setQuery ] = useState('')
  const [ showAll, setShowAll ] = useState('')

  const handleFilterChange = (event) => {
    setShowAll(event.target.value);
  }

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data);
      setItems(result.data)
      setIsProcessing(false)
    }
    fetchItems()
  }, [])

  let itemsToShow = showAll ? items.filter(item => item.name.toLowerCase().includes(showAll.toLowerCase())) : items


  return <div>
    <Header />
    <Search onChange={handleFilterChange} value={showAll}/>
    <CharacterGrid isProcessing={isProcessing} items={itemsToShow}/>
  </div>
}

export default App;
