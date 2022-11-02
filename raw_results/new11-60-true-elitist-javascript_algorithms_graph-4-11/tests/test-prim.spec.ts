export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValuekDC6dJq = true;
		const _arrayValueN0Epsmx = false;
		const _isDirectedEyDeVTG = [_arrayValuekDC6dJq, _arrayValueN0Epsmx]
		const _returnValuedB7LrgK = false;
		const _getAllVerticesrEx2ie8 = () => { return _returnValuedB7LrgK };
		const _graphegmNxK = {
			"isDirected": _isDirectedEyDeVTG,
		"getAllVertices": _getAllVerticesrEx2ie8
	}
		const _returnValue71WjJ9 = await prim(_graphegmNxK)
	});

	it('test for prim', async () => {
		const _isDirectedrJXYxAr = false;
		const _graphT0ZCNV = new Graph(_isDirectedrJXYxAr)
		const _returnValueLC1TX1y = await _graphT0ZCNV.getVerticesIndices()
		const _valueiVdo8w = {
		
	}
		const _newVertex7SuYXu = new GraphVertex(_valueiVdo8w)
		const _returnValueD4J140I = 5.7685150548638475;
		const _edgeaqDymjd = () => { return _returnValueD4J140I };
		const _returnValueaDcdk77 = await _newVertex7SuYXu.deleteEdge(_edgeaqDymjd)
		const _returnValuenPj6YOD = await _newVertex7SuYXu.getKey()
		const _returnValueOqMYg8b = "dGpaeCHZgHj52auFLE0WxJvjElVqSKLkrbYtcamTkS363z5ijMFokkziXY7NJdnBw5BrBsobv3Y4k";
		const _vertexPnzzNhp = () => { return _returnValueOqMYg8b };
		const _returnValuegQb0SrB = await _newVertex7SuYXu.hasNeighbor(_vertexPnzzNhp)
		const _returnValuesD36Jgt = await _newVertex7SuYXu.getKey()
		const _returnValueLMx66Wq = await _graphT0ZCNV.addVertex(_newVertex7SuYXu)
		const _returnValuerDjPecr = await _graphT0ZCNV.reverse()
		const _vertexKeyGCuqPyF = true;
		const _returnValueNdzFedc = await _graphT0ZCNV.getVertexByKey(_vertexKeyGCuqPyF)
		const _returnValueqoh1CHk = await prim(_graphT0ZCNV)
	});
})