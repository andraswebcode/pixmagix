const SVG = ({
	children,
	...attrs
}) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		version='1.1'
		{...attrs} >
		{children}
	</svg>
);

export {
	SVG
};
