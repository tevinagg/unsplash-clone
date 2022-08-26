import React, {useState} from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";


function App() {

   const [images, setImages] = useState([])

    const searchSubmitted = async (text) =>{
       const response = await unsplash.get('/search/photos', {
            params: { query: text },
        });
        setImages(response.data.results)
    }
    return (
        <div className='ui container' style={{marginTop: "10px"}}>
            <SearchBar searchTerm = {searchSubmitted}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App