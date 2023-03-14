import React from 'react'
import { Space } from 'antd'
import Icon from '@mdi/react'
import {
    mdiMenuUp,
    mdiMenuDown,
} from '@mdi/js';


export default function IconSort(props) {
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
