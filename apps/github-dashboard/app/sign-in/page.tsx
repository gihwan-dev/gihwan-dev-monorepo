import { SignIn } from "~/features/sign-in";
import SignInFeaturesCarousel from "~/features/sign-in/components/SignInFeaturesCarousel";

export default function SignInPage() {
  const clientId = process.env.GITHUB_CLIENT_ID;

  return (
    <SignIn.Layout>
      <SignIn.Card>
        <SignIn.CardHeader>
          <SignIn.CardTitle>Sign in</SignIn.CardTitle>
          <SignIn.CardDescription>
            Customize your own GitHub Dashboard!
          </SignIn.CardDescription>
        </SignIn.CardHeader>
        <SignIn.CardContent>
          <SignInFeaturesCarousel />
        </SignIn.CardContent>
        <SignIn.CardFooter>
          <SignIn.GitHubButton clientId={clientId} />
        </SignIn.CardFooter>
      </SignIn.Card>
    </SignIn.Layout>
  );
}
