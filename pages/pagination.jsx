import Link from 'next/link'
import Router from 'next/router'
// import fetch from 'isomorphic-unfetch'
import React from 'react';

function App(props) {

    return (
        <div>
            <ul>
                {/* {props.items.map(({ title, id }) => (
                        <li key={id}>{title}</li>
                    ))} */}
                {props.items.map((key) => {
                    return (
                        <div>

                            <li>{key.Slug}</li>
                            <li>{key._id}</li>
                        </div>
                    )
                })
                }
            </ul >
            <button
                onClick={() => Router.push(`pagination/?page=${props.page - 1}`)}
                disabled={props.page <= 1}
            >
                PREV
            </button>
            <button onClick={() => Router.push(`pagination/?page=${props.page + 1}`)}>
                NEXT
            </button>
            <Link href="pagination/?page=1">
                <a>First page</a>
            </Link>
        </div >
    )

}
App.getInitialProps = async ({ query: { page = 1 } }) => {
    // const r = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}`)
    const r = await fetch(`http://localhost:5000/api`)
    // const r = await fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json&page=${page}`)
    const d = await r.json()
    return {
        items: d.findResult,
        page: parseInt(page, 10)
    }
}
export default App;