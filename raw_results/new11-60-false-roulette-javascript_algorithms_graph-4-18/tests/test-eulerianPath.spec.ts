export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueFYv4Js = {
		
	}
		const _arrayValueMWzsE8 = null;
		const _arrayValuem26eSJ = 7.259907849952864;
		const _arrayValuetGJtGRe = undefined;
		const _arrayValueQcko6YT = "n7";
		const _arrayValueTA7bG2 = [_arrayValuetGJtGRe, _arrayValueQcko6YT]
		const _arrayValueSodpxBp = [_arrayValueMWzsE8, _arrayValuem26eSJ, _arrayValueTA7bG2]
		const _arrayValuee6l2bG1 = true;
		const _arrayValueeQOAwtC = [_arrayValueFYv4Js, _arrayValueSodpxBp, _arrayValuee6l2bG1]
		const _arrayValue97IkCX = [_arrayValueeQOAwtC]
		const _graphsQsVCiE = [_arrayValue97IkCX]
		const _returnValueAasjS7f = await eulerianPath(_graphsQsVCiE)
	});

	it('test for eulerianPath', async () => {
		const _returnValueXyW8xG0 = []
		const _getAllEdgesfmJ7utB = () => { return _returnValueXyW8xG0 };
		const _arrayValueqznYrZX = {
		
	}
		const _arrayValuegBCt3KG = true;
		const _arrayValuetWXViGQ = undefined;
		const _arrayValueKfN512b = null;
		const _returnValueAbcFQY = [_arrayValueqznYrZX, _arrayValuegBCt3KG, _arrayValuetWXViGQ, _arrayValueKfN512b]
		const _returnValuee5JfI9G = () => { return _returnValueAbcFQY };
		const _getAllVerticesqait6TG = () => { return _returnValuee5JfI9G };
		const _returnValuePOWknKt = {
		
	}
		const _deleteEdgeaGk1O71 = () => { return _returnValuePOWknKt };
		const _graphOmAxFez = {
			"getAllEdges": _getAllEdgesfmJ7utB,
		"getAllVertices": _getAllVerticesqait6TG,
		"deleteEdge": _deleteEdgeaGk1O71
	}
		const _returnValuekPCv5il = await eulerianPath(_graphOmAxFez)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedeX5FLYX = true;
		const _graphYNyejvw = new Graph(_isDirectedeX5FLYX)
		const _returnValueJIvHnNk = await _graphYNyejvw.getVerticesIndices()
		const _returnValueIEu7AcA = await eulerianPath(_graphYNyejvw)
	});
})