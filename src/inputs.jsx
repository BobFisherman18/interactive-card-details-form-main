import React, { useState, useEffect, useContext, useRef, forwardRef } from "react";

export function Inputs() {

    const [isThereError, setIsThereError] = useState(false);
   //const [handleInputChange, setHandleInputChange] = useState();

    const inputRefs = {
        name: useRef(),
        number: useRef(),
        month: useRef(),
        year: useRef(),
        cvc: useRef()
    }

    const [inputValues, setInputValues] = useState({
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: ''
      });

    const [errors, setErrors] = useState({
        name: 'Name is required',
        number: 'Wrong format, numbers only',
        date: `Can't be blank`,
        cvc: ''
      });
    const errorName = inputValues.name.trim()===`` ? 
                    (<span id="errorDesc">{errors.name}</span>) : ``
    const errorNumber = inputValues.number.trim()===`` ? 
                    (<span id="errorDesc">{errors.number}</span>) : ``
    const errorDate = inputValues.month.trim()===`` || 
                      inputValues.year.trim()===`` ? 
                    (<span id="errorDesc">{errors.date}</span>) : ``
    const errorCvc = inputValues.cvc.trim()===`` ? 
                    (<span id="errorDesc">{errors.cvc}</span>) : ``                

        // Function to handle input change
        const handleInputChange = (e) => {
        //destructured input element
        const { name, value } = e.target;
            setInputValues({
            ...inputValues,
            [name]: value,
            });
            
        }    
    useEffect(() => {
        console.log('wow');
    },[]);
    //Function to handle button click
    const handleButtonClick = () => {
        console.log(isThereError);
                
        /*
        const inputs = Object.values(inputRefs);
        inputs.map(input => {
            console.log(input.current);
            input.current.value ===`` ? (setIsThereError(true), 
                                        console.log(isThereError)) :
                                        setIsThereError(false)

        });
        */
    };
    
    return (
        <section id="inputs" className="mx-4">
            <InputField 
            errorDesc={errorName}>
                <Label htmlFor='name'>CARDHOLDER NAME</Label>
                <Input 
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    onChange={handleInputChange}
                    ref={inputRefs.name}
                    name='name'
                    errorState={inputValues.name.trim() === '' ? `errorState` : ``}
                    value={inputValues.name}
                />
            </InputField>
            <InputField errorDesc={errorNumber}>
                <Label htmlFor='num'>CARD NUMBER</Label>
                <Input 
                  type="number"
                  placeholder="e.g. 1234 5678 9123 0000"
                  ref={inputRefs.number}  
                  onChange={handleInputChange}
                  name='number'
                  errorState={inputValues.number.trim() === '' ? `errorState` : ``}
                  value={inputValues.number}
                />
            </InputField>
            <InputField>
                <InputField className="row">
                    <InputField className="col">
                        <Label htmlFor='date'>EXP. DATE(MM/YY)</Label>
                        <InputField className="row" errorDesc={errorDate}>
                            <Input 
                                type='number'
                                placeholder="MM"
                                col='col'
                                margin='me-2'
                                ref={inputRefs.month}
                                onChange={handleInputChange}
                                name='month'
                                errorState={inputValues.month.trim() === '' ? `errorState` : ``}
                                value={inputValues.month}
                            />
                            <Input 
                                type='number'
                                placeholder="YY"
                                col='col'
                                ref={inputRefs.year}
                                onChange={handleInputChange}
                                name='year'
                                errorState={inputValues.year.trim() === '' ? `errorState` : ``}
                                value={inputValues.year}
                            />
                        </InputField >
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
export function InputField({ className='mb-3', children, errorDesc }) {
    return (
    <>
        <div className={className}>
            {children}
        </div>
        {errorDesc}
    </>
    );
}
//This component is used to forward refs as props
const Input = forwardRef(( props, ref ) => {
        return (
            <>
            <input 
                name={props.name}
                value={props.value}
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