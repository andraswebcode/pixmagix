import fabric, {
	util,
	Canvas2dFilterBackend
} from 'fabric';

/**
 * 
 * @since 1.0.0
 */

util.object.extend(fabric, {

	/**
	 * Extend fabric.filterBackend.
	 * @since 1.0.0
	 * @var {Canvas2dFilterBackend}
	 */

	filterBackend:new Canvas2dFilterBackend(),

	/**
	 * Extend fabric.getCSSRules().
	 * @since 1.1.0
	 * @return {object}
	 */

	getCSSRules(doc){

		const styles = doc.getElementsByTagName('style');
		const allRules = {};
		var i, len, rules;

		for (i = 0, len = styles.length; i < len; i++){

			let styleContents = styles[i].textContent;

			// remove comments
			styleContents = styleContents.replace(/\/\*[\s\S]*?\*\//g, '');
			if (styleContents.trim() === ''){
				continue;
			}

			rules = styleContents.match(/[^{]*\{[\s\S]*?\}/g);
			if (!rules){
				continue;
			}
			rules = rules.map(rule => rule.trim());

			// eslint-disable-next-line no-loop-func
			rules.forEach(rule => {
				const match = rule.match(/([\s\S]*?)\s*\{([^}]*)\}/);
				const ruleObj = {};
				const declaration = match[2].trim();
				const propertyValuePairs = declaration.replace(/;$/, '').split(/\s*;\s*/);
				for (i = 0, len = propertyValuePairs.length; i < len; i++){
					const pair = propertyValuePairs[i].split(/\s*:\s*/);
					const property = pair[0];
					const value = pair[1];
					ruleObj[property] = value;
				}
				rule = match[1];
				rule.split(',').forEach(_rule => {
					_rule = _rule.replace(/^svg/i, '').trim();
					if (_rule === '') {
						return;
					}
					if (allRules[_rule]) {
						util.object.extend(allRules[_rule], ruleObj);
					} else {
						allRules[_rule] = util.object.clone(ruleObj);
					}
				});
			});

		}

		return allRules;

	}

});
