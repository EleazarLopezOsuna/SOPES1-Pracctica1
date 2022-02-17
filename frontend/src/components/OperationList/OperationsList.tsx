import React from "react";
import {OperationItem} from "../OperationItem/OperationItem";
import "./OperationList.scss"

// @ts-ignore
export const OperationsList = ({operations}) => {

    return (
        <div className="operation-scrollable">
            <table className="operation-table">
                <thead>
                <tr>
                    <th className="operation-table-head">Left</th>
                    <th className="operation-table-head">Operator</th>
                    <th className="operation-table-head">Right</th>
                    <th className="operation-table-head">Result</th>
                    <th className="operation-table-head">CreatedAt</th>
                </tr>
                </thead>
                <tbody>
                {
                    operations.map((operation: {
                        id: string;
                        left: number;
                        right: number;
                        operator: string;
                        result: number;
                        created_at: string; }) => (
                        <OperationItem
                            Id={operation.id}
                            Left={operation.left}
                            Right={operation.right}
                            Operator={operation.operator}
                            Result={operation.result}
                            CreatedAt={operation.created_at}
                        />
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}