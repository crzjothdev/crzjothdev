import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function SocialNetwork() {
    return (
        <Box sx={(theme) => ({
            marginLeft: 'auto',
            '& svg': {
                color: theme.palette.grey[50]
            }
        })}>
            <IconButton
                component="a"
                href="https://github.com/crzjothdev"
                aria-label="GitHub"
            >
                <GitHubIcon alt="GitHub" />
            </IconButton>
            <IconButton
                component="a"
                color="primary"
                href="https://linkedin.com/in/angelo-cruz-4b998a139"
                aria-label="LinkedIn"
            >
                <LinkedInIcon alt="LinkedIn" />
            </IconButton>
            <IconButton
                component="a"
                href="https://twitter.com/AngeloC56997529"
                aria-label="Twitter"
            >
                <TwitterIcon alt="Twitter" />
            </IconButton>
        </Box>
    )
}