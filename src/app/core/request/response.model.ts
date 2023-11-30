
export class ResponseModel <T> {
  constructor(
    public data: T | null = null,
    public message: string = '',
    public errors: any[] | null = null
  ) {}
}
