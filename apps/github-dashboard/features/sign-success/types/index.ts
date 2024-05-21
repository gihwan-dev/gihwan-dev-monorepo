export interface SignInSuccessContextState {
  clientId: string | undefined;
  clientSecret: string | undefined;
  onClick: () => void;
  isSuccess: boolean;
  isPending: boolean;
  error: Error | null;
}
