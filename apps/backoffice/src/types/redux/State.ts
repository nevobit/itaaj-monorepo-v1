import { Result } from "@rv/types";

export interface State<T> {
  result: Result<T>;
  loading: boolean;
  error: string | undefined;
  success: boolean;
}