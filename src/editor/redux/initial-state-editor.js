import {
	__
} from 'wp-i18n';
import {
	thumbnails_folder,
	previews_folder,
	project_categories,
	free_image_platforms
} from 'editor-globals';

import {
	PENCIL_DEFAULT_WIDTH,
	PENCIL_DEFAULT_COLOR,
	FILL_DEFAULT_COLOR,
	QRCODE_DEFAULT_SIZE,
	QRCODE_DEFAULT_PADDING,
	QRCODE_DEFAULT_ECL,
	DEFAULT_FONT_LIST
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
	const projectData = window.localStorage.getItem('pixmagixProjects');
	let stateFromLocalStorage = {};
	let projects = {};

	try {
		stateFromLocalStorage = JSON.parse(data);
	} catch (e){
		// Doing nothing...
	}

	try {
		projects = JSON.parse(projectData);
	} catch (e){
		// Doing nothing...
	}

	const projectStateFromLocalStorage = projects?.[id] || {};

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
		fileFormat:'jpeg', // 'jpeg', 'png', or 'webp'
		fileQuality:0.92, // Only makes effect if fileFormat is jpeg.
		fileDPI:96,
		fileScale:1,
		isSaving:false,
		selectedMedia:null,
		selectedElement:null,
		fullScreen:false,
		colorPickerCurrentColor:null, // Helper state for color picker control to pick color from canvas.
		// Collections
		freeImageFilters:{
			platform:free_image_platforms[0],
			page:1
		},
		elementFilters:{
			collection:'icons',
			page:1
		},
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
		lockGuides:false,
		snapObjects:false,
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
		fontList:DEFAULT_FONT_LIST,
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
		// Image
		loadingImages:[],
		// AI.
		showAIImageArchive:false,
		aiImageOptions:null,
		aiImageSamples:null,
		isAIImageGenerating:false,
		// Load from localStorage
		...stateFromLocalStorage,
		...projectStateFromLocalStorage
	};

};

export default getInitialStateEditor;
