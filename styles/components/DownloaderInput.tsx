import { animated, useSpring } from '@react-spring/web'
import axios from 'axios'
import React from 'react'
import { DownloaderButtonAnim, DownloaderInputAnim } from '../Animations'

import FileDownload from 'js-file-download';
import ytdl from "ytdl-core";

export default function DownloaderInput() {
    var VideoURL: string;
    
    const DownloadFunction = async() => {
        if(!ytdl.validateURL(VideoURL)){
            console.log("unvalid url");
            return;
        }
        var info : any;

        await axios({
            method: 'get',
            url: '/api/getInfoVideo',
            params: {VideoID: VideoURL}
        }).then((response) => {
            info = response.data;
            console.log("se consigio info ", response.data);
        })
        console.log("descargando...");
        const options = {
            onUploadProgress: (progressEvent: any) => {
              const {loaded, total} = progressEvent;
              let percent = Math.floor( (loaded * 100) / total )
              console.log( `${loaded}kb of ${total}kb | ${percent}%` );
            }
          }
          // este post no sirve por la ley cors, asi que puedes hacer una llamada
          // a un script de api y despues retornar toda la informacion que te llege
          // hasta aqui
        axios({
            method: 'get',
            url: '/api/downloadStream',
            params: {URL: info.formats[0].url, Options: options}
        })/*.then((response) => {
            info = response.data;
            console.log("se consigio info ", response.data);
        })*/
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
                <p
                id="progressText"
                ></p>
        </div>
    )
}
