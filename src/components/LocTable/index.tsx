import React from "react";
import style from './index.less';

interface IProps{
    locsData: {
        id: number,
        name: string,
        address: string,
        latitude: number,
        longtitude: number
    }[]
}

const TypeChoose: React.FC<IProps> = (props) => {
    return (
        <div>
            <table className={style.table}>
                <thead>
                    <tr className={style.head}>
                        <th>地点ID</th>
                        <th>场景名称</th>
                        <th>详细地址</th>
                        <th>坐标位置</th>
                    </tr>
                </thead>
                <tbody>
                    {props.locsData.map((loc, index) => {
                        return (
                            <tr key={index}>
                                <td>{loc.id}</td>
                                <td>{loc.name}</td>
                                <td>{loc.address}</td>
                                <td>{loc.latitude + ", " + loc.longtitude}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TypeChoose