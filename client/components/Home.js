import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import md5 from 'js-md5';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.homepage = this.homepage.bind(this)
  }

  componentDidMount(){
    artyom.fatality();
    setTimeout(()=>{
      artyom.initialize({
        lang:"en-US",// A lot of languages are supported. Read the docs !
        continuous:true,// Artyom will listen forever
        listen:true, // Start recognizing
        debug:true, // Show everything in the console
        speed:1, // talk normally
        soundex:true,
        executionKeyword: 'now',
        obeyKeyword: "Nova",
      });
    },1000);
  }

  homepage(){
    switch(this.props.user.role) {
      case 'user':
        return (
          <div className="container">
              <h3 className="white-text">ABOUT NOVA</h3>
            <div className="white-text">
              <p className="quote">"The sky is so tragically beautiful.
                A graveyard of stars."</p>
            </div>
            <footer className="quote white-text">Anonymous</footer>
            <br />
            <div className="info white-text">
              <p>Nova is your personal assistant, a web application with the ability to understand voice commands. We built Nova to help people
                with everyday small tasks. Nova can take down quick reminders and save them for you to review later. It can add friend's and co- worker's emails.
                It can even help you write down your thought's in our dictation page. And when you feel like searching on Youtube for your favorite videos, Nova is also there
                to help!</p>
            </div>
            <br />
            <div className="info white-text">
              <p></p>
            </div>
          </div>
        )
    default:
      return (
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="animated fadeInLeftBig">
              <h1 className="white-text">Welcome to Nova</h1>
            </div>
            <div>
              <h3 className="animated fadeInRight white-text">Nova is your personal assistant</h3>
              <h4 className="animated fadeInUp white-text" >A web application with the ability to understand voice commands</h4>
            </div>
            <br/>
            <Link to="/signin"><button className="animated zoomIn btn blue white-text">START</button></Link>
          </div>
        </div>
      )
  }
}

  render(){
    return(
      <div id="hwelcome">
        {this.homepage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Home)
