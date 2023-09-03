import {
	PencilBrush as Pencil,
	CircleBrush as Circle,
	SprayBrush as Spray,
	Point,
	Group,
	Image as FabricImage,
	Rect,
	Shadow,
	util
} from 'fabric';

/**
 * 
 * @since 1.0.0
 */

const PencilBrush = util.createClass(Pencil, {

	/**
	 * 
	 * @since 1.0.0
	 * @var {string}
	 */

	type:'pencil',

	/**
	 * 
	 * @since 1.0.0
	 * @var {number}
	 */

	decimate:20,

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} canvas
	 * @param {object} options
	 */

	initialize(canvas, options = {}){
		this.canvas = canvas;
		this._points = [];
		for (let key in options){
			this[key] = options[key];
		}
	}

});

/**
 * 
 * @since 1.0.0
 */

const CircleBrush = util.createClass(Circle, {

	/**
	 * 
	 * @since 1.0.0
	 * @var {string}
	 */

	type:'circle',

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} canvas
	 * @param {object} options
	 */

	initialize(canvas, options = {}){
		this.canvas = canvas;
		this.points = [];
		for (let key in options){
			this[key] = options[key];
		}
	}

});

/**
 * 
 * @since 1.0.0
 */

const SprayBrush = util.createClass(Spray, {

	/**
	 * 
	 * @since 1.0.0
	 * @var {string}
	 */

	type:'spray',

	/**
	 * 
	 * @since 1.0.0
	 * @param {object} canvas
	 * @param {object} options
	 */

	initialize(canvas, options = {}){
		this.canvas = canvas;
		this.sprayChunks = [];
		for (let key in options){
			this[key] = options[key];
		}
	},

	/**
	 * 
	 * @since 1.4.0
	 */

	onMouseUp(){

		const rects = [];
		const ilen = this.sprayChunks.length;
		let i, j, sprayChunk, jlen;

		for (i = 0; i < ilen; i++){
			sprayChunk = this.sprayChunks[i];
			jlen = sprayChunk.length;
			for (j = 0; j < jlen; j++){
				rects.push(
					new Rect({
						width:sprayChunk[j].width,
						height:sprayChunk[j].width,
						left:sprayChunk[j].x,
						top:sprayChunk[j].y,
						strokeWidth:0,
						fill: this.color,
						opacity:this.randomOpacity ? sprayChunk[j].opacity : 1
					})
				);
			}
		}

		const optimizedRects = this._getOptimizedRects(rects);
		const group = new Group(optimizedRects);
		const dataURL = group.toDataURL();
		const img = new FabricImage(null, {
			src:dataURL,
			width:group.width,
			height:group.height,
			left:group.left,
			top:group.top
		});
		img.setSrc(dataURL, () => {
			this.canvas.requestRenderAll();
		});
		if (this.shadow){
			img.set('shadow', new Shadow(this.shadow));
		}
		this.canvas.add(img);
		this.canvas.fire('path:created', {
			path:img
		});

		this.canvas.clearContext(this.canvas.contextTop);
		this._resetShadow();

	}

});

export {
	PencilBrush,
	CircleBrush,
	SprayBrush
};
