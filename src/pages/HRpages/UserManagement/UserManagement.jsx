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
import { Space, Modal, Button } from 'antd';
import IconSort from '../../../modules/dataTable/IconSort';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
import { itemsPerPage } from '../../../constants/formValueDefault';
import { data_user_detail } from '../../../constants/detailUser'
import { useState } from 'react';
import ModalAdd from '../../../modules/HRUserManagement/ModalAdd';
import './index.scss'

const { SearchBar } = Search;

export default function UserManagement(props) {
  const [modalContent, setModelContent] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer)
  useEffect(() => {
    dispatch(setTitleHeader(props.title))
  }, [userState.titleHeader])
  let data = data_user_detail;
  //demo data from api

  //setting dataTable
  const options = {
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
    return (
      <span>
        <NavLink to={`/admin/hr/user-management/edit/${cell}`}>{cell}</NavLink>
      </span>
    );
  }

  const statusFormatter = (cell, row) => {
    return (
      <>
        {(cell === 'Active')
          ? <span className='bg-primary text-white p-1 rounded'>{cell}</span>
          : <span className='bg-danger text-white p-1 rounded'>{cell}</span>
        }
      </>
    );
  }

  const columns = [{
    dataField: 'no',
    text: 'NO',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
  }, {
    dataField: 'username',
    text: 'User Name',
    sort: true,
    headerClasses: 'headerTableStyle',
    formatter: referenceFormatter,
    sortCaret: customSort,
  }, {
    dataField: 'status',
    text: 'Status',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
    formatter: statusFormatter,
  }, {
    dataField: 'location',
    text: 'Location',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
  }, {
    dataField: 'department',
    text: 'Department',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
  }, {
    dataField: 'position',
    text: 'Position',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
  },
  {
    dataField: 'salary',
    text: 'Salary',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
  }, {
    dataField: 'vac',
    text: 'Vac',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
  }, {
    dataField: 'sick',
    text: 'Sick',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
  }, {
    dataField: 'dkp',
    text: 'DKP',
    sort: true,
    headerClasses: 'headerTableStyle',
    sortCaret: customSort,
  }
  ];

  const addDKPHandleClick = () => {
    setModelContent('dkp');
    setTitleModal('Add DKP');
    showModal();
  }
  const addVacationHandleClick = () => {
    setModelContent('vacation');
    setTitleModal('Add Vacation');
    showModal();
  }
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
                  keyField="no"
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
                            <NavLink to='/admin/hr/user-management/create'>
                              <button className='btn btn-success create_new_form'>
                                Create
                              </button>
                            </NavLink>
                          </Space>
                        </Space>
                        <Space className='d-flex justify-content-end'>
                          <button className='btn btn-success create_new_form' onClick={addDKPHandleClick}>
                            <i className="fa-solid fa-plus mr-2"></i>Add DKP
                          </button>
                          <button className='btn btn-success create_new_form' onClick={addVacationHandleClick}>
                            <i className="fa-solid fa-plus mr-2"></i>Add Vacation
                          </button>
                          <button className='btn btn-success create_new_form' >
                            <i className="fa-solid fa-money-check-dollar mr-2"></i> Payroll Employee
                          </button>
                          <button className='btn btn-success create_new_form' >
                            <i className="fa-solid fa-file-arrow-down mr-2"></i>Export
                          </button>
                        </Space>

                        <hr />

                        <BootstrapTable
                          bootstrap4
                          wrapperClasses='table-responsive'
                          striped
                          keyField='no'
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
      <Modal
        className='modal-add-dkp'
        title={titleModal} open={isModalOpen} onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Add 1 Point
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        {
          <ModalAdd modalContent={modalContent} />
        }
      </Modal>
    </>

  )
}
