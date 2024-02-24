import {
	createPrompt,
	createSample
} from './../utils/utils.js';

/**
 * 
 * @since 1.2.0
 * @param {object} initialState
 * @return {object}
 */

const getInitialState = initialState => {

	return {
		// Editor
		isSidebarOpened:true,
		isGenerating:false,
		hasStabilityAIKey:false,
		hasOpenAIKey:false,
		activeModal:'',
		activeItemURL:'',
		activeItemIndex:0,
		// Notification
		notification:null,
		// Settings
		generator:'openai',
		prompts:[createPrompt()],
		sdStyle:'photographic',
		sdModel:'stable-diffusion-xl-1024-v1-0',
		opStyle:'vivid',
		opModel:'dall-e-3',
		size:'1024x1024',
		quality:'standard',
		cfgScale:7,
		steps:40,
		samples:[],
		samplesCount:1,
		...initialState
	};

};

export default getInitialState;
