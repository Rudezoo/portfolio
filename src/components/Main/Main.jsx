import React from 'react'
import '../../css/Main.css'
import { Typography, Space,Divider} from 'antd';
import { useSpring, animated } from 'react-spring'
import image from '../../images/Intro2.jpg'
import image2 from '../../images/me.jpg'
import Header from './Header';
import About from './About';
import SwipeableViews from 'react-swipeable-views';
import MyCard from './MyCard';
import Resume from './Resume';
import Works from './Works';
import Contact from './Contact';


const Main = () => {

    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

    const trans0 = (x, y) => `translate3d(${-x / 100}px,${-y / 100}px,0)`
    const trans1 = (x, y) => `translate3d(${-x / 60}px,${-y / 60}px,0)`
    const trans2 = (x, y) => `translate3d(${-x / 40}px,${-y / 40}px,0)`

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

    const { Text } = Typography;

    return (
        <>
            <div className="Frame">

                <div className="Intro" style={{
                    display: "flex",
                    justifyContent: "center"
                }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <animated.div style={{ transform: props.xy.interpolate(trans0) }}>
                        <img src={image} className="Image" draggable={false}></img>
                    </animated.div>
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        transform: 'translateY(-50%)',
                    }}>
                        <div>


                            <div className="card" >
                                <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
                                    <Text className="Intro_Ment">첫인상</Text>
                                    <Text className="Intro_Ment2">을 그리는 웹개발자</Text>
                                </animated.div>
                            </div>
                            <div className="card2" >
                                <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
                                    <Text className="Intro_Ment3" ><Text type="warning" >Front-end & Game</Text> 개발자 김주언입니다</Text>
                                </animated.div>
                            </div>
                            {/*                                 <div>
                                    <Text className="Intro_Ment">첫인상</Text>
                                    <Text className="Intro_Ment2">을 그리는 웹개발자</Text>
                                </div>

                                <div>
                                    <Text className="Intro_Ment3">Front-end & Game 개발자 김주언입니다</Text>
                                </div> */}


                        </div>
                    </div>

                    <Header></Header>
                    <div className="downbutton">
                        버튼입니다
                    </div>
                </div>
                <Space direction="vertical">
                    <About></About>
                    <Resume></Resume>
                    <Works></Works>
                    <Contact></Contact>
                </Space>




            </div>

        </>
    )
}

export default Main