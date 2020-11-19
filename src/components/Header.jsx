import React from 'react'

export default function Header(props) {
    const { bank } = props
    const balanceColor = bank > 0 ? 'green' : '#ff0505'
    return (
        <div className='header'>
            <h2 className='logo'>JEOPARDY! FAN EDITION</h2>
            <h2 className='logo' style={{ paddingRight: '10px' }}>SCORE: <span style={{ color: `${balanceColor}`}}>${bank}</span></h2>

        </div>
    )
}
