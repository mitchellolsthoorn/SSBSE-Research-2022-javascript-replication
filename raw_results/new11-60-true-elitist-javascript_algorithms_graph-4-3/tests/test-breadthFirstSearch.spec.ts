export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuedkaWhf4 = "O2KJJa9IfxGzEcyHydwCxIBlJMXAdpdNVd9izJmJKA5q2bx2ziTModqJayUEcoQxDHE2cIGKWs5pAQ4hfyDkODBIMQom4mqkWo";
		const _getNeighborsTzOweq9 = () => { return _returnValuedkaWhf4 };
		const _graphIMFiv5h = {
			"getNeighbors": _getNeighborsTzOweq9
	}
		const _startVertexfG1eqsC = undefined;
		const _originalCallbacksKhuqYdm = 1.9382465068735826;
		const _returnValueAKrJ6Hq = await breadthFirstSearch(_graphIMFiv5h, _startVertexfG1eqsC, _originalCallbacksKhuqYdm)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueSUPwwZ2 = undefined;
		const _getNeighborsltuZ1XU = () => { return _returnValueSUPwwZ2 };
		const _graphnSMwjrr = {
			"getNeighbors": _getNeighborsltuZ1XU
	}
		const _startVertexYbvUBbu = false;
		const _originalCallbacksPj6UMDE = undefined;
		const _returnValueBtWQnXX = await breadthFirstSearch(_graphnSMwjrr, _startVertexYbvUBbu, _originalCallbacksPj6UMDE)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueQ39DLPW = null;
		const _arrayValueJ4Angzf = null;
		const _arrayValueyzvHVkr = undefined;
		const _arrayValuejcySs7i = null;
		const _arrayValuex8hjqmu = [_arrayValueyzvHVkr, _arrayValuejcySs7i]
		const _returnValueSWm5mDo = [_arrayValueQ39DLPW, _arrayValueJ4Angzf, _arrayValuex8hjqmu]
		const _getNeighborscWTSxI8 = () => { return _returnValueSWm5mDo };
		const _graphokvDY0M = {
			"getNeighbors": _getNeighborscWTSxI8
	}
		const _startVertexhYxtfJw = undefined;
		const _originalCallbacksJKfx7fd = []
		const _returnValueWeJXvl = await breadthFirstSearch(_graphokvDY0M, _startVertexhYxtfJw, _originalCallbacksJKfx7fd)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueClpMDSd = -6.19876704197233;
		const _returnValueyZfOCWp = {
		
	}
		const _arrayValueqeZWXG = () => { return _returnValueyZfOCWp };
		const _returnValuehQAj0lb = false;
		const _returnValueh2MeCvZ = () => { return _returnValuehQAj0lb };
		const _arrayValuebv0YQC6 = () => { return _returnValueh2MeCvZ };
		const _valuefeQ4FZg = [_arrayValueClpMDSd, _arrayValueqeZWXG, _arrayValuebv0YQC6]
		const _graphz5Iasxu = new GraphVertex(_valuefeQ4FZg)
		const _requiredEdgeDPnRLZa = {
		
	}
		const _returnValuebzL0ioN = await _graphz5Iasxu.hasEdge(_requiredEdgeDPnRLZa)
		const _vertexh0KAwz = null;
		const _returnValuevub2ZFP = await _graphz5Iasxu.findEdge(_vertexh0KAwz)
		const _returnValueG9GzMX0 = await _graphz5Iasxu.getKey()
		const _edgeg2E1iE7 = 1.378838768033738;
		const _returnValueHXcK42 = await _graphz5Iasxu.deleteEdge(_edgeg2E1iE7)
		const _startVertexsO41TtB = -1.1667738938552183;
		const _arrayValueIBcUKvN = {
		
	}
		const _originalCallbackssGVgGMT = [_arrayValueIBcUKvN]
		const _returnValuelxGlBpS = await breadthFirstSearch(_graphz5Iasxu, _startVertexsO41TtB, _originalCallbackssGVgGMT)
	});
})