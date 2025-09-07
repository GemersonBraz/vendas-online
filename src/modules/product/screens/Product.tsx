
import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests"
import type { ProductType } from "../types/ProductType";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import type { ColumnsType } from "antd/es/table";
import { Space } from "antd";
import { Table } from "antd";



const columns: ColumnsType<ProductType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Preco',
        dataIndex: 'price',
        key: 'price',
    },

    {
        title: 'Action',
        key: 'action',
        render: (_, { name }) => (
            <Space size="middle">
                <a>Invite {name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];



const Product = () => {
    const { products, setProducts } = useDataContext();
    const { request } = useRequests();


    useEffect(() => {
        request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);

    }, []);

    return <Table columns={columns} dataSource={products} />;

};

export default Product;