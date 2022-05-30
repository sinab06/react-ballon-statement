import React from 'react';
import './balloons.css';
import { useState } from "react";


export function Balloons() {

  const [input, setInput] = useState();
  const [circleOne, setcircleOne] = useState(true);
  const [circleTwo, setcircleTwo] = useState(true);
  const [circleThree, setcircleThree] = useState(true);
  const [circleFour, setcircleFour] = useState(true);
  const [circleFive, setcircleFive] = useState(true);

  const b1 = () => {
    setcircleOne(false
    )
  }

  const circle1 = () => {
    setcircleOne(true
    )
  }

  const circle2 = () => {
    setcircleTwo(false
    )
  }

  const b2 = () => {
    setcircleTwo(true
    )
  }

  const circle3 = () => {
    setcircleThree(false
    )
  }

  const b3 = () => {
    setcircleThree(true
    )
  }

  const circle4 = () => {
    setcircleFour(false
    )
  }

  const b4 = () => {
    setcircleFour(true
    )
  }

  const circle5 = () => {
    setcircleFive(false)
  }
  const b5 = () => {
    setcircleFive(true
    )
  }


  const handleShoot = () => {
    if (input === "1") { b1() }

    else if (input === "2") {
      circle2()
    }

    else if (input === "3") {
      circle3()
    }

    else if (input === "4") {

      circle4()
    }
    else if (input === "5") {

      circle5()
    }
  }
  return (
    <div>

      <div className="headerBox">


        <input className="input_box" onChange={(el) => {
          setInput(el.target.value);
        }}
          id="outlined-number" label="Enter Number" type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button className='btn_shoot' onClick={handleShoot} variant="outlined">Shoot</button>
      </div>

      <div className="body_box">
        <div className='body_box_left'>

          {
            circleOne ? null : <div className="div-1" onClick={circle1} ></div>
          }
          {
            circleTwo ? null : <div className="div-2" onClick={b2}></div>
          }
          {
            circleThree ? null : <div className="div-3" onClick={b3}></div>
          }
          {
            circleFour ? null : <div className="div-4" onClick={b4}></div>
          }
          {
            circleFive ? null : <div className="div-5" onClick={b5}></div>
          }



        </div>
        <div className="body_box_right">
          {
            circleOne ? <div className="div-1 ballon_structure"></div> : null
          }
          {
            circleTwo ? <div className="div-2 ballon_structure"></div> : null
          }
          {
            circleThree ? <div className="div-3 ballon_structure"></div> : null
          }
          {
            circleFour ? <div className="div-4 ballon_structure"></div> : null
          }
          {
            circleFive ? <div className="div-5 ballon_structure"></div> : null
          }

        </div>


      </div>
    </div>
  );
}
