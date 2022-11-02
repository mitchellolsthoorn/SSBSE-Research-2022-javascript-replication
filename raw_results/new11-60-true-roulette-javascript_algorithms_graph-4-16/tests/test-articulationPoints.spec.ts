export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueyECcibO = true;
		const _graphwbet3HC = () => { return _returnValueyECcibO };
		const _returnValueUZo6F4Z = await articulationPoints(_graphwbet3HC)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedL1Nlj4u = true;
		const _graphoBITedV = new Graph(_isDirectedL1Nlj4u)
		const _returnValueLJfAjPp = await _graphoBITedV.getWeight()
		const _returnValueOrC8vHp = await _graphoBITedV.getAllVertices()
		const _returnValuen6jH2m4 = await _graphoBITedV.getAllEdges()
		const _returnValuenB440p5 = null;
		const _returnValueex9jg7O = () => { return _returnValuenB440p5 };
		const _returnValueCleCj2S = () => { return _returnValueex9jg7O };
		const _getKeyKdcoZa = () => { return _returnValueCleCj2S };
		const _newVertexelpX9Kd = {
			"getKey": _getKeyKdcoZa
	}
		const _returnValueR60yMbn = await _graphoBITedV.addVertex(_newVertexelpX9Kd)
		const _returnValuejZ5T0kp = await articulationPoints(_graphoBITedV)
	});
})