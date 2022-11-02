export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueQFTfs1Y = "jzGcWNYdsExGZjmCPAOSfYT8vPHzvPM6iA54QfrstKdSYC7uYMH";
		const _getNeighborsvsKbIsh = () => { return _returnValueQFTfs1Y };
		const _graphGC0czSi = {
			"getNeighbors": _getNeighborsvsKbIsh
	}
		const _startVertexzz2FjPv = "u9gEhYWwhnd8cOPbuQs7xLIIyVzdoDW139u43jo77mc6p51r8rEfCfVzjjSCEg5MCg6COVecYhUIXXpjUHAYQa2";
		const _originalCallbacksAlM2vLC = null;
		const _returnValuemqDJu1H = await breadthFirstSearch(_graphGC0czSi, _startVertexzz2FjPv, _originalCallbacksAlM2vLC)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValues7ODFpl = "ZDv6b6ADizDdRBXpBhg6t9H";
		const _getNeighborsOSFv4Ba = () => { return _returnValues7ODFpl };
		const _graphi9xmz79 = {
			"getNeighbors": _getNeighborsOSFv4Ba
	}
		const _startVertexUwTEkWO = "kXpCdZ99UdTfJ0vtfTuoe6VFlYclnD3qYCixZzJuXO8ssPeaGVPdllBrGPtXk5m7dpYpyBHUnFLlm9S";
		const _originalCallbacksjX5GP0C = {
		
	}
		const _returnValuekr5aw4u = await breadthFirstSearch(_graphi9xmz79, _startVertexUwTEkWO, _originalCallbacksjX5GP0C)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuepTIeVzi = -5.181896567958155;
		const _valueggQ88Rp = () => { return _returnValuepTIeVzi };
		const _graphntuY47o = new GraphVertex(_valueggQ88Rp)
		const _returnValueSrwTXIz = null;
		const _callbacknDE2iA3 = () => { return _returnValueSrwTXIz };
		const _returnValueSMKTXMr = await _graphntuY47o.toString(_callbacknDE2iA3)
		const _returnValue4M2Uj0 = await _graphntuY47o.getNeighbors()
		const _returnValuem2299lr = 3.059917030960122;
		const _callbackXebTAZO = () => { return _returnValuem2299lr };
		const _returnValueG38NcRP = await _graphntuY47o.toString(_callbackXebTAZO)
		const _startVertexdUDNZgc = "m4iX";
		const _originalCallbacksYTfQ1xX = undefined;
		const _returnValuexYr7iK = await breadthFirstSearch(_graphntuY47o, _startVertexdUDNZgc, _originalCallbacksYTfQ1xX)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueSshaMli = null;
		const _graphybTJihm = new GraphVertex(_valueSshaMli)
		const _returnValuelZHRpxx = await _graphybTJihm.getNeighbors()
		const _returnValueSe1EQV = await _graphybTJihm.getEdges()
		const _edgeIa9KVhX = true;
		const _returnValuebkiwus5 = await _graphybTJihm.addEdge(_edgeIa9KVhX)
		const _arrayValueZ1M9fZ = 7.3849618617089945;
		const _startVertexbVxCr3i = [_arrayValueZ1M9fZ]
		const _returnValuefp7yHHi = true;
		const _originalCallbacksLNYcCPy = () => { return _returnValuefp7yHHi };
		const _returnValueXT0C70e = await breadthFirstSearch(_graphybTJihm, _startVertexbVxCr3i, _originalCallbacksLNYcCPy)
	});
})