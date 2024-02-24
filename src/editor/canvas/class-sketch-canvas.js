import {
	Canvas,
	util
} from 'fabric';

/**
 * 
 * @since 1.7.0
 */

export default util.createClass(Canvas, {

	/**
	 *
	 * @since 1.7.0
	 * @var {boolean}
	 */

	isDrawingMode:true,

	/**
	 *
	 * @since 1.7.0
	 * @var {array}
	 */

	_historyUndo:[],

	/**
	 *
	 * @since 1.7.0
	 * @var {array}
	 */

	_historyRedo:[],

	/**
	 *
	 * @since 1.7.0
	 * @var {object}
	 */

	_historyNext:{},

	/**
	 *
	 * @since 1.7.0
	 */

	_initInteractive(){
		this.callSuper('_initInteractive');
		this.setBackgroundColor('#FFFFFF', this.requestRenderAllBound);
		this._initHistory();
	},

	/**
	 *
	 * @since 1.7.0
	 */

	_initHistory(){
		this._historyNext = this.toObject();
		this.on('object:added', this._saveHistory.bind(this));
	},

	/**
	 *
	 * @since 1.7.0
	 */

	_saveHistory(){

		if (this._historyProcessing){
			return;
		}

		this._historyUndo.push(this._historyNext);
		this._historyNext = this.toObject();
		this._historyRedo = [];

	},

	/**
	 *
	 * @since 1.7.0
	 * @param {object} history
	 */

	_loadHistory(history){
		this.loadFromJSON(history, () => {
			this.requestRenderAll();
			this._historyProcessing = false;
		});
	},

	/**
	 *
	 * @since 1.7.0
	 */

	undo(){

		this._historyProcessing = true;

		const previous = this._historyUndo.pop();

		if (previous){
			this._historyRedo.push(this.toObject());
			this._historyNext = previous;
			this._loadHistory(previous);
		} else {
			this._historyProcessing = false;
		}

	},

	/**
	 *
	 * @since 1.7.0
	 */

	redo(){

		this._historyProcessing = true;

		const previous = this._historyRedo.pop();

		if (previous){
			this._historyUndo.push(this.toObject());
			this._historyNext = previous;
			this._loadHistory(previous);
		} else {
			this._historyProcessing = false;
		}

	},

	/**
	 *
	 * @since 1.7.0
	 * @return {boolean}
	 */

	canUndo(){
		return (this._historyUndo.length > 0);
	},

	/**
	 *
	 * @since 1.7.0
	 * @return {boolean}
	 */

	canRedo(){
		return (this._historyRedo.length > 0);
	},

	/**
	 *
	 * @since 1.7.0
	 */

	invert(){}

});
