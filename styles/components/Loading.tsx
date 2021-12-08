import { animated, useSpring } from '@react-spring/web'
import React from 'react'
import { LoadingCircle } from '../Animations'

export default function Loading() {
    return (
        <>
        <h1 className="loading-text">Loading...</h1>
        <animated.div style={useSpring(LoadingCircle)} className="loading-div">
            <div/>
        </animated.div>
        </>
    )
}
