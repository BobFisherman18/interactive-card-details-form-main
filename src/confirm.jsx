

export function Confirm() {
    function handleClick() {
        alert("Clicked!");
        
    }
    return (
        <div className="d-grid">
        <button className="btn my-3" onClick={handleClick}>
            Confirm
        </button>
        </div>
    );
}