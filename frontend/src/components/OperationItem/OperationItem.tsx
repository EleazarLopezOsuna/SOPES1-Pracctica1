import {Operation} from "../../entities/Operation";
import React from "react";
import "./OperationItem.scss"

export const OperationItem: React.FC<Operation> = ({Id, Left, Operator, Right, Result, CreatedAt}) => {
    return (
        <tr className="operation-table-row">
            <td className="operation-table-cell">{Left}</td>
            <td className="operation-table-cell">{Operator}</td>
            <td className="operation-table-cell">{Right}</td>
            <td className="operation-table-cell">{Result}</td>
            <td className="operation-table-cell">{CreatedAt}</td>
        </tr>
    )
}