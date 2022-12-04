import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url('/back.png')`,
    backgroundSize: 'cover',
    flexDirection: 'column'
}))

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2),
        '& .MuiSvgIcon-root': {
            fontSize: '2rem'
        }
    }
}))

export default function Parallax() {
    return (
        <StyledBox>
            <Typography variant="h2" color="white">
                Angelo Cruz
            </Typography>
            <Typography variant="h4" color="white">
                Software Developer
            </Typography>
            <Box sx={(theme) => ({
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: theme.spacing(6),
                minWidth: theme.spacing(20),
                [theme.breakpoints.up('md')]: {
                    marginTop: theme.spacing(6),
                    minWidth: theme.spacing(37)
                }
            })}>
                <StyledIconButton
                    component="a"
                    href="https://github.com/crzjothdev"
                >
                    <GithubIcon />
                </StyledIconButton>
                <StyledIconButton
                    component="a"
                    href="https://linkedin.com/in/angelo-cruz-4b998a139"
                >
                    <LinkedInIcon />
                </StyledIconButton>
                <StyledIconButton
                    component="a"
                    href="https://twitter.com/AngeloC56997529"
                >
                    <TwitterIcon />
                </StyledIconButton>
            </Box>
        </StyledBox>
    )
}