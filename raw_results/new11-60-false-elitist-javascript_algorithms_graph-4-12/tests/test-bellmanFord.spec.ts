export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueUNc8KQK = null;
		const _getAllVerticestYcMtDJ = () => { return _returnValueUNc8KQK };
		const _returnValueWxakZ0N = -2.3676517520393254;
		const _returnValueFDZaeXT = () => { return _returnValueWxakZ0N };
		const _getVertexByKeycit9EDV = () => { return _returnValueFDZaeXT };
		const _arrayValueHNVUiIO = null;
		const _arrayValueOm7ZweU = -2.775642307967158;
		const _returnValueBrVZXa = [_arrayValueHNVUiIO, _arrayValueOm7ZweU]
		const _getNeighborslg9LWYP = () => { return _returnValueBrVZXa };
		const _arrayValuejMonEt = undefined;
		const _arrayValueDBNXd9A = undefined;
		const _arrayValueUzVuTY2 = true;
		const _returnValueFSoeaMa = [_arrayValuejMonEt, _arrayValueDBNXd9A, _arrayValueUzVuTY2]
		const _findEdgeTdgLu7O = () => { return _returnValueFSoeaMa };
		const _graphXG9BHIO = {
			"getAllVertices": _getAllVerticestYcMtDJ,
		"getVertexByKey": _getVertexByKeycit9EDV,
		"getNeighbors": _getNeighborslg9LWYP,
		"findEdge": _findEdgeTdgLu7O
	}
		const _returnValueiFFqCMO = false;
		const _getKeyxZjdfxp = () => { return _returnValueiFFqCMO };
		const _startVertexcqlpwdt = {
			"getKey": _getKeyxZjdfxp
	}
		const _returnValuec2zp7DV = await bellmanFord(_graphXG9BHIO, _startVertexcqlpwdt)
	});

	it('test for bellmanFord', async () => {
		const _returnValueQBLBNwd = []
		const _getAllVerticesRUONJiq = () => { return _returnValueQBLBNwd };
		const _returnValuegFNl4KD = true;
		const _returnValueJxuikCl = () => { return _returnValuegFNl4KD };
		const _getVertexByKeyUk1PTfS = () => { return _returnValueJxuikCl };
		const _returnValuezH16hmP = "UcBKqWgni9WlTsDmOvbj1WqJyXbt7Iz0W4p9na3X";
		const _getNeighborsSYpO3eh = () => { return _returnValuezH16hmP };
		const _returnValuelSyPtN1 = "QPBllMmw3IGNnzdoQxLUyj8bO26InUvoFRCOLxTjSSuOCTTrXV5Lic2I4FIRQnm1dM6DxGqytHUv78K3hA6hld4ClCo";
		const _findEdgee8Ld3VB = () => { return _returnValuelSyPtN1 };
		const _grapho0J2LG = {
			"getAllVertices": _getAllVerticesRUONJiq,
		"getVertexByKey": _getVertexByKeyUk1PTfS,
		"getNeighbors": _getNeighborsSYpO3eh,
		"findEdge": _findEdgee8Ld3VB
	}
		const _arrayValueUhw1nA7 = "Em79S8";
		const _arrayValueaGmWdfj = 7.799650644912486;
		const _arrayValuePBHE5Ng = null;
		const _returnValuecUihbTX = [_arrayValueUhw1nA7, _arrayValueaGmWdfj, _arrayValuePBHE5Ng]
		const _getKeylH8WuhB = () => { return _returnValuecUihbTX };
		const _startVertexTnyJcP0 = {
			"getKey": _getKeylH8WuhB
	}
		const _returnValueEyMXBE0 = await bellmanFord(_grapho0J2LG, _startVertexTnyJcP0)
	});
})