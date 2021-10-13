
// import { useEffect, useState } from 'react'
// import $, { post } from 'jquery';
// import ReactPaginate from 'react-paginate'
// import Loader from './Loading';
// import TableBody from './TableBody'
// import TableHeader from './TableHeader'
// import Router, { withRouter, useRouter } from 'next/router'


// const Table = ({ coinsData, totalPages, cPage, totalCoins, }) => {
//     const [items, setItems] = useState([]);
//     const [pageCount, setpageCount] = useState(1);
//     const [rowsPerPage, setRowsPerPage] = useState(10);
//     // const [loading, setLoading] = useState(true)
//     const router = useRouter()


//     useEffect(() => {
//         (function () {
//             var target = $(".target")[0]; // <== Getting raw element
//             $(".source").scroll(function () {
//                 target.scrollTop = this.scrollTop;
//                 target.scrollLeft = this.scrollLeft;

//             });
//         })();
//         (function () {
//             var upperTarget = $(".target_reverse")[0]; // <== Getting raw element
//             $(".source_reverse").scroll(function () {
//                 upperTarget.scrollTop = this.scrollTop;
//                 upperTarget.scrollLeft = this.scrollLeft;

//             });
//         })();
//     }, []

//     )
//     const HeaderData = [
//         { id: 1, headerName: 'Id', width: '30px', maxWidth: '30px' },
//         { id: 2, headerName: 'Type', width: '30px', maxWidth: '50px' },
//         { id: 3, headerName: 'Name', stick: 'firstCol' },
//         { id: 4, headerName: 'Price' },
//         { id: 5, headerName: '24 Hr' },
//         { id: 6, headerName: 'Market Cap' },
//         { id: 7, headerName: 'Volume 24Hr	' },
//         { id: 8, headerName: 'Circulating Supply' },
//     ]


//     const handleChangePagePerRow = (event) => {
//         setRowsPerPage(event.target.value)
//     }




//     let limit = rowsPerPage;
//     useEffect(() => {
//         const getComments = async () => {
//             // setLoading(true)
//             try {
//                 const res = await fetch(`http://localhost:5000/api?page=1&limit=${limit}`);
//                 const data = await res.json();
//                 const coinsData = data.findResult
//                 const totalsCoins = data.totalCoins;

//                 setpageCount(Math.ceil(totalsCoins / limit));
//                 // setItems(coinsData);
//                 // setLoading(false)


//             }
//             catch (error) {

//                 // setLoading(false)
//             }
//         };

//         getComments();
//     }, [limit]);
//     // if (loading) {
//     //     return (

//     //         <Loader />

//     //     )
//     // }

//     const fetchComments = async (cPage) => {
//         const res = await fetch(
//             `http://localhost:5000/api?page=${cPage}&limit=${limit}`
//         );
//         const data = await res.json();

//         const coinsData = data.findResult
//         return coinsData;
//     };

//     const handlePageClick = async (data) => {

//         const currentPath = router.pathname;
//         const currentQuery = router.query;
//         currentQuery.data = data.selected + 1;

//         router.push({
//             pathname: currentPath,
//             query: currentQuery,
//         });
//         // setLoading(true)
//         // let cPage = data.selected + 1;

//         // const commentsFormServer = await fetchComments(cPage);

//         // setItems(commentsFormServer);

//         // window.scrollTo(0, 0);

//         // setLoading(false)
//     };


//     return (
//         <div className="mt-5 " >
//             <TableHeader header={HeaderData} />
//             <TableBody coinMArketCapData={items} />
//             <ReactPaginate
//                 previousLabel={"Previous"}
//                 nextLabel={"next"}
//                 breakLabel={"..."}

//                 initialPage={cPage - 1}

//                 pageCount={totalPages}
//                 // pageCount={pageCount}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={3}
//                 onPageChange={handlePageClick}
//                 containerClassName={"pagination justify-content-center my-5 "}
//                 pageClassName={"page-item"}
//                 pageLinkClassName={"page-link"}
//                 previousClassName={"page-item"}
//                 previousLinkClassName={"page-link"}
//                 nextClassName={"page-item"}
//                 nextLinkClassName={"page-link"}
//                 breakClassName={"page-item"}
//                 breakLinkClassName={"page-link"}
//                 activeClassName={"active"}
//             />
//             <select onChange={handleChangePagePerRow} value={rowsPerPage}>
//                 <option  >10</option>
//                 <option  >25</option>
//                 <option  >50</option>
//                 <option  >100</option>
//             </select>
//         </div >

//     )

// }
// Table.getInitialProps = async ({ query }) => {
//     const page = query.page || 1; //if page empty we request the first page
//     const posts = await fetch(`http://localhost:5000/api?page=${page}`);

//     return {
//         // props: {
//         coinsData: posts.findResult,
//         totalPages: posts.totalPages,
//         cPage: posts.currentPage,
//         totalCoins: posts.totalCoins
//         // }
//     };
// }

// export default withRouter(Table)

import { useEffect, useState } from 'react'
import $, { post } from 'jquery';
import ReactPaginate from 'react-paginate'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import Router, { withRouter, useRouter } from 'next/router'


const Table = ({ coins }) => {
    const alldata = coins.findResult
    const totalPages = coins.totalPages
    const currentPage = coins.currentPage
    const totalCoins = coins.totalCoins
    const router = useRouter()
    useEffect(() => {
        (function () {
            var target = $(".target")[0]; // <== Getting raw element
            $(".source").scroll(function () {
                target.scrollTop = this.scrollTop;
                target.scrollLeft = this.scrollLeft;

            });
        })();
        (function () {
            var upperTarget = $(".target_reverse")[0]; // <== Getting raw element
            $(".source_reverse").scroll(function () {
                upperTarget.scrollTop = this.scrollTop;
                upperTarget.scrollLeft = this.scrollLeft;

            });
        })();
    }, []

    )

    const [loading, setLoading] = useState(false)
    const startLoading = () => setLoading(true)
    const stopLoading = () => setLoading(false)
    useEffect(() => {
        // Router event handler
        Router.events.on("routeChangeStart", startLoading)
        Router.events.on("routeChangeComplete", stopLoading)
        return () => {
            Router.events.off("routeChangeStart", startLoading)
            Router.events.off("routeChangeComplete", stopLoading)
        }
    }, [])

    const HeaderData = [
        { id: 1, headerName: 'Id', width: '30px', maxWidth: '30px' },
        { id: 2, headerName: 'Type', width: '30px', maxWidth: '50px' },
        { id: 3, headerName: 'Name', stick: 'firstCol' },
        { id: 4, headerName: 'Price' },
        { id: 5, headerName: '24 Hr' },
        { id: 6, headerName: 'Market Cap' },
        { id: 7, headerName: 'Volume 24Hr	' },
        { id: 8, headerName: 'Circulating Supply' },
    ]

    const [coinss, setCoins] = useState([])
    useEffect(() => {

        if (alldata) {
            if (alldata.error) {
                // Handle error
            } else {
                // Set users from userData
                setCoins(alldata)
            }


        }
    }, [alldata])


    const indexPageUrl = window.location.search
    useEffect(() => {
        if (indexPageUrl == '?page=1') {
            router.push(`${window.location.origin}`, undefined, { shallow: true })
        }
        console.log(window.location.origin)



    }, [indexPageUrl])



    const handlePagination = page => {

        const path = router.pathname
        const query = router.query
        query.page = page.selected + 1
        router.push({
            pathname: path,
            query: query,
        })
    }



    return (
        <div className="mt-5 " >
            <TableHeader header={HeaderData} />
            <TableBody coinMArketCapData={coinss} />


            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                initialPage={currentPage - 1}
                pageCount={totalPages}
                onPageChange={handlePagination}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                containerClassName={"pagination justify-content-center my-5 "}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />

        </div >

    )

}



export default withRouter(Table)
