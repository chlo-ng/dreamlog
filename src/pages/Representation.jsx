import './Representation.css'

import { useRef, useEffect, useState } from 'react';
import { useIntersection } from 'react-use'
import { gsap, Power3 } from 'gsap'

// images
import Part1 from '../assets/2020-2021.png'
import Part2 from '../assets/2022.png'
import Part3 from '../assets/2023-2024.png'

function Representation() {
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
              duration: 8,
              opacity: 1,
              y: -30,
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
              y: -30,
              ease: 'power4.out',
          })
      }

      if (intersection && intersection.intersectionRatio < 0.9) {
          fadeOut('.fadeIn');
      } else {
          fadeIn('.fadeIn');
      }
    }, [intersection]); // Trigger effect when intersection changes


    // const columnsRef = useRef(null);

    // useEffect(() => {
    //   const handleWheel = (e) => {
    //     if (e.deltaY) {
    //       e.preventDefault();
    //       const scrollSpeedFactor = 1.5; // Adjust this value to change scroll speed
    //       const newScrollPosition = columnsRef.current.scrollLeft + e.deltaY * scrollSpeedFactor;
    //       columnsRef.current.scrollTo({
    //         left: newScrollPosition,
    //         behavior: 'smooth'
    //       });        
    //     }
    //   }

    //   const columnsDiv = columnsRef.current;
    //   columnsDiv.addEventListener('wheel', handleWheel);

    //   return () => {
    //     columnsDiv.removeEventListener('wheel', handleWheel);
    //   }
    // }, []);

    return (
      <>
        <div style={{ width: '100vw', height: '100vh' }} className='final'>
          <h1> <a href='/' style={{ textDecoration: 'none', color: 'black', marginLeft: '.5em' }} className='fadeIn'>dream log</a> </h1>
          <h3> <a href='/project-description' style={{ textDecoration: 'none', color: 'black', marginLeft: '.5em', textDecoration: 'underline'}} className='fadeIn'>Project Description</a> </h3>
          <br />

          <div className='rows'>
            <div className='row'>
              <img src={Part1} className='fadeIn' style={{ width: '75vw', height: 'auto' }}/>
              <div className='description'>
                <h3 className='fadeIn'> covid: 2020 to mid-2021 </h3>
                <p className='fadeIn'> the dreams started out normal, along with the new decade, 2020. 
                                      it was full of hope and excitement, until covid came crashing onto us.
                                      my dreams also started being really stressful and scary as things turn into
                                      balls of uncertainty. </p>
              </div>
            </div>
            <div className='row'>
              <img src={Part2} className='fadeIn' style={{ width: '75vw', height: 'auto' }}/>
              <div className='description'>
                <h3 className='fadeIn'> georgia tech: mid-2021 to 2022 </h3>
                <p className='fadeIn'> transferring to a new college and coming back in person was a mix of emotions for me.
                                        i had a mix of both carefree dreams and long, sad dreams. <br /> i joined a kpop dance team on campus, and loved it,
                                        all while battling my inner emotions about impostor syndrome. i made new friends, and also lost some friends.
                                        i was also struggling to leave a toxic relationship, but managed to at the end of this era. this was also the year
                                        that i met my really closest today. </p>
              </div>
            </div>
            <div className='row'>
              <img src={Part3} className='fadeIn' style={{ width: '75vw', height: 'auto' }}/>
              <div className='description'>
                <h3 className='fadeIn'> senior year: 2023 to 2024 </h3>
                <p className='fadeIn'> this past year was also stressful, but for different reasons. i found myself in a loving relationship,
                                        but my habits from the past relationship bled into it slightly as we progressed through the year. 
                                        <br/> i also experienced a huge loss, when my grandpa passed away mid 2023. since then, i had really long, 
                                        bittersweet dreams about my family and my future. i was also struggling with finding a post-grad job
                                        all of fall semester, and that gave me a second wave of impostor syndrome as well.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Representation