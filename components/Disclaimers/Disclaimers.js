import clsx from 'clsx'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff'
    }
}))

export default function Disclaimers(props) {
    const { className, ...other } = props

    const classes = useStyles()

    return (
        <div className={clsx(classes.root, className)}>
            <Typography variant="h6">
                Angelo Cruz
            </Typography>
            <Typography variant="subtitle1">
                © 2022, All Rights Reserved
            </Typography>
        </div>
    )
}