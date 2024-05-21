import SignInSuccessLayout from "~/features/sign-success/components/SignInSuccessLayout";
import SignInSuccessTitle from "~/features/sign-success/components/SignInSuccessTitle";
import SignInSuccessButton from "~/features/sign-success/components/SignInSuccessButton";
import SignInSuccessProvider from "~/features/sign-success/components/SignInSuccessProvider";
import SignInSuccessErrorBoundary from "~/features/sign-success/components/SignInErrorBoundary";

export default {
  Layout: SignInSuccessLayout,
  Title: SignInSuccessTitle,
  Button: SignInSuccessButton,
  Provider: SignInSuccessProvider,
  Error: SignInSuccessErrorBoundary,
};
