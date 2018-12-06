console.log('connected');

// const IEXClient = require('iex-api');
// const fetch = require('isomorphic-fetch')
//
// const iex = new IEXClient(fetch)
// iex.stockCompany('AAPL')
//   .then(company => console.log(company))

const appleData = ()=>{
    fetch('https://api.iextrading.com/1.0/' + '/stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5').then( response => {console.log(response)})
}

appleData();
  // {
  //   symbol: "AAPL",
  //   companyName: "Apple Inc.",
  //   exchange: "Nasdaq Global Select",
  //   industry: "Computer Hardware",
  //   website: "http://www.apple.com",
  //   description: "Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.",
  //   CEO: "Timothy D. Cook",
  //   issueType: "cs",
  //   sector: "Technology"
  // }
