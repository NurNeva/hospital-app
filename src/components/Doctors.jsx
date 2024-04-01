import React, { useState } from 'react'
import {doctorData} from "../helper/Data"
import "../css/doctor.css"
import AddModal from './AddModal'

const Doctors = () => {
    const [doctorName, setDoctorName]=useState(null)
    const [show, setShow]=useState(false)
    const [selected, setSelected]=useState({
        doctor: doctorName, 
        patient: '', 
        
    })

 const handleDoctorClick=(e)=> {


   setDoctorName(e)
    setShow(true)
 }

 const handleClose =()=> setShow (false)

 const handleSubmit =()=> setShow (false)
    

  return (
    <div className='doctors container'>
     <div className='row gap-5 justify-content-center'>
     {doctorData.map((doctor)=>(
        <div key={doctor.id} className='doctorCard' onClick={()=>handleDoctorClick(doctor)}>
            <img src={doctor.img} alt={doctor.name} />
            <h5>{doctor.name}</h5>
            <h6>{doctor.dep}</h6>
        </div>
      ))}
     </div>

      <>
      {
        <AddModal 
        show={!!show}
        handleClose={handleClose}
       doctorName={doctorName}
        /> 
       }
      
       
      </>
    </div>
  )
}

export default Doctors
