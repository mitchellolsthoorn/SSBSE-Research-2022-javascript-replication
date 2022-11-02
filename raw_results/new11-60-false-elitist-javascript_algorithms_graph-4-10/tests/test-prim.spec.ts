export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueNvaqCoS = "5hnszrOv3xS8xAQ6Vn4POKNWS3xTtHxyXCAcmWJckRzFBTsbe3VFmRrfwQWIYupGcVLdFEwEEcEyBOsIybwtkeFNdMMkoEPtf";
		const _graphuQU5X6f = () => { return _returnValueNvaqCoS };
		const _returnValueaN6vF3s = await prim(_graphuQU5X6f)
	});

	it('test for prim', async () => {
		const _isDirectedv7KlFCi = "n5PLXwxEuNHdIXNo6Ml3uB5LSCw3etr9KznUjXtNGqT4uA918tTe2KIoJKfFnHI4vE3Wo";
		const _returnValueg7nudez = null;
		const _getAllVerticesza5qTML = () => { return _returnValueg7nudez };
		const _graphsu2i5gY = {
			"isDirected": _isDirectedv7KlFCi,
		"getAllVertices": _getAllVerticesza5qTML
	}
		const _returnValueiXnVBh7 = await prim(_graphsu2i5gY)
	});
})