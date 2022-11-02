export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueXJ5tA88 = false;
		const _splitFZ5mALC = () => { return _returnValueXJ5tA88 };
		const _flagsxlfCn2R = {
			"split": _splitFZ5mALC
	}
		const _returnValueqYWWg57 = await splitOptionFlags(_flagsxlfCn2R)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueIgTf83n = {
		
	}
		const _arrayValuer3eeTfa = "SIdKi4fb6fWWYhf9BiDb5iQ6TssfVUSoIe8lLnxegIM";
		const _arrayValuewtUAL7d = 9.068572356178993;
		const _returnValueHhIf10w = [_arrayValueIgTf83n, _arrayValuer3eeTfa, _arrayValuewtUAL7d]
		const _splitZ0BUEFL = () => { return _returnValueHhIf10w };
		const _flagsYSVG4qM = {
			"split": _splitZ0BUEFL
	}
		const _returnValueHjz3lLB = await splitOptionFlags(_flagsYSVG4qM)
	});
})