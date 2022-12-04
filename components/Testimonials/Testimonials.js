import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const testimonials = [
    {
        author: 'David Nolasco',
        content: `"The company where I was working when Angelo started had been planing
        many upgrates and gave new fresh experience to all customers. Angelo proposed
        new modern framework witch will help us to reach those achivements faster"`
    },
    {
        author: 'René Peña',
        content: `"Angelo Cruz has been a great co-worker during our many shared projects.
        He has developed special tools, recommend modern software technologies. He built
        mobile based token for one company that we used to work"`
    }
]

const TestimonialBox = (props) => {
    const { author, content } = props

    return (
        <Box sx={(theme) => ({
            height: '100%',
            backgroundColor: theme.palette.grey[50],
            borderRadius: theme.spacing(3),
            padding: theme.spacing(3, 4, 4, 4),
            [theme.breakpoints.up('md')]: {
                padding: theme.spacing(4, 5, 5, 5),
                border: '1px solid #efefef',
                borderRadius: theme.spacing(4),
            },

        })}>            
            <Typography variant="h5" gutterBottom>
                {author}
            </Typography>
            <article>
                <Typography
                    component="p"
                    sx={{
                        fontStyle: 'italic',
                        textAlign: 'justify'
                    }}
                >
                    {content}
                </Typography>
            </article>
        </Box>
    )
}

export default function Testimonials() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box id="testimonials">
            <Typography
                variant="h4"
                mb={4}
            >
                Testimonials
            </Typography>
            <Grid container spacing={matches ? 8 : 3}>
                {testimonials.map((testimonial, index) => (
                    <Grid key={index} item xs={12} md={6} lg={6}>
                        <TestimonialBox
                            author={testimonial.author}
                            content={testimonial.content}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}