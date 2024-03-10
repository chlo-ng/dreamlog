import { useRef, useEffect, useState } from 'react';
import { useIntersection } from 'react-use'
import { gsap, Power3 } from 'gsap'

import './DreamLog.css'

// clouds
import Cirrus from '../assets/cirrus.png'
import Cumulus from '../assets/cumulus.png'
import Stratus from '../assets/stratus.png'
import Nimbostratus from '../assets/nimbostratus.png'
import Cumulonimbus from '../assets/cumulonimbus.png'

function DreamLog() {
    const sectionRef = useRef(null);

    const useIntersection = (ref) => {
      const [intersection, setIntersection] = useState(null);
  
      useEffect(() => {
          const observer = new IntersectionObserver(
              ([entry]) => setIntersection(entry),
              {
                  root: null,
                  rootMargin: '0px',
                  threshold: 0.9, // Change this line
              }
          );
  
          if (ref.current) {
              observer.observe(ref.current);
          }
  
          return () => {
              if (ref.current) {
                  observer.unobserve(ref.current);
              }
          };
      }, [ref]);
  
      return intersection;
  };

  const intersection = useIntersection(sectionRef);

    useEffect(() => {
      const fadeIn = (element) => {
          gsap.to(element, {
              duration: 6,
              opacity: 1,
              x: -40,
              ease: 'power4.out',
              stagger: {
                  amount: .3
              }
          })
      }

      const fadeOut = (element) => {
          gsap.to(element, {
              duration: 3,
              opacity: 0,
              x: -60,
              ease: 'power4.out',
          })
      }

      if (intersection && intersection.intersectionRatio < .5) {
          fadeOut('.fadeIn');
      } else {
          fadeIn('.fadeIn');
      }
    }, [intersection]); // Trigger effect when intersection changes

    return (
      <>
        <div style={{ width: '100vw', height: '100vh' }} className='dreamlog'>
          <h1> <a href='/project-description' style={{ textDecoration: 'none', color: 'black' }}>dream log</a> </h1>
          <div className='columns'>
            <div className='column'>
              <p> 2020 started afresh, dreams were really light-hearted, which i would like to think they represented my excitement of the new decade,
                getting used to college by this point (it was my second semester of freshmen year!), and developing a small crush on someone.
              </p>
              <img src={Cirrus} />
            </div>

            <div className='column section2 fadeIn'>
              <img src={Cumulus} />
            </div>

            <div className='column section2 fadeIn'>
              <p> this dream </p>
              <img src={Cumulus} />
            </div>
          </div>

        </div>
      </>
    )
  }
  
  export default DreamLog;