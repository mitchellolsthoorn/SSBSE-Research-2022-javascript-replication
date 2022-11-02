export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValuezsCMZwu = null;
		const _getVerticesIndicespmoxX51 = () => { return _returnValuezsCMZwu };
		const _returnValuektyRfAy = "um0M2qZXvysUrsgYLM69Pigm8zmOkyguqc9E2Yi";
		const _getAdjacencyMatrixScpPNyZ = () => { return _returnValuektyRfAy };
		const _returnValuePpUhZe0 = 0.1909867675169039;
		const _returnValueLY67lXr = () => { return _returnValuePpUhZe0 };
		const _getAllVerticeszPyA1rB = () => { return _returnValueLY67lXr };
		const _graphVXIFSZ3 = {
			"getVerticesIndices": _getVerticesIndicespmoxX51,
		"getAdjacencyMatrix": _getAdjacencyMatrixScpPNyZ,
		"getAllVertices": _getAllVerticeszPyA1rB
	}
		const _returnValueQsmuvBc = await hamiltonianCycle(_graphVXIFSZ3)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedhkno6S = true;
		const _graphTxz4p6m = new Graph(_isDirectedhkno6S)
		const _arrayValueQkohHq6 = undefined;
		const _valuecH7a3EO = [_arrayValueQkohHq6]
		const _startVertexLXNpvu = new GraphVertex(_valuecH7a3EO)
		const _returnValuegI0TZ0v = true;
		const _vertexR7ZAapy = () => { return _returnValuegI0TZ0v };
		const _returnValuetV4BtvA = await _startVertexLXNpvu.findEdge(_vertexR7ZAapy)
		const _returnValuecXEKDxd = await _startVertexLXNpvu.getNeighbors()
		const _endVertexH8a5m8t = "9fo40l0haXA0gMROPKYrny7M3cbzr62";
		const _returnValuepmWlCWL = await _graphTxz4p6m.findEdge(_startVertexLXNpvu, _endVertexH8a5m8t)
		const _returnValueCtdhQT1 = -9.940257164370825;
		const _arrayValuexGcqQO4 = () => { return _returnValueCtdhQT1 };
		const _arrayValueuRNcoDO = -9.387940303327492;
		const _arrayValuerLVpnmH = "2C5o75XyV";
		const _arrayValues7vEM5z = [_arrayValuexGcqQO4, _arrayValueuRNcoDO, _arrayValuerLVpnmH]
		const _arrayValuepnkwPE3 = "f3N5Yz9QgKsr2EuJ4fav3X39GtcgCIPCkUh1152wq2ejXQZcvaJe9OhrRlciGG8DGmzJ";
		const _returnValuen3HouTw = null;
		const _arrayValueW1USFyT = () => { return _returnValuen3HouTw };
		const _arrayValueVgbYJWp = [_arrayValues7vEM5z, _arrayValuepnkwPE3, _arrayValueW1USFyT]
		const _valueq488cyP = [_arrayValueVgbYJWp]
		const _startVertexhyU9GDu = new GraphVertex(_valueq488cyP)
		const _returnValuencDcudX = await _startVertexhyU9GDu.getDegree()
		const _edgex0FZKIS = "jRdgb72DYTd2HcXu2M55xanSTpsTKQyH5ODwhn664GeabVM";
		const _returnValueKnaXnD9 = await _startVertexhyU9GDu.deleteEdge(_edgex0FZKIS)
		const _returnValueEk0XzpK = await _startVertexhyU9GDu.deleteAllEdges()
		const _endVertexYv9ZJGt = {
		
	}
		const _returnValueRmqZ9yD = await _graphTxz4p6m.findEdge(_startVertexhyU9GDu, _endVertexYv9ZJGt)
		const _returnValuePIPIdGs = "jubDVREqtjqtzWpKwKsUARMCBAdvbvI11HAoMIOtzH8UThAzEM8jk1mud";
		const _getNeighborsVEslCEj = () => { return _returnValuePIPIdGs };
		const _vertexEIU0Qf9 = {
			"getNeighbors": _getNeighborsVEslCEj
	}
		const _returnValueNnwzZRX = await _graphTxz4p6m.getNeighbors(_vertexEIU0Qf9)
		const _valuepV21RsB = "Qoo084UtLvyO7jFgGMwYkS8YcPgjoSa5r05dKFq5nS4wbZonCFg1iYCcgcVImUG7y8vomXE2";
		const _newVertexRAjiJy = new GraphVertex(_valuepV21RsB)
		const _arrayValuexhdncqQ = null;
		const _returnValuejDoUFrL = 7.737687304840048;
		const _arrayValueYIH8h77 = () => { return _returnValuejDoUFrL };
		const _arrayValueT0R3WbX = [_arrayValuexhdncqQ, _arrayValueYIH8h77]
		const _arrayValueqiI07dX = {
		
	}
		const _arrayValuebrYHUMb = true;
		const _arrayValuemwLr674 = [_arrayValueqiI07dX, _arrayValuebrYHUMb]
		const _arrayValuej0aba3 = null;
		const _arrayValuewqq6NsT = -1.9655834120369509;
		const _arrayValueEdnelU = false;
		const _arrayValueRjO8FgN = [_arrayValuej0aba3, _arrayValuewqq6NsT, _arrayValueEdnelU]
		const _arrayValueZsrb5Qy = "3L4O1klOmuLZgAMwNPRTaIDbGit6opCSv5r";
		const _requiredEdgeBXpuCCr = [_arrayValueT0R3WbX, _arrayValuemwLr674, _arrayValueRjO8FgN, _arrayValueZsrb5Qy]
		const _returnValueDmYXfhl = await _newVertexRAjiJy.hasEdge(_requiredEdgeBXpuCCr)
		const _returnValueSw2nMw5 = await _graphTxz4p6m.addVertex(_newVertexRAjiJy)
		const _returnValuercwJVBW = await hamiltonianCycle(_graphTxz4p6m)
	});
})