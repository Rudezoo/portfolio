import React, { useState, useEffect } from 'react'
import '../../css/Main.css'
import { Typography, Space } from 'antd';
import { useSpring, animated as a } from 'react-spring'

const MyCard = () => {


    const { Text } = Typography;
    const [click, setclick] = useState(false);
    const OnClickLook = () => {
        setclick(true)
    }


    return (
        <>
            <div>


                <div className="card" >
                    {/*                     <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
                                    <Text className="Intro_Ment">첫인상</Text>
                                    <Text className="Intro_Ment2">을 그리는 웹개발자</Text>
                                </animated.div>
                                <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
                                    <Text className="Intro_Ment4">그리고 게임 개발자</Text>
                                </animated.div>  */}
                    <div>
                        <Text className="Intro_Ment">첫인상</Text>
                        <Text className="Intro_Ment2">을 그리는 웹개발자</Text>
                    </div>

                    <div>
                    <Text className="Intro_Ment3">Front-end & Game 개발자 김주언입니다</Text>
                    </div>
                </div>

            </div>





        </>
    );
}

export default MyCard;