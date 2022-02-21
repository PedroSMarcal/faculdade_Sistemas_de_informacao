import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppErrors";
import authConfig from '../../config/auth';


interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function isAuthenticated(request: Request, response: Response, next: NextFunction){
    let authHeaders =  request.headers.authorization

    if (!authHeaders){
        throw new AppError("JWT Token is missing");
    }

    let [, token] = authHeaders.split(' ')

    try{
        let decodedToken =  verify(token, authConfig.jwt.secret)

        const {sub} = decodedToken as ITokenPayload;

        request.user = {
            id: sub
        }

        return next()
    }   
    catch{
        throw new AppError('Invalid JWT Token')
    }
}