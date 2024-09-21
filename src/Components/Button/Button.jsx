import React from 'react'

const Button = ({
    onClick,
    customStyle,
    text,
}) => {
    return (
        <>
            <button
                onClick={onClick}
                className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 ${customStyle}`}>
                {text}
            </button>
        </>
    )
}

export default Button