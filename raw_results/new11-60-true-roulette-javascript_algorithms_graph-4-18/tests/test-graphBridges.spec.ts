export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueBUuMPq6 = true;
		const _graphjVGo8cb = () => { return _returnValueBUuMPq6 };
		const _returnValuejSN8Em4 = await graphBridges(_graphjVGo8cb)
	});

	it('test for graphBridges', async () => {
		const _isDirectedgy4I3wG = false;
		const _graphk55QTq3 = new Graph(_isDirectedgy4I3wG)
		const _returnValuelyB3uk4 = null;
		const _returnValuekqPwMk = () => { return _returnValuelyB3uk4 };
		const _getKeybrlTU5 = () => { return _returnValuekqPwMk };
		const _newVertexc00hvqu = {
			"getKey": _getKeybrlTU5
	}
		const _returnValueVjKfOSE = await _graphk55QTq3.addVertex(_newVertexc00hvqu)
		const _vertexKeyoHgcyYy = undefined;
		const _returnValuek7GCVx = await _graphk55QTq3.getVertexByKey(_vertexKeyoHgcyYy)
		const _returnValueGRekKeH = await graphBridges(_graphk55QTq3)
	});
})