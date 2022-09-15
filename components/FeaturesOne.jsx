// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import { AiFillAlert } from 'react-icons/ai';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import { AiFillMacCommand } from 'react-icons/ai';



// Material Kit 2 React components


function FeaturesOne() {
  return (
    
    <div className=" w-full  mb-28 mt-28">
      <Container className="p-20 bg-sky-600 text-white w-full">
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <div className="text-4xl font-medium my-5">
              Read More About Us
            </div>
            <div className="w-full">
              Pain is what we go through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes harder for us to give
              others a hand.
            </div>
        
            <div>
              
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <Box display="flex" alignItems="center" p={2}>
                <Box
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                 <Icon sx={{ fontWeight: "bold",fontSize:"2.5rem",margin:"10px" }}><AiFillAlert className="text-yellow-500 " /></Icon>
                </Box>
                <div className="ml-3">
                  It becomes harder for us to give others a hand.
                  <br />
                  We get our heart broken by people we love.
                </div>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                <Box
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                 <Icon sx={{ fontWeight: "bold",fontSize:"2.5rem",margin:"10px" }}><AiFillCodeSandboxCircle className="text-yellow-500 " /></Icon>
                </Box>
                <div className="ml-3">
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </div>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                <Box
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                 <Icon sx={{ fontWeight: "bold",fontSize:"2.5rem",margin:"30px" }}><AiFillMacCommand className="text-yellow-500 " /></Icon>
                </Box>
                <div className="ml-3">
                  When we lose family over time.
                  <br />
                  What else could rust the heart more over time? Blackgold.
                </div>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FeaturesOne;