export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueU9mZ5fJ = -6.824337388399682;
		const _graphSKw0sj = () => { return _returnValueU9mZ5fJ };
		const _startVertexFOoraa7 = true;
		const _originalCallbacksVtu3tue = undefined;
		const _returnValueY0CEaJ = await breadthFirstSearch(_graphSKw0sj, _startVertexFOoraa7, _originalCallbacksVtu3tue)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuedjTLXVt = -0.6088638852116066;
		const _graphK1lKwj = new GraphVertex(_valuedjTLXVt)
		const _returnValueOpi1qvT = await _graphK1lKwj.getNeighbors()
		const _startVertexed8v9Tc = {
		
	}
		const _originalCallbacksfTruf3s = undefined;
		const _returnValueMp7AYS5 = await breadthFirstSearch(_graphK1lKwj, _startVertexed8v9Tc, _originalCallbacksfTruf3s)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueR0VNeeQ = null;
		const _arrayValueP4uObLR = "2QIEvhlyPHmuwjQtkW4cm6OOx14Cwp4LvZpyawXSnaSfKuyWyrUNhm59PJOnqEMf5NjPnQe3RG";
		const _arrayValueQmehKaq = "smUqhBMbCFu1ViWPRXZ6Ndwz4oCB6MPaprnmV3eILHm2kg0HJAzUI1hvJOESBIy8OLoi";
		const _returnValueEhjE59 = [_arrayValueR0VNeeQ, _arrayValueP4uObLR, _arrayValueQmehKaq]
		const _getNeighborswOOvqh5 = () => { return _returnValueEhjE59 };
		const _graphl9W8PCt = {
			"getNeighbors": _getNeighborswOOvqh5
	}
		const _startVertexebIlYpm = 2.4487587565783304;
		const _originalCallbacksVchjnEW = undefined;
		const _returnValueev1DPuX = await breadthFirstSearch(_graphl9W8PCt, _startVertexebIlYpm, _originalCallbacksVchjnEW)
	});
})