import React from 'react'
import WagerBar from './WagerBar'

export default function Header(props) {
    const { bank } = props
    const balanceColor = bank>0 ? 'green' : 'red'
    return (
        <div className='header' style={{height: '6vh'}}>
            <h1 className='logo'>JEOPARDY! FAN EDITION</h1>
            <div style={{  height: '100%' }}>
                <h1 className='logo' style={{color: `${balanceColor}`}}>SCORE: ${bank}</h1>
            </div>
            {/* <WagerBar /> */}

        </div>
    )
}
