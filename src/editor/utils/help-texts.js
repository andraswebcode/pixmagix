import {
	__
} from 'wp-i18n';

const HELP_TEXTS = {
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
	pixabayApiKey:{
		text:__('', 'pixmagix'),
		link:''
	},
	unsplashApiKey:{
		text:__('', 'pixmagix'),
		link:''
	},
	gfontsApiKey:{
		text:__('', 'pixmagix'),
		link:''
	},
	webSafeFonts:{
		text:__('', 'pixmagix'),
		link:''
	},
	userCaps:{
		text:__('', 'pixmagix'),
		link:''
	}
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
