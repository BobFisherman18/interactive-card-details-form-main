import React, { useState, useEffect, useContext, useRef, forwardRef } from "react";

export function Inputs() {

    const [isThereError, setIsThereError] = useState(false);

    const inputRefs = {
        name: useRef(),
        number: useRef(),
        month: useRef(),
        year: useRef(),
        cvc: useRef()
    }


    // Function to handle input change
    const handleInputChange = (e) => {
            console.log(e.target.value);
            
            
        };
    useEffect(() => {
        console.log('wow');
    })
    //Function to handle button click
    const handleButtonClick = () => {
        const inputs = Object.values(inputRefs);
        inputs.map(input => {
            console.log(input.current);
            input.current.value ===`` ? setIsThereError(true) :
                                        setIsThereError(false)

        });
    };
    
    return (
        <section id="inputs" className="mx-4">
            <InputField >
                <Label htmlFor='name'>CARDHOLDER NAME</Label>
                <Input 
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    onChange={handleInputChange}
                    ref={inputRefs.name}
                    errorState={isThereError === true ? `errorState` : ``}
                />
            </InputField>
            <InputField>
                <Label htmlFor='num'>CARD NUMBER</Label>
                <Input 
                  type="number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  ref={inputRefs.number}  
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
                                ref={inputRefs.month}
                            />
                            <Input 
                                type='number'
                                placeholder="YY"
                                col='col'
                                ref={inputRefs.year}
                            />
                        </InputField>
                    </InputField>
                    <InputField className="col">
                        <Label htmlFor='cvc'>CVC</Label>
                        <Input 
                            type='number'
                            placeholder='e.g. 123'
                            ref={inputRefs.cvc}
                        />
                    </InputField>
                </InputField>
            </InputField>
            <InputField className="d-grid">
                <Button margin='my-3'onClick={handleButtonClick}>
                    Confirm   
                </Button> 
            </InputField>
        </section>
    );
}
export function Button({ margin, onClick, children }) {
    return (
        <button className={`btn ${margin}`} onClick={onClick}>{children}</button>
    );
}
export function InputField({ className='mb-3', children }) {
    return (
    <>
        <div className={className}>
            {children}
        </div>
    </>
    );
}
//This component is used to forward refs as props
const Input = forwardRef(( props, ref ) => {
        return (
            <>
            <input 
                type={props.type} 
                className={`form-control ${props.errorState} ${props.col} ${props.margin}`} 
                placeholder={props.placeholder}   
                onChange={props.onChange}
                ref={ref}
            /> 
            </>
        )
    });
export default Input;

export function Label({ htmlFor, children }) {
    return (
        <label htmlFor={htmlFor} className='form-label'>{children}</label>
    );
}