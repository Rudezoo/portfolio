import React, { useEffect, useState } from 'react'
import '../../css/header.css'
import { Typography, Space, Divider, Button } from 'antd';
import { Link } from 'gatsby'
import image from '../../images/gatsby-icon.png'
import { AiFillGithub, AiOutlineInstagram, AiFillFacebook, AiFillMail } from 'react-icons/ai'

const Header = () => {
    const { Text } = Typography;


    const OnAbout = () => {
        window.scrollTo({
            top: 730,
            behavior: 'smooth'
        })

    }
    const OnResume = () => {
        window.scrollTo({
            top: 1250,
            behavior: 'smooth'
        })

    }



    return (
        <>
            <img src={image} className="icon"></img>

            <Space className="header" split={<Divider type="vertical" />} size={50}>
                <Text className="menu_link" onClick={OnAbout}>ABOUT</Text>
                <Text className="menu_link" onClick={OnResume}>RESUME</Text>
                <Text className="menu_link">WORKS</Text>
                <Text className="menu_link">CONTACT</Text>
            </Space>

            <Space className="icon2">
                <Space className="icon3">
                    <AiFillGithub></AiFillGithub>
                </Space>
                <Space className="icon4">
                    <AiOutlineInstagram></AiOutlineInstagram>
                </Space>
                <Space className="icon5">
                    <AiFillFacebook></AiFillFacebook>
                </Space>
                <Space className="icon6">
                    <AiFillMail></AiFillMail>
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