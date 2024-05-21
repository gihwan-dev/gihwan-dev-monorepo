import { SignInSuccess } from "~/features/sign-success";

export default function SignInSuccessPage() {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  return (
    <SignInSuccess.Layout>
      <SignInSuccess.Provider clientId={clientId} clientSecret={clientSecret}>
        <SignInSuccess.Title />
        <SignInSuccess.Button />
      </SignInSuccess.Provider>
    </SignInSuccess.Layout>
  );
}
