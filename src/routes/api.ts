import { Router } from "express";
import * as ApiController from "../controllers/apiControllers";

const router = Router()

router.get('/loja', ApiController.loja)
router.get('/loja/:id', ApiController.lojaId)

export default router