export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueGbldhgn = null;
		const _returnValueCYgt0Lb = [_arrayValueGbldhgn]
		const _getAllVertices91nf7Z = () => { return _returnValueCYgt0Lb };
		const _graphtKCA86B = {
			"getAllVertices": _getAllVertices91nf7Z
	}
		const _returnValuektp6rj = await detectDirectedCycle(_graphtKCA86B)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValuemvwQ4SP = []
		const _getAllVerticesG3CZPP9 = () => { return _returnValuemvwQ4SP };
		const _graphy5di9qY = {
			"getAllVertices": _getAllVerticesG3CZPP9
	}
		const _returnValueAoRvE8Q = await detectDirectedCycle(_graphy5di9qY)
	});
})