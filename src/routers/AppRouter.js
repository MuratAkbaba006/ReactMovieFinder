import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'

const Nav= () =>(  <nav>
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    <NavLink exact to="/products" activeClassName="active">Products</NavLink>
    <NavLink to="/products/12?orderby=price" activeClassName="active">Products Details</NavLink>
    
</nav>)
//NavLink kullanımıyla birlikte active gibi ekstra özelliklerin kullanımını sağlayabiliriz

const HomePage= ()=>(
    <>
    <div>Home Page</div>
    
    </>
)

const ContactPage = () =>(
    <>
    <div>Contact Page</div>
    
    </>
)

const ProductPage = () =>(
    <>
    <div>Product Page</div>
    
    </>
)

const NotFoundPage = () =>(
    <>
    <div>NotFound Page</div>
    
    </>
)

const ProductDetailsPage = (props) =>{
    console.log(props);
    return (  <>
        <div>Product Details Page</div>
        <div>{props.match.params.id}</div>
        </>)
  
}



const AppRouter = () =>(
    <BrowserRouter>
    <Nav></Nav>
    <Switch> 
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route exact path="/products" component={ProductPage}></Route>
        <Route path="/products/:id" component={ProductDetailsPage}></Route>
        <Route component={NotFoundPage}></Route>
    </Switch>
</BrowserRouter>
)
//switch kullanarak var olan componentlerden aynı anda sadece birinin çalışmasını sağladık
//aksi taktirde ziyaret ettiğimiz sayfalarda o sayfa + notFoundPage olacaktı.

export default AppRouter