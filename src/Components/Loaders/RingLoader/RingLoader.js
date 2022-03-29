import './ringloader.css'

export const RingLoader = () => {
    return (

        <div className="loadingbody">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}