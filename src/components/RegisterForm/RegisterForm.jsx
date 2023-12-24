import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "styles";
import { register } from "../../redux/auth/operations";
import { info } from "notifications/notiflixInit";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const data = new FormData(form);

    const name = `${data.get("firstName").trim()} ${data
      .get("lastName")
      .trim()}`;
    const email = data.get("email").trim();
    const password = data.get("password").trim();

    if (!name || !email || !password) return info("All fields are required");

    const body = {
      name,
      email,
      password,
    };

    dispatch(register(body));

    form.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Josefin Sans",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "primary.main", color: "secondary.main" }}
          ></Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontFamily: "Josefin Sans" }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, fontFamily: "Josefin Sans" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  color="secondary"
                  autoFocus
                  sx={{
                    "& label": {
                      fontFamily: "Josefin Sans",
                    },
                    "*": {
                      fontFamily: "Josefin Sans",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  color="secondary"
                  sx={{
                    "& label": {
                      fontFamily: "Josefin Sans",
                    },
                    "*": {
                      fontFamily: "Josefin Sans",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="secondary"
                  sx={{
                    "& label": {
                      fontFamily: "Josefin Sans",
                    },
                    "*": {
                      fontFamily: "Josefin Sans",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="secondary"
                  sx={{
                    "& label": {
                      fontFamily: "Josefin Sans",
                    },
                    "*": {
                      fontFamily: "Josefin Sans",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontFamily: "Josefin Sans" }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
