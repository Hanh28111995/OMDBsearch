import React from 'react'
import { Card, Col, Row } from 'antd'
import { Collapse } from 'antd';

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
    return (
        <Row gutter={[1, 1]} style={{ backgroundColor: '#fff' }} className='statusGroup'>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
            <Col className="gutter-row" span={24} >
                <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false}  >
                    <Collapse  onChange={onChange}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Col>
        </Row>
    )
}
