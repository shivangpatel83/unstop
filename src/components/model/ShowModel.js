// import { useEffect } from 'react'
import { useState } from 'react'
import './showModel.css'
import {FaTimes} from 'react-icons/fa'

export const ShowModel=({close, callFunction})=>{

  const [field, setField] = useState([])
  const [name, setName] = useState('');
  const [selectedPurpose, setselectedPurpose] = useState('');
  const [selectedDesc, setselectedDesc] = useState('');
  const [time , setTime] = useState('')

  const handleClick= async()=>{
    let obj={
      name,
      purpose : selectedPurpose,
      description : selectedDesc,
      time
    }
     setField(prev=>[...prev,obj])
    await callFunction(field)
    setName(``)
    setselectedPurpose('')
    setselectedDesc('')
    setTime('')
  }


  // useEffect(() => {
  //   const multiSelect = new window.MultiSelectTag('createSkills');

  //   return () => {
  //     multiSelect.destroy(); 
  //   };
  // }, []);

  return(

    <>
    <div className="wrapper" onClick={close}></div>
    <div className="modelContainer">
      <div className="header">
        <h4>Create New Assesment</h4>
        <FaTimes onClick={close} style={{cursor: 'pointer'}}/>
      </div>
      <hr />
      <div className="info">
        {/* <div className="assesmentName"> */}
          <div className="labelField">
            <label htmlFor="assesment">Name of assesment</label>
          </div>
          <div className="inputField">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="assesment" id="createInput" placeholder='Type Here'/>
          </div>
          <div className="labelField">
            <label htmlFor="testPurpose">Purpose of the test is</label>
          </div>
          <div className="selectField">
            <select name="testPurpose" id="createPurpose" value={selectedPurpose} onChange={(e)=>setselectedPurpose(e.target.value)}>
              <option>Select</option>
              <option value="Job">Job</option>
              <option value="Hackerthon">Hackerthon</option>
              <option value="mercQuizedes">Quiz</option>
            </select>
          </div>
          <div className="labelField">
            <label htmlFor="description">Description</label>
          </div>
          <div className="selectField">
            <select name="description" id="createDescription" value={selectedDesc} onChange={(e)=>setselectedDesc(e.target.value)}>
              <option>Select</option>
              <option value="Job">Job</option>
              <option value="Hackerthon">Hackerthon</option>
              <option value="mercQuizedes">Quiz</option>
            </select>
          </div>
          <div className="labelField">
            <label htmlFor="skills">Skills</label>
          </div>
          <div className="selectField">
            <select name="skills" id="createSkills" multiple>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
            </select>
          </div>
          <div className="labelField">
            <label htmlFor="duration">Duration</label>
          </div>
          <div className="inputField">
            <input type="text" name="duration" id="setTime" value={time} onChange={(e)=>setTime(e.target.value)} placeholder='HH:MM:SS'/>
          </div>
          <button className='button' onClick={handleClick}>Save</button>
      </div>
    </div>
    </>

  )
}