import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Contact() {
    return (
        <Box id="contact">
            <Typography 
                variant="h4"
                mb={4}
            >
                Get In Touch
            </Typography>
            <Box boxShadow={1} sx={(theme) => ({
                padding: 4,
                borderRadius: theme.spacing(3),
                border: '1px solid #20909a',
                display: 'flex',
                justifyContent: 'center',
                [theme.breakpoints.up('md')]: {
                    padding: 6,
                    borderRadius: 10,
                }
            })}>
                <Box sx={{
                    textAlign: 'center',
                }}>
                    <Typography variant="h6" mb={2}>
                        I am actully available to join a great company
                        that would likes to achieve great accomplishments
                    </Typography>
                    <Button
                        component="a"
                        href="mailto: jothang31@gmail.com"
                        color="primary"
                        variant="contained"
                        disableElevation
                    >
                        Contact Me
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}