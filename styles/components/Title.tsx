import React from 'react'
import Image from 'next/image'
import { animated, useSpring } from 'react-spring'
import { TitleHome } from '../Animations'

export default function Title() {
    return (
        <animated.div style={useSpring(TitleHome)} className="title">
            <Image src="/YouTube_Logo_2017.svg" width="100px" height="100px"/>
            <h1>Youtube Downloader</h1>
        </animated.div>
    )
}
