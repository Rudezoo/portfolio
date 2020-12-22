import React from 'react'
import '../../css/About.css'
import { Typography, Row, Col, Space } from 'antd';
import { Link } from 'gatsby'
import image from '../../images/me.jpg'
import content from '../../Content/About.json'


const About = () => {
    const { Text } = Typography;

    return (
        <>
            <div className="AboutFrame">
                <Row>
                    <Col span={8}>
                        <img src={image} className="myImage"></img>
                    </Col>
                    <Col span={16} className="Info">
                        <div>
                            Introduction
                        </div>
                        <div className="Info_Content">
                            {content.About1}
                        </div>
                        <div>
                            Info
                        </div>
                        <div className="Info_Content">
                            {content.About2}
                        </div>


                    </Col>
                </Row>
            </div>

        </>
    );
}

export default About;