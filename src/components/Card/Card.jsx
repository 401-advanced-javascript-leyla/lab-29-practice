import React from 'react';

export default class Card extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          card:this.props.card,
      }
    }

    render(){
      return (
        <>
          <div className="card">
              <header><h3>{this.state.card.title}</h3></header>
              <div className="content">{this.state.card.copy}</div>
              <figure>
                <img src={this.state.card.media.href} alt={this.state.card.media.alt} />
                <figcaption>{this.state.card.media.title}</figcaption>
              </figure>
              <nav className="links">
                <ul>
                  {this.state.card.links.map( (link,i) => (
                    <li key={i}><a className={link.type} href={link.href} title={link.title}>{link.title}</a></li>
                  ))}
                </ul>
              </nav>
            </div>
        </>
      );
    }
}