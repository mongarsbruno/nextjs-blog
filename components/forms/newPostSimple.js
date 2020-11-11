import React from 'react'

const Form = () => {
      return (
        <>        
          <form action='/api/newPost'>
            <label>
              Id :
              <input 
                name="id" 
                type="text"/> 
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </>
      );
    }

export default Form