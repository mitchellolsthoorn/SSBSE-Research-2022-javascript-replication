export {}
const {suggestSimilar} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/suggestSimilar.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('suggestSimilar', () => {
	it('test for suggestSimilar', async () => {
		const _returnValuehKJw9Aw = null;
		const _startsWithszeL6UW = () => { return _returnValuehKJw9Aw };
		const _sliceQDAPb63 = "e8nVXvS4rK1wmAgWi5uwd98OVKeFThgRWQHR1DimAmzTuhcCCav07cMQ1yjCQwNmqxOf4YRNzO";
		const _lengthWYIXQg8 = undefined;
		const _worduiq4oM = {
			"startsWith": _startsWithszeL6UW,
		"slice": _sliceQDAPb63,
		"length": _lengthWYIXQg8
	}
		const _lengthjFEquQb = -0.7645805017036054;
		const _returnValuelVijRI9 = "pnm5zMqGA0fhebiaYX74TfdQQW2CVgA8X3r9qPKzA7RDo7XqFly5IpnbK6nN6TLBSNQWos9BVIFgyjhZrMATPOlR6o9w";
		const _mapNiS9VYc = () => { return _returnValuelVijRI9 };
		const _returnValueFiTMWEL = []
		const _forEach0CCQu8 = () => { return _returnValueFiTMWEL };
		const _candidatesqhxJGUD = {
			"length": _lengthjFEquQb,
		"map": _mapNiS9VYc,
		"forEach": _forEach0CCQu8
	}
		const _returnValuen7fKPQs = await suggestSimilar(_worduiq4oM, _candidatesqhxJGUD)
	});

	it('test for suggestSimilar', async () => {
		const _arrayValueXvRpJFf = "XKSwSHIiFNW8Lapgh7ARMRRIGCoKv5U38zDeGVOV8zRdoSe6";
		const _arrayValueU2M4HW9 = {
		
	}
		const _wordOXu15O = [_arrayValueXvRpJFf, _arrayValueU2M4HW9]
		const _candidatesEhXlgAM = undefined;
		const _returnValueqZ6yCyv = await suggestSimilar(_wordOXu15O, _candidatesEhXlgAM)
	});

	it('test for suggestSimilar', async () => {
		const _wordhL2eX0O = "uiJpC1UG448GIRr5lunTS1eYop8inMx13wk3zI4453gGhzd145JlHOJQPXUPe";
		const _candidatesoZkJLF = "o7M8pLpb";
		const _returnValueJhZ5uwG = await suggestSimilar(_wordhL2eX0O, _candidatesoZkJLF)
	});

	it('test for suggestSimilar', async () => {
		const _wordAKUHQm = "S2ljptVSamxrSwnoDlJverSTfP6LX8A7URZ3wLXNAMaB1uhp";
		const _arrayValuePEHEzWL = false;
		const _candidatesLCP9bTt = [_arrayValuePEHEzWL]
		const _returnValuekDQ9fQ3 = await suggestSimilar(_wordAKUHQm, _candidatesLCP9bTt)
	});

	it('test for suggestSimilar', async () => {
		const _wordQ99f46I = "PkX61YSaLWihM";
		const _arrayValuehf5giJG = "y1LbexN";
		const _arrayValueEuGydAQ = -0.20630834686373767;
		const _arrayValuesUnyz4I = true;
		const _returnValuesFSvT33 = "rJ7mUAwVkRSIzypncvqaDck7rejcccVR3VGATC4CVpw5KvhWmUyWK3NFlX";
		const _arrayValuesBGQWkL = () => { return _returnValuesFSvT33 };
		const _arrayValuenU54The = [_arrayValueEuGydAQ, _arrayValuesUnyz4I, _arrayValuesBGQWkL]
		const _arrayValueat6pIm = 6.715450351570599;
		const _candidatesGV5uGyE = [_arrayValuehf5giJG, _arrayValuenU54The, _arrayValueat6pIm]
		const _returnValueRhp7RaL = await suggestSimilar(_wordQ99f46I, _candidatesGV5uGyE)
	});
})