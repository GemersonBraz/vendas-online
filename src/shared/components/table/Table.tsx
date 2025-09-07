import TableAntD from "antd/es/table";
import type { TableProps } from "antd/es/table";

function Table<RecordType extends object = any>(props: TableProps<RecordType>) {


    return <TableAntD {...props} />
};

export default Table;