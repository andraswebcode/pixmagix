import {
	connect
} from 'react-redux';
import {
	Icon
} from 'elements';

import {
	setEditor
} from './../redux/actions.js';
import SidebarDalle from './sidebar/sidebar-dalle.jsx';
import SidebarSD from './sidebar/sidebar-sd.jsx';
import SetAPIKey from './sidebar/set-api-key.jsx';
import Generating from './sidebar/generating.jsx';

const Sidebar = ({
	generator,
	isGenerating,
	isSidebarOpened,
	hasOpenAIKey,
	hasStabilityAIKey,
	setEditor
}) => {

	const isDalle = (generator === 'openai');
	const ActiveSidebar = isDalle ? SidebarDalle : SidebarSD;
	const hasApiKey = isDalle ? hasOpenAIKey : hasStabilityAIKey;

	return (
		<div className='pixmagix-sidebarleft'>
			{isSidebarOpened && (
				<div className='pixmagix-sidebarleft__inner'>
					{hasApiKey ? (
						isGenerating ? (
							<Generating />
						) : (
							<ActiveSidebar />
						)
					) : (
						<SetAPIKey />
					)}
				</div>
			)}
			<div
				className='pixmagix-sidebarleft__toggle'
				onClick={() => setEditor('isSidebarOpened', !isSidebarOpened)} >
				<Icon
					icon={isSidebarOpened ? 'angle-left' : 'angle-right'} />
			</div>
		</div>
	);

};

export default connect(state => ({
	generator:state.generator,
	isGenerating:state.isGenerating,
	isSidebarOpened:state.isSidebarOpened,
	hasOpenAIKey:state.hasOpenAIKey,
	hasStabilityAIKey:state.hasStabilityAIKey
}),{
	setEditor
})(Sidebar);
