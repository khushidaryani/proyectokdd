import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function Login() {

    return (
        <>

            <main>

                <Container>

                    <Stack spacing={2} mx={2} mt={5} mb={5}>

                        <Typography variant='h1' color="primary">
                            Página Login de Khushi Daryani Daryani
                        </Typography>
                        <Typography variant='h2' color="secondary">
                            Título H2 - Color secundario
                        </Typography>
                        <Typography variant='h3' color="info">
                            Título H3 - Color "Info"
                        </Typography>
                        <Typography variant='subtitle1' color="success">
                            Subtítulo 1 - Color "Success"
                        </Typography>
                        <Typography variant='body1' color="error">
                            Cuerpo 1 - Color "Error"
                        </Typography>
                        <Typography variant='caption' color="warning">
                            Caption - Color "Warning"
                        </Typography>

                        <br /><br />

                        <Button variant="contained" color="warning">
                            Contained - Color "Warning"
                        </Button>
                        <Button disabled variant="contained" color="success">
                            Deshabilitado
                        </Button>
                        <Button variant="outlined" color="info">
                            Outlined - Color "Info"
                        </Button>
                        <Button variant="contained" color="success">
                            Contained - Color "Success"
                        </Button>

                        <br /><br />

                        <Button variant="contained" color="primary">
                            Contained - Color primario
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Outlined - Color secundario
                        </Button>

                    </Stack>

                </Container>

            </main>

        </>
    )

}

export default Login