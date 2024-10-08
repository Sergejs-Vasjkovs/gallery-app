import "./Loader.css";

export const Loader = () => {
    return (
        <div className="full-page">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
