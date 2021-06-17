import { Router } from "express";

import { themeRoutes } from "./theme.routes";

const router = Router();

router.use("/categories", themeRoutes);


export { router };
