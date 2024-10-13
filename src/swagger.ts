import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
    openapi: '3.0.0',
    info:{
        title: "teacher api",
        version: '1.0.0',
        description: "register and managing classes students and grades "
    },
    servers:[
        {
            url: 'http://localhost:8080'
        }
    ]
}

const options = {
    swaggerDefinition,
    apis: ['./src/Routes/*.ts','./src/pp.ts']
}

const swaggerDocs = swaggerJSDoc(options);

export { swaggerUi, swaggerDocs };