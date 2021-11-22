declare namespace Express{
    export interface Request {
        user: { // adicionar a variaveis user a campo id
            id: string;
        }
    }
}