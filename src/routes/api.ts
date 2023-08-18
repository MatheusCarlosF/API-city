import { Router } from "express";
import * as ApiController from "../controllers/apiControllers";

const router = Router()

router.get('/city', ApiController.city)
router.get('/city/:id', ApiController.cityId)

export default router