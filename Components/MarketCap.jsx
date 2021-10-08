
import { useState } from 'react'
import styles from './MarketCap.module.css'
import HighLights from './HighLights'

const info = <div>  The total crypto market volume over the last 24 hours is $95.01B, which makes a 11.04%    increase. The total volume in DeFi is currently $14.70B, 15.47% of the total crypto market 24-hour <br />volume. The volume of all stable coins is now $73.27B, which is 77.12% of the total crypto market 24-hour <br />volume.

    Bitcoin's price is currently $45,636.86.

    Bitcoin’s dominance is currently 42.65%, an increase of 0.49% over the day</div>
const MarketCap = ({ showCard, state }) => {

    const [readMore, setReadMore] = useState(false)

    

    return (
        <>
            <div className={`${styles.sapce_between} ${styles.ml}`} >

                <div className={styles}>
                    <h4>
                        Today's Cryptocurrency Prices by Market Cap
                    </h4>
                    <p className={styles.para}>

                        The global crypto market cap is $2.02T, a 6.16% decrease over the last day.
                        <span onClick={() => { setReadMore(!readMore) }}>
                            {readMore ? <span> Read Less </span> : <span> Read More</span>}</span>
                        {readMore && <p className={styles.inner_para}>{info}</p>}
                    </p>
                </div>
                <div>
                    <HighLights showCard={showCard} state={state} />
                </div>

            </div>

        </>
    )
}

export default MarketCap
