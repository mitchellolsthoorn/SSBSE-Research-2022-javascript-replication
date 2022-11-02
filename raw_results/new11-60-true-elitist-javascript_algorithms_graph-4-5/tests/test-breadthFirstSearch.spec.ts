export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuec5MhrP = 2.9005081822140752;
		const _getNeighborsUk6d3Za = () => { return _returnValuec5MhrP };
		const _graphPSjoEuq = {
			"getNeighbors": _getNeighborsUk6d3Za
	}
		const _arrayValuegsMd4Fq = 5.117304701104825;
		const _startVertexBsco9rE = [_arrayValuegsMd4Fq]
		const _originalCallbacks3KmfVq = 6.542701314255737;
		const _returnValueNVNdXER = await breadthFirstSearch(_graphPSjoEuq, _startVertexBsco9rE, _originalCallbacks3KmfVq)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueAOZRwM2 = "JYyy7yhzvbZCKxCga";
		const _getNeighborsjubJwTB = () => { return _returnValueAOZRwM2 };
		const _graphysBhH6U = {
			"getNeighbors": _getNeighborsjubJwTB
	}
		const _startVertexoqxq4HL = 7.330630920556388;
		const _arrayValueazLMSbu = "MLvnnt363KCiHFO4mctqNqL9lA0EnAcfrQmbXpln0qbPWobrUPPaxa2awbQJow";
		const _arrayValueY7ZjnHV = null;
		const _arrayValuevvzivVh = undefined;
		const _arrayValueJ3tAH1t = undefined;
		const _originalCallbacksGyZooGL = [_arrayValueazLMSbu, _arrayValueY7ZjnHV, _arrayValuevvzivVh, _arrayValueJ3tAH1t]
		const _returnValueFOwWj4j = await breadthFirstSearch(_graphysBhH6U, _startVertexoqxq4HL, _originalCallbacksGyZooGL)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuewKpf3Wy = true;
		const _arrayValueTDkoOQ9 = {
		
	}
		const _arrayValueztipAvD = "Gg5skAGsBEabkAeSiTfY64MoEjkh5Otk03Ml93QCz9BAdiTrwwrAfpqVZkn";
		const _arrayValueHprStgU = true;
		const _arrayValuez22XG0F = [_arrayValueTDkoOQ9, _arrayValueztipAvD, _arrayValueHprStgU]
		const _returnValueouJMOI2 = [_arrayValuewKpf3Wy, _arrayValuez22XG0F]
		const _getNeighborssqvZMvr = () => { return _returnValueouJMOI2 };
		const _graphZhMrwR = {
			"getNeighbors": _getNeighborssqvZMvr
	}
		const _startVertexBtdYLrB = {
		
	}
		const _returnValue2F3T0u = undefined;
		const _originalCallbacksFITm5y = () => { return _returnValue2F3T0u };
		const _returnValueq4Mh2sj = await breadthFirstSearch(_graphZhMrwR, _startVertexBtdYLrB, _originalCallbacksFITm5y)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuebliHCnu = 4.929923701091472;
		const _graphq9Ns9hE = new GraphVertex(_valuebliHCnu)
		const _returnValueDGyRdxk = await _graphq9Ns9hE.getNeighbors()
		const _vertexp1GZ7UF = "193yE52Jp6ats3ShvLkswlH1gCg3VuX9Zb2GyoaDabaam1Xk57GrfvfQrSmhZg5sYh9xJwuBWWJDceB";
		const _returnValueyLh04Qx = await _graphq9Ns9hE.hasNeighbor(_vertexp1GZ7UF)
		const _arrayValueHrYCyvl = undefined;
		const _arrayValueXDrRA2A = undefined;
		const _startVertexXTCoKKd = [_arrayValueHrYCyvl, _arrayValueXDrRA2A]
		const _originalCallbacksgYVlbxf = undefined;
		const _returnValuertg2G3I = await breadthFirstSearch(_graphq9Ns9hE, _startVertexXTCoKKd, _originalCallbacksgYVlbxf)
	});
})