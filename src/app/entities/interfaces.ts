export interface IVerifyIntegrityPasswordCode {
    email: string;
    code: string
}

export interface ChangePassword {
    email: string;
    newPassword: string;
}