import React, { useState, useEffect, useContext, useRef, forwardRef } from "react";

export function Inputs() {

const nameRef = useRef(0);


    // Function to handle input change
    const handleInputChange = (e) => {

            console.log(e.target.value);
            
        };
    useEffect(() => {
        console.log('wow');
    })
    //Function to handle button click
    const handleButtonClick = () => {
        nameRef.current ++;
    };
    
    return (
        <section id="inputs" className="mx-4">
            <InputField 
            >
                <Label htmlFor='name'>CARDHOLDER NAME</Label>
                <Input 
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    onChange={handleInputChange}
                />
            </InputField>
            <InputField>
                <Label htmlFor='num'>CARD NUMBER</Label>
                <Input 
                  type="number"
                  placeholder="e.g. 1234 5678 9123 0000"  
                />
            </InputField>
            <InputField>
                <InputField className="row">
                    <InputField className="col">
                        <Label htmlFor='date'>EXP. DATE(MM/YY)</Label>
                        <InputField className="row">
                            <Input 
                                type='number'
                                placeholder="MM"
                                col='col'
                                margin='me-2'
                            />
                            <Input 
                                type='number'
                                placeholder="YY"
                                col='col'
                            />
                        </InputField>
                    </InputField>
                    <InputField className="col">
                        <Label htmlFor='cvc'>CVC</Label>
                        <Input 
                            type='number'
                            placeholder='e.g. 123'
                        />
                    </InputField>
                </InputField>
            </InputField>
            <div className="d-grid">
            <button className="btn my-3" onClick={handleButtonClick}>
                Confirm
            </button>
            </div>
        </section>
    );
}

export function InputField({
    className='mb-3',
    children
    }) {
    return (
    <>
        <div className={className}>
            {children}
        </div>
    </>
    );
}
export function Input({
    col=``,
    margin=``,
    type,
    placeholder,
    onChange,
    }) {
    return (
        <input 
            type={type} 
            className={`form-control ${col} ${margin}`} 
            placeholder={placeholder}   
            onChange={onChange}/>
    );
}
export function Label({
    htmlFor,
    children
    }) {
    return (
        <label htmlFor={htmlFor} className='form-label'>{children}</label>
    );
}