export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValueWMARCfA = null;
		const _graphPajwE4 = [_arrayValueWMARCfA]
		const _returnValueewUEDsY = await articulationPoints(_graphPajwE4)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedyvSK3Cg = false;
		const _graph5fq96G = new Graph(_isDirectedyvSK3Cg)
		const _returnValuea16jY6o = -8.331510573524616;
		const _getKeyy3wtzCv = () => { return _returnValuea16jY6o };
		const _startVertexE0Nu8U9 = {
			"getKey": _getKeyy3wtzCv
	}
		const _endVertexehmKHgs = -1.1512768870827745;
		const _returnValueNK9HTUm = await _graph5fq96G.findEdge(_startVertexE0Nu8U9, _endVertexehmKHgs)
		const _returnValueCGYjqKv = {
		
	}
		const _returnValueQBLNFQe = () => { return _returnValueCGYjqKv };
		const _getKeyab8EjIV = () => { return _returnValueQBLNFQe };
		const _newVertexBibgPJU = {
			"getKey": _getKeyab8EjIV
	}
		const _returnValueGiX9ivr = await _graph5fq96G.addVertex(_newVertexBibgPJU)
		const _returnValueRBwDjao = await articulationPoints(_graph5fq96G)
	});
})