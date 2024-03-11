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
import Part1_1 from '../assets/2020-part1.png'
import Part1_2 from '../assets/2020-part2.png'
import Part1_3 from '../assets/2020-part3.png'


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
                  threshold: 0.9,
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
              duration: 10,
              opacity: 1,
              x: -70,
              ease: 'power4.out',
              stagger: {
                  amount: 5,
              }
          })
      }

      const fadeOut = (element) => {
          gsap.to(element, {
              duration: 5,
              opacity: 0,
              x: -30,
              ease: 'power4.out',
          })
      }

      if (intersection && intersection.intersectionRatio < 0.9) {
          fadeOut('.fadeIn');
      } else {
          fadeIn('.fadeIn');
      }
    }, [intersection]); // Trigger effect when intersection changes


    const columnsRef = useRef(null);

    useEffect(() => {
      const handleWheel = (e) => {
        if (e.deltaY) {
          e.preventDefault();
          const scrollSpeedFactor = 1.5; // Adjust this value to change scroll speed
          const newScrollPosition = columnsRef.current.scrollLeft + e.deltaY * scrollSpeedFactor;
          columnsRef.current.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth'
          });        
        }
      }

      const columnsDiv = columnsRef.current;
      columnsDiv.addEventListener('wheel', handleWheel);

      return () => {
        columnsDiv.removeEventListener('wheel', handleWheel);
      }
    }, []);

    return (
      <>
        <div style={{ width: '100vw', height: '100vh' }} className='dreamlog'>
          <h1> <a href='/' style={{ textDecoration: 'none', color: 'black', marginLeft: '.5em' }} className='fadeIn'>dream log</a> </h1>
          <h3> <a href='/project-description' style={{ textDecoration: 'none', color: 'black', marginLeft: '.5em' }} className='fadeIn'>ProjectDescription</a> </h3>
          
          <div className='columns'
            ref={columnsRef}
          >
            <div className='column'>
                  <p className='fadeIn' style={{ width: '50%'}}> 2020 started afresh, dreams were really light-hearted, which i would like to think they represented my excitement of the new decade,
                    getting used to college by this point (it was my second semester of freshmen year!), and developing a small crush on someone.
                  </p>
                  <img src={Cirrus} className='fadeIn'/>
                </div>

            <div className='column'>
                <div className='part1'>
                  <p className='part1 text'> the dreams then started ramping up in stress as classes started getting harder.
                    this was also around the time when covid was first brought to light and the uncertainty with how life would go on was tormenting me and my dreams.
                   </p>
                  <img src={Part1_1} className='fadeIn'/>
                  <img src={Part1_2} className='fadeIn'/>
                  <img src={Part1_3} className='fadeIn'/>

                </div>
            </div>

          </div>
        </div>
      </>
    )
  }
  
  export default DreamLog;