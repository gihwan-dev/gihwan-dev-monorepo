import SignInFeaturesCarousel from "~/features/sign-in/components/SignInFeaturesCarousel";
import SignInWithGitHubButton from "~/features/sign-in/components/SignInWithGitHubButton";
import SignInCard from "~/features/sign-in/components/SignInCard";
import SignInLayout from "~/features/sign-in/components/SignInLayout";
import SignInCardTitle from "~/features/sign-in/components/SignInCardTitle";
import SignInCardContent from "~/features/sign-in/components/SignInCardContent";
import SignInCardFooter from "~/features/sign-in/components/SignInCardFooter";
import SignInCardDescription from "./SignInCardDescription";
import SignInCardHeader from "./SignInCardHeader";

export default {
  Card: SignInCard,
  CardHeader: SignInCardHeader,
  CardTitle: SignInCardTitle,
  CardDescription: SignInCardDescription,
  CardContent: SignInCardContent,
  CardFooter: SignInCardFooter,
  FeatureCarousel: SignInFeaturesCarousel,
  GitHubButton: SignInWithGitHubButton,
  Layout: SignInLayout,
};
