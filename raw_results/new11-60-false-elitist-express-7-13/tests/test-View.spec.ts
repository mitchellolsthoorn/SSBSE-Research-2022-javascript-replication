export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameIcL6KQj = -6.1593155733887;
		const _optionsV5anWN = "aND6YgaiFqAU5RrH3MZWG1nD9w";
		const _ViewK8cjS7 = new View(_nameIcL6KQj, _optionsV5anWN)
		const _nameWhoVDCQ = undefined;
		const _returnValueZvnwyKy = await _ViewK8cjS7.lookup(_nameWhoVDCQ)
	});

	it('test for View', async () => {
		const _nameYkd2B4d = "qQciuy9Qn9CKBek94MRJOb6yUwUlU9wLhqDLLTcRs9p7GFGACzGVctr3Bo";
		const _optionsGCuHHkM = "dvwdtpbkCkiMxKzUH9IzrT7OP6nrktqWigrbghKsAH7O7JOE1TFHG64qTryvxejy5CMaRwCK";
		const _Viewy4wNbZT = new View(_nameYkd2B4d, _optionsGCuHHkM)
		const _arrayValuemgpr5mW = undefined;
		const _nameI0p7Jpj = [_arrayValuemgpr5mW]
		const _returnValueU7zIMsr = await _Viewy4wNbZT.lookup(_nameI0p7Jpj)
		const _returnValueLWfsG8j = 7.897830047018076;
		const _nameFmiJbpV = () => { return _returnValueLWfsG8j };
		const _returnValueCe3T3Wa = await _Viewy4wNbZT.lookup(_nameFmiJbpV)
		const _arrayValue5XO82D = {
		
	}
		const _arrayValueBVAm1jV = [_arrayValue5XO82D]
		const _arrayValueN67S0jJ = "84tmcUyyGFaBpNjvBb8ITQNA3WFJcPHOz0yRo0QF0";
		const _dirIu13PXY = [_arrayValueBVAm1jV, _arrayValueN67S0jJ]
		const _filejFwrliC = {
		
	}
		const _returnValueY8dPH4 = await _Viewy4wNbZT.resolve(_dirIu13PXY, _filejFwrliC)
	});
})