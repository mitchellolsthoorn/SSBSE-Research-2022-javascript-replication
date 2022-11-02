export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuekQKXYwi = -1.6361345217006793;
		const _getNeighborsrN5P2T8 = () => { return _returnValuekQKXYwi };
		const _graphIrxWAqf = {
			"getNeighbors": _getNeighborsrN5P2T8
	}
		const _startVertexEkGwpro = "QydgjJE6Wztwd4oYAhrAexU4CBjh4YK6mNPyMd1FacM7NKfVatO2fPegmClSfpdbN7iR4s28UtUPTeiNr9o";
		const _originalCallbacksJLAJPX7 = "AW8Ih5G2yVWynYzEPrRuA1Ngz4TtkjiicEnGCTm1vSQVtPnWGXUEfnhnHySvRKx";
		const _returnValueRIG2G1S = await breadthFirstSearch(_graphIrxWAqf, _startVertexEkGwpro, _originalCallbacksJLAJPX7)
	});

	it('test for breadthFirstSearch', async () => {
		const _graphSHuWAyB = "KmQNU3XwR4nq5k30ltKFFAVXrAPMM9fxovacJ09GyillOBCnUuPzNgfn3NITgl5KxIgOQIs3hg";
		const _arrayValueY2MpN7R = undefined;
		const _startVertexUUlGfR0 = [_arrayValueY2MpN7R]
		const _originalCallbacksKqhByKQ = {
		
	}
		const _returnValuenBkfFVt = await breadthFirstSearch(_graphSHuWAyB, _startVertexUUlGfR0, _originalCallbacksKqhByKQ)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueUYkLYIr = 8.617293790581101;
		const _graphv0JH6jG = new GraphVertex(_valueUYkLYIr)
		const _returnValueHWRSOSV = await _graphv0JH6jG.getDegree()
		const _returnValuesyKRerx = await _graphv0JH6jG.getDegree()
		const _startVertexpMvcEIS = true;
		const _returnValueELQgPR = 9.055321880898095;
		const _originalCallbacksYKUkbUL = () => { return _returnValueELQgPR };
		const _returnValueFWdgtoy = await breadthFirstSearch(_graphv0JH6jG, _startVertexpMvcEIS, _originalCallbacksYKUkbUL)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuexvsXAsX = "Wbr5iqRWurB6PP6m9b8KKdjv3FJJsk81LtgBiqqqVFo1pZUGvIkMRkubnrxFdyzQvy8mpx2TfHH";
		const _arrayValuerOxMb1x = true;
		const _returnValueGYeATY1 = [_arrayValuexvsXAsX, _arrayValuerOxMb1x]
		const _getNeighborshfCH4IY = () => { return _returnValueGYeATY1 };
		const _graphqDBQSvD = {
			"getNeighbors": _getNeighborshfCH4IY
	}
		const _startVertexWGzw1fa = "Fw9pycO6IjWSbiXas6s";
		const _originalCallbacksPNs3H2 = undefined;
		const _returnValuecnkRpFx = await breadthFirstSearch(_graphqDBQSvD, _startVertexWGzw1fa, _originalCallbacksPNs3H2)
	});
})