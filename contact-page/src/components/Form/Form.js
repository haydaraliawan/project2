import React from 'react'

import style from './Form.module.css'

import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { BsTelephoneForward } from 'react-icons/bs'

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.text.value);
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.top_btn}>
                    <Button text='VIA SUPPORT CHAT' icon={<MdMessage />}></Button>
                    <Button text='VIA CALL' icon={<BsTelephoneForward />}></Button>
                </div>

                <Button text='VIA CALL' icon={<BsTelephoneForward />} isOutline="true" ></Button>
                <form onSubmit={handleSubmit} className={style.form_inputs} >
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' />
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' />
                    <label htmlFor="text">Textjjj</label>
                    <textarea name="" id="text" name='text' rows="4"></textarea>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'end',

                    }}>

                        <Button text="Submit"  ></Button>
                    </div>

                </form>
            </div>
            <div className={style.image}>
                <img src="/Service 24_7-pana 1.svg" alt="service 24" />
            </div>
        </div >
    )
}

export default Form
