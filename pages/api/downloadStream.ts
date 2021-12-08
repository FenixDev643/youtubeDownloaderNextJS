import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === 'POST'){
        var VideoInfo : any = req.body.VideoInfo;
        var Response : any;
        await axios({
          method: 'get',
          url: VideoInfo.formats[0].url
        }).then(response => {
          Response = response;
        })
        res.status(200).send(Response.data);
  }
}