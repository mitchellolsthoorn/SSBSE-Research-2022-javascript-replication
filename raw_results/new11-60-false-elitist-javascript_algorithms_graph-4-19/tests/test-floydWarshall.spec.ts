export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _getAllVerticesHBPSW5 = undefined;
		const _returnValueGBXxTII = -8.803774175318512;
		const _findEdgeplt9KsG = () => { return _returnValueGBXxTII };
		const _graphRXYxrLM = {
			"getAllVertices": _getAllVerticesHBPSW5,
		"findEdge": _findEdgeplt9KsG
	}
		const _returnValuevVXNXYN = await floydWarshall(_graphRXYxrLM)
	});

	it('test for floydWarshall', async () => {
		const _returnValuedftjtaJ = {
		
	}
		const _getAllVerticess6tGWk = () => { return _returnValuedftjtaJ };
		const _returnValue81mcfP = false;
		const _findEdgenJCqFb8 = () => { return _returnValue81mcfP };
		const _graphhbhydw9 = {
			"getAllVertices": _getAllVerticess6tGWk,
		"findEdge": _findEdgenJCqFb8
	}
		const _returnValueoNA6Q8 = await floydWarshall(_graphhbhydw9)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuereGCcK8 = "3abaHo0IsmzjUPpgEskMfMkrJCm5w2QSMoAFRDwRahItbGfnXIgcky";
		const _arrayValuezbPmnYc = undefined;
		const _arrayValueYbUOFOE = false;
		const _arrayValuekq2bOlL = null;
		const _arrayValuevTPZUpF = "nP4IMnDhAvb98CcIT26aG6huTmqJoFNhjx9F1P18uaP8QrhO69zN2qH5lwwYRKiGKhrrhuIuR4";
		const _arrayValuepUDyAkP = [_arrayValueYbUOFOE, _arrayValuekq2bOlL, _arrayValuevTPZUpF]
		const _arrayValueejI5tQ = true;
		const _arrayValues1aj4O = -9.1479830209472;
		const _arrayValueKJK8P60 = [_arrayValueejI5tQ, _arrayValues1aj4O]
		const _arrayValueEOdk9lk = [_arrayValueKJK8P60]
		const _returnValue9CMFIv = [_arrayValuereGCcK8, _arrayValuezbPmnYc, _arrayValuepUDyAkP, _arrayValueEOdk9lk]
		const _getAllVerticesPHXyNEM = () => { return _returnValue9CMFIv };
		const _returnValueZAxuqI = undefined;
		const _returnValueE1tjpqQ = () => { return _returnValueZAxuqI };
		const _findEdge382p1S = () => { return _returnValueE1tjpqQ };
		const _graphsltoNrd = {
			"getAllVertices": _getAllVerticesPHXyNEM,
		"findEdge": _findEdge382p1S
	}
		const _returnValuegdcrOY5 = await floydWarshall(_graphsltoNrd)
	});
})