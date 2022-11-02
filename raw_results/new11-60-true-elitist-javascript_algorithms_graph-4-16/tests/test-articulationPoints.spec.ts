export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuecIzIldq = "E1nN4SVK3NrljQzh9M6UErRE8DoYpf9kkFGs1wLOolHojYj2UJ7GivI1mofiyUiKFRsmy8eSYjdTYn7fY";
		const _getAllVerticesfK3xr8j = () => { return _returnValuecIzIldq };
		const _graphTKb7UqR = {
			"getAllVertices": _getAllVerticesfK3xr8j
	}
		const _returnValuemVGH5PK = await articulationPoints(_graphTKb7UqR)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedunJBklB = true;
		const _graphQOqHz3h = new Graph(_isDirectedunJBklB)
		const _returnValuea8fIIx8 = await _graphQOqHz3h.getAllVertices()
		const _returnValueHrfnEy2 = 9.982735664362263;
		const _getKeymIeULp = () => { return _returnValueHrfnEy2 };
		const _newVertex7K8aFZ = {
			"getKey": _getKeymIeULp
	}
		const _returnValueWmHZbwo = await _graphQOqHz3h.addVertex(_newVertex7K8aFZ)
		const _returnValueWRuAXJe = await _graphQOqHz3h.getAllVertices()
		const _returnValueJXOTOen = await articulationPoints(_graphQOqHz3h)
	});
})