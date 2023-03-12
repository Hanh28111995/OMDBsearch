import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, SizePerPageDropdownStandalone, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

import './dataTableStyle.scss'
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft, mdiMenuUp, mdiMenuDown } from '@mdi/js';
import { Space } from 'antd';
const { SearchBar } = Search;
const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 4,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 5,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 6,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 7,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 8,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 9,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 10,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 11,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 12,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 13,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 14,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 15,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 16,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 17,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 18,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 19,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 20,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 21,
    title: 'Beetlejuice',
    year: '1988',
  },
]

const options = {
  // prePageText: "",
  // nextPageText: '',
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

const pageButtonRenderer = ({
  title,
}) => {
  const titleStyle = {}
  const nextAndPrevIcon = {
    if(title) {

    }
  }
}

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  sortCaret: customSort,
}, {
  dataField: 'title',
  text: 'Name',
  sort: true,
  sortCaret: customSort,

}, {
  dataField: 'year',
  text: 'Year',
  sort: true,
  sortCaret: customSort,
}];

export default function TimeOffForm() {

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
                          <span>Entries</span>
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
                        {...toolkitprops.baseProps}
                        {...paginationTableProps}
                      />
                    </Space>
                  )
                }
              </ToolkitProvider>
              <Space direction='horizontal' align='baseline' className='justify-content-between d-flex'>
                <PaginationTotalStandalone
                  {...paginationProps}
                />
                <PaginationListStandalone
                  {
                  ...paginationProps}
                />
              </Space>
            </>
          )
        }
      </PaginationProvider>
    </Space >
  )
}
