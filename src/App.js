import React, {useContext} from 'react'
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer'
import Notifications from './components/Notifications'
import Options from './components/Options'
import { SocketContext } from './SocketContext'

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      image: {
        marginLeft: '15px',
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
}))

export default function App() {
    const classes = useStyles()
    const {callAccepted, callEnded, setVideo} = useContext(SocketContext)

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography varient='h2' align='center'>Face2Face</Typography>
            </AppBar>

            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
            {/* Options -> Notifications */}
        </div>
    )
}

