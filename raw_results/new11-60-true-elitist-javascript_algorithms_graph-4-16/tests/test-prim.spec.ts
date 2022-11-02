export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedF5ncQQ7 = {
		
	}
		const _arrayValueMva8kwZ = "ERTWBZ1UcHSL44RXLgpm5khEN2XIxDzbpOw5wIrWl2NKDP9cdqp94ooUgKVljPrvbzSQsFrl3ooXVIaV5kpn";
		const _arrayValuemWEuMit = 3.789140651536755;
		const _arrayValuekrdAg39 = -2.455157734769897;
		const _returnValueosiKy64 = [_arrayValueMva8kwZ, _arrayValuemWEuMit, _arrayValuekrdAg39]
		const _getAllVerticesVhbYts2 = () => { return _returnValueosiKy64 };
		const _graphAGoD7uZ = {
			"isDirected": _isDirectedF5ncQQ7,
		"getAllVertices": _getAllVerticesVhbYts2
	}
		const _returnValuekip8Cr = await prim(_graphAGoD7uZ)
	});
})