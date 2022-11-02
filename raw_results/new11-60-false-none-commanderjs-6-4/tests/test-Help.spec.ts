export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpUdaRFi3 = new Help()
		const _cmdvDEaR1W = {
		
	}
		const _returnValueR3PzWi = await _HelpUdaRFi3.commandDescription(_cmdvDEaR1W)
		const _cmdj0MhENy = {
		
	}
		const _helperUE42TzN = null;
		const _returnValueXTDtlF5 = await _HelpUdaRFi3.longestOptionTermLength(_cmdj0MhENy, _helperUE42TzN)
		const _argumentx5Jukou = null;
		const _returnValueCQdk3Bz = await _HelpUdaRFi3.argumentTerm(_argumentx5Jukou)
		const _strVrA6Uee = "FiJy37XAUnELjSUSW7fixo46IvVXTGFoQ5XhSazlsP1";
		const _widthD5iZ96R = []
		const _arrayValueFcOq6qI = {
		
	}
		const _arrayValuedsZ9Jxk = [_arrayValueFcOq6qI]
		const _arrayValuejd2VGvM = {
		
	}
		const _arrayValuex0J62SM = undefined;
		const _arrayValuew7GfA6 = [_arrayValuedsZ9Jxk, _arrayValuejd2VGvM, _arrayValuex0J62SM]
		const _returnValueiCHAWE9 = false;
		const _arrayValueMZiSW59 = () => { return _returnValueiCHAWE9 };
		const _arrayValueAZd1BlW = undefined;
		const _arrayValuePdlPZfV = "WdVihh62Qjw7nknKJHvHDikPpe2fPjUBroNjXxxr";
		const _arrayValuemIoMb3z = [_arrayValueAZd1BlW, _arrayValuePdlPZfV]
		const _arrayValuetobaRch = "5joc08W3MAyP";
		const _arrayValueeah6MLP = [_arrayValuemIoMb3z, _arrayValuetobaRch]
		const _arrayValueTfNaGg1 = undefined;
		const _indentzyKVkoX = [_arrayValuew7GfA6, _arrayValueMZiSW59, _arrayValueeah6MLP, _arrayValueTfNaGg1]
		const _arrayValueYDAa3vA = false;
		const _minColumnWidthxG0wRax = [_arrayValueYDAa3vA]
		const _returnValuelKg0dfr = await _HelpUdaRFi3.wrap(_strVrA6Uee, _widthD5iZ96R, _indentzyKVkoX, _minColumnWidthxG0wRax)
	});

	it('test for Help', async () => {
		const _Helpcf2Mjk4 = new Help()
		const _cmdMs3ZPkl = []
		const _returnValueT8Ot0C1 = await _Helpcf2Mjk4.subcommandTerm(_cmdMs3ZPkl)
		const _argumentGDwulpz = 5.320278331214478;
		const _returnValuesKzuz00 = await _Helpcf2Mjk4.argumentDescription(_argumentGDwulpz)
	});

	it('test for Help', async () => {
		const _HelpuCVtDR = new Help()
		const _arrayValueSjJgX0Y = true;
		const _arrayValueVMOIo9V = undefined;
		const _arrayValueQmV4qRp = -2.905836396030419;
		const _cmdBo6bEAt = [_arrayValueSjJgX0Y, _arrayValueVMOIo9V, _arrayValueQmV4qRp]
		const _helperI1TGewK = true;
		const _returnValueFoN6mU = await _HelpuCVtDR.padWidth(_cmdBo6bEAt, _helperI1TGewK)
		const _arrayValueASPWXJ3 = "o2eYALHSoCxqlcrDMLdrVjtRx7Cu2qKzdUgDXphnYtiGnLK7qnFLodcpIdBCU5YVnjwKZl46veeFCi8lWtfWAjm";
		const _arrayValuemySPHE = null;
		const _cmdGY2bqUn = [_arrayValueASPWXJ3, _arrayValuemySPHE]
		const _helperncijIwh = false;
		const _returnValueuUmvYRi = await _HelpuCVtDR.longestOptionTermLength(_cmdGY2bqUn, _helperncijIwh)
	});

	it('test for Help', async () => {
		const _HelpQ9n8Hcl = new Help()
		const _cmdBhSL70G = {
		
	}
		const _helperp25UGTg = {
		
	}
		const _returnValuepSy2Hf4 = await _HelpQ9n8Hcl.longestOptionTermLength(_cmdBhSL70G, _helperp25UGTg)
		const _cmdpdFpy4S = "s2ZfRVMhDs";
		const _helperE5us3Y = {
		
	}
		const _returnValueJmiwRE5 = await _HelpQ9n8Hcl.longestOptionTermLength(_cmdpdFpy4S, _helperE5us3Y)
		const _cmdhyKpITI = undefined;
		const _returnValueR6AyXzS = await _HelpQ9n8Hcl.visibleCommands(_cmdhyKpITI)
	});

	it('test for Help', async () => {
		const _HelpB1OMu5Y = new Help()
		const _argumentS3doGI = "5W3ggVqMKhDD4N";
		const _returnValuepveQASn = await _HelpB1OMu5Y.argumentTerm(_argumentS3doGI)
		const _arrayValueHr9V43G = undefined;
		const _arrayValue2gOAGS = true;
		const _arrayValueFNtXfT8 = true;
		const _arrayValuex9dXOwG = [_arrayValueFNtXfT8]
		const _cmdET6h0xU = [_arrayValueHr9V43G, _arrayValue2gOAGS, _arrayValuex9dXOwG]
		const _returnValueYIpk5YE = await _HelpB1OMu5Y.visibleArguments(_cmdET6h0xU)
		const _cmdTw7tsY = null;
		const _helperpLNhXn5 = -7.37926550840557;
		const _returnValuelzB7vVC = await _HelpB1OMu5Y.formatHelp(_cmdTw7tsY, _helperpLNhXn5)
		const _cmdOYqmxCs = {
		
	}
		const _helperaqzBNWo = []
		const _returnValuenODFZhP = await _HelpB1OMu5Y.formatHelp(_cmdOYqmxCs, _helperaqzBNWo)
		const _cmdvTiItbj = "cZViFwsVSQiarWvoNry2n3HOtWkM64ylja1RoH4ppEB50RecGEUiKoeH9IYL3SdGolskMa73g";
		const _returnValueI3IoI99 = await _HelpB1OMu5Y.visibleOptions(_cmdvTiItbj)
	});

	it('test for Help', async () => {
		const _HelpDrzwHku = new Help()
		const _cmd56XUev = null;
		const _returnValueVVtY1JA = await _HelpDrzwHku.commandUsage(_cmd56XUev)
		const _cmdZ0m2COZ = undefined;
		const _returnValueFWEiO96 = await _HelpDrzwHku.visibleArguments(_cmdZ0m2COZ)
		const _argumentsbS5rKK = {
		
	}
		const _returnValuetJAofdn = await _HelpDrzwHku.argumentDescription(_argumentsbS5rKK)
	});

	it('test for Help', async () => {
		const _HelpwxQmREz = new Help()
		const _cmdJ5xXLWb = "iWfClk7DxoX6W8OTkdyr8EtFttyDdsewT3RY6MwGfi9SaTplf2I5mAC9dOyhiwn5c6SDe3iVjdbz167p9RcpOhJ0Or";
		const _returnValueri9Jpon = await _HelpwxQmREz.visibleArguments(_cmdJ5xXLWb)
		const _returnValueRZWtOot = {
		
	}
		const _cmdqK1QYBO = () => { return _returnValueRZWtOot };
		const _helperFDVAuZN = false;
		const _returnValuecAW5Qce = await _HelpwxQmREz.formatHelp(_cmdqK1QYBO, _helperFDVAuZN)
		const _cmdGSeCkr2 = 1.4702386827244585;
		const _helpereh2dfQz = true;
		const _returnValuejwzBQWw = await _HelpwxQmREz.longestSubcommandTermLength(_cmdGSeCkr2, _helpereh2dfQz)
		const _cmdagIAxa = false;
		const _helperbQqe41J = false;
		const _returnValueSYcsA7N = await _HelpwxQmREz.longestSubcommandTermLength(_cmdagIAxa, _helperbQqe41J)
	});

	it('test for Help', async () => {
		const _Helpvc3WzEo = new Help()
		const _cmdSRzxjjX = "Gxa4ekTTwNYICuFjuz5QKjm9mY8pqqND9sYzMrzBa8n43xasZparorVf3Hcf6x0";
		const _helperh9k1ZsI = {
		
	}
		const _returnValuet5VVVdp = await _Helpvc3WzEo.formatHelp(_cmdSRzxjjX, _helperh9k1ZsI)
		const _cmdNxLeNMK = null;
		const _helperezqoKwO = []
		const _returnValueFeFAs0l = await _Helpvc3WzEo.longestSubcommandTermLength(_cmdNxLeNMK, _helperezqoKwO)
		const _cmda8UaTnl = true;
		const _helperzGgjcKI = undefined;
		const _returnValuenSDtjSt = await _Helpvc3WzEo.padWidth(_cmda8UaTnl, _helperzGgjcKI)
		const _cmdsoRqXc = 6.127788881235386;
		const _returnValueylwz8Bb = await _Helpvc3WzEo.commandUsage(_cmdsoRqXc)
		const _cmdpbo1RAS = "FBtUXo";
		const _returnValueNHjPNmx = await _Helpvc3WzEo.commandDescription(_cmdpbo1RAS)
	});

	it('test for Help', async () => {
		const _Helpx3MULEM = new Help()
		const _strfoadf4M = true;
		const _widthpvl7sIe = undefined;
		const _indentIGVJBl = true;
		const _minColumnWidthQjmVX7U = "gYGDSDK7bsz4jhgJXgH8k9rdQAOUg";
		const _returnValueNFXHxmx = await _Helpx3MULEM.wrap(_strfoadf4M, _widthpvl7sIe, _indentIGVJBl, _minColumnWidthQjmVX7U)
		const _argumentBCnhpCy = "d1kyE1dJtF4wyKxnf7jpr8iwih25kJMCIo2sMUBbf7Uok9OcC9oU7tnz6yBxaWcjH3DjuF";
		const _returnValueVQTYx0u = await _Helpx3MULEM.argumentDescription(_argumentBCnhpCy)
		const _argumentHiu4Mt = "IvSvbZtoHI24Grtb0Qq4Kb3HwybWGHpD19EvNDA";
		const _returnValueaHTr0Zg = await _Helpx3MULEM.argumentDescription(_argumentHiu4Mt)
	});

	it('test for Help', async () => {
		const _HelpL0MVEKW = new Help()
		const _cmdxxq2kEw = -4.469863031598262;
		const _returnValueJVkdql = await _HelpL0MVEKW.subcommandDescription(_cmdxxq2kEw)
		const _arrayValueoFtHK31 = {
		
	}
		const _cmdXgEbGEB = [_arrayValueoFtHK31]
		const _returnValueY742xb0 = await _HelpL0MVEKW.commandUsage(_cmdXgEbGEB)
		const _argumentRSCwpd = null;
		const _returnValueN7VVpFV = await _HelpL0MVEKW.argumentDescription(_argumentRSCwpd)
	});

	it('test for Help', async () => {
		const _HelpZQYdjJq = new Help()
		const _optionMPNhEKj = {
		
	}
		const _returnValueBw0STvB = await _HelpZQYdjJq.optionDescription(_optionMPNhEKj)
		const _optionl0LajFa = undefined;
		const _returnValueXyjsG8 = await _HelpZQYdjJq.optionDescription(_optionl0LajFa)
		const _cmdRlpGEWZ = null;
		const _returnValuebkFc0Gp = await _HelpZQYdjJq.visibleArguments(_cmdRlpGEWZ)
		const _cmdc3goGdS = true;
		const _helperjEDkpxq = null;
		const _returnValueJBSMpJ = await _HelpZQYdjJq.formatHelp(_cmdc3goGdS, _helperjEDkpxq)
	});

	it('test for Help', async () => {
		const _HelprHkrAhw = new Help()
		const _argumentfG3o9vU = false;
		const _returnValuefiBg0DY = await _HelprHkrAhw.argumentDescription(_argumentfG3o9vU)
		const _cmdzpqcQhP = {
		
	}
		const _returnValueWccoZbM = await _HelprHkrAhw.subcommandTerm(_cmdzpqcQhP)
		const _cmdK7feDy = 7.98704955239776;
		const _helperECp97uj = undefined;
		const _returnValueU6jxuvj = await _HelprHkrAhw.longestArgumentTermLength(_cmdK7feDy, _helperECp97uj)
	});

	it('test for Help', async () => {
		const _HelpLl7gHee = new Help()
		const _cmdfuNEfnM = {
		
	}
		const _helpervQGynk = true;
		const _returnValueSKLSfWf = await _HelpLl7gHee.longestSubcommandTermLength(_cmdfuNEfnM, _helpervQGynk)
		const _cmdObkf9u0 = false;
		const _returnValuer8rdXB5 = await _HelpLl7gHee.subcommandTerm(_cmdObkf9u0)
	});

	it('test for Help', async () => {
		const _HelpbP0EXq6 = new Help()
		const _cmduRKLrD1 = 5.337465845935325;
		const _helperRhX484U = "QsanxEB7F3J8lXcaw4bLWERp9DslPekWNnp3j8CJDd2EuSQ";
		const _returnValuemQDFrKb = await _HelpbP0EXq6.longestArgumentTermLength(_cmduRKLrD1, _helperRhX484U)
		const _argumentulabo6B = -1.6549822647978676;
		const _returnValuevEs0bgj = await _HelpbP0EXq6.argumentDescription(_argumentulabo6B)
		const _cmdd7xmOXA = "LbmKG2YUt76fDahVpm3E2O8qMvom6nSjF8jKGQo";
		const _returnValuejyPH0G = await _HelpbP0EXq6.commandDescription(_cmdd7xmOXA)
	});

	it('test for Help', async () => {
		const _HelpKmTgLQr = new Help()
		const _cmdCuZVcCU = "WJYHcnLWRnV7L5Y1ziMADodrN3qgdVetWiq2wt7pQCpmADIXa";
		const _returnValueuaM0RPN = await _HelpKmTgLQr.commandUsage(_cmdCuZVcCU)
		const _argumenttcd68Id = false;
		const _returnValuerscFhtL = await _HelpKmTgLQr.argumentDescription(_argumenttcd68Id)
		const _cmdeZHrNBL = undefined;
		const _helperL4QXg6A = null;
		const _returnValueYVnEag0 = await _HelpKmTgLQr.longestOptionTermLength(_cmdeZHrNBL, _helperL4QXg6A)
		const _returnValueXtzJibd = 4.039282675550112;
		const _cmdgu1ggfb = () => { return _returnValueXtzJibd };
		const _helperYZqH99o = {
		
	}
		const _returnValueZC1ORkB = await _HelpKmTgLQr.longestArgumentTermLength(_cmdgu1ggfb, _helperYZqH99o)
	});

	it('test for Help', async () => {
		const _HelpRHnjSh0 = new Help()
		const _optionAqpm2ZR = false;
		const _returnValueYwaK0vB = await _HelpRHnjSh0.optionTerm(_optionAqpm2ZR)
		const _argumentZm2F75M = {
		
	}
		const _returnValueKrrnyKB = await _HelpRHnjSh0.argumentTerm(_argumentZm2F75M)
	});

	it('test for Help', async () => {
		const _HelpVdImWCt = new Help()
		const _optionparWoBW = 2.7251729892610026;
		const _returnValueCTKcW6J = await _HelpVdImWCt.optionDescription(_optionparWoBW)
		const _cmdI4XmZZG = []
		const _returnValueVQWcoPI = await _HelpVdImWCt.visibleOptions(_cmdI4XmZZG)
		const _strsVT70Tx = null;
		const _widthysGUaow = 2.5273614034653384;
		const _indentFD30Ck = undefined;
		const _minColumnWidth9HuUub = []
		const _returnValuewNnYN9b = await _HelpVdImWCt.wrap(_strsVT70Tx, _widthysGUaow, _indentFD30Ck, _minColumnWidth9HuUub)
	});

	it('test for Help', async () => {
		const _HelpjeRAbZP = new Help()
		const _returnValueTDNUNr4 = "hxVkOeQ1275Cr9H6m7sNtLyk7oWSxjcnPjNRus5k";
		const _cmdTFZeMc4 = () => { return _returnValueTDNUNr4 };
		const _returnValuep4TcfkE = await _HelpjeRAbZP.visibleCommands(_cmdTFZeMc4)
		const _argumentzSMfYXB = -6.934036324670591;
		const _returnValueGImBFzJ = await _HelpjeRAbZP.argumentDescription(_argumentzSMfYXB)
		const _arrayValueV25f6Xe = null;
		const _arrayValueGSOXsw4 = false;
		const _cmdPEe6rj7 = [_arrayValueV25f6Xe, _arrayValueGSOXsw4]
		const _returnValueCHnezj9 = await _HelpjeRAbZP.subcommandDescription(_cmdPEe6rj7)
	});

	it('test for Help', async () => {
		const _Helpmvb3Dcl = new Help()
		const _stru9W5xSl = "3";
		const _widthHbmcJas = "Uzu5U6ettakuJchjTzLiun44iJ8UGPu9yJE9Jj6kLSEqHT4Of0tLrRD2juiB4b0kP61";
		const _arrayValueEkCmFb9 = 5.048142341666598;
		const _arrayValueEzkMvRi = true;
		const _indenta65ZbBZ = [_arrayValueEkCmFb9, _arrayValueEzkMvRi]
		const _minColumnWidthHNs2tJa = -4.452649397548237;
		const _returnValuelfqEwqF = await _Helpmvb3Dcl.wrap(_stru9W5xSl, _widthHbmcJas, _indenta65ZbBZ, _minColumnWidthHNs2tJa)
		const _strtKEbqi0 = -2.9731629224393306;
		const _returnValuelV5hHOw = null;
		const _widthZZlh8zY = () => { return _returnValuelV5hHOw };
		const _indentdrYajSM = false;
		const _minColumnWidthBrVh0uX = false;
		const _returnValuewJSK39D = await _Helpmvb3Dcl.wrap(_strtKEbqi0, _widthZZlh8zY, _indentdrYajSM, _minColumnWidthBrVh0uX)
	});

	it('test for Help', async () => {
		const _HelpBJ2Sifn = new Help()
		const _strl21p51u = "IiaQ7nQMng1WRTqmj8V1NAx";
		const _widthHp6dn8U = false;
		const _indentXqtuefn = true;
		const _minColumnWidthKLAi1MQ = null;
		const _returnValueJxLpZau = await _HelpBJ2Sifn.wrap(_strl21p51u, _widthHp6dn8U, _indentXqtuefn, _minColumnWidthKLAi1MQ)
		const _cmdiHK8Qzd = null;
		const _returnValueV2xtv2q = await _HelpBJ2Sifn.visibleArguments(_cmdiHK8Qzd)
		const _argumentA50f26A = {
		
	}
		const _returnValueAu7ZhqQ = await _HelpBJ2Sifn.argumentTerm(_argumentA50f26A)
		const _cmdS22mj89 = null;
		const _returnValuelDeua3u = await _HelpBJ2Sifn.visibleOptions(_cmdS22mj89)
	});
})