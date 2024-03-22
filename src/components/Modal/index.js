import React from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Modal({ 
    visible = false,                // boolean
    setVisible,         
    modalTitle='Modal',             // string, title of modal window
    modalContent,                   // function, return modal content part
    onCancel,                       // function
    onSuccess,                      // function 
    isCloseIcon=true,               // boolean show/hidden close icon
    isFooter=true,                  // boolean, show footer, that contain Cancel and Save buttons 
    isCancelButton=true,            // boolean, show/hidden Cancel button 
    isImage=false,                  // boolean, show/hidden image 
    onSuccessButtonLabel='Save',    // string, label for Success button (ex, Save, Ok, Done etc) 
    onCancelButtonLabel='Cancel',   // string, label for Cancel button
    image,                          // string, path for image    
    cancelButtonStyle,              // object, style for Cancel button
    successButtonStyle,             // object, style for Success button
    titleStyle                      // object, style for title of modal
}) {
  if (!visible) return null

  return (
    <div className={s.overlay}>
        <div className={s.modal}>
            {
                isImage && (
                    <img className={s.img} src={ image } alt='' />
                )
            }
            
            <div className={s.modalContent}>
                <div className={s.headerAndBody}>
                    <div className={s.modalHeader}>
                        <div className={s.header} style={titleStyle}>
                            { modalTitle }
                        </div>
                        {
                            isCloseIcon && (
                                <button className={s.closeIcon} onClick={()=> setVisible(false)}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            )
                        }
                    </div>
                    <div className={s.modalBody}>
                        { modalContent() }
                    </div>
                </div>
                {
                    isFooter && (
                        <div className={s.modalFooter}>
                            {
                                isCancelButton && ( <button className={s.cancelButton} style={cancelButtonStyle} onClick={()=> onCancel(false)}>{ onCancelButtonLabel || 'Cancel'}</button> )
                            }
                            <button className={s.successButton} style={successButtonStyle} onClick={()=> onSuccess(false)}>{ onSuccessButtonLabel || 'Done' }</button>
                        </div>
                    )
                }

            </div>
        </div>
    </div>
  )
}
