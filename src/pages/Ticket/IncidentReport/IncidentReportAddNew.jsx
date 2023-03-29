import React from 'react'
import { Space, Form, Input, Col, Row, DatePicker, Button, Select, Radio } from 'antd'
import { Editor } from '@tinymce/tinymce-react';
import { NavLink } from 'react-router-dom';

const { Option } = Select;
export default function IncidentReportAddNew(props) {
    const onChange1 = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    const onOk = (value) => {
        console.log('onOk: ', value);
    };
    function handleChange(value) { console.log(`Selected ${value}`); }
    function handleBlur() { console.log('blur'); }
    function handleFocus() { console.log('focus'); }
    function handleSearch(value) { console.log('search:', value); }
    return (
        <Space direction='vertical' className='bg-form pb-5' >
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Create New Incident Report</h4>
                    </div>
                    <NavLink to='/admin/ticket/incident'>
                        <button className='btn btn-success back-btn'>
                            Back
                        </button>
                    </NavLink>
                </div>
            </Space>
            <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                disabled={props.deactive}
                style={{ maxWidth: '100%' }}
                autoComplete='off'
            >
                <Row gutter={24}>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Type" name='type_incident' >
                            <Radio.Group>
                                <Radio value="MLK1"> MLK1 </Radio>
                                <Radio value="CTR1"> CTR1 </Radio>
                                <Radio value="VN"> VN </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Location" name='location' >
                            <Radio.Group>
                                <Radio value="Warehouse"> Warehouse </Radio>
                                <Radio value="Office"> Office </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Manager" name="manager" initialValue=''>
                            <Select
                                className='w-100'
                                showSearch
                                placeholder="Select your Manager"
                                optionFilterProp="children"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onSearch={handleSearch}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
                                <Option value="">----</Option>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Date Of Incident" name="dateIncident">
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date and Time'
                                showTime={{
                                    format: 'hh:mm A',
                                }}
                                format='MM-DD-YYYY  hh:mm A'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Witness" name="witness" initialValue=''>
                            <Select
                                className='w-100'
                                showSearch
                                placeholder="Select your Manager"
                                optionFilterProp="children"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onSearch={handleSearch}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
                                <Option value="">----</Option>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Reference"
                            name="reference"
                        >
                            <Input placeholder='Reference' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="Reference"
                            name="reference"
                        >
                            <Editor
                                apiKey='t9w3mxyyc7148r0r70mz3vlfoljkm2a80yta7b9dncznkebx'
                                name='description'
                                initialValue="<p>This is the initial content of the editor.</p>"
                                init={{
                                    menubar: false,
                                    selector: 'textarea',
                                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                }}
                            // onEditorChange={handleEditorChange}
                            />
                        </Form.Item>
                    </Col>


                </Row>
            </Form >
        </Space >
    )
}




// height: 500,
//     menubar: false,
//         plugins: [
//             'advlist autolink lists link image charmap print preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table paste code help wordcount'
//         ],
//             toolbar: 'newdocument | undo redo | formatselect | ' +
//                 'bold italic backcolor | alignleft aligncenter ' +
//                 'alignright alignjustify | bullist numlist outdent indent | ' +
//                 'removeformat | help',
//                 content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'