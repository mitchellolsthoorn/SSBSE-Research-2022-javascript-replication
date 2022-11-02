export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValuefpiri3 = true;
		const _arrayValueiaPNvxM = "ydjEMFLbQKECkJnfjcWOUBcS0arR7jko7kh7F0jKqWpiNbSCYe8RPoU38RrBacVdAbK003DpcDwh4jYb5Mx6UvZc";
		const _returnValueYEos1Dn = [_arrayValuefpiri3, _arrayValueiaPNvxM]
		const _getAllEdgesLOhoiyx = () => { return _returnValueYEos1Dn };
		const _returnValueKeZfbI = true;
		const _getAllVerticesfvL40vw = () => { return _returnValueKeZfbI };
		const _returnValueYi50C8A = null;
		const _deleteEdgeyccV7U5 = () => { return _returnValueYi50C8A };
		const _graphNJJIGLE = {
			"getAllEdges": _getAllEdgesLOhoiyx,
		"getAllVertices": _getAllVerticesfvL40vw,
		"deleteEdge": _deleteEdgeyccV7U5
	}
		const _returnValuedy8VZV9 = await eulerianPath(_graphNJJIGLE)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedIvPHRk = false;
		const _graphhXuJ6ul = new Graph(_isDirectedIvPHRk)
		const _returnValueUNtj9hv = await _graphhXuJ6ul.getAllVertices()
		const _returnValueQEahnaQ = await eulerianPath(_graphhXuJ6ul)
	});
})