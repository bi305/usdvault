
import { useEffect, useState } from 'react'
import $ from 'jquery';
import ReactPaginate from 'react-paginate'
import TableRows from './TableRows'
import Loader from './Loading';
import TableBody from './TableBody'
import TableHeader from './TableHeader'



const Table = () => {
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [loading, setLoading] = useState(true)
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
    const HeaderData = [
        { id: 1, headerName: 'Id', width: '30px', maxWidth: '30px' },
        { id: 2, headerName: 'Type', width: '30px', maxWidth: '50px' },
        { id: 3, headerName: 'Name', stick: 'firstCol' },
        { id: 4, headerName: 'Price' },
        { id: 5, headerName: '24 Hr' },
        { id: 6, headerName: 'Market Cap' },
        { id: 7, headerName: 'Volume 24Hr	' },
        { id: 8, headerName: 'Circulating Supply' },
        { id: 9, headerName: 'Circulating Supply' },
        { id: 9, headerName: 'Circulating Supply' },
    ]


    const handleChangePagePerRow = (event) => {
        setRowsPerPage(event.target.value)
        console.log(event.target.value)



    }

    useEffect(() => {
        const getCoins = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api`
                );
                const data = await res.json();
                console.log(data)
            }
            catch (error) {
            }
        };


        getCoins();
    }, []);

    let limit = rowsPerPage;
    useEffect(() => {
        const getComments = async () => {
            setLoading(true)
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${limit}`
                );
                const data = await res.json();
                const total = res.headers.get("x-total-count");

                setpageCount(Math.ceil(total / limit));
                setItems(data);
                setLoading(false)
            }
            catch (error) {

                setLoading(false)
            }
        };

        getComments();
    }, [limit]);
    if (loading) {
        return (

            <Loader />

        )
    }

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {

        setLoading(true)
        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setItems(commentsFormServer);

        window.scrollTo(0, 0);

        setLoading(false)
    };


    return (
        <div className="mt-5 " >
            <TableHeader header={HeaderData} />
            <TableBody body={TableRows} jsonPlaceHolder={items} />
            <ReactPaginate
                hrefBuilder={(currentPage) => { <a href={currentPage}>hello</a> }}
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
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
            <select onChange={handleChangePagePerRow} value={rowsPerPage}>
                <option  >10</option>
                <option  >25</option>
                <option  >50</option>
                <option  >100</option>
            </select>
        </div >

    )

}

export default Table
