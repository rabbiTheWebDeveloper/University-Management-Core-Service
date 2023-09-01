import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './acamedicSemester.service';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemester } from '@prisma/client';
import httpStatus from 'http-status';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.inserIntoDB(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Acamemic Semester successfully ',
    data: result,
  });
});
export const AcademicSemesterContoral = {
  insertIntoDB,
};
