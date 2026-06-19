"use client";
import "swiper/css";
import "swiper/css/pagination";
import "./CustomSwiper.css";
import { useRef, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface SwiperItem {
	key: string;
	node: ReactNode;
}

interface CustomSwiperProps {
	items: SwiperItem[];
	withButtons?: boolean;
	spaceBetween?: number;
	slideClassName?: string;
}

export default function CustomSwiper({
	items,
	withButtons = true,
	spaceBetween = 24,
	slideClassName,
}: CustomSwiperProps) {
	const swiperRef = useRef<SwiperType | null>(null);

	const handlePrev = () => swiperRef.current?.slidePrev();
	const handleNext = () => swiperRef.current?.slideNext();

	return (
		<div className="custom-swiper-wrapper">
			{withButtons && (
				<button
					className="custom-swiper-btn prev"
					onClick={handlePrev}>
					←
				</button>
			)}

			<Swiper
				modules={[Pagination, Autoplay]}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				slidesPerView="auto"
				spaceBetween={spaceBetween}
				loop
				pagination={{ clickable: true }}
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				watchSlidesProgress
				className="custom-swiper-container">
				{items.map((item) => (
					<SwiperSlide
						className={slideClassName}
						key={item.key}>
						{item.node}
					</SwiperSlide>
				))}
			</Swiper>

			{withButtons && (
				<button
					className="custom-swiper-btn next"
					onClick={handleNext}>
					→
				</button>
			)}
		</div>
	);
}
