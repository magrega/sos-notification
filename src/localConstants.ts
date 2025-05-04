import { createTheme } from "@mui/material";

export const copyright = `© Copyright ${new Date().getFullYear()} magrega`;

export const sosCountdown = process.env.NODE_ENV === "production" ? 5 : 1;
export const codeCountdown =
  process.env.NODE_ENV === "production" ? 120 * 1000 : 3 * 1000;

export const theme = createTheme({
  typography: {
    fontFamily: `"Inter", "Roboto", "Arial", sans-serif`,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    text: {
      primary: "#00374D",
      secondary: "#7F9BA6",
      headings: "#54708C",
    },
    inputBackgroundColor: {
      main: "#F7F7F7",
    },
    inputBorderColor: {
      main: "#E7E7E7",
    },
    error: {
      main: "#CC0801",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ":hover": {
            cursor: "pointer",
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&&&:before": {
            borderBottom: "none",
          },
          "&&:after": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: "#F7F7F7",
            border: "1px solid #E7E7E7",
            borderRadius: "4px",
            transition: "none",
          },
          "& .MuiInputBase-root:hover": {
            background: "#E7E7E7",
          },
        },
      },
    },
  },
});
