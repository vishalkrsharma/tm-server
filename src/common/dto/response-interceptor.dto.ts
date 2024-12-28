export class ResponseDto<T> {
  success: boolean;
  data: T;
  message: string;
  errors: any;

  constructor(success: boolean, data: T, message: string, errors: any) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.errors = errors;
  }
}
