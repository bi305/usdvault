import { useState } from 'react';
import Head from 'next/head'
import Table from '../Components/Table';
import CardsCarousel from '../Components/CardsCarousel ';
import NavBar from '../Components/NavBar';
import HighLightsCards from '../Components/HighLightsCards';
function Home({ coinsData }) {




  const [state, setstate] = useState(false)

  const stateHandler = (state) => {
    setstate(state)
  }

  return (


    <div >
      <Head>
        <title>Usd Vault</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"  ></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Red Hat Display"></link>
      </Head>

      <NavBar />
      <CardsCarousel showCard={stateHandler} state={state} />
      <HighLightsCards showState={state} />
      <Table coins={coinsData} />
    </div>
  )
}



export const getServerSideProps = async ({ query }) => {
  // Fetch the first page as default
  // const { page = 1, limit = 10 } = query
  const page = query.page || 1

  let coinsData = null
  // Fetch data from external API
  try {
    const res = await fetch(`http://localhost:5000/api?page=${page}`)
    if (res.status !== 200) {
      throw new Error("Failed to fetch")
    }
    coinsData = await res.json()
  } catch (err) {
    coinsData = { error: { message: err.message } }
  }
  // Pass data to the page via props
  return { props: { coinsData } }
}


export default Home
