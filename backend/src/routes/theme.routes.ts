import { Router } from "express";
import Theme from "../modules/models/Theme";
const themeRoutes = Router();

let theme:Theme = {
  name: "Deafaul theme",
  background: "#FFF",
  primary: "blue",
  secondary: "red"
}

themeRoutes.get('/', (request, response) => {
  return response.json(theme);
});

themeRoutes.post('/create', (request, response) => {
  const {name, background, primary, secondary} = request.body;

  Object.assign(theme, {name, background, primary, secondary});

  return response.json(theme);
});

themeRoutes.put('/update', (request, response) => {
  const {name, background, primary, secondary} = request.body;

  Object.assign(theme, {name, background, primary, secondary});

  return response.json(theme);
});

export { themeRoutes };
