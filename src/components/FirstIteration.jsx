import './FirstIteration.css'
import twentytwenty from '../assets/2020dreams.png'

function FirstIteration() {

    return (
      <>
        <div className="representation fadeIn">  
          <h3> my process </h3>
          <div className="column">
          </div>

          <h3> first iteration </h3>
          <div className="column">
            <img src={ twentytwenty } />
            <p> representation description, life description </p>
          </div>
        </div>
      </>
    )
  }
  
  export default FirstIteration;
  