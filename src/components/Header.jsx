import React from 'react'

export default function Header(props) {
    const {bank} = props
    return (
        <div className='header' style={{height: '6vh'}}>
            <h1 className='logo'>JEOPARDY! FAN EDITION</h1>
            <div style={{  height: '100%' }}>
                <h1 className='logo'>SCORE: ${bank}</h1>
            </div>
        </div>
    )
}
