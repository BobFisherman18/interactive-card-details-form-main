import React, { useState } from "react";

export function Inputs() {
    const [inputField, setInputField] = useState();
    const [inputValue, setInputValue] = useState('');
    const [isThereError, setIsThereError] = useState(false);


    // Function to handle input change
    const handleInputChange = (e) => {
            console.log(e.target.value);
            console.log(e.target.classList);
            console.log(e.target);
            setInputField(e.target);
            //setIsThereError(e.target.classList);
            setInputValue(e.target.value);
        };
    
    //Function to handle button click
    const handleButtonClick = () => {
        if (inputValue === '') {
        //alert('Input field is empty!');
        console.log(inputValue);
        console.log(isThereError);
        setIsThereError(true);
        } else {
        //alert(`Input contains: ${inputValue}`);
        console.log(inputValue);
        setIsThereError(false);
        }
    };
    
    return (
        <section id="inputs" className="mx-4">
            <Input 
                htmlFor='name'
                type="text"
                placeholder="e.g. Jane Appleseed"
                text='CARDHOLDER NAME'
                onChange={handleInputChange}
                errorState={`form-control ${isThereError ? 'errorState': ``}`}
                errorDesc={isThereError ? 'Name is required' : ``}
            />
            <Input 
                htmlFor='num'
                type="number"
                placeholder="e.g. 1234 5678 9123 0000"
                text='CARD NUMBER'
                errorState={`form-control ${isThereError ? 'errorState': ``}`}
                errorDesc={isThereError ? 'Wrong format, numbers only' : ``}
            />
            <div className="mb-3">
                <section className="row">
                <div className="col"> 
                    <label htmlFor='date' className="form-label">EXP. DATE(MM/YY)</label>
                    <div className="row">
                        <input type="number" className="form-control col me-2" placeholder="MM"/>
                        <input type="number" className="form-control col" placeholder="YY"/>
                    </div>
                </div>
                    <Input 
                        className='col'
                        htmlFor='cvc'
                        type='number'
                        placeholder='e.g. 123'
                        text='CVC'
                        errorState={`form-control ${isThereError ? 'errorState': ``}`}
                        errorDesc={isThereError ? `Can't be blank` : ``}
                    />
                </section>
            </div>
            <div className="d-grid">
            <button className="btn my-3" onClick={handleButtonClick}>
                Confirm
            </button>
            </div>
        </section>
    );
}

export function Input({
    className='mb-3',
    htmlFor, 
    type, 
    placeholder="Some Text", 
    text,
    onChange,
    errorState,
    errorDesc
    }) {
    return (
    <>
        <div className={className}>
            <label htmlFor={htmlFor} className='form-label'>{text}</label>
            <input type={type} className={errorState} placeholder={placeholder} onChange={onChange} />
        </div>
        <p id="errorDesc">{errorDesc}</p>
    </>
    );
}