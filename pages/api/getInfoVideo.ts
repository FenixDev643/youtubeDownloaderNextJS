import type { NextApiRequest, NextApiResponse } from 'next'

import ytdl from "ytdl-core";

var VideoInfo : any;

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === 'GET'){
        var VideoID : any = req.query.VideoID;
        VideoInfo = await ytdl.getBasicInfo(VideoID)
        res.status(200).json(VideoInfo);
  }
}