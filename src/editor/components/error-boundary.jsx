import {
	Component
} from 'react';

class ErrorBoundary extends Component {

	/**
	 * Constructor.
	 * @since 1.0.0
	 */

	constructor(){
		super(...arguments);
		this.state = {
			hasError:false
		};
	}

	/**
	 *
	 * @since 1.0.0
	 * @static
	 */

	static getDerivedStateFromError(){
		return {
			hasError:true
		};
	}

	/**
	 *
	 * @since 1.0.0
	 */

	componentDidCatch(){}

	/**
	 * Render component.
	 * @since 1.0.0
	 */

	render(){

		if (this.state.hasError){
			return (
				<div className='pixmagix-error-boundary'>
				</div>
			);
		}

		return this.props.children;

	}

}

export default ErrorBoundary;
