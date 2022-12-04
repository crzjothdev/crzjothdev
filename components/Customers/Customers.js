import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const companies = [
    { name: 'Jetstereo', image: 'jetstereo.webp' }
]

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderWidth: '1px',
    borderStyle: 'solid',
    border: '1px solid #efefef',
}))

const CompanyBox = (props) => (
    <Box
        sx={{
            position: 'relative',
            width: '100%',
            minHeight: 60,
            border: '1px solid #efefef',
            borderRadius: 2,
        }}
    >
        <Image {...props} />
    </Box>
)

export default function Customers() {
    return (
        <Box id="customers">
            <Typography 
                variant="h4"
                mb={4}
            >
                Customers
            </Typography>
            <Box sx={(theme) => ({
                padding: 4,
                borderRadius: theme.spacing(3),
                border: '1px solid #efefef',
                [theme.breakpoints.up('md')]: {
                    padding: 6,
                    borderRadius: 10,
                }
            })}>
                <Grid container spacing={4}>
                    {companies.map((company, index) => (
                        <Grid key={index} item xs={6} sm={3} md={2}>
                            <CompanyBox
                                alt={company.name}
                                src={`/images/${company.image}`}
                                fill
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}