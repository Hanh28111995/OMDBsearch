import React, { useEffect, useState } from 'react'
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
import { Space, DatePicker, Button } from 'antd';
import IconSort from '../../../modules/dataTable/IconSort';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
const { SearchBar } = Search;

export default function TimesheetTable(props) {
    const [selectDate, setSelectDate] = useState({
        dateStart: '',
        dateEnd: ''
    })

    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    const data = [];
    for (let i = 0; i < 46; i++) {
        if (i % 2 === 0) {
            data.push(
                {
                    id: i.toString(),
                    name: 'Huy Nguyen',
                    date: '03/02/2023',
                    day: '03/09/2023',
                    punchin: '8:00 AM',
                    punchout: '5:00 PM',
                    lunchin: '12:00 PM',
                    lunchout: '1:00 PM',
                    total: '8 hour',
                    status: '...',
                    edit: '...',
                },
            );
        }
        else {
            data.push(
                {
                    id: [i],
                    name: 'Khanh Nguyen',
                    date: '03/03/2023',
                    day: '03/10/2023',
                    punchin: '8:30 AM',
                    punchout: '5:30 PM',
                    lunchin: '12:00 PM',
                    lunchout: '1:00 PM',
                    total: '8 hour',
                    status: '...',
                    edit: '...',
                },
            );
        }
    }

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
        sizePerPageList: [
            {
                text: '10', value: 10
            },
            {
                text: '20', value: 20
            },
            {
                text: '30', value: 30
            },
            {
                text: '40', value: 40
            },
            {
                text: '50', value: 50
            },
            {
                text: 'All', value: data.length
            }
        ],
    };

    const customSort = (order, column) => {
        if (!order) return (<IconSort active={false} up={false} down={false} />)
        else if (order === 'asc') return (<IconSort active={true} up={true} down={false} />)
        else if (order === 'desc') return (<IconSort active={true} up={false} down={true} />)
        return null;
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
        dataField: 'id',
        text: 'No',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'name',
        text: 'Name',
        sort: true,
        sortCaret: customSort,

    }, {
        dataField: 'date',
        text: 'Date',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'day',
        text: 'Day',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'punchin',
        text: 'Punch In',
        sort: true,

        sortCaret: customSort,
    }, {
        dataField: 'lunchin',
        text: 'Lunch In',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'lunchout',
        text: 'Lunch Out',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'punchout',
        text: 'Punch Out',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'total',
        text: 'Total',
        sort: true,
        sortCaret: customSort,
    }, {
        dataField: 'status',
        text: 'Status',
        sort: true,
        formatter: statusFormatter,
        sortCaret: customSort,
    }, {
        dataField: 'edit',
        text: 'Edit',
        sort: true,
        // formatter: statusFormatter,
        sortCaret: customSort,
    }
    ];
    //////date filter
    const onChange = (date, dateString) => {
        const startDate = new Date(selectDate.dateStart);
        const endDate = new Date(selectDate.dateEnd);

        const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

        const dateArray = [...Array(days + 1).keys()].map((day) => {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + day);
            return date.toISOString().slice(0, 10);
        });

        console.log(dateArray);
    };

    const onChange1 = (date, dateString) => {
        setSelectDate(prevState => ({ ...prevState, dateStart: dateString }))
    };
    const onChange2 = (date, dateString) => {
        setSelectDate(prevState => ({ ...prevState, dateEnd: dateString }))
    };


    return (
        <>
            <Space>
                <DatePicker onChange={onChange1} />
                <DatePicker onChange={onChange2} />
                <Button type="dash" size={'large'} className='rounded' onClick={onChange}>Search</Button>
            </Space>
            <Space direction="vertical" className='d-flex dataTable'>
                <PaginationProvider pagination={paginationFactory(options)}>
                    {
                        ({
                            paginationProps,
                            paginationTableProps
                        }) => (
                            <>

                                <ToolkitProvider
                                    keyField="id"
                                    data={data}
                                    columns={columns}
                                    search
                                >
                                    {
                                        toolkitprops => (
                                            <Space direction='vertical d-dlex w-100'>
                                                <Space direction='horizontal' align='baseline' className='justify-content-between d-flex'>
                                                    <Space>
                                                        <span className='bg-red'>Show</span>
                                                        <SizePerPageDropdownStandalone {...paginationProps} />
                                                        <span>entries</span>
                                                    </Space>
                                                    <Space >
                                                        <SearchBar {...toolkitprops.searchProps} />
                                                    </Space>
                                                </Space>

                                                <hr />
                                                <BootstrapTable
                                                    bootstrap4
                                                    keyField='id'
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
        </>
    )
}
