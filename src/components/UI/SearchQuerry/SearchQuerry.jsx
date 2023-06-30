import React, {memo, useState} from 'react'
import MyInput from '../input/MyInput'
import { useNavigate } from 'react-router-dom';


const SearchQuerry = memo(() => {
    const [searchQuerry, setSearchQuerry] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        if (searchQuerry){
            navigate(`/movie/${searchQuerry}`)
        }
    }

  return (
    <div className='search-querry'>
        <p>Find a movie!</p>
        <div className='search-querry-content'>
            <MyInput
                value={searchQuerry}
                onChange={e => setSearchQuerry(e.target.value)}
                placeholder='Enter movie name'
            />
            <button className='search-btn' onClick={handleClick}>Find</button>
        </div>
    </div>
  )
})


export default SearchQuerry