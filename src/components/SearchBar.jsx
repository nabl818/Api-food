import React from "react";

const SearchBar=({
     
    value,
    isloading,
    handleSubmit,                
    onChange

})=>{
    
    return(
       
        <form onSubmit={handleSubmit}>
            
            <input 
            value={value}
            onChange={onChange }
            disabled={isloading}
            placeholder="Search Recipe"
            className="form-control"
            
            />

            <input 
             
              disabled={ isloading || !value}
              type="submit"
              className="btn ms-2 border border-2 bg-dark text-white"
              value="search"
            
            
            />
            
        </form>
    
    )

}
export default SearchBar