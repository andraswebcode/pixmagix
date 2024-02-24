import {
	__
} from 'wp-i18n';

/**
 * A collection of shapes.
 * @since 1.0.0
 * @var {array}
 */

export default [{
	label:__('Square', 'pixmagix'),
	name:'square',
	type:'square'
},{
	label:__('Circle', 'pixmagix'),
	name:'circle',
	type:'circle'
},{
	label:__('Triangle', 'pixmagix'),
	name:'triangle',
	type:'polygon',
	path:'50 0 100 100 0 100'
},{
	label:__('Diamond', 'pixmagix'),
	name:'diamond',
	type:'polygon',
	path:'50 0 100 50 50 100 0 50'
},{
	label:__('Pentagon', 'pixmagix'),
	name:'pentagon',
	type:'polygon',
	path:'50 0 100 38 82 100 18 100 0 38'
},{
	label:__('Hexagon', 'pixmagix'),
	name:'hexagon',
	type:'polygon',
	path:'50 0 93.3 25 93.3 75 50 100 6.7 75 6.7 25'
},{
	label:__('Left Point', 'pixmagix'),
	name:'left-point',
	type:'polygon',
	path:'25 0 100 0 100 100 25 100 0 50'
},{
	label:__('Right Point', 'pixmagix'),
	name:'right-point',
	type:'polygon',
	path:'0 0 75 0 100 50 75 100 0 100'
},{
	label:__('Left Chevron', 'pixmagix'),
	name:'left-chevron',
	type:'polygon',
	path:'100 0 75 50 100 100 25 100 0 50 25 0'
},{
	label:__('Right Chevron', 'pixmagix'),
	name:'right-chevron',
	type:'polygon',
	path:'75 0 100 50 75 100 0 100 25 50 0 0'
},{
	label:__('Trapezoid', 'pixmagix'),
	name:'trapezoid',
	type:'polygon',
	path:'20 0 80 0 100 100 0 100'
},{
	label:__('Parallelogram', 'pixmagix'),
	name:'parallelogram',
	type:'polygon',
	path:'25 0 100 0 75 100 0 100'
},{
	label:__('Rabbet', 'pixmagix'),
	name:'rabbet',
	type:'polygon',
	path:'0 15 15 15 15 0 85 0 85 15 100 15 100 85 85 85 85 100 15 100 15 85 0 85'
},{
	label:__('Star', 'pixmagix'),
	name:'star',
	type:'polygon',
	path:'100 38.44 63.91 35.63 50 0 36.09 35.63 0 38.44 27.66 62.81 18.91 100 50 79.84 81.09 100 72.34 62.81'
},{
	label:__('Heart', 'pixmagix'),
	name:'heart',
	type:'path',
	path:'M 100 31.72 C 100 17.66 88.44 6.25 74.06 6.25 C 63.13 6.25 53.75 12.97 50 22.34 C 46.25 12.97 36.88 6.25 25.94 6.25 C 11.56 6.25 0 17.66 0 31.72 C 0 31.87 0 33.13 0 33.59 C 0 59.84 51.88 93.75 51.88 93.75 C 51.88 93.75 100 59.84 100 33.59 C 100 33.13 100 32.03 100 31.72 Z'
},{
	label:__('Blob', 'pixmagix'),
	name:'blob',
	type:'path',
	path:'M 82.66 8.31 C 74.58 1.37 60.59 -4.12 53.24 4.17 C 47.09 11.11 51.28 21.26 45.46 28.43 C 36.7 39.23 22.19 22.32 10.87 31.39 C 0.56 39.61 -3.54 66.46 3.54 82.92 C 14.39 108.23 47.44 98.48 54.11 96.52 C 57.83 95.41 98.32 82.74 99.95 48.54 C 100.74 31.74 91.82 16.2 82.66 8.31 Z'
},{
	label:__('Flower', 'pixmagix'),
	name:'flower',
	type:'path',
	path:'M 85.54 49.97 L 92.65 42.86 C 102.46 33.05 102.46 17.15 92.65 7.35 C 82.84 -2.45 66.94 -2.45 57.13 7.36 L 50.04 14.46 L 42.88 7.36 C 36.54 0.99 27.28 -1.5 18.6 0.81 C 9.92 3.13 3.14 9.91 0.82 18.59 C -1.5 27.27 0.99 36.53 7.36 42.87 L 14.46 49.97 L 7.36 57.13 C -2.42 66.95 -2.4 82.82 7.39 92.61 C 17.19 102.41 33.06 102.42 42.88 92.65 L 49.98 85.55 L 57.13 92.58 C 66.94 102.36 82.82 102.35 92.62 92.55 C 102.41 82.76 102.43 66.88 92.65 57.07 Z'
},{
	label:__('Sketch', 'pixmagix'),
	name:'sketch',
	type:'path',
	path:'M 90.3 42.16 L 92.07 40.35 C 93.12 39.29 85.07 33.69 84.33 33.19 C 82.3 31.78 80.18 30.54 77.98 29.45 C 77.71 29.32 77.32 29.11 76.89 28.91 Q 78.85 26.78 80.84 24.68 C 81.88 23.58 73.84 18.02 73.09 17.52 C 71.07 16.11 68.96 14.86 66.76 13.78 L 66.44 13.61 L 67.97 11.88 C 69 10.7 61.01 5.25 60.22 4.72 C 58.21 3.31 56.09 2.05 53.89 0.97 C 53.3 0.69 51.35 -0.45 50.77 0.2 Q 35.98 17.04 19.91 32.66 C 11.29 41.03 1.7 50.16 0.01 62.85 C -0.12 63.78 1.46 65.07 1.92 65.45 C 3.74 67.13 5.7 68.65 7.76 70.01 C 9.78 71.42 11.89 72.67 14.09 73.76 C 14.8 74.09 16.48 75.11 17.22 74.53 L 19.5 72.78 C 21.09 74.87 26.06 78.08 26.83 78.6 L 28.47 79.67 C 26.81 81.76 25.19 83.86 23.59 85.99 C 22.59 87.32 30.48 92.57 31.34 93.14 C 33.35 94.55 35.47 95.8 37.67 96.89 C 38.33 97.2 40.12 98.27 40.8 97.67 L 50.97 88.57 C 51.88 91.45 66.98 101.64 68.19 99.77 L 100.07 50.97 C 100.76 49.9 95.3 45.31 90.3 42.16 Z'
}];
