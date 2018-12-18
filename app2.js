class BuyIt extends React.Component {
    constructor(props){
        super(props);
        this.shouldIBuyIt = this.shouldIBuyIt.bind(this);
        this.state = {
            buyIt: false,
            notBuyIt: false,
            sellIt: false,
            initialNotice: true
        }
    }
    componentDidMount(){
        const randNum = Math.floor(Math.random() * Math.floor(2000))
        console.log(randNum);
        this.shouldIBuyIt(1325, 650, randNum);
    }
    shouldIBuyIt(sellAbove, buyBelow, currentPrice){
        if (currentPrice >= sellAbove) {
            this.setState({
                buyIt: false,
                notBuyIt: false,
                sellIt: true,
                initialNotice: false
            })
        } else if (currentPrice <= buyBelow) {
            this.setState({
                buyIt: true,
                notBuyIt: false,
                sellIt: false,
                initialNotice: false
            })
        } else if (currentPrice > buyBelow && currentPrice < sellAbove) {
            this.setState({
                buyIt: false,
                notBuyIt: true,
                sellIt: false,
                initialNotice: false,
            })
        } else {
            this.setState({
                buyIt: false,
                notBuyIt: true,
                sellIt: false,
                initialNotice: false
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.buyIt ? <h1>Buy It!</h1> : ''}
                {this.state.notBuyIt ? <h1>Do Not Buy It!</h1> : ''}
                {this.state.sellIt ? <h1>Sell It!</h1> : ''}
                {this.state.initialNotice ? <h1>Answer Will Go Here!</h1> : ''}
            </div>
        )
    }
}

ReactDOM.render(
    <BuyIt></BuyIt>,
    document.querySelector('.buyIt')
)
