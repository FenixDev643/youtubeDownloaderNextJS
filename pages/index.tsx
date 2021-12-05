import type { NextPage } from 'next'
import DownloaderInput from '../styles/components/DownloaderInput'
import Title from '../styles/components/Title'

const Home: NextPage = () => {
  return (
    <div className="home">
      <svg className="waveUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="0.5" d="M0,64L40,96C80,128,160,192,240,181.3C320,171,400,85,480,80C560,75,640,149,720,192C800,235,880,245,960,224C1040,203,1120,149,1200,144C1280,139,1360,181,1400,202.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg>
      <Title/>
      <DownloaderInput/>
      <svg className="waveDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,224L40,224C80,224,160,224,240,218.7C320,213,400,203,480,176C560,149,640,107,720,106.7C800,107,880,149,960,160C1040,171,1120,149,1200,154.7C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default Home
