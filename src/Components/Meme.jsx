import React, {useState, useEffect} from "react";


export default function Meme() {
    const [meme, setMemes] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState('')

    const randomNumber = array => Math.ceil(Math.random() * array.length) 

    useEffect(() => {
        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            let memesImages = data.data.memes
            setAllMemes(memesImages)
        }
        getMemes()

        return () => {
            //clean up
        }

    }, []) 
    

    function getMemeImage() {

       const imageUrl = allMemes.map(data => (
            data.url
        ))

        let url = imageUrl[randomNumber(imageUrl)]

        setMemes({
            topText: "",
            bottomText: "",
            randomImage: url
        })
    }

    function handleChange(event) {
        const {value, name} = event.target
        setMemes(prevMemes => {
            return {
                ...prevMemes,
                [name]: value 
            }
        })
        
    }

    return (
        <main> 
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    placeholder="Bottom Text"
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form-button">Get a new meme image  🖼</button>
            </div>
            <a href={meme.randomImage} target="_blank">
                <div className="meme">
                    <img className="meme--image" src={meme.randomImage} download />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            download
            </a>
        </main>
    )
}