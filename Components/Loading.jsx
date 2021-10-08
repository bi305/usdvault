import Loader from "react-loader-spinner";
// import '../App.css'


const Loading = () => {
    return (
        <div className="spinner">
            <Loader
                type="TailSpin"
                radius={5}
                color="#217E9A"
                height={170}
                width={170}
                timeout={9000}
            />
        </div>
    )
}

export default Loading
