import "react-multi-carousel/lib/styles.css";
import SingleItems from './SingleItems'
const cardItem = ({ data }) => {


    return (
        <div>

            < SingleItems
                key={data.id}
                img={data.img}
                news={data.news}
                heading={data.heading}
            />


        </div>
    )
}

export default cardItem
