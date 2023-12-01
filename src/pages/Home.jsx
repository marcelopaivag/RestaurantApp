import React from 'react'
import { Jumbotron } from '../components/Jumbotron'
import { Acordion } from '../components/Acordion'
import { Gmap } from '../components/Gmap'
import Dishes from '../components/Dishes'


export const Home = () => {
  return (
    <>
      <Jumbotron />
      <Dishes />
      <Acordion />
      <Gmap />
    </>
  )
}