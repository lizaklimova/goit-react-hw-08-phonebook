import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { IoLockClosedOutline } from "react-icons/io5";
import { defaultTheme } from "styles";
import { login } from "../../redux/auth/operations";
import { info } from "notifications/notiflixInit";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const email = data.get("email").trim();
    const password = data.get("password").trim();

    if (!email || !password)
      return info("Please, enter your login and password!");

    const body = {
      email,
      password,
    };

    dispatch(login(body));

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
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <IoLockClosedOutline color={defaultTheme.palette.secondary.light} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="current-name"
              color="secondary"
              autoFocus
              sx={{
                "& :-webkit-autofill": {
                  boxShadow: `0 0 0px 1000px ${defaultTheme.palette.secondary.dark} inset`,
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              color="secondary"
              bgcolor="secondary"
              autoComplete="current-password"
              sx={{
                "& :-webkit-autofill": {
                  boxShadow: `0 0 0px 1000px ${defaultTheme.palette.secondary.dark} inset`,
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
