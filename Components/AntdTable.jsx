import { Table, Switch } from 'antd';
import React, { useEffect } from 'react';
import "antd/dist/antd.css";
import { Pagination } from 'antd';
import { useRouter } from 'next/router';


const columns = [
    {
        title: 'coin Name',
        width: 100,
        dataIndex: 'noname',
        key: 'name',
        fixed: 'left',

    },
    {
        title: 'id',
        width: 100,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
    },
    {
        title: 'Column 1',
        dataIndex: 'logo',
        key: '1',
        width: 150,
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150,
    },
    {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150,
    },
    {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150,
    },
    {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150,
    },
    {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150,
    },
    {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },

];

const data = []
console.log(data)

const Demo = ({ datas }) => {
    const [Loading, setLoading] = React.useState(false)

    const router = useRouter()
    const alldata = datas.findResult
    const currentPage = datas.currentPage
    const totalItems = datas.totalCoins
    alldata.map((key) => {
        return (
            data.push({
                id: key.id,
                noname: key.Name,
                logo: <> <span>{key.Name}</span> <img src={key.Logo} width="20px" /> </>,
                address: key.Logo,
            }
            ))
    })
    useEffect(() => {
        setLoading(true)
        if (alldata) {
            if (alldata.error) {
                // Handle error
            }
            setLoading(false)
        }
    }, [alldata])



    const [fixedTop, setFixedTop] = React.useState(false);



    return (
        <>
            <Table
                loading={Loading}
                pagination={{
                    onChange: (page, pageSize) => {

                        const path = router.pathname
                        const query = router.query
                        query.page = page
                        router.push({
                            pathname: path,
                            query: query.page === 1 ? '' : query,
                        })
                    },
                    onmouseenter: () => {
                        <a href={page}>{page}</a>
                    }
                }
                }
                columns={columns}
                dataSource={data}
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
                            <Table.Summary.Cell index={2} colSpan={8}>
                                Scroll Context
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={11}>Fix Right</Table.Summary.Cell>
                        </Table.Summary.Row>
                    </Table.Summary>
                )}
                sticky
            />


        </>

    );
};
export default Demo;