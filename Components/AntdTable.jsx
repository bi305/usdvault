import { Table, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css";
import { useRouter } from 'next/router';

// ID, Type, Name, Price, 24Hr, Market Cap, Volume 24Hr, Circulating Supply
const columns = [
    {
        title: 'Id',
        width: 100,
        dataIndex: 'id',
        key: 'name',
        fixed: 'left',

    },
    {
        title: 'Name',
        width: 100,
        dataIndex: 'nm',
        key: 'id',
        fixed: 'left',
    },
    {
        title: 'Price',
        dataIndex: 'logo',
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
                    `http://api.usdvault.com/get/table?page=${pageSize}&limit=${limit}`
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
                loading={Loading}
                columns={columns}
                dataSource={alldata}
                pagination={{
                    defaultCurrent: 1,
                    total: TotalPage,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    defaultPageSize: 20,

                    onChange: (page, pageSize) => {
                        console.log(page, pageSize)
                        setPage(page);
                        setrowsPerPage(pageSize);

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