import {
	Text,
	IText,
	util,
	parseAttributes
} from 'fabric';
import {
	map
} from 'lodash';

const {
	extend,
	clone
} = util.object;
const _initialize = Text.prototype.initialize;
const _toObject = Text.prototype.toObject;

/**
 * 
 * @since 1.1.0
 */

extend(Text.prototype, {

	/**
	 * 
	 * @since 1.1.0
	 * @var {string}
	 */

	fontCollection:'websafe',

	/**
	 *
	 * @since 1.1.0
	 * @param {array} propertiesToInclude
	 * @return {object}
	 */

	toObject(propertiesToInclude = []){
		return _toObject.call(this, ['fontCollection'].concat(propertiesToInclude));
	}

});

/**
 * 
 * @since 1.1.0
 */

extend(Text, {

	/**
	 * Extends fabric.Text.fromElement()
	 * @since 1.1.0
	 * @param {SVGElement} element
	 * @param {function} callback
	 * @param {object} options
	 */

	fromElement(element, callback, options){

		if (!element){
			return callback(null);
		}

		const tspans = element.querySelectorAll('tspan');
		const parsedAttributes = parseAttributes(element, Text.ATTRIBUTE_NAMES);
		const parsedAnchor = parsedAttributes.textAnchor || 'left';

		options = extend((options ? clone(options) : {}), parsedAttributes);
		options.top = options.top || 0;
		options.left = options.left || 0;
		options.textAlign = parsedAnchor;

		if (parsedAttributes.textDecoration){
			const textDecoration = parsedAttributes.textDecoration;
			if (textDecoration.indexOf('underline') !== -1) {
				options.underline = true;
			}
			if (textDecoration.indexOf('overline') !== -1) {
				options.overline = true;
			}
			if (textDecoration.indexOf('line-through') !== -1) {
				options.linethrough = true;
			}
			delete options.textDecoration;
		}

		if (tspans.length){
			const ts1 = tspans[0];
			const tsX = ts1.getAttribute('x');
			const tsY = ts1.getAttribute('y');
			if (tsX){
				options.left += util.parseUnit(tsX);
			}
			if (tsY){
				options.top += util.parseUnit(tsY);
			}
		}

		if ('dx' in parsedAttributes){
			options.left += parsedAttributes.dx;
		}
		if ('dy' in parsedAttributes){
			options.top += parsedAttributes.dy;
		}
		if (!('fontSize' in options)){
			options.fontSize = fabric.Text.DEFAULT_SVG_FONT_SIZE;
		}

		let textContent = '';

		if (tspans.length > 1){
			textContent = map(tspans, ts => ts.textContent).join('\n');
		} else {
			textContent = (element.textContent || '').replace(/^\s+|\s+$|\n+/g, '').replace(/\s+/g, ' ');
		}

		const text = new IText(textContent, options);
		let offX = 0, offY = 0;

		if (parsedAnchor === 'center'){
			offX = text.getScaledWidth() / 2;
		} else if (parsedAnchor === 'right'){
			offX = text.getScaledWidth();
		}

		if (tspans.length < 2){
			const textHeightScaleFactor = text.getScaledHeight() / text.height;
			const lineHeightDiff = (text.height + text.strokeWidth) * text.lineHeight - text.height;
			const scaledDiff = lineHeightDiff * textHeightScaleFactor;
			const textHeight = text.getScaledHeight() + scaledDiff;
			offY = (textHeight - text.fontSize * (0.07 + text._fontSizeFraction)) / text.lineHeight;
		}

		text.set({
			left:text.left - offX,
			top:text.top - offY
		});

		callback(text);

	}

});
