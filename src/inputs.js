export function Inputs() {
    return (
        <section>
            <div className="mb-3">
            <label htmlFor='name' className="form-label">Cardholder Name</label>
            <input type="text" className="form-control" placeholder="e.g. Jane Appleseed"/>
            </div>
            <div className="mb-3">
            <label htmlFor='num' className="form-label">Card Number</label>
            <input type="number" className="form-control" placeholder="e.g. 1234 5678 9123 0000"/>
            </div>
            <div className="mb-3">
            <label htmlFor='date' className="form-label">Exp. Date(MM/YY)</label>
            <label htmlFor='cvc' className="form-label">CVC</label>
            <section className="row">
                <input type="number" className="form-control col" placeholder="MM"/>
                <input type="number" className="form-control col" placeholder="YY"/>
                <input type="number" className="form-control col" placeholder="e.g. 123"/>
            </section>
            </div>
        </section>
    );
}