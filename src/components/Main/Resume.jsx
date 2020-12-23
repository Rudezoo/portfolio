import React from 'react'
import { Typography, Space, Divider, Row, Col } from 'antd';
import { Link } from 'gatsby'
import content from '../../Content/About.json'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../css/Resume.css'
import { AiFillInfoCircle } from 'react-icons/ai'

const Resume = () => {
    const { Text } = Typography;

    return (
        <>
            <div className="resume" id="resume">
                <div className="content" >
                    <Space direction="vertical" >
                        <Row justify="center" align="middle" style={{
                            width: "800px",
                            height: "80px",
                        }} >
                            <Col span={8} style={{
                                borderRight: "2px solid black"
                            }} >
                                <Text className="theme">학력</Text>
                            </Col>

                            <Col span={16}>
                                <Text className="Univ">{content.Resume_univ}</Text>
                                <Text className="imp">{content.Resume_imp}</Text>
                            </Col>
                        </Row>


                    </Space>

                </div>
                <div className="content">
                    <Space direction="vertical" >
                        <Row justify="center" align="middle" style={{
                            width: "800px",
                            height: "auto"
                        }} >
                            <Col span={7} style={{
                                alignSelf: "stretch"
                            }} >
                                <Text className="theme" style={{
                                    paddingLeft:"30px"
                                }}>경력</Text>
                            </Col>

                            <Col span={17} className="prize">
                                <VerticalTimeline layout="1-column-left">
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work vertical-timeline.vertical-timeline-custom-line "
                                        contentStyle={{ background: 'white', color: '#fff', border: "4px solid #1ac5ae", display:"flex",alignItems:"center",width:"700px" }}
                                        contentArrowStyle={{ borderRight: '10px solid  #1ac5ae' }}
                                        iconStyle={{ background: "white", color: ' #1ac5ae' }}
                                        icon={<AiFillInfoCircle />}
                                        position="right"
                                        style={{
                                            color: "black"
                                        }}
                                    >
                                        <Row style={{
                                            width:"100%"
                                        }}> 
                                            <Col span={8} >
                                                <Text className="prize_date">{content.Resume_prize[1].date}</Text>
                                            </Col>
                                            <Col span={16}>
                                                <Text className="prize_content">{content.Resume_prize[1].content}</Text>
                                            </Col>
                                        </Row>


                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work vertical-timeline.vertical-timeline-custom-line "
                                        contentStyle={{ background: 'white', color: '#fff', border: "4px solid #1ac5ae", display:"flex",alignItems:"center",width:"700px" }}
                                        contentArrowStyle={{ borderRight: '10px solid  #1ac5ae' }}
                                        iconStyle={{ background: "white", color: ' #1ac5ae' }}
                                        icon={<AiFillInfoCircle />}
                                        position="right"
                                        style={{
                                            color: "black"
                                        }}
                                    >
                                        <Row style={{
                                            width:"100%"
                                        }}> 
                                            <Col span={8} >
                                                <Text className="prize_date">{content.Resume_prize[2].date}</Text>
                                            </Col>
                                            <Col span={16}>
                                                <Text className="prize_content">{content.Resume_prize[2].content}</Text>
                                            </Col>
                                        </Row>


                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work vertical-timeline.vertical-timeline-custom-line "
                                        contentStyle={{ background: 'white', color: '#fff', border: "4px solid #1ac5ae", display:"flex",alignItems:"center",width:"700px" }}
                                        contentArrowStyle={{ borderRight: '10px solid  #1ac5ae' }}
                                        iconStyle={{ background: "white", color: ' #1ac5ae' }}
                                        icon={<AiFillInfoCircle />}
                                        position="right"
                                        style={{
                                            color: "black"
                                        }}
                                    >
                                        <Row style={{
                                            width:"100%"
                                        }}> 
                                            <Col span={8} >
                                                <Text className="prize_date">{content.Resume_prize[3].date}</Text>
                                            </Col>
                                            <Col span={16}>
                                                <Text className="prize_content">{content.Resume_prize[3].content}</Text>
                                            </Col>
                                        </Row>


                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work vertical-timeline.vertical-timeline-custom-line "
                                        contentStyle={{ background: 'white', color: '#fff', border: "4px solid #1ac5ae", display:"flex",alignItems:"center",width:"700px" }}
                                        contentArrowStyle={{ borderRight: '10px solid  #1ac5ae' }}
                                        iconStyle={{ background: "white", color: ' #1ac5ae' }}
                                        icon={<AiFillInfoCircle />}
                                        position="right"
                                        style={{
                                            color: "black"
                                        }}
                                    >
                                        <Row style={{
                                            width:"100%"
                                        }}> 
                                            <Col span={8} >
                                                <Text className="prize_date">{content.Resume_prize[4].date}</Text>
                                            </Col>
                                            <Col span={16}>
                                                <Text className="prize_content">{content.Resume_prize[4].content}</Text>
                                            </Col>
                                        </Row>


                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work vertical-timeline.vertical-timeline-custom-line "
                                        contentStyle={{ background: 'white', color: '#fff', border: "4px solid #1ac5ae", display:"flex",alignItems:"center",width:"700px" }}
                                        contentArrowStyle={{ borderRight: '10px solid  #1ac5ae' }}
                                        iconStyle={{ background: "white", color: ' #1ac5ae' }}
                                        icon={<AiFillInfoCircle />}
                                        position="right"
                                        style={{
                                            color: "black"
                                        }}
                                    >
                                        <Row style={{
                                            width:"100%"
                                        }}> 
                                            <Col span={8} >
                                                <Text className="prize_date">{content.Resume_prize[5].date}</Text>
                                            </Col>
                                            <Col span={16}>
                                                <Text className="prize_content">{content.Resume_prize[5].content}</Text>
                                            </Col>
                                        </Row>


                                    </VerticalTimelineElement>
                                </VerticalTimeline>

                            </Col>
                        </Row>


                    </Space>
                </div>

            </div>

        </>
    );
}

export default Resume;