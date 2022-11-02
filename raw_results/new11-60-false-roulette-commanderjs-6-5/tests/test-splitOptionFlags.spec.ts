export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValueTWp4r3z = {
		
	}
		const _arrayValuepknsSdN = "jTdUGpFjQavp4m6pbY4GscFqcbPJjRcGXby9fGWy69WuTbN";
		const _arrayValueAoQ2N9y = "XRkwBX0tU6C15zQH2QAiLjvjcIGJx3FX548t7OJDLDjArLRejQ6bwIUPBgTWCAXDV5v3QN3iB84H9F2kguGw5h4";
		const _arrayValueEhbLLG = null;
		const _arrayValueG0jt4S7 = 1.6297716881022755;
		const _arrayValueKR6gnpH = [_arrayValueAoQ2N9y, _arrayValueEhbLLG, _arrayValueG0jt4S7]
		const _arrayValueiEhc6fk = [_arrayValueKR6gnpH]
		const _flagsKRLeU63 = [_arrayValueTWp4r3z, _arrayValuepknsSdN, _arrayValueiEhc6fk]
		const _returnValuexWxjTm3 = await splitOptionFlags(_flagsKRLeU63)
	});

	it('test for splitOptionFlags', async () => {
		const _flags2dLSiC = "lkW9htLTWfdiqzMrZsUUSVavhKUl1SNdFkE6RwqK5xji05JXOyY8eF5plqUn87ZLRhW";
		const _returnValuejNAMaSi = await splitOptionFlags(_flags2dLSiC)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuewjfnXZY = true;
		const _arrayValuedNl0SKf = 0.5807108333271707;
		const _arrayValuer8Z23wc = []
		const _arrayValueFWeItS1 = [_arrayValuedNl0SKf, _arrayValuer8Z23wc]
		const _arrayValueItdzHjn = undefined;
		const _returnValuelC27DLI = [_arrayValuewjfnXZY, _arrayValueFWeItS1, _arrayValueItdzHjn]
		const _splitb0rZJuA = () => { return _returnValuelC27DLI };
		const _flagsnCxS4P7 = {
			"split": _splitb0rZJuA
	}
		const _returnValuelp3Eq6b = await splitOptionFlags(_flagsnCxS4P7)
	});
})