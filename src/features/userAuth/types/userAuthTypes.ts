export interface IUsersTokenResponse {
  success: boolean;
  token: string;
}

export interface IUserAuthResponse {
  success: boolean;
  user_id: number;
  message: string;
}
