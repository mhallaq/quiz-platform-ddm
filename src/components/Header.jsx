import React from 'react'

export default function Header(props) {
    const { bank } = props
    const balanceColor = bank>0 ? 'green' : 'red'
    return (
        <div className='header' style={{height: '6vh'}}>
            <h2 className='logo'>JEOPARDY! FAN EDITION</h2>
            <div style={{  height: '100%' }}>
                <h2 className='logo' style={{color: `${balanceColor}`}}>SCORE: ${bank}</h2>
            </div>

        </div>
    )
}
