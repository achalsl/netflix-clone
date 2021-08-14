import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './Watch.scss'

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" 
                    autoPlay
                    progress 
                    controls 
                    src="https://vod-progressive.akamaized.net/exp=1628987788~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F120%2F20%2F500603496%2F2278781595.mp4~hmac=2cff636559d1154a3eae92b1b896c010b10b90c2a23eaea3b9dd3448f7ee3344/vimeo-prod-skyfire-std-us/01/120/20/500603496/2278781595.mp4" />
        </div>
    )
}

export default Watch
