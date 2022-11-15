import clsx from 'clsx'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    twitter: {},
    gitIcon: {},
    linkedIn: {}
}))

export default function SocialNetwork(props) {
    const { className, ...other } = props

    const classes = useStyles()

    return (
        <div className={clsx(classes.root, className)}>
            <IconButton
                component="a"
                href="https://twitter.com/AngeloC56997529"
            >
                <TwitterIcon className={classes.twitter} />
            </IconButton>
            <IconButton
                component="a"
                href="https://linkedin.com/in/angelo-cruz-4b998a139"
            >
                <LinkedInIcon className={classes.linkedIn} />
            </IconButton>
            <IconButton
                component="a"
                href="https://github.com/crzjothdev"
            >
                <GitHubIcon className={classes.faceIcon} />
            </IconButton>
        </div>
    )
}