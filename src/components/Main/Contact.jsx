import React, { useState } from 'react'
import '../../css/contact.css'
import { Typography, Space, Divider, Form, Input, Button,notification } from 'antd';
import keys from '../../../key/key.json'
import emailjs from 'emailjs-com'

const Contact = () => {
    const { Text } = Typography;
    const { TextArea } = Input;

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Title, setTitle] = useState("");
    const [Message, setMessage] = useState("");

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 7 },
    };
    const layout2 = {
        labelCol: { span: 5 },
        wrapperCol: { span: 7 },
    };
    const layout3 = {
        labelCol: { span: 5 },
        wrapperCol: { span: 14 },
    };
    const tailLayout = {
        wrapperCol: { offset: 11, span: 16 },
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "Name") {
            setName(value);
        } else if (name === "Email") {
            setEmail(value);
        }
        else if (name === "Title") {
            setTitle(value);
        }
        else if (name === "Message") {
            setMessage(value);
        }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        emailjs.send(keys.serviceID, keys.templageID, values, keys.UserID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                notification.success({
                    message:"메일 전송 성공!",
                    description:"메일 전송에 성공했습니다! 메일을 보내주셔서 감사합니다!",
                    placement:"bottomRight",
                });
            }, (err) => {
                console.log('FAILED...', err);
                notification.error({
                    message:"메일 전송 실패!",
                    description:"메일 전송에 실패했습니다! 개인메일로 ray9710@gmail.com로 따로 문의주세요!",
                    placement:"bottomRight"
                });
            });
    };

    return (
        <>

            <div className="Contact" id="contact">
                <div>
                    <Divider className="Divider" style={{
                        color: "white",
                        paddingTop: "30px",
                        fontSize: "30px"
                    }}>
                        CONTACT
                    </Divider>
                </div>
                <div className="Contact_Content">
                    <Form {...layout} className="MailForm" onFinish={onFinish}>
                        <Form.Item label={<div className="MailHead">Name</div>} name="Name" rules={[{ required: true, message: 'Please input your Name!' }]}>
                            <Input onChange={onChange} />
                        </Form.Item>
                        <Form.Item {...layout2} label={<div className="MailHead">Email</div>} name="Email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                            <Input onChange={onChange} />
                        </Form.Item>
                        <Form.Item {...layout3} label={<div className="MailHead">Title</div>} name="Title" rules={[{ required: true, message: 'Please input your Title!' }]}>
                            <Input onChange={onChange} />
                        </Form.Item>
                        <Form.Item {...layout3} label={<div className="MailHead">Message</div>} name="Message" rules={[{ required: true, message: 'Please input your Message!' }]}>
                            <TextArea onChange={onChange} />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button className="SendButton" htmlType="submit">Send</Button>
                        </Form.Item>
                    </Form>
                </div>


            </div>

        </>
    );
}

export default Contact;