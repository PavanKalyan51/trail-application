import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './css/style.css'

function Green() {
  return (
    <div className='greenn'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='greeen'>
                        <h4>Do you really like one page templates ?</h4>
                        <button>
                            <div   className='gnt'>
                            <FaShoppingCart className='gnt1'/>
                            <h6 className='gnt1'>&nbsp;&nbsp;PURCHASE NOW</h6>
                            </div>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Green