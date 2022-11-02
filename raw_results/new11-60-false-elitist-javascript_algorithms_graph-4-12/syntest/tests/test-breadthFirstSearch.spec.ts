export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueZqTCPcP = {
		
	}
		const _getNeighborsIHYs26a = () => { return _returnValueZqTCPcP };
		const _graphsm9CMoe = {
			"getNeighbors": _getNeighborsIHYs26a
	}
		const _startVertexDEAotdX = false;
		const _arrayValueettMWd = -0.7240544497453971;
		const _arrayValuevOJoZLu = {
		
	}
		const _arrayValuePvk0n4F = {
		
	}
		const _originalCallbacksl8jwinS = [_arrayValueettMWd, _arrayValuevOJoZLu, _arrayValuePvk0n4F]
		const _returnValuek0H5KM3 = await breadthFirstSearch(_graphsm9CMoe, _startVertexDEAotdX, _originalCallbacksl8jwinS)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuetUEgS5t = true;
		const _arrayValueT3euXdA = true;
		const _arrayValueZAU64y1 = {
		
	}
		const _returnValueWAOtUVZ = [_arrayValuetUEgS5t, _arrayValueT3euXdA, _arrayValueZAU64y1]
		const _getNeighborsfgkjUJO = () => { return _returnValueWAOtUVZ };
		const _graphpuCjxdW = {
			"getNeighbors": _getNeighborsfgkjUJO
	}
		const _arrayValueew1mtKw = -0.1381774896491219;
		const _arrayValueT0AvM8j = "O9cCC";
		const _startVertexnjB4UE8 = [_arrayValueew1mtKw, _arrayValueT0AvM8j]
		const _originalCallbackswzC1klA = []
		const _returnValueykWe9oe = await breadthFirstSearch(_graphpuCjxdW, _startVertexnjB4UE8, _originalCallbackswzC1klA)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValues5na8yp = []
		const _getNeighborsCk81esH = () => { return _returnValues5na8yp };
		const _graphO5n2XNK = {
			"getNeighbors": _getNeighborsCk81esH
	}
		const _startVertexdyokG9D = undefined;
		const _originalCallbacksQWWZnEO = {
		
	}
		const _returnValueiyMhUfN = await breadthFirstSearch(_graphO5n2XNK, _startVertexdyokG9D, _originalCallbacksQWWZnEO)
	});
})