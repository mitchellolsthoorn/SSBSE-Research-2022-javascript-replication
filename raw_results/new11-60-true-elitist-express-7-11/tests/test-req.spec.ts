export {}
const req = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/request.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('req', () => {
	it('test for req', async () => {
		const _reqXSqzCe0 = req
		const _returnValueubpMRco = await _reqXSqzCe0.acceptsCharsets()
		const _returnValueXF2RU8n = await _reqXSqzCe0.acceptsEncodings()
		const _returnValuesgC5K8a = await _reqXSqzCe0.accepts()
	});

	it('test for req', async () => {
		const _reqfEmpdtd = req
		const _returnValuetFBsRRp = await _reqfEmpdtd.acceptsEncodings()
		const _sizetFl3i7V = "BVnvnBQH47w36RaNYa";
		const _optionsl0pO4pb = undefined;
		const _returnValueH2y4dEr = await _reqfEmpdtd.range(_sizetFl3i7V, _optionsl0pO4pb)
		const _arrayValuesczjkvh = null;
		const _returnValuesIC2byr = [_arrayValuesczjkvh]
		const _returnValueWpEiTRK = () => { return _returnValuesIC2byr };
		const _toLowerCaseqHl6wyn = () => { return _returnValueWpEiTRK };
		const _nametF7TC2 = {
			"toLowerCase": _toLowerCaseqHl6wyn
	}
		const _returnValueOZNAlHZ = await _reqfEmpdtd.header(_nametF7TC2)
	});

	it('test for req', async () => {
		const _reqZ8q2ZE0 = req
		const _returnValueb0vEuu8 = await _reqZ8q2ZE0.acceptsEncodings()
		const _name1awM1G = "7dPqi24je7e1iqX2jNkbvfhP8F2paizctkQjbdmgu2PpFU2fP8l9W9sdHG";
		const _defaultValuegEz2NWT = null;
		const _returnValueA5ftAB = await _reqZ8q2ZE0.param(_name1awM1G, _defaultValuegEz2NWT)
	});

	it('test for req', async () => {
		const _reqsf6MUPS = req
		const _typesQClRfpf = {
		
	}
		const _returnValueBWJS2A = await _reqsf6MUPS.is(_typesQClRfpf)
		const _returnValuekGuACDv = await _reqsf6MUPS.acceptsCharsets()
	});

	it('test for req', async () => {
		const _reqOfJ1L6 = req
		const _returnValueI0HsqZF = await _reqOfJ1L6.acceptsCharsets()
		const _arrayValueSgNuTF = -4.8892702360722415;
		const _arrayValueCNgDxwO = true;
		const _typesxYmQluf = [_arrayValueSgNuTF, _arrayValueCNgDxwO]
		const _returnValueYJBSz90 = await _reqOfJ1L6.is(_typesxYmQluf)
		const _returnValuehsMt3la = await _reqOfJ1L6.accepts()
		const _returnValueB9EsMhz = await _reqOfJ1L6.acceptsCharsets()
		const _returnValuefEFHUoe = await _reqOfJ1L6.acceptsEncodings()
	});
})