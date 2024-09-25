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
        return value.trim() === `` ? true : false;
      }

      function createTenary(
        condition1, result1, 
        condition2 = null, result2 = null, 
        condition3 = null, result3 = null,
        finalresult) {
        return condition1 ? (result1) : 
               condition2 ? (result2) : 
               condition3 ? (result3) :
               finalresult;
      }

      function testInputMoreValue(value) {
        return value.length === 1 ? true : false;
      }

      function changeErrorBorder(
        condition1, condition2 = null, 
        condition3 = null, errorClass, finalresult) {
        return condition1 || condition2 || condition3 ? errorClass : finalresult;
      }
      function testName(value) {
        let numExp = /[^a-zA-Z\s]/gm;
        return numExp.test(value);
      }
      function testNumber(value) {
        let onlyNumbers = /^[0-9]*$/gm;
        return onlyNumbers.test(value);
      }
      //testNameIfNum(inputValues.name);
     // const test = testName(inputValues.name);
      console.log(testNumber(inputValues.number));
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
        let errorName = createTenary(
            testInputIfEmpty(inputValues.name), 
            <ErrorField>Name is required</ErrorField>,
            testInputMoreValue(inputValues.name),
            <ErrorField>Name must have more 
            than one letter</ErrorField>, 
            testName(inputValues.name),
            <ErrorField>Name cannot contain 
            numbers or special characters
            </ErrorField>, ``);

        let errorNameInput = changeErrorBorder(
            testInputIfEmpty(inputValues.name),
            testInputMoreValue(inputValues.name),
            testName(inputValues.name),
            'errorState', ``);

        let errorNumber = createTenary(
            testInputIfEmpty(inputValues.number),
            <ErrorField>Card number is required</ErrorField>,
            testNumber(inputValues.number),
            <ErrorField>Wrong format, numbers only</ErrorField>,``);
        /*
        let errorNumberInput = 
        testInputIfEmpty(inputValues.number) || testNumber(inputValues.number) || null
        ? 'errorState': ``;
        */
        let errorNumberInput = changeErrorBorder(
            testInputIfEmpty(inputValues.number),
            testNumber(inputValues.number), null,
            `errorState`, ``);
        
        /*
        changeErrorBorder(
            testInputIfEmpty(inputValues.number), 
            testNumber(inputValues.number), 
            'errorState', ``);
            console.log(errorNameInput);
            */
            



    //console.log(errorName);
    //console.log(errorDesc.name);
    //const errorNumber = inputValues.number.trim()===`` ?  
                    //(<span className="errorDesc">{errors.number}</span>) : ``
    const errorDate = inputValues.month.trim()===`` || 
                      inputValues.year.trim()===`` ? 
                    (<span className="errorDesc" id="dateField">{errors.date}</span>) : ``
    const errorCvc = inputValues.cvc.trim()===`` ? 
                    (<span className="errorDesc" id="cvcField">{errors.cvc}</span>) : ``                
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

    // Allow only numbers
    const onlyNum = /^[0-9]*$/;

    let numInputs = name === 'month' || 
                    name === 'year' ||
                    name === 'cvc';
    
    if (numInputs) {
        if (onlyNum.test(value)) {
            setInputValues((prevValues) => ({
                ...prevValues,
                [name]: value
            }));
        }
    }
    else {
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value
          })); 
    }
}
    /*
    useEffect(() => {
        setErrors((inputValues) => ({
            ...inputValues,
            name:  {
                nameEmpty:  errorName,
                nameValue: '',
                nameNumbers: 'Name cannot contain numbers',
            },
            number: errorNumber,
            date: `Can't be blank`,
            cvc: `Can't be blank`
        }), console.log(inputValues.name)
    );
    },[inputValues]);
    */
    

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
                    errorState={errorNameInput}
                    value={inputValues.name}
                />
            </InputField>
            <InputField errorDesc={errorNumber}>
                <Label htmlFor='num'>CARD NUMBER</Label>
                <Input 
                  type='text'
                  placeholder="e.g. 1234 5678 9123 0000"
                  onChange={handleInputChange}
                  name='number'
                  errorState={errorNumberInput}
                  value={inputValues.number}
                  maxLength={16}
                />
            </InputField>
            <InputField>
                <InputField className="row">
                    <InputField className="col">
                        <Label htmlFor='date'>EXP. DATE(MM/YY)</Label>
                        <InputField className="row" errorDesc={errorDate}>
                            <Input 
                                type='text'
                                placeholder="MM"
                                col='col'
                                margin='me-2'
                                onChange={handleInputChange}
                                name='month'
                                errorState={inputValues.month.trim() === '' ? `errorState` : ``}
                                value={inputValues.month}
                                maxLength={2}
                            />
                            <Input 
                                type='text'
                                placeholder="YY"
                                col='col'
                                onChange={handleInputChange}
                                name='year'
                                errorState={inputValues.year.trim() === '' ? `errorState` : ``}
                                value={inputValues.year}
                                maxLength={2}
                            />
                        </InputField >
                    </InputField>
                    <InputField className="col">
                        <Label htmlFor='cvc'>CVC</Label>
                        <Input 
                            type='text'
                            placeholder='e.g. 123'
                            onChange={handleInputChange}
                            name='cvc'
                            errorState={inputValues.cvc.trim() === '' ? `errorState` : ``}
                            value={inputValues.cvc}
                            maxLength={3}
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


export function Input({
    name, value, type,
    errorState, col, margin, 
    placeholder, onChange,
    maxLength = null

}) {
    return (
        <input 
            name={name}
            value={value}
            type={type} 
            className={`form-control ${errorState} ${col} ${margin}`} 
            placeholder={placeholder}   
            onChange={onChange}
            maxLength={maxLength}
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