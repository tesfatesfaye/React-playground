



import React from "react"


export default class App extends React.Component {
    
    
    
    state={
         firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
        
    }
   
    
    
    
    
     toggleFavorite= () => {
          this.setState(prevContact =>(
     { isFavorite: prevContact.isFavorite}))
    }
    render(){
        let starIcon = state.isFavorite ? "star-filled.png" : "star-empty.png"
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${this.starIcon}`} 
                        className="card--favorite"
                        onClick={this.toggleFavorite}
                    />
                    <h2 className="card--name">
                        {this.state.firstName} {this.state.lastName}
                    </h2>
                    <p className="card--contact">{this.state.phone}</p>
                    <p className="card--contact">{this.state.email}</p>
                </div>
                
            </article>
        </main>
    )
    }
}


