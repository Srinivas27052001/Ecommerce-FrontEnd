import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import { positions } from '@mui/system'

import React from 'react'



const TrignleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"

    
})
const Achivement = () => {
  return (
    <div>
        <Card className='' sx={{position:"relative"}}>
            <CardContent>

                <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                    Shop with myshop
                </Typography>
                <Typography variant='body2'>
                    Congratulations🥳
                </Typography>
                <Typography variant='h5' sx={{my:3.1}}> 420.8k</Typography>
                <Button size='small' variant='contained'>View Sales</Button>

                <TrignleImg src=''></TrignleImg>
                <TrophyImg  src='https://cdn-icons-png.flaticon.com/512/536/536056.png'></TrophyImg>

            </CardContent>

        </Card>
    </div>
  )
}

export default Achivement