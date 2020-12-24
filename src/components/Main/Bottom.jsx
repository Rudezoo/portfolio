import React from 'react'
import '../../css/bottom.css'
import { Typography,Space,Divider ,Row,Col} from 'antd';
import logo from '../../images/gatsby-icon.png'

const Bottom=()=>{
    const { Text } = Typography;

    return (
        <>
            <div className="bottom">
                <Row style={{
                    width:"50%"
                }}
                    align="middle" justify="center">
                    <Col span={5} style={{
                        textAlign:"center"
                    }}>
                        <img src={logo} className="Footerlogo"></img>

                    </Col>
                    <Col span={3}>
                    <Divider type="vertical" style={
                            {
                                height:"60px",
                                border:"1px solid gray"
                            }
                        }></Divider>
                    </Col>
                    <Col span={16} style={{
                        textAlign:"left"
                    }}>
                    Portfolio © {new Date().getFullYear()} Created by Rude_zoo
                <br/>
                Designed by Rude_zoo
                    </Col>
                </Row>
            </div>                 
            
        </>
    );
}

export default Bottom;