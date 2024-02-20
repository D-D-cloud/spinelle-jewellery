import React from "react";

const Button = (props) => {

    const {
        background = '#FFE6D8', color = '#524E50', fontSize = '24', fontWeight = '500', onPress = () => { }, name } = props

    return (
        <button
            className="px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-700"
            onClick={onPress}>{name}</button>


    )
}

export default Button