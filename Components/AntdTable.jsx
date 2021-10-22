import { Table, Switch, Tag } from 'antd';
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import { useRouter } from 'next/router';
import { style } from '@mui/system';

const columns = [
    {
        title: 'Id',
        width: 50,
        dataIndex: 'rk',
        key: 'name',
        fixed: 'left',

    },
    {
        title: 'Name',
        width: '160px',
        key: 'id',
        fixed: 'left',
        render: function (text, record, index) {
            return (
                <>

                    < div style={{}}>
                        <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="logo" width="25px" />

                        <span className="mx-2" style={{ fontSize: "13px", fontWeight: "bolder" }}>
                            <Link href={`/Crypto/currency/` + record.sl}>{record.nm}</Link></span>

                        <Tag style={{ borderRadius: '7px' }}>{record.sm}</Tag>
                    </div >

                </>
            )
        }
    },
    {
        title: 'Price',
        dataIndex: 'pr',
        key: '1',
        width: 150,
    },
    {
        title: '24Hr',
        dataIndex: 'tfHrc',
        key: '2',
        width: 150,
    },
    {
        title: 'Market Cap',
        dataIndex: 'mc',
        key: '3',
        width: 150,
    },
    {
        title: 'Volume 24Hr',
        dataIndex: 'vtfHr',
        key: '4',
        width: 150,
    },
    {
        title: 'Circulating Supply',
        dataIndex: 'cs',
        key: '5',
        width: 150,
    },


];

const Demo = () => {

    const router = useRouter()
    const [fixedTop, setFixedTop] = React.useState(false);
    const [coinData, setcoinData] = useState([])
    const [Page, setPage] = useState(1);
    const [rowsPerPage, setrowsPerPage] = useState(20)
    const [Loading, setLoading] = useState(false)

    let limit = rowsPerPage;
    let pageSize = Page
    useEffect(() => {

        const getCoins = async () => {
            setLoading(true)
            try {
                const res = await fetch(
                    `http://get.usdvault.com/home/coin-table?page=${pageSize}&limit=${limit}`
                );
                const data = await res.json();

                setcoinData(data);

            }

            catch (error) {

                setLoading(false)
            }
            setLoading(false)

        };

        getCoins();
    }, [limit, pageSize]);

    const alldata = coinData.data
    const TotalPage = coinData.totalCoins


    return (
        <>

            <Table
                // loading={Loading}
                columns={columns}
                dataSource={alldata}
                pagination={{
                    defaultCurrent: 1,
                    total: TotalPage,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    defaultPageSize: 20,
                    onChange: (page, pageSize) => {
                        setPage(page);
                        setrowsPerPage(pageSize);
                        const path = router.pathname
                        const query = router.query
                        query.page = page
                        router.push({
                            pathname: path,
                            query: query.page === 1 ? '' : query,
                        })
                    },
                }}

                scroll={{ x: 1500 }}
                summary={pageData => (
                    <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0} colSpan={2}>
                                <Switch
                                    checkedChildren="Fixed Top"
                                    unCheckedChildren="Fixed Top"
                                    checked={fixedTop}
                                    onChange={() => {
                                        setFixedTop(!fixedTop);
                                    }}
                                />
                            </Table.Summary.Cell>

                        </Table.Summary.Row>
                    </Table.Summary>
                )}
                sticky

            />


        </>

    );
};
export default Demo;