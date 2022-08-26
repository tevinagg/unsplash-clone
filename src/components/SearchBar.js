import React, {useState} from "react";


function SearchBar(props) {

    const [text, setText] = useState('')

    const onInputChange = (e) =>{
        setText(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        props.searchTerm(text)
    }


    return (
        <div className= "ui segment">
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label htmlFor="">Image Search</label>
                    <input type="text" onChange={onInputChange} value={text} />
                </div>
            </form>

        </div>
    )
}

export default SearchBar