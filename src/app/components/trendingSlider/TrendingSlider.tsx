"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";

// Interface for image data
interface ImageData {

    id: number,
    img: string,
    description: string,
    price: number,

}

// Image data array
const images: ImageData[] = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "camera",
        price: 200,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Phone",
        price: 100,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Laptop",
        price: 500,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Headephone",
        price: 40,
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Keyboard",
        price: 140,
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Gaming Mouse",
        price: 140,
    },
];


export default function ImageSlider(): JSX.Element {
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // State to determine if the image is being hovered over
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // Function to show the previous slide
    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Function to show the next slide
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // useEffect hook to handle automatic slide transition
    useEffect(() => {
        // Start interval for automatic slide change if not hovered
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);

            // Cleanup the interval on component unmount
            return () => {
                clearInterval(interval);
            };
        }
    }, [isHovered]);

    // Handle mouse over event
    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    // Handle mouse leave event
    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    return (
        <div className="relative w-full mx-auto mt-4">
            <div
                className="relative h-[460px] mx-12 group hover:-translate-y-2"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={images[currentIndex].img}
                    alt={`Slider Image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
                />
            </div>
            <button
                className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
                onClick={prevSlide}
            >
                <ChevronLeft className="text-gray-400 group-hover:text-white"/>
            </button>
            <button
                className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
                onClick={nextSlide}
            >
                <ChevronRight className="text-gray-400 group-hover:text-white"/>
            </button>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 mx-1 ${
                            index === currentIndex
                                ? "bg-[#beff46] rounded-xl"
                                : "bg-gray-300 rounded-xl"
                        } transition-all duration-500 ease-in-out`}
                    ></div>
                ))}
            </div>
        </div>
    );
}