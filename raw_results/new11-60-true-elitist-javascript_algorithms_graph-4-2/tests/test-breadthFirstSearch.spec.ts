export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuesm0dCBC = true;
		const _getNeighborsoxWLJSV = () => { return _returnValuesm0dCBC };
		const _graphNbkABt = {
			"getNeighbors": _getNeighborsoxWLJSV
	}
		const _startVertexBGOjjK = null;
		const _arrayValueAmVPJb0 = 1.4984829231188552;
		const _arrayValueQFtGwt = "mTSooYwMpofsh7BzG8lhgQmYufFUuXvUdxiqEfY51hi5tL2h1Db";
		const _originalCallbacks3zCiWs = [_arrayValueAmVPJb0, _arrayValueQFtGwt]
		const _returnValueTbHVWlK = await breadthFirstSearch(_graphNbkABt, _startVertexBGOjjK, _originalCallbacks3zCiWs)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueaLIWtts = null;
		const _arrayValuenI5tJUJ = () => { return _returnValueaLIWtts };
		const _arrayValueADBYAgS = null;
		const _arrayValueFWOM3eX = undefined;
		const _returnValueFkeE7WJ = [_arrayValuenI5tJUJ, _arrayValueADBYAgS, _arrayValueFWOM3eX]
		const _getNeighborsdhCRw7I = () => { return _returnValueFkeE7WJ };
		const _graphzXGgOzZ = {
			"getNeighbors": _getNeighborsdhCRw7I
	}
		const _startVertexiVSkjEc = "DfBj4tHEVyk1oNm92zMsGitIYF8vFWZQouRyNcFPcqR";
		const _originalCallbacksqmNYX6R = undefined;
		const _returnValueonswosz = await breadthFirstSearch(_graphzXGgOzZ, _startVertexiVSkjEc, _originalCallbacksqmNYX6R)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueMHR7IO = true;
		const _graphzoue8z = new GraphVertex(_valueMHR7IO)
		const _returnValuemyzkKoz = await _graphzoue8z.getKey()
		const _returnValueXtlAm5b = await _graphzoue8z.getKey()
		const _returnValueAPcqWmg = await _graphzoue8z.deleteAllEdges()
		const _vertexxMlsVv1 = null;
		const _returnValuejnLXxVm = await _graphzoue8z.findEdge(_vertexxMlsVv1)
		const _startVertexLvEyYFS = -4.381816423589258;
		const _originalCallbacksIvqzdzn = undefined;
		const _returnValuedPTzfj4 = await breadthFirstSearch(_graphzoue8z, _startVertexLvEyYFS, _originalCallbacksIvqzdzn)
	});
})