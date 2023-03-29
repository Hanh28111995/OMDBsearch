import React, { useEffect, useLayoutEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,
{
    PaginationProvider,
    SizePerPageDropdownStandalone,
    PaginationTotalStandalone,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import Icon from '@mdi/react';
import {
    mdiCheckCircleOutline,
    mdiCloseCircleOutline,
    mdiDotsHorizontalCircleOutline
} from '@mdi/js';
import { Space } from 'antd';
import IconSort from '../../../modules/dataTable/IconSort';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
import { itemsPerPage } from '../../../constants/formValueDefault';
const { SearchBar } = Search;


export default function TimeSheetTable(props) {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    //demo data from api
    const data = [];
    for (let i = 1; i < 6; i++) {
        data.push(
            {
                date: `03/${i}/2023`,
                day: 'Wed',
                punchin: '8:19 AM',
                lunchin: '12:37 PM',
                lunchout: '01:40 PM',
                punchout: '5:31 PM',
                total: '8.15',
                vacation: false,
                halfdays: false,
                holiday: false,
                nonwork: false,
                status: '',
            },
        );
    }

    //setting dataTable
    const options = {
        // prePageText: "",
        // nextPageText: '',
        // hidePageListOnlyOnePage: false,
        // showTotal: false,
        // paginationSize: 4,
        // alwaysShowAllBtns: true,
        withFirstAndLast: false,
        alwaysShowAllBtns: true,
        custom: true,
        totalSize: data.length,
        sizePerPageList: itemsPerPage,
    };

    ///// function component for sort icon block
    const customSort = (order, column) => {
        if (!order) return (<IconSort active={false} up={false} down={false} />)
        else if (order === 'asc') return (<IconSort active={true} up={true} down={false} />)
        else if (order === 'desc') return (<IconSort active={true} up={false} down={true} />)
        return null;
    }
    ///// function component for sort next/prev pagination
    const referenceFormatter = (cell, row) => {
        if (row.hrStatus === true) {
            return (
                <span>
                    <NavLink to={`/admin/ticket/miss-punch/miss-punch-detail/${cell}`}>{cell}</NavLink>
                </span>
            );
        }
        return (
            <span> {cell}</span>
        );
    }

    const statusDayOffFormatter = (cell, row) => {
        return (
            < span >
                {(cell === true)
                    ? <Icon path={mdiCheckCircleOutline} size={0.8} color='green' />
                    : ''
                }
            </span >
        );
    }

    const columns = [{
        dataField: 'date',
        headerClasses: 'headerTableStyle',
        text: 'Date',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'day',
        headerClasses: 'headerTableStyle',
        text: 'Day',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'punchin',
        headerClasses: 'headerTableStyle',
        text: 'Punch In',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'lunchin',
        headerClasses: 'headerTableStyle',
        text: 'Lunch In',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'lunchout',
        headerClasses: 'headerTableStyle',
        text: 'Lunch Out',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'punchout',
        headerClasses: 'headerTableStyle',
        text: 'Punch Out',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'total',
        headerClasses: 'headerTableStyle',
        text: 'Total',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'vacation',
        headerClasses: 'headerTableStyle',
        text: 'Vacation',
        sort: true,
        formatter: statusDayOffFormatter,
        sortCaret: customSort,
    }, {
        dataField: 'halfdays',
        headerClasses: 'headerTableStyle',
        text: '4,5 Days',
        sort: true,
        formatter: statusDayOffFormatter,
        sortCaret: customSort,
    }, {
        dataField: 'holiday',
        headerClasses: 'headerTableStyle',
        text: 'Holiday',
        sort: true,
        formatter: statusDayOffFormatter,
        sortCaret: customSort,
    }, {
        dataField: 'nonwork',
        headerClasses: 'headerTableStyle',
        text: 'Nonwork',
        sort: true,
        formatter: statusDayOffFormatter,
        sortCaret: customSort,
    }, {
        dataField: 'status',
        headerClasses: 'headerTableStyle',
        text: 'Status',
        sort: true,
        sortCaret: customSort,
    }
    ];


    return (
        <Space direction="vertical" className='d-flex dataTable'>
            <PaginationProvider pagination={paginationFactory(options)}>
                {
                    ({
                        paginationProps,
                        paginationTableProps
                    }) => (
                        <>
                            <ToolkitProvider
                                keyField="date"
                                data={data}
                                columns={columns}
                                search
                            >
                                {
                                    toolkitprops => (
                                        <Space direction='vertical d-dlex w-100'>
                                            <Space direction='horizontal' className='justify-content-between d-flex'>
                                                <Space>
                                                    <span className='bg-red'>Show</span>
                                                    <SizePerPageDropdownStandalone {...paginationProps} />
                                                    <span>entries</span>
                                                </Space>
                                                <Space className='d-flex align-items-start'>
                                                    <SearchBar {...toolkitprops.searchProps} />
                                                </Space>
                                            </Space>
                                            <hr />
                                            <BootstrapTable
                                                bootstrap4
                                                wrapperClasses='table-responsive'
                                                striped
                                                keyField='date'
                                                data={data}
                                                columns={columns}
                                                bordered={false}
                                                {...toolkitprops.baseProps}
                                                {...paginationTableProps}
                                            />
                                            {
                                                (data.length === 0) &&
                                                <Space direction='vertical' className='d-dlex text-center w-100' >
                                                    <p className='pt-3'>No data available in table</p>
                                                    <hr />
                                                </Space>
                                            }
                                        </Space>
                                    )
                                }
                            </ToolkitProvider>
                            <Space direction='horizontal' align='baseline' className='justify-content-between d-flex'>
                                <PaginationTotalStandalone
                                    {...paginationProps}
                                />
                                {(data.length === 0) ?
                                    <Space>
                                        <ul class="pagination react-bootstrap-table-page-btns-ul">
                                            <li class="disabled page-item" title="previous page"><a href="#" class="page-link">&lt;</a></li>
                                            <li class="disabled page-item" title="next page"><a href="#" class="page-link">&gt;</a></li>
                                        </ul>
                                    </Space>

                                    : <PaginationListStandalone
                                        {...paginationProps}
                                    />
                                }
                            </Space>
                        </>
                    )
                }
            </PaginationProvider>
        </Space >
    )
}
