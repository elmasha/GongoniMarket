import React,{createContext} from 'react';
import {db} from '../config/Config';
import {Animated} from "react-animated-css";


export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component{

    state={
        products:[]
    }
    // orderBy( FieldPath, directionStr?: "asc" | "desc"): Query<>;
    componentDidMount(){
        const prevProducts =this.state.products;
        db.collection('Products')
      .onSnapshot(snapshot =>{
            let change = snapshot.docChanges();
            change.forEach(changes =>{ 
                if(changes.type ==='added'){
                    prevProducts.push({
                       ProductID:changes.doc.id,
                       ProductName:changes.doc.data().ProductName,
                       ProductPrice :changes.doc.data().ProductPrice,
                       ProductImage: changes.doc.data().ProductImage,
                    })
                }
                this.setState({
                    products : prevProducts
                })
            })
        })

    }

    render(){
        return(
             <ProductsContext.Provider value={{products:[...this.state.products]}}>
                {this.props.children}
            </ProductsContext.Provider>
            )

    }

}