import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
}))

export default function ProjectImage(props) {
    const { src } = props

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img src={src} className={classes.image}/>
        </div>
    )
}