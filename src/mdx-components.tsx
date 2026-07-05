import type { MDXComponents } from "mdx/types";
import CustomButton from "./app/components/shared/CustomButton";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		CustomButton: CustomButton,
	};
}
