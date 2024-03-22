import React from 'react'
import s from './index.module.css'

export default function Tab({ 
    item, 
    tab, 
    setTab, 
    active, 
    vertical,
    tabStyle,
    activeTabStyle
}) {

    const userActiveStyle = Object.keys(activeTabStyle).length ? activeTabStyle : {
        borderBottom: '0px',
        background: '#ffe926',
        color: '#000'
    }
    const activeStyle = active && userActiveStyle

    const verticalStyle = vertical ? {
        borderRadius: '0px'
    } : {}

    return (
        <div 
            className={s.tab} 
            onClick={()=> setTab(item.value)}
            style={{...tabStyle, ...activeStyle, ...verticalStyle}}
        >
                {
                    item.label
                }
        </div>
    )
}
