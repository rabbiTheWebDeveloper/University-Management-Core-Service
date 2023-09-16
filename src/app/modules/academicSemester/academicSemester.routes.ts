import express from 'express';
import { AcademicSemesterContoral } from './academicSemester.controlar';
const router = express.Router();

router.post('/add-semester', AcademicSemesterContoral.insertIntoDB);
export const AcademicSemesterRouter = router;
