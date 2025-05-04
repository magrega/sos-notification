import "@mui/material/Alert";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    headings?: string;
  }

  interface Palette {
    text: TypeText;
    inputBackgroundColor: Palette["primary"];
    inputBorderColor: Palette["primary"];
  }

  interface PaletteOptions {
    inputBackgroundColor?: PaletteOptions["primary"];
    inputBorderColor?: PaletteOptions["primary"];
  }

  interface Theme {
    palette: Palette;
  }
}
