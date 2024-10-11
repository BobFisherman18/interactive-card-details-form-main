import circle from "./images/card-logo.svg";

export function CardNumbers() {
    return (
        <>
        <section id="numbers" className="z-0 position-absolute">
           <Img src={circle} alt="circle" className="d-block"/>
            <span id='credit' className="text-center">0000 &nbsp;0000 &nbsp;0000 &nbsp;0000</span>
            <div className="d-flex mt-3">
                <Span id="name" className="flex-grow-1">JANE APPLESEED</Span>
                <Span id="date">00/00</Span>
            </div>
        </section>
        </>
    );
}
export function CvcNumbers() {
    return (
        <>
            <span className="z-0 position-absolute" id="cvc">000</span>
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