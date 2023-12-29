/**
 * 
 * @since 1.5.0
 * @var {object}
 */

export const selectStyles = {
	container:provided => ({
		...provided,
		minWidth:120
	}),
	control:provided => ({
		...provided,
		backgroundColor:'transparent',
		minHeight:'auto',
		border:'solid 1px #1b2124',
		borderRadius:0
	}),
	valueContainer:provided => ({
		...provided,
		padding:'2px 6px'
	}),
	menu:provided => ({
		...provided,
		backgroundColor:'#354147'
	}),
	input:provided => ({
		...provided,
		paddingTop:0,
		paddingBottom:0,
		margin:0,
		border:'none'
	}),
	dropdownIndicator:provided => ({
		...provided,
		padding:0
	}),
	indicatorSeparator:provided => ({
		display:'none'
	}),
	option:(provided, {isSelected, isFocused}) => ({
		...provided,
		padding:'2px 12px',
		backgroundColor:(isSelected || isFocused) ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
	}),
};
