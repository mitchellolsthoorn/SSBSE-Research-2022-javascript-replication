export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuei2F3zWv = -4.690498888835175;
		const _getAllVerticesXnWis9H = () => { return _returnValuei2F3zWv };
		const _arrayValueH5RhYJe = "MyOs8bGTfvgjU02oLM6LvESBVWIrxcDsw5QGaPBKqVD8cjwwartRPEPblSPTz8Vrjg";
		const _arrayValuesNQlFOL = undefined;
		const _arrayValuekXW0PgX = [_arrayValueH5RhYJe, _arrayValuesNQlFOL]
		const _arrayValuezqBbWTh = -4.447043792010036;
		const _returnValueSG0PIck = [_arrayValuekXW0PgX, _arrayValuezqBbWTh]
		const _findEdgeRLzNwDT = () => { return _returnValueSG0PIck };
		const _graphMTUkI3n = {
			"getAllVertices": _getAllVerticesXnWis9H,
		"findEdge": _findEdgeRLzNwDT
	}
		const _arrayValuerY4UT8 = -1.1898798743530854;
		const _returnValueNRYfIwd = [_arrayValuerY4UT8]
		const _getKeyTo985Gd = () => { return _returnValueNRYfIwd };
		const _startVertexaybgUeV = {
			"getKey": _getKeyTo985Gd
	}
		const _returnValuefJfEUf = await dijkstra(_graphMTUkI3n, _startVertexaybgUeV)
	});

	it('test for dijkstra', async () => {
		const _isDirectedStTEsBG = true;
		const _grapho9ylSIL = new Graph(_isDirectedStTEsBG)
		const _returnValueQubquqo = "dbnbd9Go3SfMvAJAkLU4ItTpP8mBr6pcpI7m3doAMnuCOy03u0GEvudYNXqtBMbv63ZDRq639PQ1nreEvS3f7a5oe";
		const _vertexKeyYHmMgYX = () => { return _returnValueQubquqo };
		const _returnValuea4FTaB = await _grapho9ylSIL.getVertexByKey(_vertexKeyYHmMgYX)
		const _returnValuecSoBs6K = 1.3042774167106188;
		const _getKeyy6MgeWz = () => { return _returnValuecSoBs6K };
		const _startVertexH2W0yss = {
			"getKey": _getKeyy6MgeWz
	}
		const _returnValuesPbryL5 = await dijkstra(_grapho9ylSIL, _startVertexH2W0yss)
	});

	it('test for dijkstra', async () => {
		const _isDirectedfO05hZ7 = true;
		const _graph8lRycx = new Graph(_isDirectedfO05hZ7)
		const _returnValueR6A6IMm = await _graph8lRycx.getWeight()
		const _returnValueMfwYAmL = 8.416765071936865;
		const _valueF6lBKQ0 = () => { return _returnValueMfwYAmL };
		const _startVertexI7EUPpv = new GraphVertex(_valueF6lBKQ0)
		const _edgeVRRptEg = undefined;
		const _returnValueKTgiaoT = await _startVertexI7EUPpv.deleteEdge(_edgeVRRptEg)
		const _vertexVaGE1K = undefined;
		const _returnValuen3uRn1k = await _startVertexI7EUPpv.hasNeighbor(_vertexVaGE1K)
		const _returnValueaR3qegY = await _startVertexI7EUPpv.getDegree()
		const _vertexVgmBYTW = null;
		const _returnValuek65mmx1 = await _startVertexI7EUPpv.hasNeighbor(_vertexVgmBYTW)
		const _returnValueefwapUz = await dijkstra(_graph8lRycx, _startVertexI7EUPpv)
	});

	it('test for dijkstra', async () => {
		const _isDirectedq459Sra = true;
		const _graphBOXSyP = new Graph(_isDirectedq459Sra)
		const _returnValueczfCYwn = await _graphBOXSyP.getAllEdges()
		const _vertexKeyHSljLWL = "67wh7H0fx6Akv99hvYwQ27IWIBeijOxo9tRhJvJSqmV71yJxorRJoIogfuSNTGQABa5I9JfdnX7TK6l";
		const _returnValueDNuITb = await _graphBOXSyP.getVertexByKey(_vertexKeyHSljLWL)
		const _arrayValueSY2qUXJ = -7.249732496772252;
		const _arrayValueJ63T6gQ = {
		
	}
		const _arrayValuescwq9oI = false;
		const _arrayValuefWbdgGT = "uts1c5QPBbiC7UFTnD8PB98hSBUsUuUId2pmRfXJEgvVmRQHWsoA3yrklDmbf3VuuXnDvLGph8";
		const _arrayValuec1aeuW5 = [_arrayValuefWbdgGT]
		const _valueVi9g9S2 = [_arrayValueSY2qUXJ, _arrayValueJ63T6gQ, _arrayValuescwq9oI, _arrayValuec1aeuW5]
		const _startVertexTp3TB00 = new GraphVertex(_valueVi9g9S2)
		const _vertexAW8XoN = false;
		const _returnValueipFhGT5 = await _startVertexTp3TB00.hasNeighbor(_vertexAW8XoN)
		const _returnValueMPUtHwf = await _startVertexTp3TB00.getNeighbors()
		const _returnValuefxz4wrh = await _startVertexTp3TB00.getKey()
		const _arrayValueTW8kUbS = "qF8ERqGuQuy74pR4Ee4OO4oHAmQPJ2gHjO2kIBxTnSCiAz9RyQkTc19Xxn3K8mksxREaa8C8ZhLeSpZek4Nxkh1c";
		const _returnValueQnTNT03 = [_arrayValueTW8kUbS]
		const _edgeJo8n1th = () => { return _returnValueQnTNT03 };
		const _returnValueMtOzFA5 = await _startVertexTp3TB00.addEdge(_edgeJo8n1th)
		const _returnValueCbQGQGm = await dijkstra(_graphBOXSyP, _startVertexTp3TB00)
	});
})