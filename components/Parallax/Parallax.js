import Image from 'next/image'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const StyledImage = styled(Image)(({ theme }) => ({
    zIndex: -1,
    objectFit: 'cover'
}))

const StyledBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
            <Typography component="h1" variant="h2" color="white">
                Angelo Cruz
            </Typography>
            <Typography component="h2" variant="h4" color="white">
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
                    aria-label="GitHub"
                >
                    <GithubIcon alt="GitHub" />
                </StyledIconButton>
                <StyledIconButton
                    component="a"
                    href="https://linkedin.com/in/angelo-cruz-4b998a139"
                    aria-label="LinkedIn"
                >
                    <LinkedInIcon alt="LinkedIn" />
                </StyledIconButton>
                <StyledIconButton
                    component="a"
                    href="https://twitter.com/AngeloC56997529"
                    aria-label="Twitter"
                >
                    <TwitterIcon alt="Twitter" />
                </StyledIconButton>
            </Box>
            <StyledImage
                src="/back.webp"
                alt="back"
                sizes="100vw"
                priority={true}
                fill={true}
            />
        </StyledBox>
    )
}