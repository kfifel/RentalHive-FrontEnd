export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  verifiedAt: Date;
  authorities: string[];
  organizationName: string;
}

export class User implements IUser {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public createdAt: Date,
    public verifiedAt: Date,
    public authorities: string[],
    public organizationName: string
  ) {}
}
