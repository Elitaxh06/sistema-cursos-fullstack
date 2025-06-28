import { Router } from "express";
import { 
    listarCursos,
    listarCursosPorId,
    Insertar,
    Actualizar,
    updateLogico
} from "../controller/cursos.controller.js";

const router = Router()

router.post("/cursos/insertar", Insertar)

router.get("/cursos/listarCursos", listarCursos)

router.get("/cursos/listarPorId/:id", listarCursosPorId)

router.post("/cursos/actualizarLogico", updateLogico)

router.put("/cursos/actualizar/:id", Actualizar)

export default router   