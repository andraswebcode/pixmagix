import {
	__
} from 'wp-i18n';
import {
	thumbnails_folder,
	previews_folder,
	project_categories
} from 'editor-globals';

import {
	PENCIL_DEFAULT_WIDTH,
	PENCIL_DEFAULT_COLOR,
	FILL_DEFAULT_COLOR,
	QRCODE_DEFAULT_SIZE,
	QRCODE_DEFAULT_PADDING,
	QRCODE_DEFAULT_ECL
} from './../utils/constants.js';

/**
 * 
 * @since 1.0.0
 * @param {number} id
 * @param {object} metadata
 * @param {number} mediaId
 * @param {string} mediaUrl
 * @param {string} revisionURL
 * @return {object}
 */

const getInitialStateEditor = (id, metadata = {}, mediaId, mediaUrl = '', revisionURL = '') => {

	const {
		title,
		description,
		author,
		category,
		status = 'publish'
	} = metadata;
	const data = window.localStorage.getItem('pixmagixEditor');
	let stateFromLocalStorage = {};

	try {
		stateFromLocalStorage = JSON.parse(data);
	} catch (e){
		// Doing nothing...
	}

	return {
		// Project
		projectId:id,
		projectName:title,
		projectDescription:description,
		projectAuthor:author,
		projectCategory:category,
		projectStatus:status,
		// Media
		mediaId,
		mediaUrl,
		thumbnail:thumbnails_folder + 'project-' + id + '.jpg',
		preview:previews_folder + 'project-' + id + '.jpg',
		revisionURL,
		// Globals
		categoryList:project_categories || [],
		imageDataURL:'',
		svgString:'',
		svgWidth:0,
		svgHeight:0,
		preserveAspectRatio:'',
		fileFormat:'jpeg', // 'jpeg', or 'png'
		fileQuality:0.92, // Only makes effect if fileFormat is jpeg.
		isSaving:false,
		selectedMedia:null,
		fullScreen:false,
		// Actives
		activeTool:'',
		activeModal:'',
		activeLayers:[],
		// Canvas
		canvasMode:'select', // 'select', or 'panning'
		canvasElementWidth:0,
		canvasElementHeight:0,
		canvasZoom:1,
		canvasPanX:0,
		canvasPanY:0,
		// Sidebars
		isSidebarLeftOpened:true,
		isSidebarRightOpened:true,
		// Rulers
		showRulers:true,
		showRulerCursors:false,
		rulerCursorPosition:{
			x:0,
			y:0
		},
		guides:[],
		snapObjects:false,
		snapToGrid:false,
		gridSize:10,
		// Pencil
		isDrawingMode:false,
		pencilType:'pencil',
		pencilColor:PENCIL_DEFAULT_COLOR,
		pencilWidth:PENCIL_DEFAULT_WIDTH,
		pencilShadow:null,
		pencilDecimate:20,
		pencilDensity:20,
		pencilDotWidth:2,
		pencilDotWidthVariance:1,
		pencilRandomOpacity:false,
		fillColor:FILL_DEFAULT_COLOR,
		drawnShape:'square',
		pathType:'cubic',
		// Text
		newText:__('Text', 'pixmagix'),
		fontFamily:'Arial',
		fontSize:40,
		fontStyle:'normal',
		fontWeight:'normal',
		textAlign:'left',
		lineHeight:1.16,
		charSpacing:0,
		underline:false,
		// QR Code
		qrCodeText:'',
		qrCodeSize:QRCODE_DEFAULT_SIZE,
		qrCodePadding:QRCODE_DEFAULT_PADDING,
		qrCodeECL:QRCODE_DEFAULT_ECL,
		// Crop
		cropAspectRatio:'?:?',
		cropScale:1,
		cropPanX:0,
		cropPanY:0,
		// Load from localStorage
		...stateFromLocalStorage
	};

};

export default getInitialStateEditor;
