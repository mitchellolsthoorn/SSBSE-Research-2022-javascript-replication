export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _nameMitsYit = -5.886324643628463;
		const _optionsEqf0kJ9 = false;
		const _ViewyRKXksj = new View(_nameMitsYit, _optionsEqf0kJ9)
		const _nameoOfnFxF = null;
		const _returnValueZcGjx0N = await _ViewyRKXksj.lookup(_nameoOfnFxF)
		const _dirNODnUga = false;
		const _filehhzcaYO = undefined;
		const _returnValueFF2gjO = await _ViewyRKXksj.resolve(_dirNODnUga, _filehhzcaYO)
		const _nameClowYNY = false;
		const _returnValueeElS6o9 = await _ViewyRKXksj.lookup(_nameClowYNY)
	});

	it('test for View', async () => {
		const _nameUJGKR7v = "zv4gsi";
		const _optionsz7Af8r2 = null;
		const _View8p9yNr = new View(_nameUJGKR7v, _optionsz7Af8r2)
		const _optionsuo3NpF3 = null;
		const _callbackv5orNnY = null;
		const _returnValueBdFRGY = await _View8p9yNr.render(_optionsuo3NpF3, _callbackv5orNnY)
		const _optionsU2nFbwE = undefined;
		const _callbackDtuxo65 = "HBNgIXWNnmVrb9Wzgv81Yntg2rizettpnKf86pEcUEcSJqmRjAq6pdDLHRVWxh95FdDBTt9qVadAoiQyQu";
		const _returnValueHkqKP2 = await _View8p9yNr.render(_optionsU2nFbwE, _callbackDtuxo65)
		const _returnValueplDWAAj = "8UmzcHnrvFUo7dauYIW2R1eWv6bUxor9vEQ63CyTEtlJH7Z4T4KO7f";
		const _optionskKU2EWv = () => { return _returnValueplDWAAj };
		const _callbackSsKTPKE = undefined;
		const _returnValueiHOf1i9 = await _View8p9yNr.render(_optionskKU2EWv, _callbackSsKTPKE)
		const _nameUBMq0K8 = "rAWRzJMFJV";
		const _returnValueAUd87y9 = await _View8p9yNr.lookup(_nameUBMq0K8)
	});
})