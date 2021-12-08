import { animated, useSpring } from '@react-spring/web'
import axios from 'axios'
import React, { useState } from 'react'
import { DownloaderButtonAnim, DownloaderInputAnim } from '../Animations'

import FileDownload from 'js-file-download';
import ytdl from "ytdl-core";
import Loading from './Loading';

export default function DownloaderInput() {
    var VideoURL: string;
    var [loading,setLoading] = useState(false);
    
    const DownloadFunction = async() => {
        if(!ytdl.validateURL(VideoURL)){
            console.log("unvalid url");
            return;
        }

        var videoInfo : any;
        await axios({
            method: 'get',
            url: '/api/getInfoVideo',
            params: {VideoID: VideoURL}
        }).then((response) => {
            videoInfo = response.data;
        })
        setLoading(true);
        axios({
            method: 'post',
            url: "/api/downloadStream",
            data: {
                VideoInfo: videoInfo
            }
        }).then((response) => {
            FileDownload(response.data,videoInfo.videoDetails.title + ".mp4");
            setLoading(false);
        })
    }

    return (
        <div className="DownloaderInput" id="DownloaderInput">
                <animated.input 
                onChange={(e) => { VideoURL = e.target.value }}
                style={useSpring(DownloaderInputAnim)} placeholder="url de tu video"/>
                <animated.input
                value="Descargar"
                className="button"
                type="submit"
                onClick={DownloadFunction}
                style={useSpring(DownloaderButtonAnim)}/>
                { loading ? <Loading/> : null }
                <p
                id="progressText"
                ></p>
        </div>
    )
}
