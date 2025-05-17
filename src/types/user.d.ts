
/**
 * Represents a user session.
 */
export interface Session {
  valid: boolean;
  user: User;
  expirationDate?: number;
}

/**
 * Represents a user.
 */
export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  language_code: string;
  is_premium: boolean;
  allows_write_to_pm: boolean;
  photo_url: string;
}
