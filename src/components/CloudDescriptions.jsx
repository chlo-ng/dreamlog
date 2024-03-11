import { useEffect } from "react"
import './CloudDescriptions.css'

// clouds
import Cirrus from '../assets/cirrus.png'
import Cumulus from '../assets/cumulus.png'
import Stratus from '../assets/stratus.png'
import Nimbostratus from '../assets/nimbostratus.png'
import Cumulonimbus from '../assets/cumulonimbus.png'

function CloudDescriptions() {
  
    return (
      <>
        <div style={{ width: '100vw', height: 'max-content', paddingLeft: '.5em'}}>
            <h3> cloud descriptions. </h3>
            <p> Clouds come in many different forms and shapes. So do dreams! 
                <br /> I looked into the most common clouds and what weather state they bring or represent,
                <br /> and linked that to the dreams that I would have.
                <br /> Below is a legend that I will be using and referring to in my representation of my dreams.
            </p>

            <div className='columns'>  
                <div className="column">
                    <img src={Cirrus} />
                    <h3> cirrus clouds </h3>
                    <p> • thin wispy clouds <br/> 
                        • indicates fair weather </p>
                    <p className="dream-legend"> happy, carefree dreams </p>
                    <br/>
                    <br/>
                    <img src={Stratus} />
                    <h3> stratus clouds </h3>
                    <p> • uniform clouds <br/> 
                        • provides overcast skies <br/> 
                        • indicate fair weather </p>
                    <p className="dream-legend"> calm dreams </p>
                </div>

                <div className="column">
                    <img src={Cumulonimbus} />
                    <h3> cumulonimbus clouds </h3>
                    <p> • towering, dark clouds <br/> 
                        • thunderstorms, lightning </p>
                    <p className="dream-legend"> long, dreary dreams </p>
                </div>

                <div className="column">
                    <img src={Cumulus} />
                    <h3> cumulus clouds </h3>
                    <p> • most common cloud <br/> 
                        • could indicate fair weather <br/>
                        • can develop into storm clouds </p>
                    <p className="dream-legend"> unseeming and multiconnected dreams </p>

                    <img src={Nimbostratus} />
                    <h3> nimbostratus clouds </h3>
                    <p> • thick, dark clouds <br/> 
                        • provides steady rain or snow </p>
                    <p className="dream-legend"> sad, bittersweet dreams </p>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default CloudDescriptions
  