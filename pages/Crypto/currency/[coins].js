import NavBar from '../../../Components/NavBar';
const coins = () => {
    return (
        <div>
            <NavBar />

        </div>
    )
}

export const getServerSideProps = (context) => {
    console.log(context)
    return { props: {} }
}
export default coins
