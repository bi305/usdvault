

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from "./CardItem"; 
import MarketCap from "./MarketCap";



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1200, min: 992 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 992, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 475 },
        items: 1
    }
};

const cardData = [
    {

        id: 1,
        img: "https://s2.coinmarketcap.com/static/new-alerts/61152052bcaa350012b435d2/img/1631984817006_Sep-17-Daily-Thumbnail_280x136.jpg",
        heading: "Daily News",
        news: "Movie Theaters to Accept Crypto"
    },
    {
        id: 2,
        img: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/613ff90685133600192a3b73/img/1631583329130_Youtube-NFT_290x136.jpg",
        heading: "You Tube  Events",
        news: "Subscribe to YouTube and Win"
    },
    {
        id: 3,
        img: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1631754270064_Frame%2048.png",
        heading: "Tuesday Tutorial",
        news: " Hidden Features of CoinMarketCap"
    },
    {

        id: 4, img: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1631754270064_Frame%2048.png",

        heading: "Token Airdrop",
        news: "Join $100K Radio Caca Airdrop!"
    },
    {
        id: 5,
        img: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/61152052bcaa350012b435d2/img/1631805775333_BTC ATM Set on Fire.jpg",
        heading: "Learn  and  Earn",
        news: "learn  about NFTB"
    },
    {
        id: 6,
        img: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/61152052bcaa350012b435d2/img/1631805775333_BTC ATM Set on Fire.jpg",
        heading: "Daily News",
        news: "Sept 16: BTC ATM Set on Fire"
    },
    {
        id: 7,
        img: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/61152052bcaa350012b435d2/img/1631805775333_BTC ATM Set on Fire.jpg",
        heading: "Daily News",
        news: "Sept 16: BTC ATM Set on Fire"
    },
    {
        id: 8,
        img: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/61152052bcaa350012b435d2/img/1631805775333_BTC ATM Set on Fire.jpg",
        heading: "Daily News",
        news: "Sept 16: BTC ATM Set on Fire"
    },
    {
        id: 9,
        img: "https://s3.amazonaws.com/s2.coinmarketcap.com/static/new-alerts/61152052bcaa350012b435d2/img/1631805775333_BTC ATM Set on Fire.jpg",
        heading: "Daily News",
        news: "Sept 16: BTC ATM Set on Fire"
    },

];


const CardsCarousel = ({ showCard, state }) => {

    // const stateHandler = (state) => {
    //     showCard(state)
    // }
    return (
        <>
            <div>

                <Carousel
                    slidesToSlide={2}
                    responsive={responsive}
                    focusOnSelect={true}
                    arrows
                    className="mt-5 "
                    dotListClass=""
                    draggable
                    itemClass="mt-5"
                    keyBoardControl={true}
                >
                    {
                        cardData.map((data) => {
                            return (
                                < CardItem key={data.id} data={data} />
                            )
                        })

                    }
                </Carousel >

                <MarketCap showCard={showCard} state={state} />
            </div>




        </>

    )
}

export default CardsCarousel
