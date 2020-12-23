import React, { useEffect, useState } from 'react'
import '../../css/header.css'
import { Typography, Space, Divider, Button } from 'antd';
import { Link } from 'gatsby'
import image from '../../images/gatsby-icon.png'
import { AiFillGithub, AiOutlineInstagram, AiFillFacebook, AiFillMail } from 'react-icons/ai'
import { AnchorLink } from "gatsby-plugin-anchor-links";
const Header = () => {
    const { Text } = Typography;


    const OnContact = () => {
        window.scrollTo({
            top: 6700,
            behavior: 'smooth'
        })

    }

    const OnLink=(event)=>{
        const {id} = event.target;
        console.log(id);
        if(id==="Github"){
            window.open("https://github.com/Rudezoo");
        }else if(id==="instagram"){
            window.open("https://www.instagram.com/rude_zoo/");
        }
        else if(id==="facebook"){
            window.open("https://www.facebook.com/profile.php?id=100003109554628");
        }
    }



    return (
        <>
            {/* <img src={image} className="icon_logo"></img> */}

            <Space className="header" split={<Divider type="vertical" />} size={50}>
                <AnchorLink to="/#About" className="menu_link">ABOUT</AnchorLink>
                <AnchorLink to="/#resume" className="menu_link">RESUME</AnchorLink>
                <AnchorLink to="/#works" className="menu_link">WORKS</AnchorLink>
                <AnchorLink to="/#contact" className="menu_link">CONTACT</AnchorLink>
                {/* <Text className="menu_link" onClick={OnContact}>CONTACT</Text> */}
            </Space>

            <Space className="icon2">
                <Space className="icon3" >
                    <AiFillGithub id="Github" onClick={OnLink}></AiFillGithub>
                </Space>
                <Space className="icon4" >
                    <AiOutlineInstagram id="instagram" onClick={OnLink}></AiOutlineInstagram>
                </Space>
                <Space className="icon5" >
                    <AiFillFacebook id="facebook" onClick={OnLink}></AiFillFacebook>
                </Space>
                <Space className="icon6">
                    <AiFillMail  onClick={OnContact}></AiFillMail>
                </Space>
            </Space>

            {/* <Button icon={<AiFillGithub></AiFillGithub>}></Button>
                    <Button icon={<AiOutlineInstagram></AiOutlineInstagram>}></Button>
                    <Button icon={<AiFillFacebook></AiFillFacebook>}></Button>
                    <Button icon={<AiFillMail></AiFillMail>}></Button> */}

        </>
    );
}

export default Header;