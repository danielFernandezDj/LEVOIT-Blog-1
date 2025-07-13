"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselHero() {
  const productImages = [
    "https://m.media-amazon.com/images/I/71tpOZEW0eL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71Wo7US5scL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71m4zakrmmL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71CQ17XiTqL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/71nwDDS+b7L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71vZx5xu+YL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71vIJdf1mQL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/81qX-8OVeGL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/719T99FoFkL._AC_SL1500_.jpg",
  ];
  return (
    <>
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index} className=" bg-white">
              <div className="p-1">
                <Card className="bg-transparent md:w-96 md:h-96">
                  <CardContent className="flex aspect-square items-center justify-center p-0 md:p-6 max-h-60">
                    <Image
                      src={productImages[index]}
                      alt={`Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="object-contain w-full h-full md:w-auto md:h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
