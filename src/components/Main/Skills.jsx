import React from 'react'
import { Typography, Space, Divider, Row, Col, Card, Progress } from 'antd';
import { Link } from 'gatsby'
import c_image from '../../images/skill/c-programming.png'
import c_plus_image from '../../images/skill/c++.png'
import java_image from '../../images/skill/java.png'
import javas_image from '../../images/skill/java-script.png'
import mysql_image from '../../images/skill/mysql.png'
import maria_image from '../../images/skill/mariadb.png'
import react_image from '../../images/skill/react.png'
import html_image from '../../images/skill/html5.png'
import css_image from '../../images/skill/css3.png'
import unreal_image from '../../images/skill/unreal-engine.png'
import git_image from '../../images/skill/git.png'
import es6_image from '../../images/skill/es6.png'
import '../../css/Skills.css'

import { AiFillInfoCircle } from 'react-icons/ai'

const Skills = () => {
    const { Text } = Typography;
    const { Meta } = Card;

    return (
        <>

            <div className="Skills">
                <Divider ><Text className="Divider">SKILL</Text></Divider>

                <div className="Content_skill">
                    <div className="skills_icon">
                        <Card hoverable className="cardbox"
                            cover={<img src={c_image} style={{
                                width: "90%",
                                paddingLeft: "10%",
                                paddingTop: "10%"
                            }} ></img>}
                        >

                            <Meta title={<div style={{
                                color: "#3949ab"
                            }}>
                                C Language
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={80}
                                        strokeColor={{
                                            '0%': '#5c6bc0',
                                            '100%': '#283593',
                                        }}
                                        size="small" status="active" size="default" />
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={c_plus_image} style={{
                                width: "90%",
                                paddingLeft: "10%",
                                paddingTop: "10%"
                            }}></img>}
                        >
                            <Meta title={<div style={{
                                color: "#00599c"
                            }}>
                                C++ Language
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={90}
                                        strokeColor={{
                                            '0%': '#659ad2',
                                            '100%': '#004482',
                                        }}
                                        status="active" size="default"/>
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={java_image} style={{
                                width: "90%",
                                paddingLeft: "10%",
                                paddingTop: "10%",
                                paddingBottom:"10%"
                            }}></img>}
                        >
                            <Meta title={<div style={{
                                color: "#e12326"
                            }}>
                                C++ Language
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={75}
                                        strokeColor={{
                                            '0%': 'white',
                                            '100%': '#e33235',
                                        }} status="active" size="default"/>
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={javas_image} style={{
                                width: "90%",
                                paddingLeft: "10%",
                                paddingTop: "10%",
                                paddingBottom:"10%"
                            }}></img>}
                        >
                            <Meta title={<div style={{
                                color: "#6563ff"
                            }}>
                                Java Script
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={80}
                                        strokeColor={{
                                            '0%': '#a9a8ff',
                                            '100%': '#6563ff',
                                        }} status="active" size="default"/>
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={mysql_image} style={{
                                width: "80%",
                                paddingLeft: "20%",
                                paddingTop: "20%",
                                paddingBottom:"20%"
                            }}></img>}
                        >
                            <Meta title={<div style={{
                                color: "black"
                            }}>
                                MySQL
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={60}
                                        strokeColor={{
                                            '0%': 'white',
                                            '100%': 'black',
                                        }} status="active" size="default" />
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={maria_image} style={{
                                width: "80%",
                                paddingLeft: "20%",
                                paddingTop: "20%",
                                paddingBottom:"20%",
                            }} ></img>}
                        >
                            <Meta title={<div style={{
                                color: "#002f43"
                            }}>
                                MariaDB
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={60}
                                        strokeColor={{
                                            '0%': '#3d8dae',
                                            '100%': '#002f43',
                                        }} status="active" size="default" />
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={react_image} style={{
                                width: "80%",
                                paddingLeft: "20%",
                                paddingTop: "20%",
                                paddingBottom:"20%",
                            }} ></img>}
                        >
                            <Meta title={<div style={{
                                color: "#61dafb"
                            }}>
                                React JS
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={90}
                                        strokeColor={{
                                            '0%': '#caf4ff',
                                            '100%': '#61dafb',
                                        }} status="active" size="default" />
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={es6_image} style={{
                                width: "80%",
                                paddingLeft: "20%",
                                paddingTop: "20%",
                                paddingBottom:"20%",
                            }} ></img>}
                        >
                            <Meta title={<div style={{
                                color: "#fbde34"
                            }}>
                                ES6
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={90}
                                        strokeColor={{
                                            '0%': '#000000',
                                            '100%': '#fbde34',
                                        }} status="active" size="default" />
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={html_image} style={{
                                width: "80%",
                                paddingLeft: "20%",
                                paddingTop: "20%",
                                paddingBottom:"20%",
                            }} ></img>}
                        >
                            <Meta title={<div style={{
                                color: "#6563ff"
                            }}>
                                HTML5
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={87}
                                        strokeColor={{
                                            '0%': '#d8d8ff',
                                            '100%': '#6563ff',
                                        }} status="active" size="default" />
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={css_image} style={{
                                width: "80%",
                                paddingLeft: "20%",
                                paddingTop: "20%",
                                paddingBottom:"20%",
                            }} ></img>}
                        >
                            <Meta title={<div style={{
                                color: "#6563ff"
                            }}>
                                CSS3
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={90}
                                        strokeColor={{
                                            '0%': '#d8d8ff',
                                            '100%': '#6563ff',
                                        }} status="active" size="default" />
                                </div>} />
                        </Card>
                        
                        <Card hoverable className="cardbox"
                            cover={<img src={unreal_image} style={{
                                width: "80%",
                                paddingLeft: "20%",
                                paddingTop: "20%",
                                paddingBottom:"20%",
                            }} ></img>}
                        >
                            <Meta title={<div style={{
                                color: "black"
                            }}>
                                UnrealEngine
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={40}
                                        strokeColor={{
                                            '0%': 'white',
                                            '100%': 'black',
                                        }} status="active" size="default" />
                                </div>} />
                        </Card>
                        <Card hoverable className="cardbox"
                            cover={<img src={git_image} style={{
                                width: "80%",
                                paddingLeft: "20%",
                                paddingTop: "20%",
                                paddingBottom:"20%",
                            }} ></img>}
                        >
                            <Meta title={<div style={{
                                color: "#8dd35f"
                            }}>
                                Git
                            </div>} description={<div>
                                    <Divider></Divider>
                                    <Progress percent={80}
                                        strokeColor={{
                                            '0%': '#ff8080',
                                            '25%': '#80b3ff',
                                            '75%': '#ffe680',
                                            '100%': '#8dd35f',
                                        }} status="active" size="default" />
                                </div>} />
                        </Card>


                    </div>
                </div>

            </div>

        </>
    );
}

export default Skills;