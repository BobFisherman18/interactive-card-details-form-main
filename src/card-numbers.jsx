import circle from "./images/card-logo.svg";

export function CardNumbers() {
    return (
        <>
        <section id="numbers" className="z-0 position-absolute">
            <img src={circle} alt="circle" className="d-block"/> 
            <span id='credit' className="text-center">0000 &nbsp;0000 &nbsp;0000 &nbsp;0000</span>
            <div className="d-flex mt-2">
                <span id="name" className="flex-grow-1">Jane Appleseed</span>
                <span id="date">00/00</span>
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