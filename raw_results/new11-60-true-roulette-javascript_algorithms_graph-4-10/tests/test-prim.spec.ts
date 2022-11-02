export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedtxOBt19 = false;
		const _graphxcSnTaB = new Graph(_isDirectedtxOBt19)
		const _returnValuectMeP66 = await _graphxcSnTaB.reverse()
		const _vertexKeyVfvdys5 = true;
		const _returnValueeEpeNjp = await _graphxcSnTaB.getVertexByKey(_vertexKeyVfvdys5)
		const _returnValuem31zZWq = await prim(_graphxcSnTaB)
	});

	it('test for prim', async () => {
		const _isDirectedQDRu40 = -1.4062485468824608;
		const _returnValueoiZp43 = undefined;
		const _getAllVerticesohJPp55 = () => { return _returnValueoiZp43 };
		const _graphQc50yh9 = {
			"isDirected": _isDirectedQDRu40,
		"getAllVertices": _getAllVerticesohJPp55
	}
		const _returnValueXOKOkKn = await prim(_graphQc50yh9)
	});

	it('test for prim', async () => {
		const _isDirectedZPQXUsf = false;
		const _graphuGEtFG = new Graph(_isDirectedZPQXUsf)
		const _valueOdCKPHs = "zNTPE8tPgSQdSTlQ5im75JUQJ128YoZw36fGiQgGKoWfGBF7ckkDTlJtCyprOcy4BkCp0OfFwTtbfzB0jDXDPz2OatNRSdD1l";
		const _returnValueOt22aZ = null;
		const _arrayValueRBsMnj3 = () => { return _returnValueOt22aZ };
		const _arrayValueH8AAaCu = "ceP3Y5fMCGSTtTs2w56i34n31AQrA4CKzOsk1FZIqcDjEy3SFyBDoFbbw";
		const _returnValueBaGCEK = [_arrayValueRBsMnj3, _arrayValueH8AAaCu]
		const _keyCallbackRmzUy9B = () => { return _returnValueBaGCEK };
		const _newVertexfQ8Ja7o = new DisjointSetItem(_valueOdCKPHs, _keyCallbackRmzUy9B)
		const _returnValuepgV46kV = await _newVertexfQ8Ja7o.getRank()
		const _returnValueAFN0dc = await _newVertexfQ8Ja7o.getRoot()
		const _returnValuebmMnWDf = await _newVertexfQ8Ja7o.getChildren()
		const _returnValueTrlBGnl = await _graphuGEtFG.addVertex(_newVertexfQ8Ja7o)
		const _returnValueGuCzGlc = await prim(_graphuGEtFG)
	});

	it('test for prim', async () => {
		const _isDirectedXB52qGQ = false;
		const _graphPzBmkPt = new Graph(_isDirectedXB52qGQ)
		const _returnValuet2LB7I = await _graphPzBmkPt.getVerticesIndices()
		const _returnValuerkz63LY = await _graphPzBmkPt.reverse()
		const _valueEuOQOeX = "ribVUkDxmbriISx3M0W";
		const _newVertexL4Rm56c = new GraphVertex(_valueEuOQOeX)
		const _returnValueCmZzvBg = await _newVertexL4Rm56c.deleteAllEdges()
		const _returnValuemisHizW = await _newVertexL4Rm56c.getNeighbors()
		const _returnValueP4yCAWU = await _newVertexL4Rm56c.getEdges()
		const _requiredEdgejBu3T4z = "O3OU9rOPAp5vKIitAEAbYvNfw3dMPMGK8VsMpuC2X3ko";
		const _returnValueMqtU2Wd = await _newVertexL4Rm56c.hasEdge(_requiredEdgejBu3T4z)
		const _returnValuegKpipBN = await _graphPzBmkPt.addVertex(_newVertexL4Rm56c)
		const _returnValueZuzRCAn = await prim(_graphPzBmkPt)
	});
})