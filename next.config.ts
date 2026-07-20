import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import buildMdx from "@next/mdx";
import withBundleAnalyzerPlugin from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},

	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withBundleAnalyzer = withBundleAnalyzerPlugin({
	enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin();
const withMDX = buildMdx({
	extension: /\.mdx?$/,
});

export default withBundleAnalyzer(withNextIntl(withMDX(nextConfig)));
