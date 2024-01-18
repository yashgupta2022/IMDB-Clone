import Results from "@/components/Results";
export default async function page({params}) {
    const searchTerm = params.searchTerm
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}`
          )
          const data= await res.json();
      const results = data.results;
      
      if (results && results.length>0)
      return (
        <div>
          <Results results={results}/> 
        </div> 
      )
      else if (results && results.length==0){
            return <h1 className="text-center pt-6">No Results Found</h1>
      }
    }
    catch (error) {
        console.log(error)
    }
    
      
    
        
}
