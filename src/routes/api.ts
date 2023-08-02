import { Router } from "express";
import * as ApiController from "../controllers/apiControllers";

const router = Router()

router.get('/ping', ApiController.ping)
router.get('/city', ApiController.city)

export default router