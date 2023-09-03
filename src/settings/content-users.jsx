import {
	Repeater
} from 'elements';
import {
	__
} from 'wp-i18n';

import getHelpText from './../editor/utils/help-texts.js';

const ContentUsers = ({
	roles = [],
	onSettingChange
}) => (
	<Repeater
		label={__('Manage User Capabilities', 'pixmagix')}
		help={getHelpText('userCaps')}
		items={roles.map(({
			name,
			label,
			can_edit,
			can_edit_others,
			can_read_others,
			can_upload
		}, index) => {
			return {
				name,
				label,
				disabled:(name === 'administrator'),
				controls:[{
					name:'can_edit',
					type:'checkbox',
					label:__('Enable Users to Access Editor, And Create Projects.', 'pixmagix'),
					value:can_edit,
					onChange:value => {
						const newList = roles.slice();
						newList[index] = {
							...newList[index],
							can_edit:value
						};
						onSettingChange('roles', newList);
					}
				},{
					name:'can_read_others',
					type:'checkbox',
					label:__('Show All Users\' Projects to These Users.', 'pixmagix'),
					value:can_read_others,
					show:can_edit,
					onChange:value => {
						const newList = roles.slice();
						newList[index] = {
							...newList[index],
							can_read_others:value
						};
						onSettingChange('roles', newList);
					}
				},{
					name:'can_edit_others',
					type:'checkbox',
					label:__('Enable Users to Edit Others\' Projects.', 'pixmagix'),
					value:can_edit_others,
					show:(can_edit && can_read_others),
					onChange:value => {
						const newList = roles.slice();
						newList[index] = {
							...newList[index],
							can_edit_others:value
						};
						onSettingChange('roles', newList);
					}
				},{
					name:'can_upload',
					type:'checkbox',
					label:__('Enable Users to Upload Files.', 'pixmagix'),
					value:can_upload,
					onChange:value => {
						const newList = roles.slice();
						newList[index] = {
							...newList[index],
							can_upload:value
						};
						onSettingChange('roles', newList);
					}
				},{
					name:'upload_notice',
					type:'notice',
					msgType:'warning',
					message:__('Heads up: In case you choose to deactivate file uploading for these users, it will affect the accessibility of some features and users won\'t be able to save their projects. Enable file upload or disable project creation for users.', 'pixmagix'),
					show:can_edit && !can_upload
				}]
			};
		})} />
);

export default ContentUsers;
