import styles from './table.module.css'


const TableBody = ({ coinMArketCapData }) => {

    return (
        <div className={`target_reverse source ${styles.div}`} >
            <div className={styles.rTable}>

                <div className={styles.rTableBody}>

                    {
                        coinMArketCapData.map((value) => {
                            return (
                                <div className={styles.rTableRow} key={value._id} >


                                    <div className={styles.rTableCell} style={{ minWidth: '30px', }}>
                                        {value.id}
                                    </div>
                                    <div className={styles.rTableCell} style={{ minWidth: '50px', }}>
                                        {value.Category}
                                    </div>
                                    <div className="rTableCell firstCol">

                                        <img src={value.Logo} alt="coin" classNameName="img-fluid mr-2  " width="20px" />
                                        <span className=" " style={{ textDecoration: 'none' }}>
                                            {value.Symbol}
                                            <span className=" ml-2 badge badge-secondary" style={{ textDecoration: 'none' }} style={{ textDecoration: 'none' }} >
                                                {value.coinBadge}
                                            </span>
                                        </span>
                                    </div>

                                    <div className="rTableCell ">
                                        { }
                                    </div>
                                    <div className={styles.rTableCell}>
                                        {value.tfhr}
                                    </div>
                                    <div className={styles.rTableCell}>
                                        {value.MarketCap}
                                    </div>
                                    <div className="rTableCell ">
                                        {value.Volume24Hr}
                                    </div>
                                    <div className={styles.rTableCell}>
                                        {value.CirculatingSupply}
                                    </div>




                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div >

    )
}

export default TableBody
