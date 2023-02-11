import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
    display: 'flex',
    border: '1px solid #20909a',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        borderRadius: theme.spacing(5),
        flexDirection: 'row'
    },
    '& > .MuiBox-root': {
        [theme.breakpoints.up('md')]: {
            flexBasis: 0,
            flexGrow: 1,
        },
    },
}))

const StyledImage = styled(Image)(({ theme }) => ({
    borderRadius: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        borderRadius: theme.spacing(5),
        marginBottom: 0,
    }
}))

export default function Aboutme() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box id="about-me">
            <Typography 
                variant="h4"
                mb={4}
            >
                About Me
            </Typography>
            <StyledBox>
                <Box sx={{ order: matches ? 1 : 2, textAlign: 'justify' }}>
                    <Typography component="p" mb={2}>
                        Hello my name is Angelo! Since I started my university life I have 
                        been interested in computer technologist, continuosly learning and 
                        applying modern software patterns and methods. I have been working 
                        on great projects in private companies and personal entrepreneurship. 
                        I have a special focus on frontend and mobile development but also 
                        on backend and multipropuse programming languages.
                    </Typography>
                    <Typography component="p" mb={2}>
                        Much of my time is invested in getting best practices, faster development
                        methods and standardised rules to as provide highly qualified software
                    </Typography>
                    <Typography variant="body1" component="span">
                        Some of the skilled programming languages that I have been working with are:
                    </Typography>
                    <Box
                        component="ul"
                        sx={{
                            margin: 0,
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            listStyleImage: 'url("/icons/chevron.svg")',
                            '& li::marker': {
                                fontSize: '40px',
                                verticalAlign: 'middle',
                                lineHeight: '20px'
                            }
                        }}
                    >
                        <li>JS</li>
                        <li>C#</li>
                        <li>PHP</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>Phyton</li>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    order: matches ? 2 : 1
                }}>
                    <StyledImage
                        src="/images/profile.webp"
                        alt="Angelo Cruz"
                        width={300}
                        height={300}
                    />
                </Box>
            </StyledBox>
        </Box>
    )
}