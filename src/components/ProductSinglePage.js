import React, { Component } from "react"
import Single from "./ProductSingle"
import Loading from "./Loading"

class ProductSingle extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            product: {
                id: "",
                model: "",
                year: "",
                color: "",
                doors: "",
                seats: "",
                cargo: "",
                power: "",
                miles: "",
                description: "",
                price: "",
                image: ""
            }
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            fetch("http://localhost:8000/api/product")
            .then(response => response.json())
            .then(products => {
                let vid = Number(this.props.match.params.id)
                let product = products.find(item => {
                    return item.id === vid ? item : null
                })

                this.setState({
                    loading: false,
                    product: product
                })
            })
        }, 1750);
        
    }
    
    render() {
        const product = this.state.loading ? <Loading /> :  <Single {...this.state.product} />

        return (
            <>
               {product}
            </>
        )
    }
}

export default ProductSingle