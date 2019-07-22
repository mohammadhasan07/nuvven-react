import React, { Fragment, Component } from 'react';
import { Checkbox, Row, Col, Table } from 'antd';

let data = [
    {
        key: '1',
        id: '0084',
        created_by: 'Jamie Clark',
        acr: 'IDMR',
        customer_name: 'Sayantan Chandra',
        pdate_time: '29-03-2019 9:00AM',
        location: 'New York No. 1 Lake Park',
        status: 'Quote Sent',
    },
    {
        key: '2',
        id: '0085',
        created_by: 'Jamie Clark',
        acr: 'IWMR',
        customer_name: 'Soumyojyoti Majumder',
        pdate_time: '29-03-2019 9:00AM',
        location: 'New York No. 1 Lake Park',
        status: 'Quote Sent',
    },
    {
        key: '3',
        id: '0086',
        created_by: 'Jamie Clark',
        acr: 'IDAR',
        customer_name: 'Mohammad Hassan',
        pdate_time: '29-03-2019 9:00AM',
        location: 'New York No. 1 Lake Park',
        status: 'Quote Sent',
    },
    {
        key: '4',
        id: '0087',
        created_by: 'Jamie Clark',
        acr: 'FDAR',
        customer_name: 'Mohammad Hassan',
        pdate_time: '29-03-2019 9:00AM',
        location: 'New York No. 1 Lake Park',
        status: 'Quote Sent',
    },
    {
        key: '5',
        id: '0088',
        created_by: 'Jamie Clark',
        acr: 'FDAR',
        customer_name: 'Mohammad Hassan',
        pdate_time: '29-03-2019 9:00AM',
        location: 'New York No. 1 Lake Park',
        status: 'Quote Sent',
    },
    {
        key: '6',
        id: '0089',
        created_by: 'Jamie Clark',
        acr: 'FDAR',
        customer_name: 'Mohammad Hassan',
        pdate_time: '29-03-2019 9:00AM',
        location: 'New York No. 1 Lake Park',
        status: 'Quote Sent',
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}
export default class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            def: []
        }
    }

    componentWillMount() {
        this.setState({ def: data })
    }
    OpenModal(value) {
        console.log(value)
        data = this.state.def
        return false;
    }

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                fixed: 'left',
                width: 80,
            },
            {
                title: 'Created By',
                dataIndex: 'created_by',
            },
            {
                title: 'ACR',
                dataIndex: 'acr',
            },
            {
                title: 'Customer Name',
                dataIndex: 'customer_name',
            },
            {
                title: 'Pickup Date & Time',
                dataIndex: 'pdate_time',
            },
            {
                title: 'Location',
                dataIndex: 'location',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                filters: [
                    {
                        text: 'Update Column',
                        value: 'update_col',
                    },
                    {
                        text: 'Sort A-Z',
                        value: 'sort_ascending',
                    },
                    {
                        text: 'Sort Z-A',
                        value: 'sort_descending',
                    },
                ],
                onFilter: (value, record) => { this.OpenModal(value); return false; },
            },

        ];
        return (
            <Fragment>
                <div className="app-portlet-header">
                    <div className="container-fluid">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto col-lg-6">
                                <h2 className="app-portlet-title mb-0">Booking</h2>
                            </div>
                            <div className="col-auto col-lg-5 d-flex justify-content-end">
                                <button className="app-btn app-btn-icon accent"><span className="d-none d-lg-block">Delete</span><i className="fi flaticon-remove d-block d-lg-none"></i></button>
                                <button className="app-btn app-btn-icon ml-3"><span className="d-none d-lg-block">Create New</span><i className="fi flaticon-add d-block d-lg-none"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 1300 }} />
                {/* Update Column Modal style display block */}
                <div className="modal fade show bd-example-modal-sm" id="updt_column_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-sm modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                                    <Row>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="id">ID</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="created_by">Created By</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="acr">ACR</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="customer_name">Customer Name</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="pdate_time">Pickup Date & Time</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="location">Location</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="status">Status</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="mob">Mobile Number</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="email">Email</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="country">Country</Checkbox>
                                        </Col>
                                        <Col span={24} className="mb-3">
                                            <Checkbox value="address">Address</Checkbox>
                                        </Col>
                                        <Col span={24}>
                                            <Checkbox value="Zip">Zip Code</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            </div>
                            <div className="modal-footer">
                                <button className="app-btn accent mr-auto ml-auto sm mb-4">Update Column</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >

        )
    }
}
