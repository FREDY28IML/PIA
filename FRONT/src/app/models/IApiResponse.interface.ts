export interface IApiResponse<T> {
    error: boolean;
    status: number;
    msg: string;
    body: T; 
}