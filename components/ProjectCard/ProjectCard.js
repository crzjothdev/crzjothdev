import Image from 'next/image'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import Box from '@mui/material/Box'

export default function ProjectCard(props) {
    const { thumbnail, gitHubUrl, title, subtitle, ...other } = props

    return (
        <Card elevation={3}>
            <CardActionArea href={gitHubUrl} aria-label="GitHub Repository">
                <Box sx={{
                    position: 'relative',
                    aspectRatio: '1/1'
                }}>
                    <Image
                        src={thumbnail}
                        fill={true}
                        alt="Alpha Wolf"
                    />
                    <Box sx={(theme) => ({
                        padding: theme.spacing(0.5, 0.5, 0.5, 0.7),
                        backgroundColor: '#fff',
                        position: 'absolute',
                        top: theme.spacing(1),
                        right: 0,
                        borderRadius: '15px 0 0 15px',
                        zIndex: 1
                    })}>
                        <GitHubIcon sx={{ lineHeight: 'initial' }} />
                    </Box>
                </Box>
            </CardActionArea>
            <CardContent>
                <Typography variant="h6" component="h5">{title}</Typography>
                <Typography
                    variant="caption"
                    xs={{ letterSpacing: '0.1rem'}}
                >
                    {subtitle}
                </Typography>
            </CardContent>
        </Card>
    )
}

ProjectCard.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    gitHubUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}