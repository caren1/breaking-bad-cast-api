import React from 'react'

const Search = ({ onChange, value}) => {

    // const [text, setText] = useState('')

    // const onChange = (q) => {
    //     setText(q)
    //     getQuery(q)
    // }

    return (
        <section className='search'>
            <input type='text' className='form-control' placeholder='Search characters..' value={value} autoFocus onChange={onChange}/>
        </section>
    )
}

export default Search
