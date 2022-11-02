export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValue9bIzVF = null;
		const _arrayValueHNfrcx = 9.659766309471859;
		const _isDirectedipOn0Vh = [_arrayValue9bIzVF, _arrayValueHNfrcx]
		const _returnValuerDjWmoQ = "eRJrEXFxsEDoelVN9lrVmSSGixVW0NqRCXGw9nLyyu740fLXxE";
		const _getAllEdgesjz2U9Dd = () => { return _returnValuerDjWmoQ };
		const _returnValuerdSqZfF = {
		
	}
		const _getAllVerticesQr8E0jf = () => { return _returnValuerdSqZfF };
		const _graphieoewVY = {
			"isDirected": _isDirectedipOn0Vh,
		"getAllEdges": _getAllEdgesjz2U9Dd,
		"getAllVertices": _getAllVerticesQr8E0jf
	}
		const _returnValueAjV83B4 = await kruskal(_graphieoewVY)
	});

	it('test for kruskal', async () => {
		const _isDirectedCyNwm4K = undefined;
		const _returnValuev0hivIp = "VLbHgkclhPpo6VKtNr5lrLgcCnnw9E4kEu3Q7tiATtC7wKQvy2T";
		const _getAllEdgessn1j0SX = () => { return _returnValuev0hivIp };
		const _returnValueGGaBPf7 = undefined;
		const _getAllVerticesBrfPae1 = () => { return _returnValueGGaBPf7 };
		const _graphGhFHQu3 = {
			"isDirected": _isDirectedCyNwm4K,
		"getAllEdges": _getAllEdgessn1j0SX,
		"getAllVertices": _getAllVerticesBrfPae1
	}
		const _returnValueE3jK5n7 = await kruskal(_graphGhFHQu3)
	});
})