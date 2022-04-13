import React from 'react';

class SearchBar extends React.Component{

    

    handleFormSubmit = (event) =>{
        event.preventDefault()
    }

    render() {
        return(

            <form onSubmit={this.handleFormSubmit} className='mt-3'>
                <div className='form-row mb-5'>
                    <div className='col-12'>
                        <input 
                           onChange={this.props.searchMovieProp} 
                           className='form-control' placeholder='Seach a movie' 
                           type='text'
                           
                        />
                    </div>
                </div>
            </form>
        
        )     
    }
}

export default SearchBar;