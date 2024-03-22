import React from 'react'
import { useState } from 'react'
import s from './index.module.css'
import Gallery from './../components/Gallery'
import { useSnackbar } from 'notistack';

export default function Content({ data, cart, setCart }) {
    const images = data.map(item => item.photo)

    const [currentLeftImage, setCurrentLeftImage] = useState(0)
    const [currentRightImage, setCurrentRightImage] = useState(0)
    const order = cart

    // Custom Alert
    const { enqueueSnackbar } = useSnackbar();
    // Custom Alert

    const controlLeftStyle = {
        left: "125px"
    }

    const controlRighttStyle = {
        right: "125px"
    }

    function addToCart() {
        order.push({
            title1: data[currentLeftImage].title,

            title2: data[currentRightImage].title,

            summary: +data[currentLeftImage].price + +data[currentRightImage].price
        })
        setCart(order)

        enqueueSnackbar('Pizza added to cart', { variant: 'success' });
    }

    return (
        <div className={s.root}>

            <div className={s.galleries}>

                <div className={s.leftBlock}>

                    <p className={s.title}>{data[currentLeftImage].title}</p>

                    <p className={s.desc}>{data[currentLeftImage].desc}</p>

                    <div className={s.galleryLeftBlock}>

                        <Gallery
                            images={images}
                            vertical={true}
                            width={550}
                            height={600}
                            infinity={true}
                            controlStyle={controlLeftStyle}
                            currentImage={currentLeftImage}
                            setCurrentImage={setCurrentLeftImage}
                        />

                    </div>

                    {/* <p className={s.diameter}>{data[currentLeftImage].diameter}</p> */}

                    <p className={s.price}>Price: ${data[currentLeftImage].price}</p>

                </div>

                <div className={s.rightBlock}>

                    <p className={s.title}>{data[currentRightImage].title}</p>

                    <p className={s.desc}>{data[currentRightImage].desc}</p>

                    <div className={s.galleryRightBlock}>
                        <Gallery
                            images={images}
                            vertical={true}
                            width={550}
                            height={600}
                            infinity={true}
                            controlStyle={controlRighttStyle}
                            currentImage={currentRightImage}
                            setCurrentImage={setCurrentRightImage}
                        />

                    </div>

                    {/* <p>{data[currentRightImage].diameter}</p> */}

                    <p className={s.price}>Price: ${data[currentRightImage].price}</p>

                </div>

            </div>

            <div className={s.footer}>

                <p className={s.summary}>Summary Price: ${+data[currentLeftImage].price + +data[currentRightImage].price}</p>

                <button className={s.button} onClick={addToCart}>Add to card</button>

            </div>

        </div >
    )
}