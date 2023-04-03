import React, { useEffect } from 'react'
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


export default function DailyTask(props) {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    useEffect(() => {
        let control = document.querySelector('.react-bootstrap-table');
        control.addEventListener('scroll', handleScroll, true)
    }, []);

    function handleScroll() {
        console.log("hello")
    }
    //demo data from api
    const data = [];

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
                    <NavLink to={`/admin/ticket/miss-punch/miss-punch-detail/${cell}/${userState.userInfor.username}`}>{cell}</NavLink>
                </span>
            );
        }
        return (
            <span> {cell}</span>
        );
    }

    const statusFormatter = (cell, row) => {
        return (
            < span >
                {(cell === '...')
                    ? <Icon path={mdiDotsHorizontalCircleOutline} size={0.8} color='gray' />
                    : (
                        (cell === false)
                            ? <Icon path={mdiCloseCircleOutline} size={0.8} color='red' />
                            : <Icon path={mdiCheckCircleOutline} size={0.8} color='green' />
                    )
                }
            </span >
        );
    }

    const columns = [{
        dataField: 'reference',
        headerClasses: 'headerTableStyle',
        text: 'Reference',
        sort: true,
        formatter: referenceFormatter,
        sortCaret: customSort,

    }, {
        dataField: 'date',
        headerClasses: 'headerTableStyle',
        text: 'Date',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'taskName',
        headerClasses: 'headerTableStyle',
        text: 'Task Name',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'projectName',
        headerClasses: 'headerTableStyle',
        text: 'Project Name',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'note',
        headerClasses: 'headerTableStyle',
        text: 'Note',
        sort: true,
        sortCaret: customSort,
    },
    {
        dataField: 'managerStatus',
        headerClasses: 'headerTableStyle',
        text: 'Manager Status',
        sort: true,
        formatter: statusFormatter,
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
                                keyField="reference"
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
                                                    <NavLink to='/admin/daily_task/addnew'>
                                                        <button className='btn create_new_form'>
                                                            Create
                                                        </button>
                                                    </NavLink>
                                                </Space>
                                            </Space>

                                            <hr />
                                            <BootstrapTable
                                                bootstrap4
                                                wrapperClasses='table-responsive'
                                                striped
                                                keyField='reference'
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
                                        <ul className="pagination react-bootstrap-table-page-btns-ul">
                                            <li className="disabled page-item" title="previous page"><a href="#" className="page-link">&lt;</a></li>
                                            <li className="disabled page-item" title="next page"><a href="#" className="page-link">&gt;</a></li>
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
