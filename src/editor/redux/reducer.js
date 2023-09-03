import {
	combineReducers
} from 'redux';
import undoable from 'redux-undo';

import getReducerData from './reducer-data.js';
import getReducerEditor from './reducer-editor.js';

/**
 * 
 * @since 1.0.0
 * @param {number} id
 * @param {string} title
 * @param {number} author
 * @param {object} project
 * @param {object} media
 */

const getReducer = (id, title, author, project, media) => combineReducers({
	data:undoable(getReducerData(project, media.url, media.width, media.height)),
	editor:getReducerEditor(id, title, author, media.id || project.mediaId, media.url || project.mediaUrl, project.revisionURL || media.revision)
});

export default getReducer;
