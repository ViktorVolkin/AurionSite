import type { MDXComponents } from "mdx/types";
import CustomButton from "./app/components/shared/CustomButton";
import Table from "./app/components/shared/Table";
import Highlight from "./app/components/shared/Highlight";
import BlogList from "@/app/components/shared/BlogList";
import ArticlesLayout from "./app/components/widgets/ArticleLayout";
import styles from "./mdx-components.module.css";
import FAQ from "./app/components/widgets/FAQ";
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h3: ({ children }) => <Highlight as="h3">{children}</Highlight>,
		wrapper: ArticlesLayout,
		Table: Table,
		Highlight: Highlight,
		BlogList: BlogList,
		strong: ({ children }) => <Highlight as="span">{children}</Highlight>,
		a: ({ href, children, ...props }) => (
			<a
				href={href}
				{...props}
				style={{
					textDecoration: "underline solid var(--accent)",
					textDecorationThickness: "3px",
					textUnderlineOffset: "8px",
				}}>
				{children}
			</a>
		),
		CustomButton: CustomButton,
		FAQ: (props) => (
			<FAQ
				{...props}
				customStyle={{ margin: 0 }}
			/>
		),
	};
}
