import Link from "next/link"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"
import React, { type JSX } from "react"

function Table({ data }) {
	let headers = data.headers.map((header, index) => (
		<th key={index}>{header}</th>
	))
	let rows = data.rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	))

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

function CustomLink(props: JSX.IntrinsicElements["a"]) {
	const href = props.href

	if (href?.startsWith("/")) {
		return (
			<Link href={href} {...props} ref={undefined}>
				{props.children}
			</Link>
		)
	}

	if (href?.startsWith("#")) {
		return <a {...props} />
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Code({ children, ...props }) {
	const codeHTML = highlight(children)
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(string: string) {
	return string
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
		.replace(/\-\-+/g, "-") // Replace multiple - with single -
}

function createHeading(level: number) {
	const Heading = ({ children }) => {
		const slug = slugify(children)
		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement("a", {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: "anchor",
				}),
			],
			children
		)
	}

	Heading.displayName = `Heading${level}`

	return Heading
}

const components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	a: CustomLink,
	code: Code,
	Table,
}

export function CustomMDX(props: MDXRemoteProps) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	)
}
