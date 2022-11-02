export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedDSyWXKh = 8.464875496472825;
		const _returnValueUSBwGIt = "PgoULqByFBnkjGcELh6bVoHgw3lpuFs9VQ";
		const _getAllVerticeshs1ueBT = () => { return _returnValueUSBwGIt };
		const _graphjrSjcrR = {
			"isDirected": _isDirectedDSyWXKh,
		"getAllVertices": _getAllVerticeshs1ueBT
	}
		const _returnValueQlUwrIG = await prim(_graphjrSjcrR)
	});

	it('test for prim', async () => {
		const _isDirectedjb6s30o = false;
		const _grapheySKJJ9 = new Graph(_isDirectedjb6s30o)
		const _returnValuejbi1XS8 = await _grapheySKJJ9.reverse()
		const _returnValueoDfLP1d = await _grapheySKJJ9.getWeight()
		const _arrayValuew7WOiRB = "keBJhEeiZhWc8Firtm5ipF5WhoF";
		const _arrayValueyp10tBA = "16dFmYlMLA4LxdnqEVKNeFseRkb0VKT0hVV1xh1I5OxINYq1HVdaRHwKpGqmu0dd4bOdWWzrC9PaSWKN9CWQLEZ1NHx8u";
		const _vertexKeywBT00xK = [_arrayValuew7WOiRB, _arrayValueyp10tBA]
		const _returnValuex1nWQYu = await _grapheySKJJ9.getVertexByKey(_vertexKeywBT00xK)
		const _returnValuehixObDy = true;
		const _getKeyIAijYYM = () => { return _returnValuehixObDy };
		const _newVertexFxYMxWV = {
			"getKey": _getKeyIAijYYM
	}
		const _returnValueygMCnOv = await _grapheySKJJ9.addVertex(_newVertexFxYMxWV)
		const _returnValuekCJuwhg = await prim(_grapheySKJJ9)
	});
})