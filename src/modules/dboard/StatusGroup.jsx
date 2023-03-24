import React from 'react'
import { Card, Col, Row } from 'antd'
import { Collapse } from 'antd';
import PanelHeader from './PanelHeader';
import PanelContent from './PanelContent';

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function StatusGroup() {

    const onChange = (key) => {
        console.log(key);
    };
    const nameGroup = ['Warehouse', 'Inventory', 'Rework', 'Shipping Clerk', 'Front Operation']
    return (
        <Row gutter={[1, 1]} style={{ backgroundColor: '#fff' }} className='statusGroup'>
            {
                nameGroup.map((item, index) => {
                    return (
                        <Col key={index} className="gutter-row" span={24} >
                            <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                                <Collapse onChange={onChange}>
                                    <Panel header={<PanelHeader name={item} />} >
                                        <p>{<PanelContent />}</p>
                                    </Panel>
                                </Collapse>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}
