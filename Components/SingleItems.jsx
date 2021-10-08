import styles from './CardsCarousel.module.css'

const SingleItems = ({ img, news, heading }) => {


    return (
        <div className="d-flex justify-content-center"  >
            <a className={styles.an} href="https://youtu.be/YHtxP4JNfRo" target="_blank" rel="noreferrer">
                <div  >
                    <img className={styles.round_borders} src={img} alt="img" />
                </div>
                <p className={`mt-3  ${styles.para}`}>
                    {heading}
                    <br />
                    <span >
                        {news}
                    </span>
                </p>
            </a>
        </div >
    )

}

export default SingleItems
