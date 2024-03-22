import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import s from './index.module.css'

export default function Faq({ data }) {
    const [selected, setSelected] = useState()

    return (
        <div class={s.wrapper}>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className={s.questionBlock}>
                            <div className={s.question} onClick={()=> setSelected(index === selected ? false : index)}>
                                <div className={s.questionText}>{ item.question }</div>
                                <div>
                                    {
                                        selected === index ? (
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        ) : (
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        )
                                    }
                                </div>
                            </div>

                            <div>
                                {
                                    selected === index && (
                                        <div>
                                            { item.answer}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
