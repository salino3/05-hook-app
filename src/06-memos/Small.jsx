// import {memo} from 'react';// utilizando 'memo'
import React from 'react';// utilizando 'React.memo' 


export const Small = React.memo(({value}) => {

  console.log('me volví a dibujar')


  return <small>{value}</small>;
})

