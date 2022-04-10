import express, { Request, Response } from 'express';

import { TutorController } from '../controllers/TutorController';

const tutorRouter = express.Router();
const tutorController = new TutorController();

tutorRouter.post('/tutors', tutorController.createTutor);

export { tutorRouter };
