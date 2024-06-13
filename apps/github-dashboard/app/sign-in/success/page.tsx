import type { JSX} from "react";
import { Suspense } from "react";
import { SignInSuccess } from "~/features/sign-success";
import LottieLoading from "~/components/LottieLoading";

export default function SignInSuccessPage(): JSX.Element {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  return (
    <SignInSuccess.Layout>
      <SignInSuccess.Error>
        <Suspense fallback={<LottieLoading />}>
          <SignInSuccess.Provider
            clientId={clientId}
            clientSecret={clientSecret}
          >
            <SignInSuccess.Title />
            <SignInSuccess.Button />
          </SignInSuccess.Provider>
        </Suspense>
      </SignInSuccess.Error>
    </SignInSuccess.Layout>
  );
}
