export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueSX4E1HF = false;
		const _getAllVerticeseQRYKW4 = () => { return _returnValueSX4E1HF };
		const _returnValuegt61ZEe = true;
		const _findEdgeUHWYX3s = () => { return _returnValuegt61ZEe };
		const _graphGk7vOJQ = {
			"getAllVertices": _getAllVerticeseQRYKW4,
		"findEdge": _findEdgeUHWYX3s
	}
		const _returnValuescwWdOe = await floydWarshall(_graphGk7vOJQ)
	});

	it('test for floydWarshall', async () => {
		const _isDirectednYFwwl9 = false;
		const _graphAcG9urK = new Graph(_isDirectednYFwwl9)
		const _returnValueGpcTqLx = await _graphAcG9urK.getWeight()
		const _returnValuefQRt6ek = await _graphAcG9urK.getAllVertices()
		const _returnValueW4a8eh = await floydWarshall(_graphAcG9urK)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueAufE1Kq = true;
		const _returnValueiIQkciw = [_arrayValueAufE1Kq]
		const _getAllVerticesCvyjigz = () => { return _returnValueiIQkciw };
		const _arrayValueFj3lcHE = "";
		const _arrayValueOk93BCX = undefined;
		const _returnValueQTvxMZ1 = [_arrayValueFj3lcHE, _arrayValueOk93BCX]
		const _findEdgeE7M0VDa = () => { return _returnValueQTvxMZ1 };
		const _graphPnx52AG = {
			"getAllVertices": _getAllVerticesCvyjigz,
		"findEdge": _findEdgeE7M0VDa
	}
		const _returnValueW21hENy = await floydWarshall(_graphPnx52AG)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuen3FWpFX = undefined;
		const _arrayValuehe6C1h = false;
		const _returnValueCd7lrw = [_arrayValuen3FWpFX, _arrayValuehe6C1h]
		const _getAllVerticesa1RbToW = () => { return _returnValueCd7lrw };
		const _arrayValueOzQffwA = null;
		const _arrayValuejv6fOdw = true;
		const _returnValueaD9oISp = [_arrayValueOzQffwA, _arrayValuejv6fOdw]
		const _findEdgeAFZSuub = () => { return _returnValueaD9oISp };
		const _graphBVO8Rc2 = {
			"getAllVertices": _getAllVerticesa1RbToW,
		"findEdge": _findEdgeAFZSuub
	}
		const _returnValuePnT06wd = await floydWarshall(_graphBVO8Rc2)
	});
})