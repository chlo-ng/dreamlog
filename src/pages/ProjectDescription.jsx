import '../App.css'

// pages
import CloudDescriptions from '../components/CloudDescriptions'
import FirstIteration from '../components/FirstIteration'

function ProjectDescription() {

  return (
    <>
      <h1> <a href='/' style={{ textDecoration: 'none', color: 'black' }}>dream log</a> </h1>
      <p> <i> For this project, I chose to represent my dreams through clouds, 
                which will eventually make up a beautiful sky 
                that tells a story about my dreams. </i> </p>
      <CloudDescriptions />
      <FirstIteration className='fadeIn'/>
    </>
  )
}

export default ProjectDescription