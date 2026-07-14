import type { MDXComponents } from "mdx/types";
import CustomButton from "./app/components/shared/CustomButton";
import Table from "./app/components/shared/Table";
import Highlight from "./app/components/shared/Highlight";
import BlogList from "@/app/components/shared/BlogList";
import ArticlesLayout from "./app/components/widgets/ArticleLayout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h3: ({ children }) => <Highlight as="h3">{children}</Highlight>,
		wrapper: ArticlesLayout,
		Table: Table,
		Highlight: Highlight,
		BlogList: BlogList,
		CustomButton: CustomButton,
	};
}
