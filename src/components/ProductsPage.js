import React, {Component} from "react"
import Loading from "./Loading"
import Product from "./Products"

class Products extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            products: []
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            fetch("http://localhost:8000/api/product")
            .then(response => response.json())
            .then(products => {
                this.setState({
                    loading: false,
                    products: products
                })
            })
        }, 1750);
        
    }
    
    render() {
        const productsLoad = this.state.loading ? <Loading /> : this.state.products.map((item, idx) => <Product {...item} key={idx} />)
        return (
            <>
                {productsLoad}
            </>
        )
    }
}

export default Products