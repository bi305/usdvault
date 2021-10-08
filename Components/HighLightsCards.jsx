import styles from './HighLightCards.module.css'
import { Card, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const HighLightsCards = ({ showState }) => {

    return (
        <div>

            {
                showState &&
                <Container fluid>
                    <Row>
                        <Col sm="4">
                            <Card body className={`mt-3  ${styles.border_shadow}   ${styles.rounded_borders}`}>
                                <CardTitle tag="h6" className="d-flex justify-content-between">
                                    <div>
                                        <img src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=c3a94cb" alt="fire" style={{ width: '30px' }} />
                                    </div>
                                    <div>
                                        <h5>

                                            Trending

                                        </h5>

                                    </div>
                                    <div>
                                        <h6  >
                                            <a href="#">

                                                More
                                            </a>
                                        </h6>
                                    </div>
                                </CardTitle>
                                <CardText className={`${styles.Font_13px}`}>




                                    <div className="d-flex justify-content-between  py-2">
                                        <div >
                                            &nbsp; &nbsp;1 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"alt="img" width="15px" alt="img" className="rounded-circle" /> &nbsp; Cardano ADA
                                        </div>
                                        <div>
                                            2.28%
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <div>
                                            &nbsp; 2 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/11954.png" width="15px" className="rounded-circle" /> &nbsp;  xHunter XHT
                                        </div>
                                        <div>
                                            24.98%
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <div>
                                            &nbsp;   3 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/11538.png" alt="img" width="15px" className="rounded-circle" /> &nbsp; Wra ith  WRAITH
                                        </div>
                                        <div>
                                            38.08%
                                        </div>
                                    </div>

                                </CardText>

                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body className={`mt-3   ${styles.border_shadow} ${styles.rounded_borders}`}>
                                <CardTitle tag="h6" className="d-flex justify-content-between">
                                    <div>
                                        <img src="https://s2.coinmarketcap.com/static/cloud/img/GainnerIcon.png?_=5e90013" alt="fire" style={{ width: '30px' }} />
                                    </div>
                                    <div>
                                        <h5>

                                            Biggest Gainer

                                        </h5>

                                    </div>
                                    <div>
                                        <h6  >
                                            <a href="#">

                                                More
                                            </a>
                                        </h6>
                                    </div>
                                </CardTitle>
                                <CardText className={`${styles.Font_13px}`}>




                                    <div className="d-flex justify-content-between  py-2">
                                        <div >
                                            &nbsp; &nbsp;1 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" alt="img" width="15px" className="rounded-circle" /> &nbsp; Cardano ADA
                                        </div>
                                        <div>
                                            2.28%
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <div>
                                            &nbsp; 2 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/11954.png" width="15px" className="rounded-circle" /> &nbsp;  xHunter XHT
                                        </div>
                                        <div>
                                            24.98%
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <div>
                                            &nbsp;   3 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/11538.png" alt="img" width="15px" className="rounded-circle" /> &nbsp; Wra ith  WRAITH
                                        </div>
                                        <div>
                                            38.08%
                                        </div>
                                    </div>

                                </CardText>

                            </Card>
                        </Col>

                        <Col sm="4">
                            <Card body className={`mt-3   ${styles.border_shadow} ${styles.rounded_borders}`}>
                                <CardTitle tag="h6" className="d-flex justify-content-between">
                                    <div>
                                        <img src="https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=5e90013" alt="fire" style={{ width: '30px' }} />
                                    </div>
                                    <div>
                                        <h5>

                                            Recently  Added

                                        </h5>

                                    </div>
                                    <div>
                                        <h6  >
                                            <a href="#">

                                                More
                                            </a>
                                        </h6>
                                    </div>
                                </CardTitle>
                                <CardText className={`${styles.Font_13px}`}>




                                    <div className="d-flex justify-content-between  py-2">
                                        <div >
                                            &nbsp; &nbsp;1 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" alt="img" width="15px" className="rounded-circle" /> &nbsp; Cardano ADA
                                        </div>
                                        <div>
                                            2.28%
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <div>
                                            &nbsp; 2 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/11954.png" alt="img" width="15px" className="rounded-circle" /> &nbsp;  xHunter XHT
                                        </div>
                                        <div>
                                            24.98%
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <div>
                                            &nbsp;   3 &nbsp; <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/11538.png"alt="img" width="15px" className="rounded-circle" /> &nbsp; Wra ith  WRAITH
                                        </div>
                                        <div>
                                            38.08%
                                        </div>
                                    </div>

                                </CardText>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            }
        </div >
    )
}

export default HighLightsCards
