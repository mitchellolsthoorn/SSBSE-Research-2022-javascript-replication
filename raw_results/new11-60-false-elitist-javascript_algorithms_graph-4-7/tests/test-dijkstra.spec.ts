export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueqOqoyq = null;
		const _getAllVerticesrmAtMt6 = () => { return _returnValueqOqoyq };
		const _arrayValuetWl8NA = "ImO7SPB7nPlzt7KzZuvX4UKGgptz9HSmnciO291FHeCWh39ytrpgk6Rd";
		const _returnValuenAjiN94 = [_arrayValuetWl8NA]
		const _findEdgetZXBwaA = () => { return _returnValuenAjiN94 };
		const _graph5onPx6 = {
			"getAllVertices": _getAllVerticesrmAtMt6,
		"findEdge": _findEdgetZXBwaA
	}
		const _returnValueYZagxZp = null;
		const _getKeyra2TiHn = () => { return _returnValueYZagxZp };
		const _startVertexemfM8zc = {
			"getKey": _getKeyra2TiHn
	}
		const _returnValueqYTmrZn = await dijkstra(_graph5onPx6, _startVertexemfM8zc)
	});

	it('test for dijkstra', async () => {
		const _returnValuetAzLqAD = []
		const _getAllVerticesLAvWG8 = () => { return _returnValuetAzLqAD };
		const _arrayValuejZMSIDJ = {
		
	}
		const _arrayValuemvHzNGh = -0.5374899270498528;
		const _arrayValueNzj2NtT = true;
		const _returnValueDOrzHiz = [_arrayValuejZMSIDJ, _arrayValuemvHzNGh, _arrayValueNzj2NtT]
		const _findEdgeSZf5Mwk = () => { return _returnValueDOrzHiz };
		const _graphFJzFtbG = {
			"getAllVertices": _getAllVerticesLAvWG8,
		"findEdge": _findEdgeSZf5Mwk
	}
		const _returnValuew1XNh8 = -5.306652114570084;
		const _getKeyLyNSsza = () => { return _returnValuew1XNh8 };
		const _startVertexxwHNWQ = {
			"getKey": _getKeyLyNSsza
	}
		const _returnValuefSH9coi = await dijkstra(_graphFJzFtbG, _startVertexxwHNWQ)
	});
})