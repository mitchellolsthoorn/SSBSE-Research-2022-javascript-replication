export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuexqHM0xt = false;
		const _arrayValueGnr7Ptu = () => { return _returnValuexqHM0xt };
		const _arrayValuef47zMw8 = true;
		const _arrayValueC56YcGt = null;
		const _arrayValueV8Z59Es = [_arrayValueGnr7Ptu, _arrayValuef47zMw8, _arrayValueC56YcGt]
		const _arrayValueiwXjmx7 = undefined;
		const _arrayValueByVRWH = "HTHatiTanzdfnUfRI04b9Tc3GVtpHwrRJomnNqe3knA5T1WcNa2ySmRyy1ouoc50BFAGDcT7MVedvCFCWKqr7yJYcWcMpjj";
		const _arrayValuevfEqtBw = [_arrayValueiwXjmx7, _arrayValueByVRWH]
		const _graphrGnbIKn = [_arrayValueV8Z59Es, _arrayValuevfEqtBw]
		const _returnValueoNcGGhC = await graphBridges(_graphrGnbIKn)
	});

	it('test for graphBridges', async () => {
		const _isDirectedHaD1yqU = false;
		const _graphM9gwzjq = new Graph(_isDirectedHaD1yqU)
		const _returnValueFVD3Yep = await _graphM9gwzjq.getAllEdges()
		const _returnValueusAf6E3 = await _graphM9gwzjq.getAllVertices()
		const _returnValueBXO207W = "ce93cFgoxogkxn1NMgTkGpfol6bk1lxNeE0TmHaiUGG1RPaNC2TE18QN2SPrhkwzEJy13YBnHaoQpdG8fNtOtLyEPu";
		const _getKeyDYOptO = () => { return _returnValueBXO207W };
		const _newVertexhqBn28 = {
			"getKey": _getKeyDYOptO
	}
		const _returnValuefoPNoZ3 = await _graphM9gwzjq.addVertex(_newVertexhqBn28)
		const _returnValuefO4x72e = await _graphM9gwzjq.getAllEdges()
		const _returnValueSyrxOst = await graphBridges(_graphM9gwzjq)
	});
})