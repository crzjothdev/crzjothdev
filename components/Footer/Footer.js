import Box from '@mui/material/Box'
import {
    ThemeProvider,
    createTheme,
    styled
} from '@mui/material/styles'
import { grey } from '@mui/material/colors'

import Social from '../Social'
import Disclaimers from '../Disclaimers'

const theme = createTheme({
    typography: {
        allVariants: {
            color: grey[50]
        }
    },
})

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4, 3),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#05262b',
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(10, 8),
    }
}))

export default function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <StyledBox component="footer">
                <Disclaimers />
                <Social />
            </StyledBox>
        </ThemeProvider>
    )
}