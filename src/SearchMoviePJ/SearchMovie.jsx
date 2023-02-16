import React from 'react'
import MovieDetail from './MovieDetail'
import SearchInput from './SearchInput'
import './index.scss'
import ModelComponent from './ModelComponent'
import { useSelector } from 'react-redux'

export default function SearchMovie() {
  
  return (
    <div className='wrapper'>
      <div className='container pb-5'>
        <div className='content'>
          <SearchInput />
          <MovieDetail />
          <ModelComponent/>
        </div>
      </div>
    </div>
  )
}
