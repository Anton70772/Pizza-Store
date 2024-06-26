import React, { useState } from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Modal from './../components/Modal'

export default function Header({ cart }) {
    const [visible, setVisible] = useState(false)

    const List = () => cart.map(item => (
        <div className={s.orderItem}>

            <div>
                <div>{item.title1}</div>
                <div>{item.title2}</div>
            </div>

            <div className={s.orderPrice}>
                ${item.summary}
            </div>

        </div>
    ))

    function modalContent() {
        return (
            <div>

                <List />

            </div>
        )
    }

    function onCancel() {
        setVisible(false)
    }

    function onSuccess() {

    }

    return (
        <>
            <Modal
                visible={visible}
                setVisible={setVisible}
                modalTitle='Your order:'
                modalContent={modalContent}
                onCancel={onCancel}
                onSuccess={onSuccess}
                isCloseIcon={true}
                isFooter={true}
                onSuccessButtonLabel='Order'
                isCancelButton={true}
            />
            <div className={s.root}>
                <h1 className={s.header}>Double Pizza</h1>
                <div onClick={() => setVisible(true)}>
                    <FontAwesomeIcon className={s.cart} icon={faCartShopping} />
                </div>
            </div>
        </>
    )
}