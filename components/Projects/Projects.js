import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { styled }from '@mui/material/styles'

import ProjectCard from '../ProjectCard'

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

export default function Projects() {
    return (
        <Box id="projects">
            <Typography 
                variant="h4"
                mb={4}
            >
                Projects
            </Typography>
            <StyledBox>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ProjectCard
                            title="Professional Profile"
                            subtitle="Built with NextJS 13"
                            thumbnail="/images/logo.webp"
                            gitHubUrl="https://github.com/crzjothdev/crzjothdev"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ProjectCard
                            title="Wedding Template"
                            subtitle="Built with NextJS 13"
                            thumbnail="/images/wedding-logo.webp"
                            gitHubUrl="https://github.com/crzjothdev/wedding"
                        />
                    </Grid>
                </Grid>
            </StyledBox>
        </Box>
    )
}