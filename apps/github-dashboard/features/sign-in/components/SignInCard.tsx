import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import SignInWithGitHubButton from "~/features/sign-in/components/SignInWithGitHubButton";
import SignInFeaturesCarousel from "~/features/sign-in/components/SignInFeaturesCarousel";

export default function SignInCard(): JSX.Element {
  return (
    <Card className="mx-auto container max-w-md">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Customize your own GitHub Dashboard!</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-center">
        <SignInFeaturesCarousel />
      </CardContent>
      <CardFooter>
        <SignInWithGitHubButton />
      </CardFooter>
    </Card>
  );
}
