import React from 'react'
import '../../css/header.css'
import { Typography,Space,Divider } from 'antd';
import {Link} from 'gatsby'

const Header=()=>{
    const { Text } = Typography;

    return (
        <>
                <Space className="header" split={<Divider type="vertical" />} size={50}>
                    <Link className="menu_link">ABOUT</Link>   
                    <Link className="menu_link">RESUME</Link>  
                    <Link className="menu_link">WORKS</Link>  
                    <Link className="menu_link">CONTACT</Link>  
                </Space>                            
            
        </>
    );
}

export default Header;