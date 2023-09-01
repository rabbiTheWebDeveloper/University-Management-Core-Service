import express from 'express';
import { AcademicSemesterContoral } from './academicSemester.controlar';
const router = express.Router();

router.post('/', AcademicSemesterContoral.insertIntoDB);
export const AcademicSemesterRouter = router;
