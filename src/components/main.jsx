import React, { Component } from 'react';

class Main extends Component {
  
  state = {
    Book: []
  }
  
 

  componentDidMount = async() => {
    const Api_key = "WckKmFjAqaD4GEQqBioHzvp3EFxwa2TR";
    const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${Api_key}`)
    const data = await res.json();
    this.setState({ Book: data.results.books })
    
  }
    
  render() { 

      console.log(this.state.Book[0]);
      return (
        <React.Fragment> {
          <div class = "container">
            <div class ="row">{
        this.state.Book.map((id) => (
          
         
          <div class ="col-sm" style={{marginTop: 20}}>
          <div className="card" style={{width:"25rem"}}>
            
          <img className="img-fluid img-thumbnail" src={id.book_image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{id.title}</h5>
            <h5 className="card-title">{id.author}</h5>
            <p className="card-text">{id.description}</p>
            <a href={id.amazon_product_url} className="btn btn-outline-success">More Details</a>
          </div>
          </div>
          </div> 
        ))}
        </div>
        </div>
         }
        
        </React.Fragment>
      );
          
    }
}
 
export default Main;