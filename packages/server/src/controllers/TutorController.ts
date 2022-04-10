import { Address } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/Prisma';

class TutorController {
    public createTutor = async (req: Request, res: Response) => {
        const { name, email, address } = req.body;

        try {
            const tutor = await prisma.tutor.create({
                data: {
                    name,
                    email,
                },
            });

            const normalizedAddress: Address = address.map((address: Address) => {
                return {
                    ...address,
                    tutor_id: tutor.id,
                };
            });

            console.log('normalizedAddress: ewf', normalizedAddress);

            if (tutor && address) {
                const tutorAddress = await prisma.address.createMany({
                    data: normalizedAddress,
                });

                if (tutorAddress) {
                    return res.status(201).json({
                        message: 'Tutor created successfully',
                        tutor,
                        tutorAddress,
                    });
                }
            }

            if (tutor) {
                return res.status(201).json({
                    message: 'Tutor created successfully',
                    tutor,
                });
            }
        } catch (error) {
            res.json({ message: `Error on creating a new tutor:\n ${error}` });
        }
    };
}

export { TutorController };
