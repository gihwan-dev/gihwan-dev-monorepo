import { SignInSuccess } from "~/features/sign-success";

export default function SignInSuccessPage() {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  return (
    <SignInSuccess.Layout>
      <SignInSuccess.Title />
      <SignInSuccess.Button clientId={clientId} clientSecret={clientSecret} />
    </SignInSuccess.Layout>
  );
}
