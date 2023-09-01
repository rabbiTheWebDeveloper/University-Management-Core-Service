import { AcademicSemester } from '@prisma/client';
import prisma from '../../../shared/prisma';

const inserIntoDB = async (
  academicSemesterData: AcademicSemester
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.create({
    data: academicSemesterData,
  });
  return result;
};

export const AcademicSemesterService = {
  inserIntoDB,
};
