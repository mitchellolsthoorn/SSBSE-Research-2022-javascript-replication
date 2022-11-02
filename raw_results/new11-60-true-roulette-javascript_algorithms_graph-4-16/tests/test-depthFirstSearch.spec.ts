export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphVKtozpQ = null;
		const _startVertexdh7Mdw3 = {
		
	}
		const _callbacksbkRSpb = 0.7291180005002769;
		const _returnValuejlgtqMd = await depthFirstSearch(_graphVKtozpQ, _startVertexdh7Mdw3, _callbacksbkRSpb)
	});

	it('test for depthFirstSearch', async () => {
		const _graphRJ5olkg = 8.626570874578409;
		const _startVertexCX97IeU = 7.799901613369691;
		const _returnValueVYVoG6 = true;
		const _callbacksuK3c2D = () => { return _returnValueVYVoG6 };
		const _returnValuesrbpw7 = await depthFirstSearch(_graphRJ5olkg, _startVertexCX97IeU, _callbacksuK3c2D)
	});
})