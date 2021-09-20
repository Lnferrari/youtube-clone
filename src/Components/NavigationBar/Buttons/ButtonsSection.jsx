
import React from 'react'
import {MdVideoCall as VideoIcon} from 'react-icons/md'
import {MdApps as Apps} from 'react-icons/md'
import {MdNotifications as Notification} from 'react-icons/md'
import ReactTooltip from 'react-tooltip';
import faker from 'faker';

const ButtonsSection = () => {

  return (
      <div className='buttons'>
          <button className='icon-container'>
              <VideoIcon size={25} data-tip='Create' data-for='navbar' />
          </button>

          <button className='icon-container'>
              <Apps size={25} data-tip='YouTube Apps' data-for='navbar' />
          </button>
          
          <button className='icon-container'>
              <Notification size={25} data-tip='Notifications' data-for='navbar' />
          </button>
          
          <img src={faker.image.avatar()} alt="avatar image" className='avatar' />
          
          <ReactTooltip id='navbar' backgroundColor='grey' effect='solid' offset="{'top': -10}" delayHide={150} arrowColor='transparent' />
      </div>
  )
}

export default ButtonsSection