export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValueTACBXP = -6.951761103278786;
		const _arrayValuewrs4X9d = "0wKBp5DwxpRtJBZVjQ2Lqzf4ZnhIa8ddeeKsKB3b3F6eUMfCvFCYxbBD";
		const _arrayValueoZEoHpf = true;
		const _arrayValueQWEaidQ = false;
		const _arrayValueERkTnYx = false;
		const _arrayValueyfjZ7kO = [_arrayValueoZEoHpf, _arrayValueQWEaidQ, _arrayValueERkTnYx]
		const _arrayValueKW4vZwP = []
		const _graphWb2jtzp = [_arrayValueTACBXP, _arrayValuewrs4X9d, _arrayValueyfjZ7kO, _arrayValueKW4vZwP]
		const _returnValueLC9L1NU = null;
		const _returnValueNvOfG0k = () => { return _returnValueLC9L1NU };
		const _getKeyCdnTJD9 = () => { return _returnValueNvOfG0k };
		const _startVertexx4KzU4 = {
			"getKey": _getKeyCdnTJD9
	}
		const _returnValueVDsbWTw = await bellmanFord(_graphWb2jtzp, _startVertexx4KzU4)
	});

	it('test for bellmanFord', async () => {
		const _returnValueVxc1tyX = []
		const _getAllVerticesuvn7nJY = () => { return _returnValueVxc1tyX };
		const _returnValueXe69QfQ = undefined;
		const _getVertexByKeytdmHePF = () => { return _returnValueXe69QfQ };
		const _returnValuegeiEbXm = 2.383837663860035;
		const _getNeighborssf0VxYt = () => { return _returnValuegeiEbXm };
		const _returnValuepShkfOL = "Q7EoBq5OGnqLgafOwiDmE2stVp9JorKUs7tMzwuxuIzrBFG4rd4APT4UJTH2n3JvaHfJIjRY4jtRXegIdqA3O5NgguM";
		const _findEdgeWtaF2rh = () => { return _returnValuepShkfOL };
		const _graphJ93jafV = {
			"getAllVertices": _getAllVerticesuvn7nJY,
		"getVertexByKey": _getVertexByKeytdmHePF,
		"getNeighbors": _getNeighborssf0VxYt,
		"findEdge": _findEdgeWtaF2rh
	}
		const _arrayValuespmVJys = null;
		const _arrayValueEphltMg = {
		
	}
		const _returnValue0izZKb = [_arrayValuespmVJys, _arrayValueEphltMg]
		const _getKeyTEnhCMn = () => { return _returnValue0izZKb };
		const _startVertexq2ts4j = {
			"getKey": _getKeyTEnhCMn
	}
		const _returnValuegN0IOlI = await bellmanFord(_graphJ93jafV, _startVertexq2ts4j)
	});
})