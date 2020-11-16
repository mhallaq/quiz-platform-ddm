import React from 'react'

export default function Header(props) {
    const {bank, setBank} = props
    return (
        <div className='header'>
            <h1 className='logo'>JEOPARDY! FAN EDITION</h1>
            <div className='logo'>
                ${bank}
            </div>
        </div>
    )
}
