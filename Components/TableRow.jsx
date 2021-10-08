import tableStyle from './table.module.css'

const TableRow = (props) => {
    return (

        <tr className={tableStyle.tr}>
            <td className={tableStyle.tbodycenter}>{props.id}</td>
            <td className={tableStyle.tbodycenter}>{props.Type}</td>
            <td className={tableStyle.tbodyleft}>{props.Name}</td>
            <td className={tableStyle.tbodyright}>{props.Price}</td>
            <td className={tableStyle.tbodycenter}>{props.tfHr}</td>
            <td className={tableStyle.tbodycenter}>{props.oHr}</td>
            <td className={tableStyle.tbodycenter}>{props.tMs}</td>
            <td className={tableStyle.tbodycenter}>{props.oM}</td>
            <td className={tableStyle.tbodycenter}>{props.MarketCap}</td>
            <td className={tableStyle.tbodycenter}>{props.Volume24Hr}</td>
            <td className={tableStyle.tbodycenter}>{props.CirculatingSupply}</td>
            <td className={tableStyle.tbodycenter}>{props.MarketCap}</td>
            <td className={tableStyle.tbodycenter}>{props.Volume24Hr}</td>
            <td className={tableStyle.tbodycenter}>{props.CirculatingSupply}</td>
            <td className={tableStyle.tbodycenter}>{props.MarketCap}</td>
            <td className={tableStyle.tbodycenter}>{props.Volume24Hr}</td>
            <td className={tableStyle.tbodycenter}>{props.CirculatingSupply}</td>
            <td className={tableStyle.tbodycenter}>{props.MarketCap}</td>
            <td className={tableStyle.tbodycenter}>{props.Volume24Hr}</td>
            <td className={tableStyle.tbodycenter}>{props.CirculatingSupply}</td>

        </tr>

    )
}

export default TableRow
