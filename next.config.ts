import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import buildMdx from "@next/mdx";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withNextIntl = createNextIntlPlugin();
const withMDX = buildMdx();

export default withNextIntl(withMDX(nextConfig));
