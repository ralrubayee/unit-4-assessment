import React from 'react'

const CircleSelector = (props) => {
return (
  <section class='CircleSelector' >
  {props.selectCircle.map((SC, idx) => (
    <div>
    <button 
      onClick={() => props.handleSelectedCircle(idx)}
     className={SC? "selected" : ""}
    >
      {SC
        ? `Circle ${idx + 1} Selected`
        : `Select Circle ${idx + 1}`}
    </button>
  </div>
  ))}
</section>
)
}
export default CircleSelector