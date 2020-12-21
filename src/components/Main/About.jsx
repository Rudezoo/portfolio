import React from 'react'
import '../../css/About.css'
import { Typography, Row, Col,Space } from 'antd';
import { Link } from 'gatsby'
import image from '../../images/me.jpg'

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
                            About me
                        </div>
                        <div className="Info_Content">
                            첫인상을 그리는 Front-end & Game 개발자 김주언입니다. 현재 프론트 엔드와 게임 개발에 열정을 가지고 있는 개발자입니다.
                            <br/>
                            해당 분야의 전문성을 기르기 위해 React 프레임 워크와 Unreal & Unity 엔진에 대해 학습 중에 있습니다.
                        </div>
                        <div>
                            Info
                        </div>
                        <div className="Info_Content">
                            - 2016년 숭실대학교 소프트웨어학부 입학
                            <br/>
                            - Contact : ray9710@gmail.com
                            
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default About;