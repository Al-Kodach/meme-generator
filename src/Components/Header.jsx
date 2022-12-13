import React from "react"
import TrollFace from "../assets/Trollface"

export default function Header() {

    return (
        <header>
            <TrollFace />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}