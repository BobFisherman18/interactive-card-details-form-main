import { Confirm } from './confirm.jsx';

export function Inputs() {
    const marginBottom = "mb-3";
    return (
        <section id="inputs" className="mx-4">
            <div className={marginBottom}>
                <label htmlFor='name' className="form-label">CARDHOLDER NAME</label>
                <input type="text" className="form-control" placeholder="e.g. Jane Appleseed"/>
            </div>
            <div className="mb-3">
                <label htmlFor='num' className="form-label">CARD NUMBER</label>
                <input type="number" className="form-control" placeholder="e.g. 1234 5678 9123 0000"/>
            </div>
            <div className="mb-3">
                <section className="row">
                <div className="col"> 
                    <label htmlFor='date' className="form-label">EXP. DATE(MM/YY)</label>
                    <div className="row">
                        <input type="number" className="form-control col me-2" placeholder="MM"/>
                        <input type="number" className="form-control col" placeholder="YY"/>
                    </div>
                </div>
                    <div className="col">
                        <label htmlFor='cvc' className="form-label">CVC</label>
                        <input type="number" className="form-control" placeholder="e.g. 123"/>
                    </div>
                </section>
            </div>
            <Confirm />
        </section>
    );
}
export function Input() {
    return (
        <>

        </>
    );
}