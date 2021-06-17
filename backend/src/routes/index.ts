import { Router } from "express";

import { themeRoutes } from "./theme.routes";

const router = Router();

router.use("/theme", themeRoutes);


export { router };
