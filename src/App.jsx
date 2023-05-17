import {Box, Container, TextField, Button} from '@mui/material'
import './App.css'

function App() {
  return (
    <>
     <Container>
     <Box
      component="form"
      sx={{
        display: 'flex', flexDirection: 'column', flexGrow: 1
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" />
      <Button variant="contained" color="success" >
  Login
</Button>
    </Box>
     </Container>
    </>
  )
}

export default App
