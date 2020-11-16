import React from 'react'

export default function Header(props) {
    const {bank } = props
    return (
        <div className='header'>
            <h1 className='logo'>JEOPARDY! FAN EDITION</h1>
            <div className='logo' style={{color:'white'}}>
                ${bank}
            </div>
        </div>
    )
}
