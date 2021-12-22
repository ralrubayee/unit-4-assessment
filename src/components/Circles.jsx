import React from 'react'

const Circles = (props) => {
return (
  <section class='Circles'>
  {props.selectCircle.map((SC, idx) => (
    <div
    onClick={() => props.handleSelectedCircle(idx)}
    className={SC? "selected" : ""}
  >
    {`${idx + 1}`}
  </div>
  ))}
</section>
)
}
export default Circles