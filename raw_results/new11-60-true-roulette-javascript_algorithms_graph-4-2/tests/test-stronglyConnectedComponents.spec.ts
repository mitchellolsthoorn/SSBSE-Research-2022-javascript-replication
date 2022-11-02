export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedbct976Q = false;
		const _graphecDcsfv = new Graph(_isDirectedbct976Q)
		const _returnValueOmsFtfp = await _graphecDcsfv.getVerticesIndices()
		const _returnValueOAtwASa = await _graphecDcsfv.getWeight()
		const _returnValueHVMP6Tj = await stronglyConnectedComponents(_graphecDcsfv)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedAgNnJ45 = false;
		const _graphJeGKfCe = new Graph(_isDirectedAgNnJ45)
		const _returnValueAczR4MA = await _graphJeGKfCe.getAllVertices()
		const _arrayValueSP3gQL = -2.0624351381326367;
		const _returnValuemorr1Sb = true;
		const _returnValuem2yslUT = () => { return _returnValuemorr1Sb };
		const _arrayValueWM7J6oU = () => { return _returnValuem2yslUT };
		const _arrayValuemmax4Vg = undefined;
		const _arrayValuea2iBb7L = true;
		const _returnValueOzn21jU = [_arrayValueSP3gQL, _arrayValueWM7J6oU, _arrayValuemmax4Vg, _arrayValuea2iBb7L]
		const _returnValued7wnjGm = () => { return _returnValueOzn21jU };
		const _getKeyr5iPD9a = () => { return _returnValued7wnjGm };
		const _startVertexgVB5FAn = {
			"getKey": _getKeyr5iPD9a
	}
		const _endVertexwenTytx = undefined;
		const _returnValuea378eqZ = await _graphJeGKfCe.findEdge(_startVertexgVB5FAn, _endVertexwenTytx)
		const _returnValueRX2Wl1 = await _graphJeGKfCe.getAllEdges()
		const _valuey7PJPSf = "ns68HG8VN2BcIMObrZ0dbAXH7rWzuG2xSK1YQWYJcGhMa7HEGxowemgnUt3amhBI1hdmYl7YIAhAs5e9zFpMsDkRjvHn";
		const _newVertexu97TdnE = new GraphVertex(_valuey7PJPSf)
		const _returnValueGQLtLn6 = await _newVertexu97TdnE.getEdges()
		const _returnValuelBljBUC = await _newVertexu97TdnE.getNeighbors()
		const _returnValuenND8335 = await _graphJeGKfCe.addVertex(_newVertexu97TdnE)
		const _returnValueRYQlEu = await _graphJeGKfCe.getVerticesIndices()
		const _returnValuewpZ7Auq = await stronglyConnectedComponents(_graphJeGKfCe)
	});
})