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

const getAllClasses = async (): Promise<IClass[] | []> => {
    try {
        const allClasses = await Class.find();
        return allClasses
    } catch (error:any) {
        throw new Error(`Error fetching all classes: ${error.message}`);
    }
};

export const IsClassExist = async (classToCheck: string): Promise<string | null> => {
    const existingClass = await Class.findOne({ name: classToCheck });

    if (!existingClass) {
        return null;
    }

    return existingClass.id
};

