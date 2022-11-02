export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueyEUbJXs = 8.171247074805045;
		const _getAllEdgesCLv39iv = () => { return _returnValueyEUbJXs };
		const _arrayValueQmggjUw = false;
		const _returnValueuHWZRy = "MjBUeF4nEXBr15bSbBGAedsmMH9r8uXxXsqExlMsiMdfGO4vemqAfWnDbVl1hDUgTt6OQKq8TgDqjpaZ";
		const _arrayValueK77sOd4 = () => { return _returnValueuHWZRy };
		const _returnValueRFrTMqW = [_arrayValueQmggjUw, _arrayValueK77sOd4]
		const _getAllVerticesGCyuUff = () => { return _returnValueRFrTMqW };
		const _deleteEdgevOj1oMU = false;
		const _graphTquE7QL = {
			"getAllEdges": _getAllEdgesCLv39iv,
		"getAllVertices": _getAllVerticesGCyuUff,
		"deleteEdge": _deleteEdgevOj1oMU
	}
		const _returnValueI5tJx9W = await eulerianPath(_graphTquE7QL)
	});

	it('test for eulerianPath', async () => {
		const _returnValueoOGWZsd = []
		const _getAllEdgesA4OeFuF = () => { return _returnValueoOGWZsd };
		const _returnValueOLUZkg = "7PybPfBRVISn";
		const _getAllVerticesfUu9Sq4 = () => { return _returnValueOLUZkg };
		const _arrayValueyaVMOIp = undefined;
		const _returnValueD5F6tb3 = undefined;
		const _arrayValuelYPd5Kf = () => { return _returnValueD5F6tb3 };
		const _arrayValueEe1LLhk = -8.598283640251454;
		const _arrayValueuoWxjCN = undefined;
		const _arrayValueu9trGm = [_arrayValueEe1LLhk, _arrayValueuoWxjCN]
		const _returnValueUQS7Ob1 = [_arrayValueyaVMOIp, _arrayValuelYPd5Kf, _arrayValueu9trGm]
		const _deleteEdgeoG2ZiKg = () => { return _returnValueUQS7Ob1 };
		const _graphoYi4rIi = {
			"getAllEdges": _getAllEdgesA4OeFuF,
		"getAllVertices": _getAllVerticesfUu9Sq4,
		"deleteEdge": _deleteEdgeoG2ZiKg
	}
		const _returnValueg9nupNV = await eulerianPath(_graphoYi4rIi)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedvBapI7q = false;
		const _graphXvKQB6Y = new Graph(_isDirectedvBapI7q)
		const _returnValuey3tOiSS = await _graphXvKQB6Y.getVerticesIndices()
		const _returnValueDJwHzz = await _graphXvKQB6Y.getVerticesIndices()
		const _returnValueqVPR3P = await _graphXvKQB6Y.getVerticesIndices()
		const _returnValueXOnmLHA = await eulerianPath(_graphXvKQB6Y)
	});
})