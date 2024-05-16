import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { features } from "~/features/sign-in/consts/features";

export default function SignInFeaturesCarousel() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {features.map((feature) => (
          <CarouselItem key={`sign-in-carousel-${feature.title}`}>
            <div className="p-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
