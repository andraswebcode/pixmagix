import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Textarea,
	Range
} from 'elements';
import {
	__
} from 'wp-i18n';
import {
	isString
} from 'lodash';

import SketchCanvas from './sketch-canvas.jsx';
import {
	setEditor
} from './../../../redux/actions-editor.js';

const SettingsSTI = ({
	aiImageOptions,
	setEditor
}) => {

	const {
		prompt,
		stiSize = 512
	} = aiImageOptions || {};
	const setOption = (key, value) => {
		const options = isString(key) ? {
			[key]:value
		} : key;
		setEditor('aiImageOptions', {
			...aiImageOptions,
			...options
		});
	};

	return (
		<Fragment>
			<SketchCanvas />
			<Textarea
				label={__('Prompt', 'pixmagix')}
				value={prompt}
				onChange={value => setOption('prompt', value)} />
			<Range
				label={__('Size', 'pixmagix')}
				value={stiSize}
				onChange={value => setOption('stiSize', value)}
				min={128}
				max={1024} />
		</Fragment>
	);

};

export default connect(state => ({
	aiImageOptions:state.editor.aiImageOptions
}),{
	setEditor
})(SettingsSTI);
