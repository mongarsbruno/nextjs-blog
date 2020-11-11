import React from 'react'

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: {
        id: '',
        sent: false
      }};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
        this.setState({value: {id: event.target.value, sent: false}});  
    }

    /*submitForm () {
      fetch('/api/newPost', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, *\/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: this.state.value.id})
      }).then((res) => {
        res.status === 200 ? 
        this.setState({value: {id: this.state.value.id, sent: true}}) : ''
      })
    }*/
    handleSubmit(event) {
      this.setState({value: {id: this.state.value.id, sent: true}})
      console.log('Le nom a été soumis : ' + this.state.value.id);
      //writePostData({id: this.state.value.id, content: this.state})
    }
  
    render() {
      return (
        <>        
          <form action='/api/newPost'
            onSubmit={this.handleSubmit}>
            <label>
              Id :
              <input 
                name="id" 
                type="text" 
                value={this.state.value.id} 
                onChange={this.handleChange} />        
            </label>
            <input type="submit" value="Envoyer" />
          </form>
          {this.state.value.sent && 
            <div>Le post {this.state.value.id} a été créé !</div>}
        </>
      );
    }
  }
  export default MyForm