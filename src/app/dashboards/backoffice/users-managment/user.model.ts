export interface IUser {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  verifiedAt?: Date;
  authorities?: string[];
  organizationName?: string;
  location?: string;
}

export class User implements IUser {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public password?: string,
    public createdAt?: Date,
    public verifiedAt?: Date,
    public authorities?: string[],
    public organizationName?: string,
    public location?: string
  ) {}
}
