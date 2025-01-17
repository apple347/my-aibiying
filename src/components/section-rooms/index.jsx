import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item';
import { RoomsWrapper } from './style';
const SectionRooms = memo((props) => {
    const {roomList=[],itemwidth}=props;
  return (
    <div>
        <RoomsWrapper>
        {
          roomList?.slice(0,8).map(item=>{
            return <RoomItem itemData={item} itemwidth={itemwidth} key={item.id} />
          })
        }
        </RoomsWrapper>
    </div>
  )
})

SectionRooms.propTypes = {
    roomList:PropTypes.array
}

export default SectionRooms