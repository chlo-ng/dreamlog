import './FirstIteration.css'
import twentytwenty from '../assets/2020dreams.png'

import process1 from '../assets/process-1.jpg'
import process2 from '../assets/process-2.jpg'
import process3 from '../assets/process-3.jpg'


function FirstIteration() {

    return (
      <>
        <div className="representation">  
          <h3> my process </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
            <img src={ process1 } />
            <img src={ process2 } />
            <img src={ process3 } />
          </div>

          <h3> first iteration </h3>
          <div className="column">
            <img src={ twentytwenty } style={{ width: '55%' }}/>
            <p> representation description, life description </p>
          </div>

          <h3> second iteration </h3>
          <div className="column">
            <p> a <a href="/second-iteration">webpage</a> with side scrolling, telling a story of my life in dreams and clouds. </p>
            <p> however, due to time constraints and also a rough week, it has been difficult to code the webpage with satisfying results. 
               <br /> and so, i decided to combine the first two iterations instead. here is the <a href="/"> final webpage</a>. </p>
          </div>
        </div>
      </>
    )
  }
  
  export default FirstIteration;
  