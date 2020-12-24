import React from 'react'

import { Typography, Space, Divider, Card,Avatar } from 'antd';
import { Link } from 'gatsby'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../../css/works.css'
import { AiFillAndroid ,AiFillGithub,AiFillEdit,AiOutlineEllipsis,AiFillSetting} from 'react-icons/ai'
import { DiReact,DiPython} from 'react-icons/di'
import { SiUnrealengine} from 'react-icons/si'
import pinsert from '../../images/Project_logo/pinsert_logo.png'
import react_banner from '../../images/Project_logo/react-banner.png'
import unreal_banner from '../../images/Project_logo/unreal-banner.png'
import rope_banner from '../../images/Project_logo/BigBrother.png'
import knc_banner from '../../images/Project_logo/knc.png'
import rudelog_banner from '../../images/gatsby-icon.png'

const Works = () => {
    const { Text } = Typography;
    const { Meta } = Card;

    const OnClickLink=(event)=>{
        const {id}=event.target;
        if(id==="Pinsert"){
            window.open("https://github.com/Rudezoo/Pintest");
        }else if(id==="React_webgame"){
            window.open("https://github.com/Rudezoo/WebSNS");
        }
        else if(id==="unreal_demo"){
            window.open("https://github.com/Rudezoo/UnrealTutorial");
        }
        else if(id==="rope"){
            window.open("https://github.com/Rudezoo/rope_openvidu");
        }
        else if(id==="knc"){
            window.open("https://github.com/Rudezoo/KoreanNewsChronicle");
        }
        else if(id==="rudelog"){
            window.open("https://github.com/Rudezoo/Rude_field_Gatsby");
        }


    }

    return (
        <>
            <div className="works" id="works">
                <Divider ><Text className="Divider">WORKS</Text></Divider>
                <VerticalTimeline className="custom-line2">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work android"
                        contentStyle={{ background: 'white', color: '#fff', border: "0px solid #8dd35f",width:"500px",boxShadow:"0px 0px 0px" }}
                        contentArrowStyle={{ borderRight: '10px solid  black' }}
                        iconStyle={{ background: "white", color: ' #8dd35f' }}
                        icon={<AiFillAndroid></AiFillAndroid>}
                        style={{
                            color: "black"
                        }}>

                        <Card  
                            cover={<img src={pinsert} style={{
                                marginTop:"30px",
                            }}></img>}
                            actions={
                                [<div className="Work_link" onClick={OnClickLink} id="Pinsert"><AiFillGithub/>&nbsp;GitHub Link</div>]
                            } style={{
                                fontFamily:"godo",
                                boxShadow:"1px 1px 0px rgba(0,0,0,0.1)"
                            }}>
                            <Meta
                                avatar={<Avatar src="https://avatars0.githubusercontent.com/u/18670121?s=460&u=72934fc806c3f714655abda3594a835ad98342a9&v=4" />}
                                title={<div style={{
                                    fontWeight:"bold"
                                }}>Pinsert</div>}
                                description="AR 기반 SNS 어플리케이션"
                            />
                        </Card>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work react"
                        contentStyle={{ background: 'white', color: '#fff', border: "0px solid #61dafb",width:"500px",boxShadow:"0px 0px 0px" }}
                        contentArrowStyle={{ borderRight: '10px solid  black' }}
                        iconStyle={{ background: "white", color: ' #61dafb' }}
                        icon={<DiReact/>}
                        style={{
                            color: "black"
                        }}>

                        <Card  
                            cover={<img src={react_banner} style={{
                                marginTop:"30px",
                            }}></img>}
                            actions={
                                [<div className="Work_link" onClick={OnClickLink} id="React_webgame"><AiFillGithub/>&nbsp;GitHub Link</div>]
                            } style={{
                                fontFamily:"godo",
                                boxShadow:"1px 1px 0px rgba(0,0,0,0.1)"
                            }}>
                            <Meta
                                avatar={<Avatar src="https://avatars0.githubusercontent.com/u/18670121?s=460&u=72934fc806c3f714655abda3594a835ad98342a9&v=4" />}
                                title={<div style={{
                                    fontWeight:"bold"
                                }}>React Web Game Site</div>}
                                description="React js 기반 Mini Web Game Demo Site"
                            />
                        </Card>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work unreal"
                        contentStyle={{ background: 'white', color: '#fff', border: "0px solid black",width:"500px",boxShadow:"0px 0px 0px" }}
                        contentArrowStyle={{ borderRight: '10px solid  black' }}
                        iconStyle={{ background: "white", color: ' black' }}
                        icon={<SiUnrealengine/>}
                        style={{
                            color: "black"
                        }}>

                        <Card  
                            cover={<img src={unreal_banner} style={{
                                marginTop:"30px",
                            }}></img>}
                            actions={
                                [<div className="Work_link" onClick={OnClickLink} id="unreal_demo"><AiFillGithub/>&nbsp;GitHub Link</div>]
                            } style={{
                                fontFamily:"godo",
                                boxShadow:"1px 1px 0px rgba(0,0,0,0.1)"
                            }}>
                            <Meta
                                avatar={<Avatar src="https://avatars0.githubusercontent.com/u/18670121?s=460&u=72934fc806c3f714655abda3594a835ad98342a9&v=4" />}
                                title={<div style={{
                                    fontWeight:"bold"
                                }}>Unreal Demo Game - [No Title]</div>}
                                description="Unreal Engine을 활용한 RPG Demo Game"
                            />
                        </Card>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work react"
                        contentStyle={{ background: 'white', color: '#fff', border: "0px solid #61dafb",width:"500px",boxShadow:"0px 0px 0px" }}
                        contentArrowStyle={{ borderRight: '10px solid  black' }}
                        iconStyle={{ background: "white", color: ' #61dafb' }}
                        icon={<DiReact/>}
                        style={{
                            color: "black"
                        }}>

                        <Card  
                            cover={<img src={rope_banner} style={{
                                marginTop:"30px",
                                marginLeft:"28%",
                                width:"40%"
                            }}></img>}
                            actions={
                                [<div className="Work_link" onClick={OnClickLink} id="rope"><AiFillGithub/>&nbsp;GitHub Link</div>]
                            } style={{
                                fontFamily:"godo",
                                boxShadow:"1px 1px 0px rgba(0,0,0,0.1)"
                            }}>
                            <Meta
                                avatar={<Avatar src="https://avatars0.githubusercontent.com/u/18670121?s=460&u=72934fc806c3f714655abda3594a835ad98342a9&v=4" />}
                                title={<div style={{
                                    fontWeight:"bold"
                                }}>Rope-BigBrothers</div>}
                                description="React js & node js 기반 부정행위 방지 플랫폼"
                            />
                        </Card>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work knc"
                        contentStyle={{ background: 'white', color: '#fff', border: "0px solid #3672a7",width:"500px",boxShadow:"0px 0px 0px" }}
                        contentArrowStyle={{ borderRight: '10px solid  black' }}
                        iconStyle={{ background: "white", color: ' #3672a7' }}
                        icon={<DiPython/>}
                        style={{
                            color: "black"
                        }}>

                        <Card  
                            cover={<img src={knc_banner} style={{
                                marginTop:"30px",
                                marginLeft:"28%",
                                width:"40%",
                                background:"#3672a7"
                            }}></img>}
                            actions={
                                [<div className="Work_link" onClick={OnClickLink} id="knc"><AiFillGithub/>&nbsp;GitHub Link</div>]
                            } style={{
                                fontFamily:"godo",
                                boxShadow:"1px 1px 0px rgba(0,0,0,0.1)"
                            }}>
                            <Meta
                                avatar={<Avatar src="https://avatars0.githubusercontent.com/u/18670121?s=460&u=72934fc806c3f714655abda3594a835ad98342a9&v=4" />}
                                title={<div style={{
                                    fontWeight:"bold"
                                }}>KoreaNewsChronicle</div>}
                                description="뉴스 빅데이터를 이용한 사건 연대기 서비스"
                            />
                        </Card>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work rudelog react"
                        contentStyle={{ background: 'white', color: '#fff', border: "0px solid #61dafb",width:"500px",boxShadow:"0px 0px 0px" }}
                        contentArrowStyle={{ borderRight: '10px solid  black' }}
                        iconStyle={{ background: "white", color: ' #61dafb' }}
                        icon={<DiReact/>}
                        style={{
                            color: "black"
                        }}>

                        <Card  
                            cover={<img src={rudelog_banner} style={{
                                marginTop:"30px",
                                marginLeft:"28%",
                                width:"40%",
                            }}></img>}
                            actions={
                                [<div className="Work_link" onClick={OnClickLink} id="rudelog"><AiFillGithub/>&nbsp;GitHub Link</div>]
                            } style={{
                                fontFamily:"godo",
                                boxShadow:"1px 1px 0px rgba(0,0,0,0.1)"
                            }}>
                            <Meta
                                avatar={<Avatar src="https://avatars0.githubusercontent.com/u/18670121?s=460&u=72934fc806c3f714655abda3594a835ad98342a9&v=4" />}
                                title={<div style={{
                                    fontWeight:"bold"
                                }}>Rude_field</div>}
                                description="React js를 활용한 개인 블로그 제작"
                            />
                        </Card>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>

        </>
    );
}

export default Works;