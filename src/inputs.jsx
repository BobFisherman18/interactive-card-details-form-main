import React, { useState, createContext, useEffect, useContext, useRef, forwardRef } from "react";

export const InputsContext = createContext();

export function InputsProvider({children}) {
    const [inputValues, setInputValues] = useState({
        name:'',
        number: '',
        month: '',
        year: '',
        cvc: ''
      });

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

      return (
        <InputsContext.Provider value={{inputValues, handleInputChange}}>
            {children}
        </InputsContext.Provider>
      );
}


export function Inputs() {

    const { inputValues, handleInputChange } = useContext(InputsContext);
    const [margin, setMargin] = useState(24);
    const [marginClass, setMarginClass] = useState(true);


    useEffect(() => {
      const handleResize = () => {
        // Set margin to the current window width
        if (window.innerWidth >= 576) {
            setMarginClass(!marginClass);
            setMargin(margin => (margin < 60 ? margin + 1 : margin));
        } else {
            setMarginClass(marginClass);
            setMargin(24);
        }
      };
  
      window.addEventListener('resize', handleResize);
      
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    useEffect(() => {
        console.log(margin);
        if (margin === 60) {
            setMargin(60);
        }
    }, [margin]);
  

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
      //Must put null when conditions are not all filled
      function changeErrorBorder(
        condition1, 
        condition2 = null, 
        condition3 = null, 
        errorClass, finalresult) {
        return condition1 || condition2 || condition3 ? errorClass : finalresult;
      }
      function testName(value) {
        let numExp = /[^a-zA-Z\s]/gm;
        return numExp.test(value);
      }
      function testNumber(value) {
        let onlyNumbers = /[^0-9]/g;
        return onlyNumbers.test(value);
      }
      function testNumberLength(value, length) {
        //console.log(value.length);
        return value.length !== length ? true : false;
      }

      function testNumberYear(value) {
        console.log(Number(value));
      }

      //testNumberYear(inputValues.month);
        let errorName = createTenary(
            testInputIfEmpty(inputValues.name), 
            <ErrorField>Name is required</ErrorField>,
            testInputMoreValue(inputValues.name),
            <ErrorField>Name must have more 
            than one letter</ErrorField>, 
            testName(inputValues.name),
            <ErrorField> Cannot contain 
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
            <ErrorField>Wrong format, numbers only</ErrorField>,
            testNumberLength(inputValues.number, 16),
            <ErrorField>Card number must have 16 digits</ErrorField>, ``);

        let errorNumberInput = changeErrorBorder(
            testInputIfEmpty(inputValues.number),
            testNumber(inputValues.number), testNumberLength(inputValues.number, 16),
            `errorState`, ``);

        let errorDate = createTenary(
            testInputIfEmpty(inputValues.month) && testInputIfEmpty(inputValues.year),
            <ErrorField id='dateField'>Can't be blank</ErrorField>,
            testInputIfEmpty(inputValues.month),
            <ErrorField id='dateField'>MM can't be blank</ErrorField>,
            testInputIfEmpty(inputValues.year),
            <ErrorField id='dateField'>YY can't be blank</ErrorField>, ``);
        
        let errorCvc = createTenary(
            testInputIfEmpty(inputValues.cvc),
            <ErrorField id='cvcField'>Can't be blank</ErrorField>, 
            testNumberLength(inputValues.cvc, 3),
            <ErrorField id='cvcField'>Must have 3 digits</ErrorField>, ``);

        let errorCvcInput = changeErrorBorder(
            testInputIfEmpty(inputValues.cvc),
            testNumberLength(inputValues.cvc, 3),
            null, 'errorState', ``);
        
       
    //Function to handle button click
    const handleButtonClick = () => {
        console.log(isThereError);
                
    };
    
    return (
        <section 
        id="inputs" 
        className={marginClass ? 'mx-4' : ``} 
        style={{margin: `90px ${margin}px 0` }}>
            <form>
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
                    <InputField className="row" id='dateAndCvcField'>
                        <InputField className="col" id='dateField'>
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
                        <InputField className="col" id='cvcField'>
                            <Label htmlFor='cvc'>CVC</Label>
                            <Input 
                                type='text'
                                placeholder='e.g. 123'
                                onChange={handleInputChange}
                                name='cvc'
                                errorState={errorCvcInput}
                                value={inputValues.cvc}
                                maxLength={3}
                            />
                            {errorCvc}
                        </InputField>
                    </InputField>
                </InputField>
                <InputField className="d-grid" id='confirmField'>
                    <Button margin='my-3'onClick={handleButtonClick}>
                        Confirm   
                    </Button> 
                </InputField>
            </form>
        </section>
    );
}
export function Button({ margin, onClick, children }) {
    return (
        <button className={`btn ${margin}`} onClick={onClick}>{children}</button>
    );
}
export function InputField({ className='mb-3', children, id=null, errorDesc }) {
    return (
    <>
        <div className={className} id={id}>
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

export function ErrorField({id = null, children}) {
    return (
        <span className="errorDesc" id={id}>{children}</span>
    );
}