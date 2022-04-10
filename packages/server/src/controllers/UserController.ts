import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../config/Prisma';

class UserController {
    private hashPassword = async (password: string) => {
        const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS) || 10);
        return await bcrypt.hash(password, salt);
    };

    public createUser = async (req: Request, res: Response) => {
        const { name, email, password } = req.body;
        const hashedPassword = await this.hashPassword(password);

        if (!name || !email || !password) {
            return res.status(400).send({
                message: 'Please provide name, email and password',
            });
        }

        try {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                },
            });

            if (user) {
                return res.status(201).json({
                    message: 'User created successfully',
                    user,
                });
            }
        } catch (error) {
            res.json({ message: `Error on creating a new user:\n ${error}` });
        }
    };

    public getUsers = async (req: Request, res: Response) => {
        try {
            const users = await prisma.user.findMany();

            if (users) {
                return res.status(200).json({
                    message: 'Users retrieved successfully',
                    users,
                });
            }
        } catch (error) {
            res.json({ message: `Error on retrieving users:\n ${error}` });
        }
    };

    public getUser = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const user = await prisma.user.findFirst({
                where: {
                    id,
                },
            });

            if (user) {
                return res.status(200).json({
                    message: 'User retrieved successfully',
                    user,
                });
            }
        } catch (error) {
            res.json({ message: `Error on retrieving user:\n ${error}` });
        }
    };

    public updateUser = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const hashedPassword = await this.hashPassword(password);

        try {
            const user = await prisma.user.update({
                where: {
                    id,
                },
                data: {
                    name,
                    email,
                    password: hashedPassword,
                },
            });

            if (user) {
                return res.status(200).json({
                    message: 'User updated successfully',
                    user,
                });
            }
        } catch (error) {
            res.json({ message: `Error on updating user:\n ${error}` });
        }
    };

    public deleteUser = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const user = await prisma.user.delete({
                where: {
                    id,
                },
            });

            if (user) {
                return res.status(200).json({
                    message: 'User deleted successfully',
                    user,
                });
            }
        } catch (error) {
            res.json({ message: `Error on deleting user:\n ${error}` });
        }
    };
}

export { UserController };
