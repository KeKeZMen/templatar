export class ApiError extends Error {
  constructor(message: string) {
    super(message);
  }

  static badRequest(message: string) {
    return new ApiError(message);
  }
}
