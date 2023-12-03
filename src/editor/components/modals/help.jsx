import {
	Fragment
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Modal,
	Button,
	Widget
} from 'elements';
import {
	__
} from 'wp-i18n';

import {
	setEditor
} from './../../redux/actions-editor.js';
import {
	PIXMAGIX_WEBSITE,
	PIXMAGIX_DOCS_WEBSITE
} from './../../utils/constants.js';

const Help = ({
	setEditor
}) => {

	return (
		<Modal
			title={__('Welcome to PixMagix Help Center!', 'pixmagix')}
			middle
			onClose={() => setEditor('activeModal', '')} >
			<Widget>
				<p>
					{__('We\'re here to provide you with the assistance you need to create stunning graphics.', 'pixmagix')}
				</p>
			</Widget>
			<Widget>
				<h4>
					{__('How can we help you?', 'pixmagix')}
				</h4>
				<p>
					{__('We offer the following resources at your disposal to help you get the most out of PixMagix:', 'pixmagix')}
				</p>
			</Widget>
			<Widget
				tabs={[{
					name:'documentation',
					label:__('Documentation', 'pixmagix'),
					content:(
						<Fragment>
							<p>
								{__('Our documentation provides comprehensive information on how to use PixMagix. It covers topics from the basic functionality to advanced techniques. Click the button to access the documentation.', 'pixmagix')}
							</p>
							<Button
								active
								href={PIXMAGIX_DOCS_WEBSITE}
								target='_blank' >
								{__('See Docs', 'pixmagix')}
							</Button>
						</Fragment>
					)
				},{
					name:'faq',
					label:__('FAQ', 'pixmagix'),
					content:(
						<Fragment>
							<p>
								{__('Find quick answers to common questions about using our plugin. From beginners to experts, our FAQ section is a valuable resource to troubleshoot issues and maximize plugin functionality. Explore the comprehensive list of frequently asked questions for a convenient and time-saving solution.', 'pixmagix')}
							</p>
							<Button
								active
								href={PIXMAGIX_WEBSITE + 'support/faq/'}
								target='_blank' >
								{__('Visit FAQ', 'pixmagix')}
							</Button>
						</Fragment>
					)
				},{
					name:'features',
					label:__('Features', 'pixmagix'),
					content:(
						<Fragment>
							<p>
								{__('See the full range of tools and features available in PixMagix. Browse through the feature list to discover new and exciting ways to create beautiful graphics. Click the button to see the full list.', 'pixmagix')}
							</p>
							<Button
								active
								href={PIXMAGIX_WEBSITE + 'features/'}
								target='_blank' >
								{__('Explore Features', 'pixmagix')}
							</Button>
						</Fragment>
					)
				},{
					name:'blog',
					label:__('Blog', 'pixmagix'),
					content:(
						<Fragment>
							<p>
								{__('Stay updated with step-by-step guides, tips, and news in the world of PixMagix on our regularly updated blog. Learn new skills, get inspiration, and stay at the forefront of design trends with our informative and engaging blog posts. Check it out today!', 'pixmagix')}
							</p>
							<Button
								active
								href={PIXMAGIX_WEBSITE + 'blog/'}
								target='_blank' >
								{__('Check Blog', 'pixmagix')}
							</Button>
						</Fragment>
					)
				},{
					name:'contact',
					label:__('Contact', 'pixmagix'),
					content:(
						<Fragment>
							<p>
								{__('If you have any queries or issues, don\'t hesitate to contact our support team. Our team is available to assist you 24/7. Click the button to access the support page.', 'pixmagix')}
							</p>
							<Button
								active
								href={PIXMAGIX_WEBSITE + 'support/contact/'}
								target='_blank' >
								{__('Contact us', 'pixmagix')}
							</Button>
						</Fragment>
					)
				}]} />
			<Widget>
				<p>
					{__('We hope these resources are useful in your creative journey with PixMagix. Happy designing!', 'pixmagix')}
				</p>
			</Widget>
		</Modal>
	);

};

export default connect(null, {
	setEditor
})(Help);
