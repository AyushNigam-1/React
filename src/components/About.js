import React, { useContext , memo } from 'react'
import noteContext from '../context/notes/noteContext'

const About = ({count}) => {
  // console.log("About Rerendering")
  //   const a  = useContext(noteContext)
  //   console.log("a",a.name)
  return (
    <div>
        This is About 
        {/* {a.name} */}
    </div>
  )
}

export default memo(About)