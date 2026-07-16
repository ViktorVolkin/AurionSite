"use client";
import "swiper/css";
import "swiper/css/pagination";
import "./CustomSwiper.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useTranslations } from "next-intl";
import { CustomSwiperSEO as SEO } from "../lib/constants";
import { CustomSwiperProps } from "./CustomSwiper.types";

export default function CustomSwiper({
	items,
	withButtons = true,
	spaceBetween = 24,
	slideClassName,
}: CustomSwiperProps) {
	const swiperRef = useRef<SwiperType | null>(null);
	const t = useTranslations();
	const handlePrev = () => swiperRef.current?.slidePrev();
	const handleNext = () => swiperRef.current?.slideNext();

	return (
		<div
			className="custom-swiper-wrapper"
			role="region"
			aria-label={t(SEO.region)}>
			{withButtons && (
				<button
					className="custom-swiper-btn prev"
					onClick={handlePrev}
					aria-label={t(SEO.prevButton)}
					type="button">
					←
				</button>
			)}

			<Swiper
				modules={[Pagination, Autoplay, A11y]}
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
					pauseOnMouseEnter: true,
				}}
				a11y={{
					prevSlideMessage: t(SEO.prevButton),
					nextSlideMessage: t(SEO.nextButton),
					firstSlideMessage: t(SEO.firstSlide),
					lastSlideMessage: t(SEO.lastSlide),
					paginationBulletMessage: t(SEO.pagination, { index: "{{index}}" }),
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
					onClick={handleNext}
					aria-label={t(SEO.nextButton)}
					type="button">
					→
				</button>
			)}
		</div>
	);
}
