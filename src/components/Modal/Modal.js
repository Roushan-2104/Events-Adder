import './Modal.css'
import ReactDOM from 'react-dom'

export default function Modal({children,handleClose, isSalesModal}) {
    return ReactDOM.createPortal((
        <div className='modal-backdrop'>
            <div className='modal' style={{
                border:'4px solid',
                borderColor: isSalesModal ? 'rgba(255, 69, 0,0.4)' : '#555',
            }}>
                {children}
            </div>
        </div>
    ), document.body )
}
