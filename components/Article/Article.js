import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    content: {
        flexGrow: 1,
    },
    media: {
        maxWidth: '300px'
    }
}))

export default function Article(props) {
    const {
        src,
        title,
        text,
        alt,
        variant='imgstart',
        ...other
    } = props

    const classes = useStyles()

    return (
        <Card className={classes.root} {...other}>
            <CardMedia
                className={classes.media}
                component="img"
                height={198}
                image={src}
                alt={alt}
            />
            <CardContent className={classes.content}>
                <Typography variant="h5">{title}</Typography>
                <Typography>{text}</Typography>
            </CardContent>
        </Card>
    )
}

Article.propTypes = {
    variant: PropTypes.oneOf(['imgstart', 'imgend'])
}

