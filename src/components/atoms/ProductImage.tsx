import NextImage from "next/image";

export const ProductImage = ({
	src,
	alt,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
}) => {
	return (
		<NextImage
			src={src}
			alt={alt}
			width={400}
			height={400}
			className="transition-scale duration-200 hover:scale-105"
		/>
	);
};
