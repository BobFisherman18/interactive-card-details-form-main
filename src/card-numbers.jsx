import { useContext } from "react";
import circle from "./images/card-logo.svg";
import { InputsContext } from "./inputs.jsx";



export function CardNumbers() {

    const { inputValues } = useContext(InputsContext);
    const nbsp = '\u00A0';

    
    return (
        <>
        <section id="numbers" className="z-0 position-absolute">
           <Img src={circle} alt="circle" className="d-block"/>
            <Span id="credit" className="text-center">{ inputValues.number || `0000${nbsp}0000${nbsp}0000${nbsp}0000`}</Span>
            <div className="d-flex mt-3">
                <Span id="name" className="flex-grow-1">{inputValues.name || "Jane AppleSeed"}</Span>
                <Span id="date">{`${inputValues.month + '/' + inputValues.year}` || '00/00'}</Span>
            </div>
        </section>
        </>
    );
}
export function CvcNumbers() {
    const { inputValues } = useContext(InputsContext);

    return (
        <>
            <Span id='cvc' className='z-0 position-absolute'>{inputValues.cvc || '000'}</Span>
        </>
    );
}

export function Img({src, alt, className = null}) {
    return (
        <img src={src} alt={alt} className={className}/>
    );
}

export function Span({id, className, children}) {
    return (
        <span id={id} className={className}>{children}</span>
    );
}