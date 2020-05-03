import React, { useState } from 'react'
import { Input } from 'antd'

import './styles.css'

export default function Index() {

    let [ input, setInput ] = useState({
        tl: '',
        tr: '',
        bl: '',
        br: ''
    })

    function handleChange(e) {
        const { name, value } = e.target

        setInput(inputs => ({
            ...inputs,
            [name]: value
        }))
    }
    
    return (
        <div className='main'>
            <div className='title-wrapper'>
                <h2 className='title'>
                    Border Radius
                </h2>
                <p className='by'>
                    by bhideki
                </p>
            </div>
            <div className='container-wrapper'>

                <div className='container'>
                    <div 
                        className='content' 
                        style={{
                            borderTopLeftRadius: `${input.tl}px `, 
                            borderTopRightRadius: `${input.tr}px`,
                            borderBottomLeftRadius: `${input.bl}px`,
                            borderBottomRightRadius: `${input.br}px`
                        }}
                    >
                        <div className='text-br'>
                            {input.tl && `border-top-left-radius: ${input.tl}px`}
                            <br/>
                            {input.tr && `border-top-right-radius: ${input.tr}px`}
                            <br/>
                            {input.bl && `border-bottom-left-radius: ${input.bl}px`}
                            <br/>
                            {input.br && `border-bottom-right-radius: ${input.br}px`}
                        </div>
                    </div>
                    <div className='box-tl'>
                        <Input 
                            type='number'
                            name='tl'
                            value={input['tl']}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='box-tr'>
                        <Input 
                            type='number'
                            name='tr'
                            value={input['tr']}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='box-bl'>
                        <Input 
                            type='number'
                            name='bl'
                            value={input['bl']}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='box-br'>
                        <Input 
                            type='number'
                            name='br'
                            value={input['br']}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
