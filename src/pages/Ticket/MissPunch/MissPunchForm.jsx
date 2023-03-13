import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,
{
  PaginationProvider,
  SizePerPageDropdownStandalone,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

import '../TimeOff/dataTableStyle.scss'
import Icon from '@mdi/react';
import {
  mdiMenuUp,
  mdiMenuDown,
  mdiCheckCircleOutline,
  mdiCloseCircleOutline,
  mdiDotsHorizontalCircleOutline
} from '@mdi/js';
import { Space } from 'antd';
const { SearchBar } = Search;

const data = [];
for (let i = 0; i < 46; i++) {
  if (i % 2 === 0) {
    data.push(
      {
        reference: 'MSF' + [i],
        submitData: '03/02/2023',
        manager: ['Huy Nguyen'],
        managerDate: '01/02/2023',
        managerStatus: true,
        hrDate: '01/02/2023',
        hrStatus: true,
      },
    );
  }
  else {
    data.push(
      {
        reference: 'MSF' + [i],
        submitData: '03/02/2023',
        manager: ['Khanh Nguyen'],
        managerDate: '01/02/2023',
        managerStatus: false,
        hrDate: '01/02/2023',
        hrStatus: '...',
      },
    );
  }
}

const options = {
  // prePageText: "",
  // nextPageText: '',
  // hidePageListOnlyOnePage: false,
  showTotal: false,
  paginationSize: 4,
  alwaysShowAllBtns: true,
  withFirstAndLast: false,
  custom: true,
  totalSize: data.length,
  alwaysShowAllBtns: true,
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
  // A numeric array is also available. the purpose of above example is custom the text
};
///// function component for sort icon block
function IconSort(props) {
  return (
    <Space direction='vertical' >
      <Icon path={mdiMenuUp}
        color={`${props.up && props.active ? '#096481' : '#d0d2d4'}`}
        size={1}
      />
      <Icon path={mdiMenuDown}
        color={`${props.down && props.active ? '#096481' : '#d0d2d4'}`}
        size={1}
      />
    </Space>
  )

}
const customSort = (order, column) => {
  if (!order) return (<IconSort active={false} up={false} down={false} />)
  else if (order === 'asc') return (<IconSort active={true} up={true} down={false} />)
  else if (order === 'desc') return (<IconSort active={true} up={false} down={true} />)
  return null;
}
///// function component for sort next/prev pagination

// const pageButtonRenderer = ({
//   title,
// }) => {
//   const titleStyle = {}
//   const nextAndPrevIcon = {
//     if(title) {

//     }
//   }
// }

function referenceFormatter(cell, row) {
  if (row.hrStatus === true) {
    return (
      <span>
        <a href='#'>{cell}</a>
      </span>
    );
  }
  return (
    <span> {cell}</span>
  );
}

function StatusFormatter(cell, row) {
  return (
    < span >
      {(cell == '...')
        ? <Icon path={mdiDotsHorizontalCircleOutline} size={0.8} color='gray' />
        : (
          (cell == false)
            ? <Icon path={mdiCloseCircleOutline} size={0.8} color='red' />
            : <Icon path={mdiCheckCircleOutline} size={0.8} color='green' />
        )
      }
    </span >
  );
}


const columns = [{
  dataField: 'reference',
  text: 'Reference',
  sort: true,
  formatter: referenceFormatter,
  sortCaret: customSort,
}, {
  dataField: 'submitData',
  text: 'Submit Data',
  sort: true,
  sortCaret: customSort,

}, {
  dataField: 'manager',
  text: 'Manager',
  sort: true,
  sortCaret: customSort,
}, {
  dataField: 'managerDate',
  text: 'Manager Date',
  sort: true,
  sortCaret: customSort,
}, {
  dataField: 'managerStatus',
  text: 'Manager Status',
  sort: true,
  formatter: StatusFormatter,
  sortCaret: customSort,
}, {
  dataField: 'hrDate',
  text: 'HR Date',
  sort: true,
  sortCaret: customSort,
}, {
  dataField: 'hrStatus',
  text: 'HR Status',
  sort: true,
  formatter: StatusFormatter,
  sortCaret: customSort,
}
];

export default function MissPunchForm() {

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
                          <span>Show</span>
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
                        (data.length == 0) &&
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
                {(data.length == 0) ?
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
