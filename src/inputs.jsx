import React, { useState, useEffect, useContext, useRef, forwardRef } from "react";

export function Inputs() {

    const [isThereError, setIsThereError] = useState(false);
   //const [handleInputChange, setHandleInputChange] = useState();

    const [inputValues, setInputValues] = useState({
        name:'',
        number: '',
        month: '',
        year: '',
        cvc: ''
      });

    const [errors, setErrors] = useState({
        name:  {
            nameEmpty: '',
            nameValue: '',
            nameNumbers: '',
        },
        number: '',
        date: ``,
        cvc: ''
      });

    const [errorDesc, setErrorDesc] = useState({
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: ''
    });
      function testInputIfEmpty(value) {
        //console.log(value);
        return value.trim() === `` ? true : false;
      }

      function createTenary(
        condition1, result1, 
        condition2 = null, result2 = null, finalresult) {
        return condition1 ? (result1) : condition2 ? (result2): finalresult;
      }

      function testInputMoreValue(value) {
        return value.length === 1 ? true : false;
      }
      //const errorName = createTenary(testInputIfEmpty(inputValues.name), 
                                    //<ErrorField>Name is required</ErrorField>, ``)
      /*
      const errorName = testInputIfEmpty(inputValues.name)
                        ? (<ErrorField>Name is Required</ErrorField>) 
                        : testInputMoreValue(inputValues.name)
                        ? (<ErrorField>Name must 
                            have more than one letter</ErrorField>)
                        : ``;
      */
        const errorName = createTenary(
            testInputIfEmpty(inputValues.name), 
            <ErrorField>Name is required</ErrorField>,
            testInputMoreValue(inputValues.name),
            <ErrorField>Name must 
            have more than one letter</ErrorField>, ``);



    //console.log(errorName);
    //console.log(errorDesc.name);
    const errorNumber = inputValues.number.trim()===`` ? 
                    (<span className="errorDesc">{errors.number}</span>) : ``
    const errorDate = inputValues.month.trim()===`` || 
                      inputValues.year.trim()===`` ? 
                    (<span className="errorDesc" id="dateField">{errors.date}</span>) : ``
    const errorCvc = inputValues.cvc.trim()===`` ? 
                    (<span className="errorDesc" id="cvcField">{errors.cvc}</span>) : ``                

    let inputClass = 'form-control';
/*
    const getErrorMessage = () => {
        const errorFields = {};
        const areInputsEmpty = Object.values(inputValues).some(value => value === ``);
        console.log(areInputsEmpty);
        if(areInputsEmpty) {
            console.log(inputValues);
            if(inputValues.name === ``){
                //errorFields.name = errors.name.nameEmpty;
            }
            else if (inputValues.name.length === 1) {
                errorFields.name = <ErrorField>{errors.name.nameValue}</ErrorField>;
                console.log(errorFields);
            }
         }
         //return errorFields;
    }
         */  
    //const errorDescription = getErrorMessage();
    //console.log(errorDescription.name);

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
        setErrors((inputValues) => ({
            ...inputValues,
            name:  {
                nameEmpty:  errorName,
                nameValue: 'Name must have more than one letter',
                nameNumbers: 'Name cannot contain numbers',
            },
            number: 'Wrong format, numbers only',
            date: `Can't be blank`,
            cvc: `Can't be blank`
        }), console.log(inputValues.name)
    );
    },[inputValues]);
    
    

    //Function to handle button click
    const handleButtonClick = () => {
        console.log(isThereError);
                
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
                                onChange={handleInputChange}
                                name='month'
                                errorState={inputValues.month.trim() === '' ? `errorState` : ``}
                                value={inputValues.month}
                            />
                            <Input 
                                type='number'
                                placeholder="YY"
                                col='col'
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
                            onChange={handleInputChange}
                            name='cvc'
                            errorState={inputValues.cvc.trim() === '' ? `errorState` : ``}
                            value={inputValues.cvc}
                        />
                        {errorCvc}
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


export function Input(props) {
    return (
        <input 
            name={props.name}
            value={props.value}
            type={props.type} 
            className={`form-control ${props.errorState} ${props.col} ${props.margin}`} 
            placeholder={props.placeholder}   
            onChange={props.onChange}
        />
    );
}

export function Label({ htmlFor, children }) {
    return (
        <label htmlFor={htmlFor} className='form-label'>{children}</label>
    );
}

export function ErrorField({children}) {
    return (
        <span className="errorDesc">{children}</span>
    );
}