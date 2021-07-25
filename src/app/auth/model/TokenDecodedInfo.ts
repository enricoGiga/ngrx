export interface TokenDecodedInfo {
    sub: string;
    exp: number;
    iat: number;
    firstName: string;
    lastName: string;
    authorities: Array<Authority>;
}
export interface Authority {
    authority: string;
}
