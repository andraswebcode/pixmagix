import {
	__
} from 'wp-i18n';

const HELP_TEXTS = {
	/*
	ecl:{
		text:__('Error correction level (ECL) refers to the ability of a QR code to withstand damage caused by scratches, stains, or other distortions. When creating a QR code, it is essential to choose an appropriate error correction level to ensure that the code remains scannable even under less-than-ideal conditions.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/miscellaneous/understanding-error-correction-level-in-qr-codes/'
	},
	blendingMode:{
		text:__('Blending modes are essentially filters that can be applied to layers in your design project. They let you control how one layer interacts with another, by altering the way the colors blend together.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/graphic-design/understanding-blending-modes-in-graphic-design/'
	},
	par:{
		text:__('The preserveAspectRatio attribute is used to control how an SVG element is scaled and positioned within its container. It allows you to define the aspect ratio, define alignment, and specify how to handle overflowing content.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/graphic-design/understanding-the-preserveaspectratio-svg-attribute/'
	},
	strokeWidth:{
		text:__('Stroke width is the thickness of a line used in creating graphical elements, shapes, or text. It is typically measured in points or pixels and greatly influences the visual perception of design elements.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/graphic-design/the-importance-of-stroke-width-in-design/'
	},
	sda:{
		text:__('The stroke-dasharray is primarily used to create dashed lines, dotted lines, or more complex patterns. It controls the pattern of dashes and gaps used to paint the outline of shapes.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/graphic-design/understanding-the-stroke-dasharray-a-detailed-overview/'
	},
	jpgQuality:{
		text:__('JPEG is a widely used image format that utilizes lossy compression. This means that when an image is saved in JPEG format, some of the image data is permanently discarded to reduce file size. The JPEG quality setting determines the degree of compression applied to an image.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/miscellaneous/the-impact-of-jpeg-quality-on-web-performance/'
	},
	fontFamily:{
		text:__('', 'pixmagix'),
		link:''
	},
	lineHeight:{
		text:__('Line height refers to the vertical space between lines of text. It plays a crucial role in determining the overall legibility and readability of a piece of content.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/miscellaneous/understanding-line-height-in-typography/'
	},
	dpi:{
		text:__('DPI is a measure of spatial printing or image resolution. It refers to the number of individual dots that can be placed vertically and horizontally within a one-inch linear space. A higher DPI generally indicates a more detailed and smoother image, while a lower DPI means a less crisp output.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/graphic-design/dpi-meaning/'
	},
	pixabayApiKey:{
		text:__('', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/tutorials/how-to-get-and-connect-pixabay-api-key-to-pixmagix/'
	},
	pexelsApiKey:{
		text:__('', 'pixmagix'),
		link:''
	},
	unsplashApiKey:{
		text:__('', 'pixmagix'),
		link:''
	},
	gfontsApiKey:{
		text:__('By default, you can access the first 200 most popular fonts from Google Fonts. But what if you want more variety? By obtaining a Google Fonts API key, you can gain real-time access to all available font families, enhancing your design choices even further.', 'pixmagix'),
		link:'https://pixmagix-photo-editor.com/tutorials/how-to-get-and-connect-google-fonts-api-key-to-pixmagix/'
	},
	webSafeFonts:{
		text:__('', 'pixmagix'),
		link:''
	},
	userCaps:{
		text:__('', 'pixmagix'),
		link:''
	}
	*/
};

/**
 * 
 * @since 1.1.0
 * @param {string} key
 * @return {object|undefined}
 */

function getHelpText(key = ''){
	return HELP_TEXTS[key];
}

export default getHelpText;
