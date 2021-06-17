import Theme from "../models/Theme";

class ThemeService {
  constructor() {
    const theme: Theme = {
      background: "",
      name: "",
      primary: "",
      secondary: "",
    };
  }

  createTheme({}: Theme);
}
