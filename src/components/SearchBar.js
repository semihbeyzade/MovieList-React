import React from 'react';

class SearchBar extends React.Component{

    

    handleFormSubmit = (event) =>{
        event.preventDefault()
    }

    render() {
        return(

<<<<<<< HEAD
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5 mt-3 d-flex'>
                    <div className='col-10'>
=======
            <form onSubmit={this.handleFormSubmit} className='mt-3'>
                <div className='form-row mb-5'>
                    <div className='col-12'>
>>>>>>> a2ecb0a8b3c7f68e4e87943c8095d8bcd442f3f2
                        <input 
                           onChange={this.props.searchMovieProp} 
                           className='form-control' placeholder='Seach a movie' 
                           type='text'
                           
                        />
                    </div>
                    <div className='col-2 '>
                        <button type='button'
                                className='btn btn-md btn-danger float-end'>Add Movie
                        </button>
                    </div>
                </div>
            </form>
        
        )     
    }
}

export default SearchBar;