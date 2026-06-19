"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import styles from "./CountrySelect.module.css";
import { CountryOption, CountrySelectProps } from "./CountrySelect.types";

export default function CountrySelect({
	options,
	value,
	onChange,
	placeholder = "Поиск страны…",
	className,
	error,
}: CountrySelectProps) {
	const t = useTranslations("Consultation");
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [hasTyped, setHasTyped] = useState(false);
	const [activeIndex, setActiveIndex] = useState(-1);

	const wrapperRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	const getLabel = useCallback(
		(opt: CountryOption) => t(opt.translationKey) || opt.defaultText,
		[t],
	);

	const selectedOption = useMemo(
		() => options.find((o) => o.value === value),
		[options, value],
	);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(e.target as Node)
			) {
				setIsOpen(false);
				setQuery("");
				setHasTyped(false);
				setActiveIndex(-1);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const filteredOptions = useMemo(() => {
		if (!hasTyped || !query.trim()) return options;
		const normalizedQuery = query.trim().toLowerCase();
		return options.filter((opt) =>
			getLabel(opt).toLowerCase().includes(normalizedQuery),
		);
	}, [options, query, hasTyped, getLabel]);

	useEffect(() => {
		setActiveIndex(filteredOptions.length > 0 ? 0 : -1);
	}, [filteredOptions]);

	useEffect(() => {
		if (activeIndex < 0 || !listRef.current) return;
		const activeEl = listRef.current.children[activeIndex] as
			| HTMLElement
			| undefined;
		activeEl?.scrollIntoView({ block: "nearest" });
	}, [activeIndex]);

	const handleSelect = useCallback(
		(opt: CountryOption) => {
			onChange(opt.value);
			setQuery("");
			setHasTyped(false);
			setIsOpen(false);
			setActiveIndex(-1);
			inputRef.current?.blur();
		},
		[onChange],
	);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!isOpen) {
			if (e.key === "ArrowDown" || e.key === "Enter") {
				e.preventDefault();
				setIsOpen(true);
			}
			return;
		}

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				setActiveIndex((prev) =>
					prev < filteredOptions.length - 1 ? prev + 1 : 0,
				);
				break;
			case "ArrowUp":
				e.preventDefault();
				setActiveIndex((prev) =>
					prev > 0 ? prev - 1 : filteredOptions.length - 1,
				);
				break;
			case "Enter":
				e.preventDefault();
				if (activeIndex >= 0 && filteredOptions[activeIndex]) {
					handleSelect(filteredOptions[activeIndex]);
				}
				break;
			case "Escape":
				e.preventDefault();
				setIsOpen(false);
				setQuery("");
				setHasTyped(false);
				setActiveIndex(-1);
				inputRef.current?.blur();
				break;
			case "Home":
				e.preventDefault();
				setActiveIndex(0);
				break;
			case "End":
				e.preventDefault();
				setActiveIndex(filteredOptions.length - 1);
				break;
			case "Tab":
				setIsOpen(false);
				setQuery("");
				setHasTyped(false);
				setActiveIndex(-1);
				break;
			default:
				break;
		}
	};

	const displayValue = hasTyped
		? query
		: selectedOption
			? getLabel(selectedOption)
			: "";

	const activeOptionId =
		activeIndex >= 0 && filteredOptions[activeIndex]
			? `country-option-${filteredOptions[activeIndex].value}`
			: undefined;

	return (
		<div
			className={styles.wrapper}
			ref={wrapperRef}>
			<input
				ref={inputRef}
				type="text"
				role="combobox"
				aria-expanded={isOpen}
				aria-autocomplete="list"
				aria-controls="country-listbox"
				aria-activedescendant={activeOptionId}
				className={clsx(styles.input, className, {
					[styles.inputError]: error,
				})}
				placeholder={placeholder}
				value={displayValue}
				onFocus={() => setIsOpen(true)}
				onKeyDown={handleKeyDown}
				onChange={(e) => {
					setHasTyped(true);
					setQuery(e.target.value);
					setIsOpen(true);
				}}
			/>

			<span
				className={styles.arrow}
				aria-hidden="true"
			/>

			{isOpen && (
				<ul
					id="country-listbox"
					className={styles.dropdown}
					role="listbox"
					ref={listRef}
					data-lenis-prevent>
					{filteredOptions.length > 0 ? (
						filteredOptions.map((opt, idx) => (
							<li
								key={opt.value}
								id={`country-option-${opt.value}`}
								role="option"
								aria-selected={opt.value === value}
								className={clsx(styles.option, {
									[styles.optionActive]: idx === activeIndex,
									[styles.optionSelected]: opt.value === value,
								})}
								onMouseEnter={() => setActiveIndex(idx)}
								onMouseDown={(e) => {
									e.preventDefault();
									handleSelect(opt);
								}}>
								{getLabel(opt)}
							</li>
						))
					) : (
						<li className={styles.empty}>{t("empty")}</li>
					)}
				</ul>
			)}
		</div>
	);
}
