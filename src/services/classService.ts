import Class, { IClass } from '../models/classModel.js';

export const createNewClass = async (className: string): Promise<IClass> => {
    try {
        const newClass = new Class({
            name: className
        });
        
        const savedClass = await newClass.save();
        return savedClass;

    } catch (error: any) {
        throw new Error(`Error creating new class: ${error.message}`);
    }
};

