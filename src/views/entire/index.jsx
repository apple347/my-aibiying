import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import {useDispatch } from 'react-redux'
import { fetchEntireDataAction } from '@/store/modules/entire'


const Entire = memo(() => {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchEntireDataAction({offset:20*2,currentPage:20}))
  },[dispatch])
  
  
 
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire