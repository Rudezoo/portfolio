import React from 'react'
import '../../css/About.css'
import { Typography, Row, Col, Space,Button ,message} from 'antd';
import { Link } from 'gatsby'
import image from '../../images/me.jpg'
import content from '../../Content/About.json'

const About = () => {
    const { Text } = Typography;

    const OnClickblog=()=>{
        /* window.open(""); */
        message.warning({
            content: '아직 개발중입니다! 조금만 기다려주세요!',
            style:{
                marginTop:"100px",
                fontFamily:"godo",
                fontWeight:"bold"
            }
        });
    }

    return (
        <>
            <div className="AboutFrame" id="About">
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
                        <div>
                            <Button className="BlogButton" onClick={OnClickblog}>Go to Blog</Button>
                        </div>


                    </Col>
                </Row>
            </div>

        </>
    );
}

export default About;