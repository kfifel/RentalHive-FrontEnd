
export class ResponseModel <T> {
  constructor(
    public result: T | null = null,
    public message: string = '',
    public errors: any | null = null
  ) {}
}
