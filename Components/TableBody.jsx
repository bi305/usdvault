import styles from './table.module.css'


const TableBody = ({ body, jsonPlaceHolder }) => {

    return (
        <div className={`target_reverse source ${styles.div}`} >
            <div className={styles.rTable}>

                <div className={styles.rTableBody}>

                    {
                        jsonPlaceHolder.map((value) => {
                            return (
                                <div className={styles.rTableRow} >

                                    <div className={styles.rTableCell} style={{ minWidth: '30px' }}>
                                        {value.albumId}
                                    </div>
                                    <div className={styles.rTableCell} style={{ minWidth: '30px' }}>
                                        {value.id}
                                    </div>
                                    <div className={styles.rTableCell} style={{ minWidth: '30px' }}>
                                        {value.title}
                                    </div>
                                    <div className={styles.rTableCell} style={{ minWidth: '30px' }}>

                                        <img src={value.thumbnailUrl} alt="" width='100px' />
                                    </div>
                                    <div className={styles.rTableCell} style={{ minWidth: '30px' }}>

                                        <img src={value.url} classNameName="img-fluid" width='100px' />
                                    </div>
                                    {/* <div className="rTableCell" style={{ minWidth: '30px' }}>
                                    //     {value.RowId}
                                    // </div>
                                    // <div className="rTableCell" style={{ minWidth: '50px' }}>
                                    //     {value.type}
                                    // </div>
                                    // <div className="rTableCell firstCol">

                                    //     <img src={value.img} alt="coin" classNameName="img-fluid mr-2  " width="20px" />
                                    //     <span classNameName=" " style={{ textDecoration: 'none' }}>
                                    //         {value.Name}
                                    //         <span classNameName=" ml-2 badge badge-secondary" style={{ textDecoration: 'none' }} style={{ textDecoration: 'none' }} >
                                    //             {value.coinBadge}
                                    //         </span>
                                    //     </span>
                                    // </div>

                                    // <div className="rTableCell ">
                                    //     {value.Price}
                                    // </div>
                                    // <div className="rTableCell">
                                    //     {value.tfhr}
                                    // </div>
                                    // <div className="rTableCell">
                                    //     {value.MarketCap}
                                    // </div>
                                    // <div className="rTableCell ">
                                    //     {value.Volume24Hr}
                                    // </div>
                                    // <div className="rTableCell">
                                    //     {value.CirculatingSupply}
                                    // </div>

                                    // <div className="rTableCell">
                                    //     {value.hello}
                                    // </div>
                                    // <div className="rTableCell">
                                    //     {value.hello2}
                                    </div> */}


                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>

    )
}

export default TableBody
