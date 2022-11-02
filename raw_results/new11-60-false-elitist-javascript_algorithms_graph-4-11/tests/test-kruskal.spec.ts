export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedNdJDuo8 = undefined;
		const _arrayValuehDTHNko = true;
		const _arrayValueoCwYhn = undefined;
		const _arrayValueba2ilcz = [_arrayValueoCwYhn]
		const _arrayValueDJdPRTK = [_arrayValuehDTHNko, _arrayValueba2ilcz]
		const _returnValueVsZ2Vrc = 5.114195453007163;
		const _arrayValueI0WNbot = () => { return _returnValueVsZ2Vrc };
		const _returnValueVP7IJrh = [_arrayValueDJdPRTK, _arrayValueI0WNbot]
		const _getAllEdgessNKk5uq = () => { return _returnValueVP7IJrh };
		const _arrayValue7piCwG = true;
		const _arrayValue3SgWZI = null;
		const _arrayValueWQ8HXUB = "EFQXgEsL";
		const _returnValueuTrSRMI = [_arrayValue7piCwG, _arrayValue3SgWZI, _arrayValueWQ8HXUB]
		const _getAllVerticesJNUApwd = () => { return _returnValueuTrSRMI };
		const _graphwtxJiq2 = {
			"isDirected": _isDirectedNdJDuo8,
		"getAllEdges": _getAllEdgessNKk5uq,
		"getAllVertices": _getAllVerticesJNUApwd
	}
		const _returnValuea7y4HvR = await kruskal(_graphwtxJiq2)
	});

	it('test for kruskal', async () => {
		const _isDirectedzPpfkGu = "G66o64bUiB1Qz8chljezhbB66TItf42TQdMfT0qPFCpS";
		const _returnValueEnfEREP = {
		
	}
		const _getAllEdgesGBgu1dd = () => { return _returnValueEnfEREP };
		const _returnValuebyG1GU = false;
		const _getAllVerticesy3WS5mG = () => { return _returnValuebyG1GU };
		const _graphyC7Zww = {
			"isDirected": _isDirectedzPpfkGu,
		"getAllEdges": _getAllEdgesGBgu1dd,
		"getAllVertices": _getAllVerticesy3WS5mG
	}
		const _returnValueaSLF9Nf = await kruskal(_graphyC7Zww)
	});
})