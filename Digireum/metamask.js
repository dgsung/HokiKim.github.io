	var contractAddress = '0xb5f6f587b214bef6e10a39cc0286219474386920';
	var digireumContract
	var digireum
	window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
	if (typeof web3 !== 'undefined') {
	// Use Mist/MetaMask's provider
		window.web3 = new Web3(web3.currentProvider);
	} else {
		alert("Check MetaMask Login");
		console.log('No web3? You should consider trying MetaMask!');
	    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
	    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	}
	  // Now you can start your app & access web3 freely:
	  	startApp();
	});

	function startApp() {
		digireumContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_say","type":"string"}],"name":"buyEgg","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"login","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getRandomTamer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_adr","type":"address"},{"name":"_num","type":"uint256"}],"name":"getDigimonInfo","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"string"}],"name":"getTamerInfo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"adr","type":"address"}],"name":"getDigimonNumByAdr","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_num","type":"uint8"},{"name":"_evol","type":"uint8"},{"name":"_love","type":"uint8"},{"name":"_eat","type":"uint8"},{"name":"_meet","type":"uint8"}],"name":"setDigimonInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTotalDigimonNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_num","type":"uint8"}],"name":"initializer","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
		digireum = digireumContract.at(contractAddress);
	}