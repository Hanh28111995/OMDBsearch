import React from 'react'
import { Carousel, Space, Avatar } from 'antd';
import event_birthday from '../../../src/assets/imgs/birthday_event.png'
import event_newemployee from '../../../src/assets/imgs/welcome_event.png'
import logo from '../../../src/assets/imgs/Logo_no_bg.png'


export default function StatusEvent(props) {
  console.log(props.eventType)
  return (
    <div>
      {
        (props.eventType === 'birthday')
          ? <Carousel autoplay={false} className='bg-white'>
            <div className='event_content' >
              <img src={event_birthday} alt="event_birthday" className='img-fluid' />
              <div className='event_content_overlay'>
                <Avatar src='https://admin.worldcraftlogistics.net/img/avatar/HannahT__2023-01-19-11-00-45-210.jpg' size={78}></Avatar>
              </div>
            </div>
            <div className='event_content' >
              <img src={event_birthday} alt="event_birthday" className='img-fluid' />
              <div className='event_content_overlay'>
                <Avatar src='https://admin.worldcraftlogistics.net/img/avatar/HannahT__2023-01-19-11-00-45-210.jpg' size={78}></Avatar>
              </div>
            </div>
          </Carousel>
          : <></> 
          // <Carousel autoplay={true} className='bg-white'>
          //   <div className='event_content' >
          //     <img src={event_newemployee} alt="event_birthday" className='img-fluid'style={{height:'250px'}}/>
          //     <div className='event_content_overlay'>
          //       <Avatar src='https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/34119486_234627287298535_5685520420447453184_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=0PIE1Uo9aRoAX_tg2FA&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDnIHGN8vNm06jBvXp8MDMh_k6Ly_0ub7-MKQ8gzonumA&oe=6443FDDA' size={78}></Avatar>
          //     </div>
          //   </div>
          // </Carousel>
      }
    </div>
  )
}
