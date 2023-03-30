import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { userList_dkp, userList_vacation } from '../../constants/userList'
import { Space, Checkbox } from 'antd'

export default function ModalAddDKP() {
    const columns = [
        {
            dataField: 'no',
            headerClasses: 'headerTableStyle',
            text: 'No',
        }, {
            dataField: 'name',
            headerClasses: 'headerTableStyle',
            text: 'User name',
        }, {
            dataField: 'dkp',
            headerClasses: 'headerTableStyle',
            text: 'DKP',
        }
    ];
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        selectionHeaderRenderer: ({ indeterminate, ...rest }) => (
            <Checkbox
                ref={(input) => {
                    if (input) input.indeterminate = indeterminate;
                }}
                {...rest}
            />
        ),
        selectionRenderer: ({ mode, ...rest }) => (
            <Checkbox  {...rest} />
        )
    };
    return (
            <Space className='d-flex dataTable w-100'>
                <BootstrapTable
                    bootstrap4
                    wrapperClasses='table-responsive'
                    keyField='no'
                    data={userList_dkp}
                    columns={columns}
                    bordered={true}
                    selectRow={selectRow}
                />
            </Space>
    )
}
