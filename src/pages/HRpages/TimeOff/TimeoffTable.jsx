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
import { Space , Button} from 'antd';
import IconSort from '../../../modules/dataTable/IconSort';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
import { itemsPerPage } from '../../../constants/formValueDefault';
const { SearchBar } = Search;


export default function TimeoffForm(props) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer)
  useEffect(() => {
    dispatch(setTitleHeader(props.title))
  }, [userState.titleHeader])

  //demo data from api
  const data = [];
  for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      data.push(
        {
          reference: 'OFF' + [i],
          submitDate: '03/02/2023',
          name: 'Khanh Nguyen',
          startDate: '03/02/2023',
          endDate: '03/03/2023',
          coverWorker: 'Huy Nguyen',
          coWoStatus: true,
          manager: 'Huy Nguyen',
          managerStatus: true,
          hrStatus: true,
        },
      );
    }
    else {
      data.push(
        {
          reference: 'OFF' + [i],
          submitDate: '03/03/2023',
          name: 'Huy Nguyen',
          startDate: '03/04/2023',
          endDate: '03/05/2023',
          coverWorker: 'Khanh Nguyen',
          coWoStatus: true,
          manager: 'Khanh Nguyen',
          managerStatus: false,
          hrStatus: '...',
        },
      );
    }
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

  const statusFormatter = (cell, row) => {
    return (
      < span >
        {(cell === '...')
          ?
          (
            <Space className='text-white' >
              <Button className='btn-primary'><i className="fa-solid fa-info "></i></Button>
              <Button className='btn-success' ><i className="fa-solid fa-check fa-2xs" ></i></Button>
              <Button className='btn-danger'><i className="fa-solid fa-xmark"></i></Button>
            </Space>
          )
          : (
            (cell === false)
              ? <Icon path={mdiCloseCircleOutline} size={0.8} color='red' />
              : <Icon path={mdiCheckCircleOutline} size={0.8} color='green' />
          )
        }
      </span >
    );
  }

  const noteFormatter = (cell, row) => {
    return (
      <span><a href={`/admin/hr/timeoff-management/note/${row.reference}/${row.name}`}><i className="fa-solid fa-pen"></i></a></span >
    )
  }

  const columns = [{
    dataField: 'reference',
    headerClasses: 'headerTableStyle',
    text: 'Reference',
    sort: true,
    formatter: referenceFormatter,
    sortCaret: customSort,
  }, {
    dataField: 'submitDate',
    headerClasses: 'headerTableStyle',
    text: 'Submit Date',
    sort: true,
    sortCaret: customSort,
  },
  {
    dataField: 'name',
    headerClasses: 'headerTableStyle',
    text: 'Name',
    sort: true,
    sortCaret: customSort,

  }, {
    dataField: 'startDate',
    headerClasses: 'headerTableStyle',
    text: 'Start Date',
    sort: true,
    sortCaret: customSort,

  }, {
    dataField: 'endDate',
    headerClasses: 'headerTableStyle',
    text: 'End Date',
    sort: true,
    sortCaret: customSort,
  }, {
    dataField: 'coverWorker',
    headerClasses: 'headerTableStyle',
    text: 'Cover Worker',
    sort: true,
    sortCaret: customSort,
  }, {
    dataField: 'coWoStatus',
    headerClasses: 'headerTableStyle',
    text: 'Co-Wo Status',
    sort: true,
    formatter: statusFormatter,
    sortCaret: customSort,
  },
  {
    dataField: 'manager',
    headerClasses: 'headerTableStyle',
    text: 'Manager',
    sort: true,
    sortCaret: customSort,
  }, {
    dataField: 'managerStatus',
    headerClasses: 'headerTableStyle',
    text: 'Manager Status',
    sort: true,
    formatter: statusFormatter,
    sortCaret: customSort,
  }, {
    dataField: 'hrStatus',
    headerClasses: 'headerTableStyle',
    text: 'HR Status',
    sort: true,
    formatter: statusFormatter,
    sortCaret: customSort,
  }, {
    dataField: 'hrNote',
    headerClasses: 'headerTableStyle',
    text: 'HR Note',
    formatter: noteFormatter,
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
                      <Space direction='horizontal' align='baseline' className='justify-content-between d-flex'>
                        <Space>
                          <span className='bg-red'>Show</span>
                          <SizePerPageDropdownStandalone {...paginationProps} />
                          <span>entries</span>
                        </Space>
                        <Space className='d-flex align-items-start'>
                          <SearchBar {...toolkitprops.searchProps} />
                          <NavLink to='/admin/ticket/time-off/addnew'>
                            <button className='btn btn-success create_new_form'>
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
