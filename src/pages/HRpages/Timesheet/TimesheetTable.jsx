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
    mdiDotsHorizontalCircleOutline,
    mdiNoteEditOutline
} from '@mdi/js';
import { Space, DatePicker, Button, AutoComplete } from 'antd';
import IconSort from '../../../modules/dataTable/IconSort';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

export default function TimesheetTable(props) {
    const userData = [
        {
            id: 1,
            username: 'Huy Nguyen'
        },
        {
            id: 2,
            username: 'Khanh Nguyen'
        },
        {
            id: 3,
            username: 'Hao Nguyen'
        },
    ]

    const data = [];
    for (let i = 0; i < 46; i++) {
        if (i % 2 === 0) {
            data.push(
                {
                    id: i.toString(),
                    name: 'Huy Nguyen',
                    date: '03/03/2023',
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
            if (i % 3 === 0) {
                data.push(
                    {
                        id: i.toString(),
                        name: 'Khanh Nguyen',
                        date: '03/04/2023',
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
            else
                data.push(
                    {
                        id: [i],
                        name: 'Hao Nguyen',
                        date: '03/05/2023',
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

    const navigate = useNavigate()
    const userState = useSelector((state) => state.userReducer)
    const [DataRender, setDataRender] = useState(data)
    const [selectDate, setSelectDate] = useState({
        dateStart: '',
        dateEnd: ''
    },)
    const [stateUserList, setStateUserList] = useState(userData)
    const [valueShow, setValueShow] = useState('')

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])



    const options = {
        withFirstAndLast: false,
        alwaysShowAllBtns: true,
        custom: true,
        totalSize: DataRender.length,
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
                text: 'All', value: DataRender.length
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
    const buttonFormatter = (cell, row) => {
        return (
            <a href='#'>
                <Icon path={mdiNoteEditOutline} size={0.8} />
            </a>
        )
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
        // sort: true,
        formatter: statusFormatter,
        sortCaret: customSort,
    }, {
        dataField: 'edit',
        text: 'Edit',
        // sort: true,
        formatter: buttonFormatter,
        sortCaret: customSort,
    }
    ];

    ///////////FILTER INPUT DATA AND SHOW///////////////////
    const onChange = (date, dateString) => {
        let dateArray = []
        let filter_product = []
        if (selectDate.dateStart && selectDate.dateEnd) {
            let startDate = new Date(selectDate.dateStart);
            let endDate = new Date(selectDate.dateEnd);
            let days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
            dateArray = [...Array(days + 1).keys()].map((day) => {
                const date = new Date(startDate);
                date.setDate(startDate.getDate() + day);
                return moment(date.toISOString().slice(0, 10)).format('MM/DD/YYYY');
            });
            filter_product = data.filter((item) => dateArray.includes(item.date))

        }
        if (
            (!selectDate.dateStart && selectDate.dateEnd) || (selectDate.dateStart && !selectDate.dateEnd)
        ) {
            dateArray = (moment(selectDate.dateEnd + selectDate.dateStart)).format('MM/DD/YYYY')
            filter_product = data.filter((item) => dateArray.includes(item.date))
        }
        if (!selectDate.dateStart && !selectDate.dateEnd) {
            filter_product = data
        }
        if (!selectDate.dateStart && !selectDate.dateEnd && !valueShow) {
            filter_product = []
        }
        if (valueShow) {
            filter_product = filter_product.filter((item) => valueShow.includes(item.name))
        }
        setDataRender(filter_product)
    };

    ///////////RELOAD PAGE TIMESHEET VIEW WITH ALL DATA///////////////////
    const onClear = () => { navigate(0) }

    ///////////INPUT START DATE AND END DATE TO FILT///////////////////
    const onChange1 = (date, dateString) => {
        setSelectDate(prevState => ({ ...prevState, dateStart: dateString }))
    };

    const onChange2 = (date, dateString) => {
        setSelectDate(prevState => ({ ...prevState, dateEnd: dateString }))
    };


    return (
        <>
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
                                    data={DataRender}
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
                                                        {/* <SearchBar {...toolkitprops.searchProps} /> */}
                                                        <DatePicker onChange={onChange1} placeholder='Select Start Date' />
                                                        <DatePicker onChange={onChange2} placeholder='Select End Date' />
                                                        <AutoComplete
                                                            style={{
                                                                width: 200,
                                                            }}
                                                            placeholder={'Username Search'}
                                                            options={stateUserList.map((user, index) => {
                                                                return { label: user.username, value: user.username }
                                                            })}
                                                            value={valueShow}
                                                            onChange={(text) => {
                                                                setValueShow(text);
                                                            }}

                                                            onSelect={(value, option) => {
                                                                setValueShow(option.value);
                                                            }}

                                                            onSearch={(value) => {
                                                                const filteredArrayUser = userData.filter(obj => obj.username.indexOf(value) >= 0);
                                                                setStateUserList(filteredArrayUser)
                                                            }}
                                                        />
                                                        <Button type="dash" size={'large'} className='rounded' onClick={onChange}>Search</Button>
                                                        <Button type="dash" size={'large'} className='rounded' onClick={onClear}>Show All</Button>
                                                        <Button type="dash" size={'large'} className='rounded' onClick={() => navigate(`/admin/hr/timesheet/view/${valueShow}/${selectDate.dateStart}/${selectDate.dateEnd}`)} >Export</Button>
                                                    </Space>
                                                </Space>

                                                <hr />
                                                <BootstrapTable
                                                    bootstrap4
                                                    keyField='id'
                                                    data={DataRender}
                                                    columns={columns}
                                                    bordered={false}
                                                    {...toolkitprops.baseProps}
                                                    {...paginationTableProps}
                                                />

                                                {
                                                    (DataRender.length === 0) &&
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
                                    {(DataRender.length === 0) ?
                                        <Space>
                                            <ul className="pagination react-bootstrap-table-page-btns-ul">
                                                <li className="disabled page-item page-link" title="previous page"><a href="#" >&lt;</a></li>
                                                <li className="disabled page-item page-link" title="next page"><a href="#" >&gt;</a></li>
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
