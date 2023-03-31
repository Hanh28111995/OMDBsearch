import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { userList_dkp } from '../../constants/userList'
import { Space, Checkbox } from 'antd'
import { useEffect } from 'react'

export default function ModalAdd(props) {
    useEffect(() => {
        // console.log(props.modalContent)
    }, [props.modalContent])
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
            dataField: props.modalContent,
            headerClasses: 'headerTableStyle',
            text: props.modalContent,
        }
    ];
    const handleOnSelect = (row, isSelect, rowIndex, e) => {
        // if(isSelect &&)
        console.log(row, isSelect, rowIndex)
    }
    const handleSelectAll = (isSelect, rows, e) => {
        console.log(rows)
    }

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: handleOnSelect,
        onSelectAll: handleSelectAll,
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

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    return (
        <Space className='d-flex dataTable w-100' >
            <BootstrapTable
                bootstrap4
                wrapperClasses='table-responsive'
                keyField='no'
                data={userList_dkp}
                columns={columns}
                bordered={true}
                selectRow={selectRow}
            />
        </Space >
    )
}
