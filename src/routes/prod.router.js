import { Router } from "express";
import { getAllProd, postProd } from "../controllers/prod.controller.js";

const router = Router()


router.get('/prod', getAllProd)
router.post('/prod', postProd)


export default router
