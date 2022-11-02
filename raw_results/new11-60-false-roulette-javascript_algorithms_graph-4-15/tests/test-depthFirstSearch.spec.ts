export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphzld992J = "pdHcTt0rbn8VQjTJeonn92O8wN9zNvw6T8UlhXY9MsybtyGLOo8wvGPpxs5N68";
		const _startVertexMvLoG5u = null;
		const _callbacksw2gOEUT = "lfu8uzC4aphpIwvzrwZvzl8WzCXMpJtKZ2AMk9rWaSH1uz6jrcF6wWAod5xzO05s2Oq0tY6DnmlMKFuClr1jgXS";
		const _returnValueDj4OdfZ = await depthFirstSearch(_graphzld992J, _startVertexMvLoG5u, _callbacksw2gOEUT)
	});

	it('test for depthFirstSearch', async () => {
		const _graphmsVbeDE = "U6gToMD3GUU4qgVtHDlKyxvGqBlEBU68cKt7T3pP7y5xI9bcT2hRriXMDtaz73nhgWcHAgx7mX1S6gNbbBbUan9zT";
		const _startVertexgRzGOk7 = -1.9845597079271435;
		const _callbacksEarvZ9j = undefined;
		const _returnValuenGIdEX0 = await depthFirstSearch(_graphmsVbeDE, _startVertexgRzGOk7, _callbacksEarvZ9j)
	});
})