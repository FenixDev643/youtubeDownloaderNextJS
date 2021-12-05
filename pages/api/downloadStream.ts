import type { NextApiRequest, NextApiResponse } from 'next'

import ytdl from "ytdl-core";
var progress = require('progress-stream');

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === 'GET'){
        var VideoURL : any = req.query.VideoID;
        var VideoID : any = ytdl.getURLVideoID(VideoURL);
        var downloadStream = ytdl(VideoID, { filter: format => format.itag === 18 });
        res.status(200).send(downloadStream);
  }
}