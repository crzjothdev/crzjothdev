import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(({ theme }) => ({
    '&:first-of-type': {
        marginTop: theme.spacing(3) 
    },
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 0),
        '&:first-of-type': {
            marginTop: theme.spacing(6)
        }
    }
}))

export default function Section(props) {
    const { children, ...other } = props

    return (
        <StyledBox
            sx={(theme) => ({
                margin: theme.spacing(3, 3, 8),
                [theme.breakpoints.up('md')]: {
                    margin: theme.spacing(0, 0, 6, 0)
                }
            })}
            
            {...other}
        >
            {children}
        </StyledBox>
    )
}

