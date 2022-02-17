import {Operation} from "../../entities/Operation";
import React from "react";
import {OperationItem} from "../OperationItem/OperationItem";
import "./OperationList.scss"

type Props = {
    operations: Operation[]
}

export const OperationsList: React.FC<Props> = ({operations}) => {
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
                    operations.map((operation, i) => (
                        <OperationItem
                            Left={operation.Left}
                            Right={operation.Right}
                            Operator={operation.Operator}
                            Result={operation.Result}
                            CreatedAt={operation.CreatedAt}
                        />
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}