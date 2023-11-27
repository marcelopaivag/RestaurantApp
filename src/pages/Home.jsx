import React from 'react'
import { Jumbotron } from '../components/Jumbotron'
import { Acordion } from '../components/Acordion'
import { Gmap } from '../components/Gmap'
import CatalogoPlatos from '../components/CatalogoPlatos'

export const Home = () => {
  return (
    <>
    <Jumbotron />
    <CatalogoPlatos />
    <Acordion />
    <Gmap />
    </>
  )
}