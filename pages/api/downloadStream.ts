import type { NextApiRequest, NextApiResponse } from 'next'

import ytdl from "ytdl-core";
import axios from 'axios'

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === 'GET'){
        var URL : any = req.query.URL;
        var Options : any = req.query.Options;
        let data = new FormData();
        axios.post(URL,data, Options).then(response => {
          console.log("se consigio una response ", response);
        })
        //res.status(200).send(downloadStream);
  }
}