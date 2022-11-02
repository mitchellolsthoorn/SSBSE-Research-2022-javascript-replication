export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphjvgW1pL = "h5mLnrJ7iIsDICL3D1vCx3wFZ9PR8Ahyr1GNwr7LHBdmKTkc9D8";
		const _returnValue3KncRZ = await floydWarshall(_graphjvgW1pL)
	});

	it('test for floydWarshall', async () => {
		const _returnValueA1ZU7K2 = "EGaH5D1L9ZwNalKDHwFxO4at7Bcf5CKh27ncFaKK86FEgnMJRTNAsCNDBwtubhMPvXj9";
		const _getAllVerticestVqj3Qr = () => { return _returnValueA1ZU7K2 };
		const _returnValueok11xX = undefined;
		const _findEdgepzw2ku = () => { return _returnValueok11xX };
		const _graphMylCWQS = {
			"getAllVertices": _getAllVerticestVqj3Qr,
		"findEdge": _findEdgepzw2ku
	}
		const _returnValueIA6BQJU = await floydWarshall(_graphMylCWQS)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedCDssgu0 = {
		
	}
		const _graphXKumsxZ = new Graph(_isDirectedCDssgu0)
		const _vertexKey4IxDJM = null;
		const _returnValuePqIPnuI = await _graphXKumsxZ.getVertexByKey(_vertexKey4IxDJM)
		const _returnValue4HTJ0w = await floydWarshall(_graphXKumsxZ)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuemKjCNFs = "hjQj1zi9psIwDaY9R0jq7bDNHNjDnFuUPP0oFlsY2Np22Xrbah6nr4Hw5";
		const _returnValueMmI25pq = [_arrayValuemKjCNFs]
		const _getAllVerticesZ4js468 = () => { return _returnValueMmI25pq };
		const _returnValuewld15uz = false;
		const _findEdgenI8q1wd = () => { return _returnValuewld15uz };
		const _graphQefEwXW = {
			"getAllVertices": _getAllVerticesZ4js468,
		"findEdge": _findEdgenI8q1wd
	}
		const _returnValueNpD6Xwt = await floydWarshall(_graphQefEwXW)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueBjgL0us = "IwAppf2mEd4ioKJrA6TwVQkxAjp9ZVJXOgdUUqpDS";
		const _arrayValueWT61CEU = "le2UtBJc2my4MMGrYAVQOTnYpGIsXVfOqcE0niQDdYHZArBqy7EopA5OmVlIzN";
		const _returnValueRr6NDDv = true;
		const _arrayValueNRuQa4T = () => { return _returnValueRr6NDDv };
		const _returnValuek9tLIA5 = [_arrayValueBjgL0us, _arrayValueWT61CEU, _arrayValueNRuQa4T]
		const _getAllVerticesIPy5zsH = () => { return _returnValuek9tLIA5 };
		const _returnValuecaZwl0n = -5.262399262418109;
		const _findEdgeQeo8Bd = () => { return _returnValuecaZwl0n };
		const _graphzcimn46 = {
			"getAllVertices": _getAllVerticesIPy5zsH,
		"findEdge": _findEdgeQeo8Bd
	}
		const _returnValuepgHFWVf = await floydWarshall(_graphzcimn46)
	});
})