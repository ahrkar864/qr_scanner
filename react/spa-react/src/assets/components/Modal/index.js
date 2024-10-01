import React from 'react'
import './index.css';
import ReactDom from 'react-dom';

export default function Modal({children, danger, setshowModal}) {
    let className = danger ? 'border-red' : 'border-blue';
    return (
    ReactDom.createPortal(
        <div className="modal-component">
            <div className="modal-backdrop">
                <div className={`modal ${className}`} 
                // style={{
                //     border: '1px solid',
                //     borderColor : danger ? 'red' : 'blue'
                //  }}
                 >
                    {children}
                    <button onClick={()=>setshowModal(false)}>close</button>
                </div>
            </div>
        </div>,document.getElementById('modal')
        )
    )
}
